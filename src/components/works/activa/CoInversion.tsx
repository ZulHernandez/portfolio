import { useTranslation } from "react-i18next";

import CoKPI from "../../general/CoKPI";

import investSteps from "../../../assets/imgs/works/activa/inversion-steps.svg";
import invMiniProfiling from "../../../assets/imgs/works/activa/icons/inv-mini-profiling.webp";
import invMiniResult from "../../../assets/imgs/works/activa/icons/inv-mini-result.webp";

import strategyCardConservadora from "../../../assets/imgs/works/activa/icons/inv-strategy-card-conservadora.webp";
import strategyCardBalanceada from "../../../assets/imgs/works/activa/icons/inv-strategy-card-balanceada.webp";
import strategyCardAgresiva from "../../../assets/imgs/works/activa/icons/inv-strategy-card-agresiva.webp";
import strategyCardCambiaria from "../../../assets/imgs/works/activa/icons/inv-strategy-card-cambiaria.webp";

interface StatText {
	value: string;
	desc: string;
}

interface SimulatorSteps extends StatText {
	steps: string[];
}

interface TitleDesc {
	title: string;
	desc: string;
}

interface Strategy {
	name: string;
}

// Tarjetas completas exportadas por Zul directamente de Figma (carpeta
// E:\Escritorio\imagenes, frames "1321317982/983/984" y "34279"), una
// imagen por estrategia — nada de esto se reconstruye con HTML/CSS. Mismo
// orden que activa.inversion.strategies en los json de traducción,
// confirmado leyendo cada imagen: conservadora, balanceada, agresiva,
// protección cambiaria.
const STRATEGY_CARDS = [
	strategyCardConservadora,
	strategyCardBalanceada,
	strategyCardAgresiva,
	strategyCardCambiaria,
];

const CoInversion = () => {
	const { t } = useTranslation();

	const simulatorSteps = t("activa.inversion.simulatorSteps", {
		returnObjects: true,
	}) as SimulatorSteps;
	const profilingQuestions = t("activa.inversion.profilingQuestions", {
		returnObjects: true,
	}) as StatText;
	const profiles = t("activa.inversion.profiles", {
		returnObjects: true,
	}) as StatText;
	const resultProfile = t("activa.inversion.resultProfile", {
		returnObjects: true,
	}) as TitleDesc;
	const dashboards = t("activa.inversion.dashboards", {
		returnObjects: true,
	}) as TitleDesc;
	const strategies = t("activa.inversion.strategies", {
		returnObjects: true,
	}) as Strategy[];

	return (
		<div id={t("activa.anchors.inversion.id")} className="container-fluid">
			<span className="subtitle">{t("activa.inversion.title")}</span>
			<span className="text-normal">{t("activa.inversion.intro1")}</span>
			<span className="text-normal">{t("activa.inversion.intro2")}</span>
			<div className="activa-steps-row">
				<CoKPI
					dato={simulatorSteps.value}
					desc={simulatorSteps.desc}
					imgs={[investSteps]}
					pos="left"
				/>
				<div className="activa-steps-row__col">
					<div className="context-data__dos">
						<img loading="lazy" src={invMiniProfiling} alt="" />
						<div className="context-data">
							<CoKPI
								dato={profilingQuestions.value}
								desc={profilingQuestions.desc}
								imgs={[]}
								pos="left"
							/>
							<CoKPI
								dato={profiles.value}
								desc={profiles.desc}
								imgs={[]}
								pos="left"
							/>
						</div>
					</div>
					<div className="context-data__dos">
						<img loading="lazy" src={invMiniResult} alt="" />
						<div className="context-data">
							<CoKPI
								dato={resultProfile.title}
								desc={resultProfile.desc}
								imgs={[]}
								pos="left"
							/>
							<CoKPI
								dato={dashboards.title}
								desc={dashboards.desc}
								imgs={[]}
								pos="left"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="activa-strategies-row">
				{STRATEGY_CARDS.map((src, index) => (
					<div className="activa-strategy-card" key={index}>
						<img src={src} alt={strategies[index]?.name ?? ""} />
					</div>
				))}
			</div>
		</div>
	);
};

export default CoInversion;
