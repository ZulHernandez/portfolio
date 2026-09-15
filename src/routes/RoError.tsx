import sign from "/sign.svg";

import { useContext, useEffect } from "react";
import { NavigationContext } from "../components/context/NavigationContext";

import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import CoBtn from "../components/general/CoBtn";
import CoSeo from "../components/general/CoSeo";

const RoError = () => {
	const { setAmplio } = useContext(NavigationContext);
	const location = useLocation();
	const { t } = useTranslation();

	useEffect(() => {
		setAmplio(false); // Reset amplio on route change
	}, [location.pathname, setAmplio]);

	return (
		<div className="div-error">
			<CoSeo routeKey="notFound" path={location.pathname} noindex />
			<img loading="lazy" src={sign} />
			<div className="div-error-text">
				<h1>{t("error.title")}</h1>
				<p>
					{t("error.description1")}
					<br />
					<br />
					{t("error.description2")}
				</p>
				<br />
				<br />
				<br />
				<br />
				<div className="work__cta">
					<CoBtn
						type="secondary"
						text={t("error.cta")}
						link="/"
					/>
				</div>
			</div>
		</div>
	);
};

export default RoError;
