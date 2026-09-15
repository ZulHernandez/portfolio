import { forwardRef } from "react";
import type { ComponentType, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import HTMLFlipBook from "react-pageflip";

// react-pageflip's IFlipSetting types every setting as required, even though
// the library supplies runtime defaults for all of them (only the props
// actually passed below were ever set). Widen the type here rather than
// fabricate values for props the original JS never passed.
const FlipBook = HTMLFlipBook as unknown as ComponentType<
	Record<string, unknown> & { children: ReactNode }
>;

import CoTitle from "../../../components/general/CoTitle";

import step1 from "../../../assets/imgs/works/hubbub/step1.svg";
import step1Mov from "../../../assets/imgs/works/hubbub/step1-mov.svg";
import noise from "../../../assets/imgs/works/hubbub/noise.svg";
import data from "../../../assets/imgs/works/hubbub/data.svg";
import sound from "../../../assets/imgs/works/hubbub/sound.svg";

import sign1 from "../../../assets/imgs/works/hubbub/simbolos/sign1.svg";
import sign2 from "../../../assets/imgs/works/hubbub/simbolos/sign2.svg";
import sign3 from "../../../assets/imgs/works/hubbub/simbolos/sign3.svg";
import sign4 from "../../../assets/imgs/works/hubbub/simbolos/sign4.svg";
import sign5 from "../../../assets/imgs/works/hubbub/simbolos/sign5.svg";

import vid from "../../../assets/imgs/works/hubbub/simbolos/vid.svg";
import art from "../../../assets/imgs/works/hubbub/simbolos/art.svg";
import web from "../../../assets/imgs/works/hubbub/simbolos/web.svg";
import mus from "../../../assets/imgs/works/hubbub/simbolos/mus.svg";
import mic from "../../../assets/imgs/works/hubbub/simbolos/mic.svg";
import pod from "../../../assets/imgs/works/hubbub/simbolos/pod.svg";

import con from "../../../assets/imgs/works/hubbub/simbolos/cons.svg";
import cau from "../../../assets/imgs/works/hubbub/simbolos/cau.svg";
import est from "../../../assets/imgs/works/hubbub/simbolos/est.svg";
import sol from "../../../assets/imgs/works/hubbub/simbolos/sol.svg";

const tesisImgs = Object.values(
	import.meta.glob("../../../assets/imgs/works/hubbub/tesis/*.webp", {
		eager: true,
	}) as Record<string, { default: string }>,
);

// 1. Definimos el componente de la página con forwardRef
const CoPage = forwardRef<HTMLDivElement, { number: number }>((props, ref) => {
	return (
		<div
			className="page"
			ref={ref}
		>
			<img loading="lazy" src={tesisImgs[props.number - 1].default} alt={`Page ${props.number}`} />
		</div>
	);
});

CoPage.displayName = "CoPage";

const CoMyBook = () => {
	return (
		<FlipBook
			width={110} // Ancho de UNA página
			height={85} // Alto de la página (proporción habitual A4)
			minWidth={110 * 2}
			size="stretch" // Permite que el libro se adapte al contenedor
			drawShadow={false} // Sombra para dar efecto 3D
			flippingTime={500}
			usePortrait={true} // Orientación vertical
			autoSize={true} // Ajusta el tamaño automáticamente
			showCover={true} // Muestra la portada
			className="my-book"
		>
			{tesisImgs.map((_, index) => (
				<CoPage key={index} number={index + 1} />
			))}
		</FlipBook>
	);
};

interface AreaBarMeta {
	numero: number;
	simbolo: string;
}

type AreaSlug = "ageRange" | "interestImportant" | "heardAbout";
type BarSlug = "learnMethod" | "wantToKnow";

// Metadata no traducible (números/símbolos) para las gráficas de área y de
// barras; los nombres (traducidos) viven en hubbub.invest.areaCharts /
// hubbub.invest.barCharts y se cruzan aquí por índice, mismo orden.
const areaMeta: Record<AreaSlug, AreaBarMeta[]> = {
	ageRange: [
		{ numero: 1, simbolo: sign1 },
		{ numero: 47, simbolo: sign2 },
		{ numero: 13, simbolo: sign3 },
		{ numero: 6, simbolo: sign4 },
		{ numero: 1, simbolo: sign5 },
	],
	interestImportant: [
		{ numero: 50, simbolo: sign1 },
		{ numero: 17, simbolo: sign3 },
		{ numero: 1, simbolo: sign5 },
	],
	heardAbout: [
		{ numero: 37, simbolo: sign1 },
		{ numero: 31, simbolo: sign3 },
	],
};

const barMeta: Record<BarSlug, AreaBarMeta[]> = {
	learnMethod: [
		{ numero: 94.7, simbolo: vid },
		{ numero: 70.5, simbolo: art },
		{ numero: 67.6, simbolo: web },
		{ numero: 66.8, simbolo: mus },
		{ numero: 45.2, simbolo: mic },
		{ numero: 8.4, simbolo: pod },
	],
	wantToKnow: [
		{ numero: 84.7, simbolo: con },
		{ numero: 62.1, simbolo: cau },
		{ numero: 46.6, simbolo: est },
		{ numero: 12.9, simbolo: sol },
	],
};

interface StepText {
	title: string;
	text: string;
}

interface InvestSteps {
	analysis: StepText;
	research: StepText;
	concepts: StepText;
}

interface AnalysisCard {
	title: string;
	text: string;
}

interface AnalysisCards {
	noise: AnalysisCard;
	harmlessData: AnalysisCard;
	nonProfessionals: AnalysisCard;
}

interface ChartText {
	title: string;
	data: string[];
}

const CoInvest = () => {
	const { t } = useTranslation();

	const steps = t("hubbub.invest.steps", { returnObjects: true }) as InvestSteps;
	const stepColumns = [steps.analysis, steps.research, steps.concepts];

	const analisisCards = t("hubbub.invest.analysisCards", { returnObjects: true }) as AnalysisCards;
	const analisis = [
		{ icon: noise, ...analisisCards.noise },
		{ icon: data, ...analisisCards.harmlessData },
		{ icon: sound, ...analisisCards.nonProfessionals },
	];

	const areaSlugs: AreaSlug[] = ["ageRange", "interestImportant", "heardAbout"];
	const areaData = areaSlugs.map((slug) => {
		const chart = t(`hubbub.invest.areaCharts.${slug}`, { returnObjects: true }) as ChartText;
		return {
			title: chart.title,
			data: chart.data.map((name, index) => ({ name, ...areaMeta[slug][index] })),
		};
	});

	const barSlugs: BarSlug[] = ["learnMethod", "wantToKnow"];
	const barraData = barSlugs.map((slug) => {
		const chart = t(`hubbub.invest.barCharts.${slug}`, { returnObjects: true }) as ChartText;
		return {
			title: chart.title,
			data: chart.data.map((name, index) => ({ name, ...barMeta[slug][index] })),
		};
	});

	const conclusions = t("hubbub.invest.conclusions", { returnObjects: true }) as string[];

	return (
		<div id={t("hubbub.anchors.invest.id")} className="container-fluid">
			<CoTitle titles={t("hubbub.invest.title")} />
			<span className="text-normal">{t("hubbub.invest.intro")}</span>
			<center style={{ width: "100%" }}>
				<img className="step-image" loading="lazy" src={step1} alt="step 1" />
				<img className="step-image-mov" loading="lazy" src={step1Mov} alt="step 2" />
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
			<div>
				<h3 className="subtitle">{t("hubbub.invest.analysisSection.heading")}</h3>
				<br />
				<span className="text-normal">{t("hubbub.invest.analysisSection.intro")}</span>
			</div>
			<div className="step-columns">
				{analisis.map((col, index) => (
					<div key={index} className="step-columns__item three-columns">
						<img loading="lazy" src={col.icon} alt={`Icon for ${col.title}`} />
						<h3 className="subtitle">{col.title}</h3>
						<span className="text-normal">{col.text}</span>
					</div>
				))}
			</div>
			<div>
				<h3 className="subtitle">{t("hubbub.invest.researchSection.heading")}</h3>
				<br />
				<span className="text-normal">{t("hubbub.invest.researchSection.intro")}</span>
			</div>
			<div className="step-columns">
				{areaData.map((area, index) => (
					<div key={index} className="step-columns__item three-columns">
						<h3 className="subtitle">{area.title}</h3>
						<div className="step-columns__item-graph">
							{area.data.map((dataPoint, dataIdx) =>
								Array.from({ length: dataPoint.numero }, (_, idx) => (
									<img
										loading="lazy"
										key={`${dataIdx}-${idx}`}
										src={dataPoint.simbolo}
										alt={dataPoint.name + " " + idx}
									/>
								)),
							)}
						</div>
						<br />
						<div
							className={
								area.data.length > 3
									? "step-columns__item-legend"
									: "step-columns__item-legendList"
							}
						>
							{area.data.map((dataPoint, dataIdx) => (
								<div key={dataIdx} className="legend-item">
									<img
										loading="lazy"
										src={dataPoint.simbolo}
										alt={dataPoint.name + " legend"}
									/>
									<span className="text-normal">
										{dataPoint.name}
										{area.data.length > 3 ? <br /> : " "}
										{parseFloat(String((dataPoint.numero * 100) / 68)).toFixed(1)}%
									</span>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
			<div className="step-columns">
				{barraData.map((barra, index) => (
					<div key={index} className="step-columns__item two-columns">
						<h3 className="subtitle">{barra.title}</h3>
						<div className="step-columns__item-barra">
							{barra.data.map((dataPoint, dataIdx) => (
								<div key={dataIdx} className="barra-data">
									<img loading="lazy" src={dataPoint.simbolo} alt={dataPoint.name} />
									<div className="barra-data__bar">
										<div
											className="barra-data__bar-fill"
											style={{ width: `${dataPoint.numero}%` }}
										></div>
									</div>
								</div>
							))}
						</div>
						<br />
						<div
							className={
								barra.data.length > 3
									? "step-columns__item-legend"
									: "step-columns__item-legendList"
							}
						>
							{barra.data.map((dataPoint, dataIdx) => (
								<div key={dataIdx} className="legend-item">
									<img
										loading="lazy"
										src={dataPoint.simbolo}
										alt={dataPoint.name + " legend"}
									/>
									<span className="text-normal">
										{dataPoint.name}
										{barra.data.length > 3 ? <br /> : " "}
										{dataPoint.numero}%
									</span>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
			<div>
				<span className="text-normal">{t("hubbub.invest.conclusionsIntro")}</span>
				<ul>
					{conclusions.map((conclusion, index) => (
						<li className="text-normal" key={index}>
							{conclusion}
						</li>
					))}
				</ul>
				<span className="text-normal">{t("hubbub.invest.solutionParagraph")}</span>
			</div>
			<div>
				<h3 className="subtitle">{t("hubbub.invest.conceptsSection.heading")}</h3>
				<br />
				<span className="text-normal">{t("hubbub.invest.conceptsSection.intro")}</span>
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					width: "100%",
					clipPath: "inset(0% round 1rem)",
					borderRadius: "1rem",
					boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
				}}>
				<CoMyBook />
			</div>
		</div>
	);
};

export default CoInvest;
