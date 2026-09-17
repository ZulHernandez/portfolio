// Mapea una entrada cruda de public/data/works.json (bilingüe, sin media) a
// un TrabajoItem ya resuelto al idioma activo y con su media de
// worksAssets.ts — la forma que consumen CoWorkCard/CoWorkList. Mismo
// espíritu que toResumeItem en RoResume.tsx.

import type { TrabajoItem, WorkEntry } from "../types";
import { formatDateRange, type Lang } from "./experienceData";
import { WORK_ASSETS } from "../components/context/worksAssets";

export const toTrabajoItem = (work: WorkEntry, lang: Lang): TrabajoItem => {
	const assets = WORK_ASSETS[work.slug];

	return {
		slug: work.slug,
		cover: assets.cover,
		covergif: assets.covergif,
		logo: assets.logos,
		link: work.hasDetail ? work.slug : undefined,
		title: work.title[lang],
		description: work.description[lang],
		tags: work.tags[lang],
		dateLabel: formatDateRange(work.startDate, work.endDate, lang),
		company: work.company,
	};
};
