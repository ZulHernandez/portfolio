import { useTranslation } from "react-i18next";

import CoTitle from "../../general/CoTitle";
import CoKPI from "../../general/CoKPI";

import brandColab from "../../../assets/imgs/works/activa/brandColab.svg";
import arrow from "../../../assets/imgs/vectores/arrow_outward.svg";

interface StatText {
	value: string;
	desc: string;
}

interface FlowsToAdd extends StatText {
	items: string[];
}

interface ParticipationBullet {
	title: string;
	description: string;
}

const CoContexto = () => {
	const { t } = useTranslation();

	const years = t("activa.context.years", { returnObjects: true }) as StatText;
	const existingFlows = t("activa.context.existingFlows", {
		returnObjects: true,
	}) as StatText;
	const flowsToAdd = t("activa.context.flowsToAdd", {
		returnObjects: true,
	}) as FlowsToAdd;

	// `ref` apunta a los ids de sección definidos en activa.anchors (RoActiva.tsx),
	// en el mismo orden que los bullets de abajo.
	const bulletRefs = [
		`#${t("activa.anchors.flujos.id")}`,
		`#${t("activa.anchors.investigacion.id")}`,
		`#${t("activa.anchors.homologacion.id")}`,
	];
	const bullets = (
		t("activa.context.bullets", { returnObjects: true }) as ParticipationBullet[]
	).map((bullet, index) => ({ ...bullet, ref: bulletRefs[index] }));

	return (
		<div id={t("activa.anchors.context.id")} className="container-fluid grey">
			<CoTitle titles={t("activa.context.title")} />
			<span className="text-normal">{t("activa.context.intro")}</span>
			<div className="activa-context-row">
				<div className="card-kpi" style={{ alignItems: "center" }}>
					<img loading="lazy" id="brandColab" src={brandColab} alt="" />
					<span className="card-kpi__header">
						<br />
						<br />
						<center className="desc">{t("activa.context.collabLabel")}</center>
					</span>
				</div>
				<div className="activa-context-row__stack">
					<CoKPI
						title={undefined}
						dato={years.value}
						desc={years.desc}
						imgs={[]}
						pos="flex-start"
					/>
					<CoKPI
						title={undefined}
						dato={existingFlows.value}
						desc={existingFlows.desc}
						imgs={[]}
						pos="flex-start"
					/>
				</div>
				<CoKPI
					title={undefined}
					dato={flowsToAdd.value}
					desc={flowsToAdd.items.map((item, index) => (
						<li key={index}>
							<span>{item}</span>
						</li>
					))}
					imgs={[]}
					pos="flex-start"
				/>
			</div>
			<div className="activa-ejes">
				<span className="text-normal">{t("activa.context.ejesIntro")}</span>
				<br />
				<br />
				<br />
				{bullets.map((bullet, index) => (
					<div key={index} className="bullet-point">
						<a href={bullet.ref}>
							<div>
								<span className="bullet-point__title">{bullet.title}</span>
								<img
									loading="lazy"
									src={arrow}
									alt={t("activa.context.goToAlt", { title: bullet.title })}
								/>
							</div>
						</a>
						<br />
						<span className="text-normal">{bullet.description}</span>
						<br />
						<br />
					</div>
				))}
			</div>
		</div>
	);
};

export default CoContexto;
