import { useTranslation } from "react-i18next";

import CoKPI from "../../general/CoKPI";

import bioTechGrid from "../../../assets/imgs/works/activa/icons/inv-bio-tech-grid.webp";
import bioScreensStack from "../../../assets/imgs/works/activa/icons/inv-bio-screens-stack.webp";

interface StatText {
	value: string;
	desc: string;
}

const CoBiometricos = () => {
	const { t } = useTranslation();

	const technologies = t("activa.biometricos.technologies", {
		returnObjects: true,
	}) as StatText;
	const screensKpi = t("activa.biometricos.screensKpi", {
		returnObjects: true,
	}) as StatText;

	return (
		<div id={t("activa.anchors.biometricos.id")} className="container-fluid">
			<span className="subtitle">{t("activa.biometricos.title")}</span>
			<span className="text-normal">{t("activa.biometricos.intro")}</span>

			<div className="activa-biometric-detail-row">
				<div className="context-data__dos">
					<img loading="lazy" src={bioTechGrid} alt="" />
					<div className="context-data">
						<CoKPI
							dato={technologies.value}
							desc={technologies.desc}
							imgs={[]}
							pos="left"
						/>
					</div>
				</div>
				<div className="context-data__dos">
					<img loading="lazy" src={bioScreensStack} alt="" />
					<div className="context-data">
						<CoKPI
							dato={screensKpi.value}
							desc={screensKpi.desc}
							imgs={[]}
							pos="left"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CoBiometricos;
