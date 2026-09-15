import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/translation.json";
import es from "./locales/es/translation.json";

import { DEFAULT_LANGUAGE } from "./utils/languages";

// Antes el idioma era un string "ES"/"EN" en un Context propio, y cada
// componente decidía a mano qué texto mostrar (arreglos [es, en] indexados
// por 0/1, o ternarios `language == "ES" ? ... : ...` repetidos por todo el
// código). Agregar un tercer idioma habría significado tocar cada uno de esos
// puntos uno por uno.
//
// Con i18next el contenido vive en locales/<idioma>/translation.json con
// claves (ej. "nav.works"), y los componentes solo piden esa clave con
// useTranslation(). Agregar un idioma nuevo es un archivo JSON más — no hay
// que tocar componentes.
i18n.use(initReactI18next).init({
	resources: {
		en: { translation: en },
		es: { translation: es },
	},
	lng: DEFAULT_LANGUAGE,
	fallbackLng: DEFAULT_LANGUAGE,
	interpolation: {
		escapeValue: false, // React ya escapa por defecto
	},
	returnEmptyString: false,
});

// El atributo lang de <html> se quedaba fijo en "en" (ver index.html) sin
// importar el idioma elegido en la UI, lo que hace que lectores de pantalla
// apliquen las reglas de pronunciación del idioma equivocado tras cambiar de
// idioma. Se mantiene sincronizado con el idioma activo de i18next.
const syncDocumentLang = (lng: string) => {
	document.documentElement.lang = lng;
};
syncDocumentLang(i18n.language);
i18n.on("languageChanged", syncDocumentLang);

export default i18n;
