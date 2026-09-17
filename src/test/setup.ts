import "@testing-library/jest-dom/vitest";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

// jsdom doesn't implement scrollTo/scrollIntoView; a few components
// (e.g. CoTimeline) call them as a side effect of interactions under test.
if (!Element.prototype.scrollTo) {
	Element.prototype.scrollTo = () => {};
}
if (!Element.prototype.scrollIntoView) {
	Element.prototype.scrollIntoView = () => {};
}

// CoTimeline/CoColab/RoResume ya no importan su data al bundle: la piden en
// runtime a /data/experience.json (ver useExperienceData.ts) para poder
// actualizarla sin rehacer un build. Bajo Vitest no hay servidor real
// sirviendo ese archivo, así que se intercepta fetch y se responde con el
// mismo experience.json real (leído del disco, no una copia a mano) — así
// las pruebas corren contra los datos reales de producción.
const __dirname = dirname(fileURLToPath(import.meta.url));
const experienceDataRaw = readFileSync(
	resolve(__dirname, "../../public/data/experience.json"),
	"utf-8"
);

const originalFetch = globalThis.fetch?.bind(globalThis);
globalThis.fetch = (async (input: RequestInfo | URL, init?: RequestInit) => {
	const url = typeof input === "string" ? input : input instanceof URL ? input.toString() : input.url;
	if (url.includes("/data/experience.json")) {
		return new Response(experienceDataRaw, {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	}
	if (originalFetch) return originalFetch(input, init);
	throw new Error(`fetch() sin mockear en tests para: ${url}`);
}) as typeof fetch;
