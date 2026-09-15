import { useContext, useEffect } from "react";
import { NavigationContext } from "../../components/context/NavigationContext";

import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import CoNavLeft from "../../components/general/CoNavLeft";
import CoSumario from "../../components/works/CoSumario";
import CoContexto from "../../components/works/movilidad/CoContexto";
import CoInvest from "../../components/works/movilidad/CoInvest";
import CoAmbNoti from "../../components/works/movilidad/CoAmbNoti";
import CoFlow from "../../components/works/movilidad/CoFlow";
import CoFuture from "../../components/works/movilidad/CoFuture";
import CoSeo from "../../components/general/CoSeo";

import fotoMovilidad from "../../assets/imgs/gifs/MOVILIDAD.mp4";
import liverpool from "../../assets/imgs/works/companies/liverpool.svg";

const RoMovilidad = () => {
	const { setRuta, setAmplio } = useContext(NavigationContext);
	const location = useLocation();
	const { t } = useTranslation();

	useEffect(() => {
		setRuta("/works/movilidad");
	}, [setRuta]);

	useEffect(() => {
		setAmplio(false); // Reset amplio on route change
	}, [location.pathname, setAmplio]);

	const sumario = {
		foto: fotoMovilidad,
		company: liverpool,
		title: t("movilidad.summary.title"),
		date: t("movilidad.summary.dateRange"),
		description: t("movilidad.summary.description"),
		bullets: {
			role: t("movilidad.summary.role", { returnObjects: true }) as string[],
			sector: t("movilidad.summary.sector"),
			team: t("movilidad.summary.team"),
		},
	};

	const anclasMovilidad = [
		{ text: t("caseStudy.summary.label"), id: t("caseStudy.summary.id") },
		{ text: t("movilidad.anchors.context.label"), id: t("movilidad.anchors.context.id") },
		{ text: t("movilidad.anchors.invest.label"), id: t("movilidad.anchors.invest.id") },
		{ text: t("movilidad.anchors.ambNoti.label"), id: t("movilidad.anchors.ambNoti.id") },
		{ text: t("movilidad.anchors.flow.label"), id: t("movilidad.anchors.flow.id") },
		{ text: t("movilidad.anchors.future.label"), id: t("movilidad.anchors.future.id") },
	];

	return (
		<>
			<CoSeo routeKey="movilidad" path="/works/movilidad" />
			<CoNavLeft anclas={anclasMovilidad} />
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
				<CoInvest />
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
				<CoAmbNoti />
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
				<CoFlow />
				<CoFuture />
			</div>
		</>
	);
};

export default RoMovilidad;
