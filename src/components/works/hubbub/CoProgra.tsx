import { useTranslation } from "react-i18next";

import CoTitle from "../../general/CoTitle";
import CoKPI from "../../general/CoKPI";

import step3 from "../../../assets/imgs/works/hubbub/step3.svg";
import step3Mov from "../../../assets/imgs/works/hubbub/step3-mov.svg";

import planEs from "../../../assets/imgs/works/hubbub/planProgaming-es.svg";
import planEn from "../../../assets/imgs/works/hubbub/planProgaming-en.svg";
import techEs from "../../../assets/imgs/works/hubbub/tech-es.svg";
import techEn from "../../../assets/imgs/works/hubbub/tech-en.svg";

import hubbubLogo from "../../../assets/imgs/works/hubbub/hubbubLogo.svg";
import phpLogo from "../../../assets/imgs/works/hubbub/phpLogo.svg";
import reactLogo from "../../../assets/imgs/works/hubbub/reactLogo.svg";

import g1 from "../../../assets/imgs/works/hubbub/gifs/g1.gif";
import g2 from "../../../assets/imgs/works/hubbub/gifs/g2.gif";
import g3 from "../../../assets/imgs/works/hubbub/gifs/g3.gif";
import g4 from "../../../assets/imgs/works/hubbub/gifs/g4.gif";
import g5 from "../../../assets/imgs/works/hubbub/gifs/g5.gif";
import g6 from "../../../assets/imgs/works/hubbub/gifs/g6.gif";
import g7 from "../../../assets/imgs/works/hubbub/gifs/g7.gif";
import g8 from "../../../assets/imgs/works/hubbub/gifs/g8.gif";
import g9 from "../../../assets/imgs/works/hubbub/gifs/g9.gif";

interface StepText {
	title: string;
	text: string;
}

interface ProgramSteps {
	planning: StepText;
	coding: StepText;
	implementation: StepText;
}

interface PlanLegendItem {
	title: string;
	bullets: string[];
}

interface PlanLegendData {
	general: PlanLegendItem;
	noise: PlanLegendItem;
	viewNoise: PlanLegendItem;
}

interface PlanKPIItem {
	title: string;
	desc: string;
}

interface PlanKPIData {
	hours: PlanKPIItem;
	modules: PlanKPIItem;
	weeks: PlanKPIItem;
}

interface VersionInfo {
	dateRange: string;
	description: string;
	techLabel: string;
	techDesc: string;
	branchLabel: string;
	branchDesc: string;
}

interface Versions {
	php: VersionInfo;
	react: VersionInfo;
}

