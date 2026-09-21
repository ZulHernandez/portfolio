#!/usr/bin/env node
// Genera, después de "vite build", una copia estática de dist/index.html por
// cada ruta conocida, con su propio <title>/meta description/og:*/twitter:*
// ya escritos en el HTML — para bots que NO ejecutan JavaScript (Facebook,
// X/Twitter, WhatsApp, Slack, LinkedIn al generar la vista previa de un
// link). CoSeo.tsx ya resuelve esto en vivo para el navegador y para
// crawlers que sí renderizan JS (Googlebot); esto cubre el resto sin
// necesitar un servidor Node en producción — son puros archivos estáticos
// más, generados en build time, que Apache sirve tal cual (ver
// public/.htaccess: una ruta con archivo real gana sobre el fallback a la
// SPA).
//
// IMPORTANTE: la lista ROUTES de abajo debe reflejar las <Route> de
// src/App.tsx (y el routeKey/path de cada <CoSeo>) — si agregas una ruta
// nueva ahí, agrégala aquí también.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const DIST = join(ROOT, "dist");

// Mismo valor que src/components/general/CoSeo.tsx — si cambia ahí, cambia
// aquí.
const SITE_URL = "https://zulhernandez.com";

const ROUTES = [
	{ key: "home", path: "/", outFile: "index.html" },
	{ key: "works", path: "/works", outFile: "works/index.html" },
	{ key: "resume", path: "/resume", outFile: "resume/index.html" },
	{ key: "about", path: "/about-me", outFile: "about-me/index.html" },
	{ key: "glue", path: "/works/glue", outFile: "works/glue/index.html" },
	{ key: "movilidad", path: "/works/movilidad", outFile: "works/movilidad/index.html" },
	{ key: "hubbub", path: "/works/hubbub", outFile: "works/hubbub/index.html" },
];

// Imagen de vista previa propia por ruta (autohospedada en public/og/),
// mismas claves y mismos archivos que OG_IMAGES en
// src/components/general/CoSeo.tsx -- si agregas una aqui, agregala alla
// tambien. Solo notFound (sin ruta real, no esta en ROUTES) no tiene
// entrada y no aplica esta logica.
const OG_IMAGES = {
	home: `${SITE_URL}/og/home.jpg`,
	works: `${SITE_URL}/og/works.jpg`,
	resume: `${SITE_URL}/og/resume.jpg`,
	about: `${SITE_URL}/og/about.jpg`,
	glue: `${SITE_URL}/og/glue.jpg`,
	movilidad: `${SITE_URL}/og/movilidad.jpg`,
	hubbub: `${SITE_URL}/og/hubbub.jpg`,
};

function escapeHtml(str) {
	return String(str)
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;");
}

function main() {
	const templatePath = join(DIST, "index.html");
	if (!existsSync(templatePath)) {
		console.error(
			`generate-seo-html: no se encontró ${templatePath} — corre "vite build" antes de este script.`
		);
		process.exit(1);
	}

	const translationsPath = join(ROOT, "src/locales/en/translation.json");
	const translations = JSON.parse(readFileSync(translationsPath, "utf-8"));
	const seo = translations.seo;
	if (!seo) {
		console.error(`generate-seo-html: no se encontró el namespace "seo" en ${translationsPath}.`);
		process.exit(1);
	}

	const template = readFileSync(templatePath, "utf-8");
	let written = 0;

	for (const route of ROUTES) {
		const entry = seo[route.key];
		if (!entry) {
			console.error(`generate-seo-html: falta seo.${route.key} en translation.json — se omite ${route.path}.`);
			continue;
		}

		const { title, description } = entry;
		const url = `${SITE_URL}${route.path}`;

		let html = template.replace(/<title>.*?<\/title>/s, () => `<title>${escapeHtml(title)}</title>`);

		// og:image/twitter:image/pinterest:image ya vienen en el template
		// (index.html fuente) con la imagen default -- para cada ruta en
		// OG_IMAGES (las 7 de arriba) se sobreescriben in place con un replace,
		// nunca un append, para no duplicar la etiqueta (el mismo bug que se
		// corrigio antes para description/og:title/og:description/og:url/
		// twitter:title/description).
		const tags = [
			`<meta name="description" content="${escapeHtml(description)}" />`,
			`<link rel="canonical" href="${url}" />`,
			`<meta property="og:title" content="${escapeHtml(title)}" />`,
			`<meta property="og:description" content="${escapeHtml(description)}" />`,
			`<meta property="og:url" content="${url}" />`,
			`<meta name="twitter:title" content="${escapeHtml(title)}" />`,
			`<meta name="twitter:description" content="${escapeHtml(description)}" />`,
		].join("\n\t\t");

		html = html.replace("</head>", () => `\t\t${tags}\n\t</head>`);

		const ogImage = OG_IMAGES[route.key];
		if (ogImage) {
			// El <meta> fuente en index.html escribe cada atributo en su propia
			// línea (ver public/../index.html) -- \s+ entre atributos para que
			// el replace funcione sin importar el formato exacto de espacios.
			html = html.replace(
				/<meta\s+name="image"\s+property="og:image"\s+content="[^"]*"\s*\/>/,
				() => `<meta name="image" property="og:image" content="${escapeHtml(ogImage)}" />`
			);
			html = html.replace(
				/<meta\s+name="pinterest:image"\s+content="[^"]*"\s*\/>/,
				() => `<meta name="pinterest:image" content="${escapeHtml(ogImage)}" />`
			);
			html = html.replace(
				/<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/>/,
				() => `<meta name="twitter:image" content="${escapeHtml(ogImage)}" />`
			);
		}

		const outPath = join(DIST, route.outFile);
		mkdirSync(dirname(outPath), { recursive: true });
		writeFileSync(outPath, html, "utf-8");
		written++;
	}

	console.log(`generate-seo-html: ${written} página(s) estática(s) con SEO por ruta escritas en dist/.`);
}

main();
