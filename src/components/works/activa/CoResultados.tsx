import { useTranslation } from "react-i18next";

import CoTitle from "../../general/CoTitle";
import CoKPI from "../../general/CoKPI";

import liverpoolVisaCard from "../../../assets/imgs/works/activa/liverpool-visa-card.webp";
import fundedDotGrid from "../../../assets/imgs/works/activa/funded-dot-grid.webp";
import banxicoLogo from "../../../assets/imgs/works/activa/banxico-logo.webp";

import resApprovalDelegation from "../../../assets/imgs/works/activa/icons/res-approval-delegation.svg";
import resVectorDinn from "../../../assets/imgs/works/activa/icons/res-vector-dinn.svg";

interface StatText {
	value: string;
	desc: string;
}

interface FutureStep {
	title: string[];
	tag: string;
	description: string;
}

interface FutureSteps {
	ownership: FutureStep;
	dinn: FutureStep;
}

const FUTURE_ICONS = [resApprovalDelegation, resVectorDinn];

const CoResultados = () => {
	const { t } = useTranslation();

	const signups = t("activa.resultados.signups", { returnObjects: true }) as StatText;
	const funded = t("activa.resultados.funded", { returnObjects: true }) as StatText;
	const biometricsTime = t("activa.resultados.biometricsTime", { returnObjects: true }) as StatText;
	const future = t("activa.resultados.future", { returnObjects: true }) as FutureSteps;

	const steps = [future.ownership, future.dinn];

	return (
		<div id={t("activa.anchors.resultados.id")} className="container-fluid grey">
			<CoTitle titles={t("activa.resultados.title")} />

			<div className="activa-resultados-stats">
				<CoKPI dato={signups.value} desc={signups.desc} imgs={[liverpoolVisaCard]} imgSize="6rem" pos="center" />
				<div className="card-kpi" style={{ alignItems: "center" }}>
					<div className="card-kpi__header" style={{ alignItems: "center", textAlign: "center" }}>
						<h5>{funded.value}</h5>
						<span className="desc">{funded.desc}</span>
					</div>
					<img className="activa-funded-grid" src={fundedDotGrid} alt="" />
				</div>
				<CoKPI dato={biometricsTime.value} desc={biometricsTime.desc} imgs={[banxicoLogo]} imgSize="4rem" pos="center" />
			</div>

			<span className="text-normal">{t("activa.resultados.futureIntro")}</span>
			<div className="activa-future-row">
				{steps.map((step, index) => (
					<div className="activa-future-card" key={index}>
						<img src={FUTURE_ICONS[index % FUTURE_ICONS.length]} alt="" />
						<h4>{step.title[0]}</h4>
						<h4>{step.title[1]}</h4>
						<span className="text-normal">{step.description}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default CoResultados;
