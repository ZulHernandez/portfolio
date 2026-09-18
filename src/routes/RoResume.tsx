import { useContext, useEffect } from "react";
import { NavigationContext } from "../components/context/NavigationContext";
import { useTranslation } from "react-i18next";

import { useLocation } from "react-router-dom";
import useScreenSize from "../components/context/useScreenSize";

import CoBtn from "../components/general/CoBtn";
import CoSeo from "../components/general/CoSeo";
import { resolveLang } from "../utils/experienceData";
import useExperienceData from "../components/context/useExperienceData";
import ResumeSheet from "../components/resume/CoResumeSheet";
import { toResumeItem, byStartDateDesc } from "../components/resume/resumeSheetData";

// El puesto/proyecto (empresa, rol, fechas, bullets) ahora vive en
// public/data/experience.json (jobs con presence.resume === "experience" o
// "projects"), no aquí — ver ese archivo para dar de alta o editar uno.
//
// Antes cada empresa tenía 4 variantes de bullets (una por categoría de un
// filtro de tabs arriba de la hoja: General/Design system/Research/
// Experience); se simplificó a una sola lista por puesto porque en la
// práctica la mayoría de las variantes eran copias idénticas entre sí. Los
// tabs en sí también se quitaron después (solo afectaban el Resumen y las
// Habilidades, y no aportaban lo suficiente para justificar mantener 4
// variantes de cada uno) — `filtroResumen` queda fijo en "General" (índice
// 0), pero `resumenes`/`habilidades` en CoResumeSheet siguen siendo arrays
// por categoría (i18n), por si algún día vuelve a hacer falta variarlos.
//
// El componente ResumeSheet (y todo lo que antes vivía aquí arriba:
// RESUME_CATEGORY_COLORS, EDUCATION_SUBTEXTS, CoCardResume, toResumeItem,
// byStartDateDesc) ahora vive en components/resume/CoResumeSheet.tsx, para
// compartirlo con CoPrintableResume (la copia .printable montada en
// App.tsx) sin duplicar ~150 líneas de JSX.

const RoResume = () => {
	const { t, i18n } = useTranslation();
	const lang = resolveLang(i18n.language);
	const { setRuta, setAmplio } = useContext(NavigationContext);
	// Antes esto era un estado (filtroResumen/setFiltroResumen) que el usuario
	// cambiaba con los tabs de arriba (General/Design system/Research/
	// Experience). Se quitaron los tabs: solo afectaban el Resumen y las
	// Habilidades, y en la práctica no aportaban suficiente para justificar
	// la complejidad de mantener 4 variantes de cada uno. Se deja fijo en la
	// categoría "General" (índice 0).
	const filtroResumen = 0;
	const location = useLocation();
	const { width } = useScreenSize();
	const { data } = useExperienceData();

	useEffect(() => {
		setRuta("/resume"); // Se ejecuta después del renderizado inicial
	}, [setRuta]);

	useEffect(() => {
		setAmplio(false); // Reset amplio on route change
	}, [location.pathname, setAmplio]);

	const resumeLocation = data?.location[lang] ?? "";
	const experiencias = (data?.jobs ?? [])
		.filter((job) => job.presence.resume === "experience")
		.sort(byStartDateDesc)
		.map((job) => toResumeItem(job, lang, resumeLocation));
	const proyectos = (data?.jobs ?? [])
		.filter((job) => job.presence.resume === "projects")
		.sort(byStartDateDesc)
		.map((job) => toResumeItem(job, lang, resumeLocation));

	return (
		<div id="resume" className="container-fluid">
			<CoSeo routeKey="resume" path="/resume" />
			<CoBtn
				type={"secondary"}
				text={t("resume.labels.download")}
				onClick={() => window.print()}
				icon={"none"}
			/>
			{experiencias.length > 0 && (
				<div className="resume__sheet" style={{ zoom: width / 1200 }}>
					<ResumeSheet
						filtroResumen={filtroResumen}
						experiencias={experiencias}
						proyectos={proyectos}
						variant="screen"
					/>
				</div>
			)}
			<CoBtn
				type={"secondary"}
				text={t("resume.labels.download")}
				onClick={() => window.print()}
				icon={"none"}
			/>
		</div>
	);
};

export default RoResume;
