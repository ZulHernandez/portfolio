// Helpers compartidos por CoTimeline, CoColab (home) y RoResume — los tres
// consumidores de public/data/experience.json. Centralizados aquí para que
// "cómo se ve una fecha" o "qué idioma toca mostrar" tenga una sola
// implementación en vez de una por componente.

import dayjs from "dayjs";
import "dayjs/locale/es";

export type Lang = "en" | "es";

/** i18next reporta cosas como "es-MX"; solo nos importan "en"/"es". */
export const resolveLang = (i18nLanguage: string): Lang =>
	i18nLanguage.toLowerCase().startsWith("es") ? "es" : "en";

const PRESENT_LABEL: Record<Lang, string> = {
	en: "present",
	es: "actualidad",
};

/**
 * "sep 2025 - present" (granularity "month", el default) o "2025 - present"
 * (granularity "year", usado por las tarjetas compactas de "Where I have
 * collaborated"). endDate null se muestra como "present"/"actualidad".
 *
 * Antes cada sección (timeline/colab/resume) guardaba esta cadena ya escrita
 * a mano en translation.json — lo que permitió que se desincronizaran (p.ej.
 * Liverpool seguía diciendo "present" en el timeline mucho después de que el
 * puesto terminara). Calcularla a partir de startDate/endDate reales lo hace
 * imposible.
 */
export const formatDateRange = (
	startDate: string,
	endDate: string | null,
	lang: Lang,
	granularity: "month" | "year" = "month"
): string => {
	const format = granularity === "year" ? "YYYY" : "MMM YYYY";
	const start = dayjs(startDate).locale(lang).format(format).toLowerCase();
	const end = endDate ? dayjs(endDate).locale(lang).format(format).toLowerCase() : PRESENT_LABEL[lang];
	return `${start} - ${end}`;
};
