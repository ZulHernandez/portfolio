import { useContext, useEffect } from "react";
import { NavigationContext } from "../../components/context/NavigationContext";

import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import CoNavLeft from "../../components/general/CoNavLeft";
import CoSumario from "../../components/works/CoSumario";
import CoContexto from "../../components/works/hubbub/CoContexto";
import CoInvest from "../../components/works/hubbub/CoInvest";
import CoDesign from "../../components/works/hubbub/CoDesign";
import CoProgra from "../../components/works/hubbub/CoProgra";
import CoFuture from "../../components/works/hubbub/CoFuture";
import CoSeo from "../../components/general/CoSeo";

import fotoHUBBUB from "../../assets/imgs/gifs/HUBBUB.mp4";
import liverpool from "../../assets/imgs/works/companies/liverpool.svg";

// Antes este componente se llamaba "RoMovilidad" por dentro (residuo de haber
// copiado RoMovilidad.jsx como plantilla). La ruta y los datos ya apuntaban
// correctamente a HUBBUB, solo el nombre interno estaba mal.
const RoHUBBUB = () => {
	const { setRuta, setAmplio } = useContext(NavigationContext);
	const location = useLocation();
	const { t } = useTranslation();

	useEffect(() => {
		setRuta("/works/hubbub"); // Se ejecuta después del renderizado inicial
	}, [setRuta]);

	useEffect(() => {
		setAmplio(false); // Reset amplio on route change
	}, [location.pathname, setAmplio]);

	const sumario = {
		foto: fotoHUBBUB,
		company: liverpool,
		title: t("hubbub.summary.title"),
		date: t("hubbub.summary.dateRange"),
		description: t("hubbub.summary.description"),
		bullets: {
			role: t("hubbub.summary.role", { returnObjects: true }) as string[],
			sector: t("hubbub.summary.sector"),
			team: t("hubbub.summary.team"),
		},
	};

	const anclasHubbub = [
		{ text: t("caseStudy.summary.label"), id: t("caseStudy.summary.id") },
		{ text: t("hubbub.anchors.context.label"), id: t("hubbub.anchors.context.id") },
		{ text: t("hubbub.anchors.invest.label"), id: t("hubbub.anchors.invest.id") },
		{ text: t("hubbub.anchors.design.label"), id: t("hubbub.anchors.design.id") },
		{ text: t("hubbub.anchors.progra.label"), id: t("hubbub.anchors.progra.id") },
		{ text: t("hubbub.anchors.future.label"), id: t("hubbub.anchors.future.id") },
	];

	return (
		<>
			<CoSeo routeKey="hubbub" path="/works/hubbub" />
			<CoNavLeft anclas={anclasHubbub} />
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
				<CoDesign />
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
				<CoProgra />
				<CoFuture />
			</div>
		</>
	);
};

export default RoHUBBUB;
