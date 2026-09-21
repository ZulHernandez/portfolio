import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const SITE_URL = "https://zulhernandez.com";
const DEFAULT_OG_IMAGE = "https://i.ibb.co/k2gDyPcL/Sin-t-tulo-1-02.png";

// Imagen de vista previa (og:image/twitter:image) especifica por pagina,
// autohospedada en public/og/ -- mismas claves que ROUTES en
// scripts/generate-seo-html.mjs; si agregas una aqui, agregala alla tambien.
// Solo notFound (404) no tiene entrada -- sigue usando DEFAULT_OG_IMAGE.
const OG_IMAGES: Record<string, string> = {
	home: `${SITE_URL}/og/home.jpg`,
	works: `${SITE_URL}/og/works.jpg`,
	resume: `${SITE_URL}/og/resume.jpg`,
	about: `${SITE_URL}/og/about.jpg`,
	glue: `${SITE_URL}/og/glue.jpg`,
	movilidad: `${SITE_URL}/og/movilidad.jpg`,
	hubbub: `${SITE_URL}/og/hubbub.jpg`,
};

interface CoSeoProps {
	/** Clave bajo el namespace `seo` de i18n (seo.<routeKey>.title/description). */
	routeKey: string;
	/** Ruta usada para construir canonical/og:url (p. ej. "/works/glue"; "/" para home). */
	path: string;
	/** Para páginas que no deben indexarse (p. ej. 404) — sobreescribe el
	 * "index, follow" por defecto de index.html. */
	noindex?: boolean;
}

// El sitio es una SPA con <title>/meta description fijos en index.html (los
// mismos para cualquier ruta). Esto los sobreescribe por ruta — vía
// react-helmet-async — para que cada página/case study se indexe y se
// comparta con su propio título y descripción.
const CoSeo = ({ routeKey, path, noindex }: CoSeoProps) => {
	const { t } = useTranslation();
	const title = t(`seo.${routeKey}.title`);
	const description = t(`seo.${routeKey}.description`);
	const url = `${SITE_URL}${path}`;
	const image = OG_IMAGES[routeKey] ?? DEFAULT_OG_IMAGE;

	return (
		<Helmet>
			<title>{title}</title>
			<meta name="description" content={description} />
			<link rel="canonical" href={url} />
			{noindex && <meta name="robots" content="noindex, follow" />}

			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:url" content={url} />
			<meta property="og:image" content={image} />

			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={image} />
		</Helmet>
	);
};

export default CoSeo;
