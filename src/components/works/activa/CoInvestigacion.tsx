import { useTranslation } from "react-i18next";

import CoTitle from "../../general/CoTitle";
import CoKPI from "../../general/CoKPI";

import invUndereye from "../../../assets/imgs/works/activa/icons/inv-undereye.svg";
import invViewInAr from "../../../assets/imgs/works/activa/icons/inv-view-in-ar.svg";
import invAutomation from "../../../assets/imgs/works/activa/icons/inv-automation.svg";
import invAddComment from "../../../assets/imgs/works/activa/icons/inv-add-comment.svg";

import invParticipantsDots from "../../../assets/imgs/works/activa/icons/inv-participants-dots.svg";
import invAvgPace from "../../../assets/imgs/works/activa/icons/inv-avg-pace.svg";
import invFindingsGrid from "../../../assets/imgs/works/activa/icons/inv-findings-grid.svg";

interface StatText {
	value: string;
	desc: string;
}

interface Phase {
	title: string;
	description: string;
}

const PHASE_ICONS = [invUndereye, invViewInAr, invAutomation, invAddComment];
// Colores reales de las tarjetas de fase (get_design_context, nodo 2969 —
// no son el degradado de $red-shade que se había usado originalmente).
const PHASE_COLORS = ["#ff2079", "#2088ff", "#ff7520", "#7e34fd"];

const CoInvestigacion = () => {
	const { t } = useTranslation();

	const phases = t("activa.investigacion.phases", { returnObjects: true }) as Phase[];
	const participants = t("activa.investigacion.participants", { returnObjects: true }) as StatText;
	const duration = t("activa.investigacion.duration", { returnObjects: true }) as StatText;
	const findings = t("activa.investigacion.findings", { returnObjects: true }) as StatText;

	return (
		<div id={t("activa.anchors.investigacion.id")} className="container-fluid">
			<hr
				style={{
					border: "0.2rem solid #ccc",
					margin: "1rem 0",
					width: "80%",
					borderRadius: "5rem",
				}}
			/>
			<CoTitle titles={t("activa.investigacion.title")} />
			<span className="text-normal">{t("activa.investigacion.intro")}</span>

			<div className="activa-phases-row">
				{phases.map((phase, index) => (
					<div
						className="activa-phase-card"
						key={index}
						style={{ backgroundColor: PHASE_COLORS[index % PHASE_COLORS.length] }}
					>
						<img src={PHASE_ICONS[index % PHASE_ICONS.length]} alt="" />
						<h5>{phase.title}</h5>
						<span className="text-normal">{phase.description}</span>
					</div>
				))}
			</div>

			<div className="activa-research-stats">
				<CoKPI dato={participants.value} desc={participants.desc} imgs={[invParticipantsDots]} imgSize="3.6rem" pos="center" />
				<CoKPI dato={duration.value} desc={duration.desc} imgs={[invAvgPace]} imgSize="3.6rem" pos="center" />
				<CoKPI dato={findings.value} desc={findings.desc} imgs={[invFindingsGrid]} imgSize="4.8rem" pos="center" />
			</div>

		</div>
	);
};

export default CoInvestigacion;
