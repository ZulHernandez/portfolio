import { useTranslation } from "react-i18next";

import { resolveLang } from "../../utils/experienceData";
import useExperienceData from "../context/useExperienceData";
import ResumeSheet from "./CoResumeSheet";
import { toResumeItem, byStartDateDesc } from "./resumeSheetData";

// Copia .printable del currículo (display:none salvo @media print, ver
// _resume.scss), montada siempre en App.tsx sin importar la ruta activa.
// Antes esta copia vivía solo dentro de RoResume, así que "Download CV" en
// Home tenía que navegar primero a /resume (con un state.autoPrint) para que
// existiera algo que imprimir — un salto de página confuso solo para
// imprimir. Al montarla aquí, cualquier botón de cualquier página puede
// llamar a window.print() directamente.
const CoPrintableResume = () => {
	const { i18n } = useTranslation();
	const lang = resolveLang(i18n.language);
	const { data } = useExperienceData();

	const resumeLocation = data?.location[lang] ?? "";
	const experiencias = (data?.jobs ?? [])
		.filter((job) => job.presence.resume === "experience")
		.sort(byStartDateDesc)
		.map((job) => toResumeItem(job, lang, resumeLocation));
	const proyectos = (data?.jobs ?? [])
		.filter((job) => job.presence.resume === "projects")
		.sort(byStartDateDesc)
		.map((job) => toResumeItem(job, lang, resumeLocation));

	if (experiencias.length === 0) return null;

	return (
		<div className="resume__sheet printable">
			<ResumeSheet filtroResumen={0} experiencias={experiencias} proyectos={proyectos} variant="print" />
		</div>
	);
};

export default CoPrintableResume;
