import { useTranslation } from "react-i18next";

import CoTitle from "../../../components/general/CoTitle";
import CoKPI from "../../../components/general/CoKPI";
import CoFlowSchema from "./CoFlowSchema";

import movLogo from "../../../assets/imgs/works/movilidad/electromaps/logo.svg";
import mov1 from "../../../assets/imgs/works/movilidad/electromaps/1.webp";
import mov2 from "../../../assets/imgs/works/movilidad/electromaps/2.webp";
import mov3 from "../../../assets/imgs/works/movilidad/electromaps/3.webp";
import mov4 from "../../../assets/imgs/works/movilidad/electromaps/4.webp";
import mov5 from "../../../assets/imgs/works/movilidad/electromaps/5.webp";
import mov6 from "../../../assets/imgs/works/movilidad/electromaps/6.webp";
import mov7 from "../../../assets/imgs/works/movilidad/electromaps/7.webp";
import mov8 from "../../../assets/imgs/works/movilidad/electromaps/8.webp";
import mov9 from "../../../assets/imgs/works/movilidad/electromaps/9.webp";
import mov10 from "../../../assets/imgs/works/movilidad/electromaps/10.webp";
import mov11 from "../../../assets/imgs/works/movilidad/electromaps/11.webp";
import mov12 from "../../../assets/imgs/works/movilidad/electromaps/12.webp";

import plugLogo from "../../../assets/imgs/works/movilidad/plugshare/logo.svg";
import plug1 from "../../../assets/imgs/works/movilidad/plugshare/1.webp";
import plug2 from "../../../assets/imgs/works/movilidad/plugshare/2.webp";
import plug3 from "../../../assets/imgs/works/movilidad/plugshare/3.webp";
import plug4 from "../../../assets/imgs/works/movilidad/plugshare/4.webp";
import plug5 from "../../../assets/imgs/works/movilidad/plugshare/5.webp";
import plug6 from "../../../assets/imgs/works/movilidad/plugshare/6.webp";
import plug7 from "../../../assets/imgs/works/movilidad/plugshare/7.webp";
import plug8 from "../../../assets/imgs/works/movilidad/plugshare/8.webp";
import plug9 from "../../../assets/imgs/works/movilidad/plugshare/9.webp";
import plug10 from "../../../assets/imgs/works/movilidad/plugshare/10.webp";
import plug11 from "../../../assets/imgs/works/movilidad/plugshare/11.webp";
import plug12 from "../../../assets/imgs/works/movilidad/plugshare/12.webp";
import plug13 from "../../../assets/imgs/works/movilidad/plugshare/13.webp";
import plug14 from "../../../assets/imgs/works/movilidad/plugshare/14.webp";
import plug15 from "../../../assets/imgs/works/movilidad/plugshare/15.webp";

import chargeLogo from "../../../assets/imgs/works/movilidad/chargemap/logo.svg";
import charge1 from "../../../assets/imgs/works/movilidad/chargemap/1.webp";
import charge2 from "../../../assets/imgs/works/movilidad/chargemap/2.webp";
import charge3 from "../../../assets/imgs/works/movilidad/chargemap/3.webp";
import charge4 from "../../../assets/imgs/works/movilidad/chargemap/4.webp";
import charge5 from "../../../assets/imgs/works/movilidad/chargemap/5.webp";
import charge6 from "../../../assets/imgs/works/movilidad/chargemap/6.webp";
import charge7 from "../../../assets/imgs/works/movilidad/chargemap/7.webp";
import charge8 from "../../../assets/imgs/works/movilidad/chargemap/8.webp";
import charge9 from "../../../assets/imgs/works/movilidad/chargemap/9.webp";
import charge10 from "../../../assets/imgs/works/movilidad/chargemap/10.webp";

import diamond from "../../../assets/imgs/works/movilidad/diamond.svg";

import option1 from "../../../assets/imgs/works/movilidad/option1.svg";
import option2 from "../../../assets/imgs/works/movilidad/option2.svg";
import option3 from "../../../assets/imgs/works/movilidad/option3.svg";
import option4 from "../../../assets/imgs/works/movilidad/option4.svg";
import option5 from "../../../assets/imgs/works/movilidad/option5.svg";

