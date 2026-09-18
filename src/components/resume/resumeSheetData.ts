import { ACCENT_COLORS } from "../../utils/accentColors";
import { formatDateRange, type Lang } from "../../utils/experienceData";
import type { ExperienceJob } from "../../types";

// Separado de CoResumeSheet.tsx porque mezclar exports de componente con
// exports de constantes/funciones en un mismo archivo rompe el fast refresh
// de React (ver la regla react-refresh/only-export-components) — este
// archivo es solo datos, sin JSX.

// Antes cada uno de los 4 puntos donde se pinta la categoría activa repetía
// la misma cadena de ternarios con los hex a mano (4 veces en RoResume.tsx).
export const RESUME_CATEGORY_COLORS = [
	ACCENT_COLORS.pink,
	ACCENT_COLORS.blue,
	ACCENT_COLORS.purple,
	ACCENT_COLORS.orange,
];

// Instituciones educativas, mismo orden que resume.infos.education.bullets.
export const EDUCATION_SUBTEXTS = ["Universidad Autónoma Metropolitana", "Instituto Politécnico Nacional"];

export interface ResumeItem {
	empresa: string;
	rol: string;
	fecha: string;
	bullets: string[];
	location: string;
}

// Convierte un ExperienceJob (la forma cruda de experience.json) en el
// ResumeItem que espera CoCardResume, resolviendo idioma y formateando la
// fecha una sola vez.
export const toResumeItem = (job: ExperienceJob, lang: Lang, location: string): ResumeItem => ({
	empresa: job.company,
	rol: job.role[lang],
	fecha: formatDateRange(job.startDate, job.endDate, lang),
	bullets: job.bullets?.resume?.[lang] ?? [],
	location,
});

export const byStartDateDesc = (a: ExperienceJob, b: ExperienceJob) => (a.startDate < b.startDate ? 1 : -1);
