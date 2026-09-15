import CoHola from "../components/home/CoHola";
import CoColab from "../components/home/CoColab";
import CoTrabajos from "../components/home/CoTrabajos";
import CoConozca from "../components/general/CoConozca";
import CoNavLeft from "../components/general/CoNavLeft";
import CoSeo from "../components/general/CoSeo";

import { useContext, useEffect } from "react";
import { NavigationContext } from "../components/context/NavigationContext";
import { useTranslation } from "react-i18next";

import { useLocation } from "react-router-dom";

const RoHome = () => {
	const { setRuta, setAmplio } = useContext(NavigationContext);
	const location = useLocation();
	const { t } = useTranslation();

	const anclasHome = [
		{ text: t("home.anchors.hola.label"), id: t("home.anchors.hola.id") },
		{ text: t("home.anchors.colab.label"), id: t("home.anchors.colab.id") },
		{ text: t("home.anchors.trabajos.label"), id: t("home.anchors.trabajos.id") },
		{ text: t("home.anchors.conozca.label"), id: t("home.anchors.conozca.id") },
	];

	// Mover la actualización de estado a useEffect
	useEffect(() => {
		setRuta("/"); // Se ejecuta después del renderizado inicial
	}, [setRuta]);

	useEffect(() => {
		setAmplio(false); // Reset amplio on route change
	}, [location.pathname, setAmplio]);

	return (
		<>
			<CoSeo routeKey="home" path="/" />
			<div>
				<CoHola />
				<CoColab />
				<CoTrabajos />
				<CoConozca />
			</div>
			<CoNavLeft anclas={anclasHome} />
		</>
	);
};

export default RoHome;
