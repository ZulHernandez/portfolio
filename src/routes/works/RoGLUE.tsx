import { useContext, useEffect } from "react";
import { NavigationContext } from "../../components/context/NavigationContext";

import { useLocation } from "react-router-dom";

import CoNavLeft from "../../components/general/CoNavLeft";
import CoSumario from "../../components/works/CoSumario";
import CoContexto from "../../components/works/glue/CoContexto";
import CoTech from "../../components/works/glue/CoTech";
import CoInsumos from "../../components/works/glue/CoInsumos";
import CoAutoma from "../../components/works/glue/CoAutoma";
import CoFuture from "../../components/works/glue/CoFuture";
import CoSeo from "../../components/general/CoSeo";
import { useTranslation } from "react-i18next";

import fotoGLUE from "../../assets/imgs/gifs/GLUE.mp4";
import liverpool from "../../assets/imgs/works/companies/liverpool.svg";

const RoGLUE = () => {
	const { setRuta, setAmplio } = useContext(NavigationContext);
	const location = useLocation();
	const { t } = useTranslation();

	useEffect(() => {
		setRuta("/works/glue"); // Se ejecuta después del renderizado inicial
	}, [setRuta]);

	useEffect(() => {
		setAmplio(false); // Reset amplio on route change
	}, [location.pathname, setAmplio]);

	const sumario = {
		foto: fotoGLUE,
		company: liverpool,
		title: t("glue.summary.title"),
		date: t("glue.summary.dateRange"),
		description: t("glue.summary.description"),
		bullets: {
			role: t("glue.summary.role", { returnObjects: true }) as string[],
			sector: t("glue.summary.sector"),
			team: t("glue.summary.team"),
		},
	};

	const anclasGlue = [
		{ text: t("caseStudy.summary.label"), id: t("caseStudy.summary.id") },
		{ text: t("glue.anchors.context.label"), id: t("glue.anchors.context.id") },
		{ text: t("glue.anchors.tech.label"), id: t("glue.anchors.tech.id") },
		{ text: t("glue.anchors.insumos.label"), id: t("glue.anchors.insumos.id") },
		{ text: t("glue.anchors.automa.label"), id: t("glue.anchors.automa.id") },
		{ text: t("glue.anchors.future.label"), id: t("glue.anchors.future.id") },
	];

	return (
		<>
			<CoSeo routeKey="glue" path="/works/glue" />
			<CoNavLeft anclas={anclasGlue} />
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
				<CoTech />
				<center>
					<hr
						style={{
							border: "0.2rem solid #ccc",
							margin: "1rem 0",
							width: "80%",
							borderRadius: "5rem",
						}}
					/>
				</center>
				<CoInsumos />
				<center>
					<hr
						style={{
							border: "0.2rem solid #ccc",
							margin: "1rem 0",
							width: "80%",
							borderRadius: "5rem",
						}}
					/>
				</center>
				<CoAutoma />
				<CoFuture />
			</div>
		</>
	);
};

export default RoGLUE;
