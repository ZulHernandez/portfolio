// Idiomas soportados por el sitio. Agregar un idioma nuevo es, en teoría:
// (1) un archivo más en src/locales/<code>/translation.json con las mismas
// claves que los existentes, y (2) una fila más aquí. Ningún componente
// necesita tocarse — CoLanguageSwitch, i18n.js y useTranslation() ya leen
// esta lista / el locale activo dinámicamente.
export interface SupportedLanguage {
	code: string;
	label: string;
}

export const SUPPORTED_LANGUAGES: SupportedLanguage[] = [
	{ code: "en", label: "EN" },
	{ code: "es", label: "ES" },
];

export const DEFAULT_LANGUAGE = "en";
