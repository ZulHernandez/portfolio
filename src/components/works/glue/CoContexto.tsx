import { useTranslation } from "react-i18next";

import CoTitle from "../../../components/general/CoTitle";

import etapa1 from "../../../assets/imgs/works/glue/etapaUno.svg";
import etapa2 from "../../../assets/imgs/works/glue/etapaDos.svg";
import etapa3 from "../../../assets/imgs/works/glue/etapaTres.svg";
import etapa4 from "../../../assets/imgs/works/glue/etapaCuatro.svg";
import arrow from "../../../assets/imgs/vectores/arrow_outward.svg";

interface TimeBullet {
	icon: string;
	step: string;
	title: string;
	description: string;
}

interface CoTimeCardProps {
	title: string;
	bullets: TimeBullet[];
	color: string;
	grey: string;
}

const CoTimeCard = ({ title, bullets, color, grey }: CoTimeCardProps) => {
	return (
		<div className="time-card">
			<h4 style={{ color: color, textAlign: "center" }} className="subtitle">{title}</h4>
			<div className="time-card-body" style={{ borderColor: color }}>
				{bullets.map((bullet, index) => (
					<div key={index} className="time-card-body__item">
						<img
							loading="lazy"
							src={bullet.icon}
							alt={`Icono de ${bullet.step}`}
							style={{ filter: `grayscale(${grey})` }}
						/>
						<div className="time-card-body__item-head">
							<h5>{bullet.step}</h5>
							<h6>{bullet.title}</h6>
						</div>
						<span className="text-normal">{bullet.description}</span>
					</div>
				))}
			</div>
		</div>
	);
};

interface ParticipationBullet {
	title: string;
	description: string;
}

const CoContexto = () => {
	const { t } = useTranslation();

	const timeDatas = [
		{
			title: t("glue.context.before.groupTitle"),
			bullets: [
				{
					icon: etapa1,
					step: t("glue.context.before.stage1.step"),
					title: t("glue.context.before.stage1.title"),
					description: t("glue.context.before.stage1.description"),
				},
				{
					icon: etapa2,
					step: t("glue.context.before.stage2.step"),
					title: t("glue.context.before.stage2.title"),
					description: t("glue.context.before.stage2.description"),
				},
			],
			color: "#666666",
			grey: "100%",
		},
		{
			title: t("glue.context.myPart.groupTitle"),
			bullets: [
				{
					icon: etapa3,
					step: t("glue.context.myPart.stage3.step"),
					title: t("glue.context.myPart.stage3.title"),
					description: t("glue.context.myPart.stage3.description"),
				},
				{
					icon: etapa4,
					step: t("glue.context.myPart.stage4.step"),
					title: t("glue.context.myPart.stage4.title"),
					description: t("glue.context.myPart.stage4.description"),
				},
			],
			color: "#FF2079",
			grey: "0%",
		},
	];

	// `ref` apunta a los ids de sección definidos en glue.anchors (RoGLUE.jsx),
	// en el mismo orden que los bullets de abajo.
	const bulletRefs = [
		`#${t("glue.anchors.tech.id")}`,
		`#${t("glue.anchors.insumos.id")}`,
		`#${t("glue.anchors.automa.id")}`,
	];
	const bullets = (t("glue.context.bullets", { returnObjects: true }) as ParticipationBullet[]).map(
		(bullet, index) => ({ ...bullet, ref: bulletRefs[index] })
	);

	return (
		<div id={t("glue.anchors.context.id")} className="container-fluid grey">
			<CoTitle titles={t("glue.context.heading")} />
			<span className="text-normal">{t("glue.context.intro")}</span>
			<div className="time-list">
				{timeDatas.map((timeData, index) => (
					<CoTimeCard
						key={index}
						title={timeData.title}
						bullets={timeData.bullets}
						color={timeData.color}
						grey={timeData.grey}
					/>
				))}
			</div>
			<div>
				<span className="text-normal">{t("glue.context.participationIntro")}</span>
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
									alt={t("glue.context.goToAlt", { title: bullet.title })}
								/>
							</div>
						</a>
						<br />
						<span className="text-normal">{bullet.description}</span>
						<br /><br />
					</div>
				))}
			</div>
		</div>
	);
};

export default CoContexto;
