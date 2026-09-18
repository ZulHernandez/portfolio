// Tipos compartidos entre componentes/datos. Centralizados aquí para no
// redefinir la misma forma de dato en cada archivo que la consume.

import type { Dispatch, SetStateAction } from "react";
import type { AccentColorKey } from "./utils/accentColors";

/** Contexto de navegación (ruta activa + estado del menú móvil). */
export interface NavigationContextValue {
	ruta: string;
	setRuta: Dispatch<SetStateAction<string>>;
	amplio: boolean;
	setAmplio: Dispatch<SetStateAction<boolean>>;
}

/** Una red social (CoNav, CoConozca). */
export interface RedItem {
	icon: string;
	text: string;
	url: string;
}

/** Un texto que existe en los dos idiomas soportados por el sitio. */
export interface Bilingual<T = string> {
	en: T;
	es: T;
}

/**
 * Un puesto/colaboración, la unidad de dato de public/data/experience.json —
 * la fuente única que alimenta CoTimeline, CoColab (home) y RoResume. Ver el
 * comentario al inicio de ese archivo para el detalle de cada campo y de
 * `presence` (qué secciones muestran este puesto).
 */
export interface ExperienceJob {
	slug: string;
	group: string | null;
	name: string;
	company: string;
	role: Bilingual;
	startDate: string;
	endDate: string | null;
	top: string | null;
	presence: {
		timeline: boolean;
		collab: boolean;
		resume: "experience" | "projects" | null;
	};
	bullets?: {
		collab?: Bilingual<string[]>;
		resume?: Bilingual<string[]>;
	};
}

/** Un grupo de la línea del tiempo (freelance, empresa, ...) y su color de acento. */
export interface ExperienceGroupMeta {
	key: string;
	color: AccentColorKey;
}

/** Forma completa de public/data/experience.json. */
export interface ExperienceData {
	location: Bilingual;
	/** Fecha real de inicio de carrera (usada por CoHola para "X años de experiencia") — no
	 * necesariamente igual al `startDate` del job más antiguo en `jobs` (puede haber trabajo
	 * freelance/autodidacta previo que no está dado de alta como job individual). */
	careerStartDate: string;
	groups: ExperienceGroupMeta[];
	jobs: ExperienceJob[];
}

/**
 * Un caso de portafolio, la unidad de dato de public/data/works.json — la
 * fuente única que alimenta CoTrabajos (home y works). `hasDetail` indica si
 * existe una página de caso de estudio propia en /works/<slug> (su contenido
 * profundo vive aparte, en código + i18n bajo la llave `<slug>.*`, no aquí).
 */
export interface WorkEntry {
	slug: string;
	title: Bilingual;
	description: Bilingual;
	tags: Bilingual<string[]>;
	company: string;
	startDate: string;
	endDate: string | null;
	hasDetail: boolean;
	/** Controla si aparece en "My featured works" (Home) — ver CoTrabajos.tsx. */
	featured: boolean;
}

/** Forma completa de public/data/works.json. */
export interface WorksData {
	works: WorkEntry[];
}

/**
 * Un caso de portafolio ya resuelto al idioma activo, listo para mostrarse
 * (CoTrabajos/CoWorkList/CoWorkCard) — ver utils/worksData.ts#toTrabajoItem.
 */
export interface TrabajoItem {
	slug: string;
	cover: string;
	covergif: string;
	logo: string[];
	link?: string;
	title: string;
	description: string;
	tags: string[];
	dateLabel: string;
	company: string;
}