const CoProgra = () => {
	const { t, i18n } = useTranslation();

	const steps = t("hubbub.progra.steps", { returnObjects: true }) as ProgramSteps;
	const stepColumns = [steps.planning, steps.coding, steps.implementation];

	const planLegendData = t("hubbub.progra.planLegend", { returnObjects: true }) as PlanLegendData;
	const planLegend = [
		{ ...planLegendData.general, color: "#FF2079" },
		{ ...planLegendData.noise, color: "#2088FF" },
		{ ...planLegendData.viewNoise, color: "#FF7520" },
	];

	const planKPIData = t("hubbub.progra.planKPI", { returnObjects: true }) as PlanKPIData;
	const planKPI = [planKPIData.hours, planKPIData.modules, planKPIData.weeks];

	const versions = t("hubbub.progra.versions", { returnObjects: true }) as Versions;

	return (
		<div id={t("hubbub.anchors.progra.id")} className="container-fluid">
			<CoTitle titles={t("hubbub.progra.title")} />
			<span className="text-normal">{t("hubbub.progra.intro")}</span>
			<center style={{ width: "100%" }}>
				<img className="step-image" loading="lazy" src={step3} alt="step 3" />
				<img
					className="step-image-mov"
					loading="lazy"
					src={step3Mov}
					alt="step 3 mov"
				/>
			</center>
			<div className="step-columns">
				{stepColumns.map((col, index) => (
					<div key={index} className="step-column three-columns">
						<h3 className="subtitle">{col.title}</h3>
						<br />
						<span className="text-normal">{col.text}</span>
					</div>
				))}
			</div>
			<span className="text-normal">{t("hubbub.progra.implementationNote")}</span>
			<div style={{ width: "100%" }}>
				<h3 className="subtitle">{t("hubbub.progra.planningSection.heading")}</h3>
				<br />
				<span className="text-normal">{t("hubbub.progra.planningSection.intro")}</span>
			</div>
			<center style={{ width: "100%" }}>
				<img
					style={{ width: "80%" }}
					loading="lazy"
					src={i18n.language === "es" ? planEs : planEn}
					alt={t("hubbub.progra.planningSection.heading")}
				/>
			</center>
			<div className="step-columns">
				{planLegend.map((col, index) => (
					<div key={index} className="step-column three-columns">
						<h3 className="text-normal" style={{ color: col.color }}>
							{col.title}
						</h3>
						<br />
						{col.bullets.map((bullet, idx) => (
							<p key={idx} className="text-normal">
								• {bullet}
							</p>
						))}
					</div>
				))}
			</div>
			<div className="step-columns">
				{planKPI.map((kpi, index) => (
					<div key={index} className="step-column three-columns">
						<CoKPI
							dato={kpi.title}
							desc={kpi.desc}
							imgs={[]}
							imgSize="0"
							pos="center"
							color="#000"
						/>
					</div>
				))}
			</div>
			<span className="text-normal">{t("hubbub.progra.techIntro")}</span>
			<center style={{ width: "100%" }}>
				<img
					style={{ width: "50%" }}
					loading="lazy"
					src={i18n.language === "es" ? techEs : techEn}
					alt={t("hubbub.progra.techIntro")}
				/>
			</center>
			<div style={{ width: "100%" }}>
				<h3 className="subtitle">{t("hubbub.progra.codingSection.heading")}</h3>
				<br />
				<span className="text-normal">{t("hubbub.progra.codingSection.intro")}</span>
			</div>
			<div className="tokens-list">
				<div className="tokens-list__card">
					<div className="tokens-list__card-header">
						<div className="tokens-list__card-header-title">
							<img loading="lazy" src={hubbubLogo} alt="hubbub" />
							<span className="text-normal">+</span>
							<img loading="lazy" src={phpLogo} alt="PHP" />
						</div>
						<span>{versions.php.dateRange}</span>
					</div>
					<span className="text-normal">{versions.php.description}</span>
					<CoKPI
						title=""
						dato={versions.php.techLabel}
						desc={versions.php.techDesc}
						imgs={[]}
						imgSize="0"
						pos="center"
						color="#000"
					/>
					<div className="tech-chart">
						<div className="tech-chart-element" style={{ width: "44.7%" }}>
							<div id="js" />
							<span>
								JavaScript <br /> 44.7%
							</span>
						</div>
						<div className="tech-chart-element" style={{ width: "41.5%" }}>
							<div id="php" />
							<span>
								PHP <br /> 41.5%
							</span>
						</div>
						<div className="tech-chart-element" style={{ width: "13.8%" }}>
							<div id="scss" />
							<span>
								SCSS <br /> 13.8%
							</span>
						</div>
					</div>
					<CoKPI
						title=""
						dato={versions.php.branchLabel}
						desc={versions.php.branchDesc}
						imgs={[]}
						imgSize="0"
						pos="center"
						color="#000"
					/>
				</div>
				<div className="tokens-list__card">
					<div className="tokens-list__card-header">
						<div className="tokens-list__card-header-title">
							<img loading="lazy" src={hubbubLogo} alt="hubbub" />
							<span className="text-normal">+</span>
							<img loading="lazy" src={reactLogo} alt="PHP" />
						</div>
						<span>{versions.react.dateRange}</span>
					</div>
					<span className="text-normal">{versions.react.description}</span>
					<CoKPI
						title=""
						dato={versions.react.techLabel}
						desc={versions.react.techDesc}
						imgs={[]}
						imgSize="0"
						pos="center"
						color="#000"
					/>
					<div className="tech-chart">
						<div className="tech-chart-element" style={{ width: "88.2%" }}>
							<div id="js" />
							<span>
								JavaScript <br /> 88.2%
							</span>
						</div>
						<div className="tech-chart-element" style={{ width: "0.4%" }}>
							<div id="html" />
						</div>
						<div className="tech-chart-element" style={{ width: "11.4%" }}>
							<div id="scss" />
							<span>
								SCSS <br /> 11.4%
							</span>
						</div>
					</div>
					<CoKPI
						title=""
						dato={versions.react.branchLabel}
						desc={versions.react.branchDesc}
						imgs={[]}
						imgSize="0"
						pos="center"
						color="#000"
					/>
				</div>
			</div>
			<span className="text-normal">{t("hubbub.progra.vizIntro")}</span>
			<div id="sketches" className="sketches">
				<div className="sketch-row1">
					{[g1, g2, g3].map((sketch, index) => (
						<img loading="lazy" key={index} src={sketch} alt={`gif ${index + 1}`} />
					))}
				</div>
				<div className="sketch-row2">
					{[g4, g5, g6, g7, g8].map((sketch, index) => (
						<img loading="lazy" key={index} src={sketch} alt={`gif ${index + 5}`} />
					))}
				</div>
				<img loading="lazy" src={g9} alt="gif 9" style={{ width: "100%" }} />
			</div>
			<div id="sketches-mov" className="sketches">
				{[g1, g2, g3, g4, g5, g6, g7, g8, g9].map((sketch, index) => (
					<img loading="lazy" id={`gif-${index + 1}`} key={index} src={sketch} alt={`gif ${index + 1}`} />
				))}
			</div>
		</div>
	);
};

export default CoProgra;