import screen1 from "../../../assets/imgs/works/movilidad/exHome1.webp";
import screen2 from "../../../assets/imgs/works/movilidad/exHome2.webp";
import wordMapES from "../../../assets/imgs/works/movilidad/wordMapES.svg";
import wordMapEN from "../../../assets/imgs/works/movilidad/wordMapEN.svg";

const marcas = [
	{ logo: movLogo, images: [mov1, mov2, mov3, mov4, mov5, mov6, mov7, mov8, mov9, mov10, mov11, mov12] },
	{ logo: plugLogo, images: [plug1, plug2, plug3, plug4, plug5, plug6, plug7, plug8, plug9, plug10, plug11, plug12, plug13, plug14, plug15] },
	{ logo: chargeLogo, images: [charge1, charge2, charge3, charge4, charge5, charge6, charge7, charge8, charge9, charge10] },
];

interface ExerciseText {
	task: string;
	objective: string;
	result: string;
	conclusions: string[];
}

interface Exercises {
	first: ExerciseText;
	second: ExerciseText;
}

interface InvestLabels {
	exercise: string;
	objective: string;
	result: string;
	conclusions: string;
}

const CoInvest = () => {
	const { t, i18n } = useTranslation();

	const exercises = t("movilidad.invest.exercises", { returnObjects: true }) as Exercises;
	const labels = t("movilidad.invest.labels", { returnObjects: true }) as InvestLabels;
	// Los íconos option1-5.svg traían el texto ("Mapa", "Navegación", etc.)
	// quemado como paths (mismo problema que el diagrama de hand-off de
	// GLUE): se quitaron los paths de texto de los SVG y ahora la etiqueta
	// se muestra como texto real, traducido, debajo del ícono.
	const priorityOptions = t("movilidad.invest.priorityOptions", { returnObjects: true }) as string[];

	return (
		<div id={t("movilidad.anchors.invest.id")} className="container-fluid">
			<CoTitle titles={t("movilidad.invest.title")} />
			<span className="text-normal">
				{t("movilidad.invest.intro1")}
				<br />
				<br />
				{t("movilidad.invest.intro2")}
			</span>
			<div className="research">
				{marcas.map((marca, index) => (
					<div key={index} className="research__brand">
						<img loading="lazy" className="brand-logo" src={marca.logo} alt="Brand Logo" />
						<div className="research__brand-screens">
							{marca.images.map((image, imgIndex) => (
								<img
									loading="lazy"
									key={imgIndex}
									src={image}
									alt={`Image ${imgIndex + 1}`}
									className="brand-image"
								/>
							))}
						</div>
					</div>
				))}
			</div>
			<span className="text-normal">{t("movilidad.invest.mapIntro")}</span>
			<CoFlowSchema />
			<span className="text-normal">{t("movilidad.invest.testIntro")}</span>
			<div className="questions">
				<div className="questions__item">
					<div
						className="questions__item-grafica"
						style={{ backgroundColor: "#ff7520" }}
					>
						<div id="mujer" className="questions__item-grafica-barra">
							{t("movilidad.invest.women")}
						</div>
						<div id="hombre" className="questions__item-grafica-barra">
							{t("movilidad.invest.men")}
						</div>
						<div id="otros" className="questions__item-grafica-barra"></div>
					</div>
					<CoKPI
						title={""}
						dato={t("movilidad.invest.participants.value")}
						desc={t("movilidad.invest.participants.desc")}
						imgs={[""]}
						imgSize="2.4rem"
						pos="left"
						color="#4D4D4D"
					/>
				</div>
				<div className="questions__item">
					<div className="questions__item-grafica" style={{ clipPath: "none" }}>
						<img loading="lazy" src={diamond} alt="" />
						<div id="preg1" className="questions__item-grafica-preg">
							<span>2</span>
							{t("movilidad.invest.introQuestions")}
						</div>
						<img loading="lazy" src={diamond} alt="" />
						<div id="preg2" className="questions__item-grafica-preg">
							<span>3</span>
							{t("movilidad.invest.hierarchyQuestions")}
						</div>
						<img loading="lazy" src={diamond} alt="" />
						<div id="preg3" className="questions__item-grafica-preg">
							<span>3</span>
							{t("movilidad.invest.aestheticsQuestions")}
						</div>
						<img loading="lazy" src={diamond} alt="" />
						<div id="preg4" className="questions__item-grafica-preg">
							<span>1</span>
							{t("movilidad.invest.finalQuestions")}
						</div>
						<img loading="lazy" src={diamond} alt="" />
					</div>
					<CoKPI
						title={""}
						dato={t("movilidad.invest.questionsKpi.value")}
						desc={t("movilidad.invest.questionsKpi.desc")}
						imgs={[""]}
						imgSize="2.4rem"
						pos="left"
						color="#4D4D4D"
					/>
				</div>
			</div>
			<div className="exercise">
				{/* Antes cada ícono se encogía con transform: scale() para sugerir
				    su posición en el ranking (más chico = menos relevante). Al
				    sacar la etiqueta del SVG (ver arriba) ese mismo encogimiento
				    volvía el texto real ilegible en las últimas posiciones. Ahora
				    el ranking se muestra como barras descendentes (100/80/60/40/20%,
				    en el mismo orden en que quedaron los resultados) — el ícono y
				    la etiqueta quedan siempre al mismo tamaño y legibles, y la
				    barra + el número comunican la posición. */}
				<div className="rank-bars">
					{Array.from({ length: 5 }, (_, index) => {
						const options = [option1, option2, option3, option4, option5];
						const widthPct = 100 - index * 20;
						return (
							<div key={index} className="rank-bars__item">
								<div className="rank-bars__item-label">
									<img loading="lazy" src={options[index]} alt="" />
									<span>{priorityOptions[index]}</span>
								</div>
								<div className="rank-bars__item-track">
									<div className="rank-bars__item-fill" style={{ width: `${widthPct}%` }}>
										<span>{index + 1}</span>
									</div>
								</div>
							</div>
						);
					})}
				</div>
				<div className="exercise__text">
					<div className="exercise__text-column">
						<div className="exercise__text-column__item">
							<h3>{labels.exercise}</h3>
							<span className="text-normal">{exercises.first.task}</span>
						</div>
						<div className="exercise__text-column__item">
							<h3>{labels.objective}</h3>
							<span className="text-normal">{exercises.first.objective}</span>
						</div>
						<div className="exercise__text-column__item">
							<h3>{labels.result}</h3>
							<span className="text-normal">{exercises.first.result}</span>
						</div>
					</div>
					<div className="exercise__text-column">
						<div className="exercise__text-column__item">
							<h3>{labels.conclusions}</h3>
							{exercises.first.conclusions.map((conclusion, index) => (
								<span key={index} className="text-normal">
									{conclusion}
								</span>
							))}
						</div>
					</div>
				</div>
			</div>
			<br /><br />
            <div className="exercise">
				<div className="exercise__imgs">
					<img loading="lazy" id="screen1" src={screen1} alt="" />
					<img
						loading="lazy"
						id="wordMap"
						src={i18n.language === "es" ? wordMapES : wordMapEN}
						alt={t("movilidad.invest.wordMapAlt")}
					/>
					<img loading="lazy" id="screen2" src={screen2} alt="" />
				</div>
				<br />
				<div className="exercise__text">
					<div className="exercise__text-column">
						<div className="exercise__text-column__item">
							<h3>{labels.exercise}</h3>
							<span className="text-normal">{exercises.second.task}</span>
						</div>
						<div className="exercise__text-column__item">
							<h3>{labels.objective}</h3>
							<span className="text-normal">{exercises.second.objective}</span>
						</div>
					</div>
					<div className="exercise__text-column">
						<div className="exercise__text-column__item">
							<h3>{labels.result}</h3>
							<span className="text-normal">{exercises.second.result}</span>
						</div>
						<div className="exercise__text-column__item">
							<h3>{labels.conclusions}</h3>
							{exercises.second.conclusions.map((conclusion, index) => (
								<span key={index} className="text-normal">
									{conclusion}
								</span>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CoInvest;
