import CoNavLeft from "../components/general/CoNavLeft";
import CoTrabajos from "../components/works/CoTrabajos";
import CoTimeline from "../components/works/CoTimeline";
import CoSeo from "../components/general/CoSeo";

import { useContext, useEffect } from "react";
import { NavigationContext } from "../components/context/NavigationContext";
import { useTranslation } from "react-i18next";

import { useLocation } from "react-router-dom";

const RoWorks = () => {
	const { setRuta, setAmplio } = useContext(NavigationContext);
	const location = useLocation();
	const { t } = useTranslation();

	const anclasWork = [
		{ text: t("works.heading"), id: t("works.id") },
		{ text: t("works.timelineAnchorLabel"), id: t("timeline.id") },
	];

	useEffect(() => {
		setRuta("/works");
	}, [setRuta]);

	useEffect(() => {
		setAmplio(false); // Reset amplio on route change
	}, [location.pathname, setAmplio]);

	return (
		<>
			<CoSeo routeKey="works" path="/works" />
			<div>
				<CoTrabajos />
				<CoTimeline />
			</div>
			<CoNavLeft anclas={anclasWork} />
		</>
	);
};

export default RoWorks;
