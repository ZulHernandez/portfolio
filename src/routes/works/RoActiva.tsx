import { useContext, useEffect } from "react";
import { NavigationContext } from "../../components/context/NavigationContext";

import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import CoNavLeft from "../../components/general/CoNavLeft";
import CoSumario from "../../components/works/CoSumario";
import CoContexto from "../../components/works/activa/CoContexto";
import CoFlujos from "../../components/works/activa/CoFlujos";
import CoInversion from "../../components/works/activa/CoInversion";
import CoBiometricos from "../../components/works/activa/CoBiometricos";
import CoInvestigacion from "../../components/works/activa/CoInvestigacion";
import CoHomologacion from "../../components/works/activa/CoHomologacion";
import CoResultados from "../../components/works/activa/CoResultados";
import CoSeo from "../../components/general/CoSeo";

import fotoActiva from "../../assets/imgs/gifs/ACTIVA.mp4";
import liverpool from "../../assets/imgs/works/companies/liverpool.svg";

const RoActiva = () => {
	const { setRuta, setAmplio } = useContext(NavigationContext);
	const location = useLocation();
	const { t } = useTranslation();

	useEffect(() => {
		setRuta("/works/activa");
	}, [setRuta]);

	useEffect(() => {
		setAmplio(false); // Reset amplio on route change
	}, [location.pathname, setAmplio]);

	const sumario = {
		foto: fotoActiva,
		company: liverpool,
		title: t("activa.summary.title"),
		date: t("activa.summary.dateRange"),
		description: t("activa.summary.description"),
		bullets: {
			role: t("activa.summary.role", { returnObjects: true }) as string[],
			sector: t("activa.summary.sector"),
			team: t("activa.summary.team"),
		},
	};

	const anclasActiva = [
		{ text: t("caseStudy.summary.label"), id: t("caseStudy.summary.id") },
		{ text: t("activa.anchors.context.label"), id: t("activa.anchors.context.id") },
		{ text: t("activa.anchors.flujos.label"), id: t("activa.anchors.flujos.id") },
		{ text: t("activa.anchors.inversion.label"), id: t("activa.anchors.inversion.id") },
		{ text: t("activa.anchors.biometricos.label"), id: t("activa.anchors.biometricos.id") },
		{ text: t("activa.anchors.investigacion.label"), id: t("activa.anchors.investigacion.id") },
		{ text: t("activa.anchors.homologacion.label"), id: t("activa.anchors.homologacion.id") },
		{ text: t("activa.anchors.resultados.label"), id: t("activa.anchors.resultados.id") },
	];

	return (
		<>
			<CoSeo routeKey="activa" path="/works/activa" />
			<CoNavLeft anclas={anclasActiva} />
			<div>
				<CoSumario
					foto={sumario.foto}
					company={sumario.company}
					title={sumario.title}
					date={sumario.date}
					description={sumario.description}
					role={sumario.bullets.role}
					sector={sumario.bullets.sector}
					team={sumario.bullets.team}
				/>
				<CoContexto />
				<CoFlujos />
				<CoInversion />
				<CoBiometricos />
				<CoInvestigacion />
				<CoHomologacion />
				<CoResultados />
			</div>
		</>
	);
};

export default RoActiva;
