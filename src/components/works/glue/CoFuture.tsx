import { useTranslation } from "react-i18next";

import CoTitle from "../../../components/general/CoTitle";

import superapp from "../../../assets/imgs/works/glue/superapp.svg";
import bolito from "../../../assets/imgs/works/glue/bolito.svg";
import audit from "../../../assets/imgs/works/glue/audit.svg";
import ecomerce from "../../../assets/imgs/works/glue/ecomerce.svg";
import EShandOff from "../../../assets/imgs/works/glue/ES-hand-off.svg";
import ENhandOff from "../../../assets/imgs/works/glue/EN-hand-off.svg";

interface CoCardProps {
	icon: string;
	title: string[];
	tag: string;
	description: string;
}

const CoCard = ({ icon, title, tag, description }: CoCardProps) => {
	return (
		<div className="backlog__card">
			<div className="backlog__card-header">
				<img loading="lazy" src={icon} alt={title.join(" ")} />
				<div className="backlog__card-header-title">
					<span>{title[0]}</span>
					<span>{title[1]}</span>
				</div>
				<div className="backlog__card-header-tag">
					<span>{tag}</span>
				</div>
			</div>
			<hr
				style={{
					width: "100%",
					borderColor: "#cccccc",
					backgroundColor: "#cccccc",
					borderWidth: "0.15rem",
					borderStyle: "solid",
					borderRadius: "0.5rem",
				}}
			/>
			<span className="text-normal">{description}</span>
		</div>
	);
};

interface FutureStepText {
	title: string[];
	tag: string;
	description: string;
}

const CoFuture = () => {
	const { t, i18n } = useTranslation();

	const futureSteps = [
		{ icon: superapp, ...(t("glue.future.steps.superapp", { returnObjects: true }) as FutureStepText) },
		{ icon: bolito, ...(t("glue.future.steps.bolito", { returnObjects: true }) as FutureStepText) },
		{ icon: audit, ...(t("glue.future.steps.audit", { returnObjects: true }) as FutureStepText) },
		{ icon: ecomerce, ...(t("glue.future.steps.ecommerce", { returnObjects: true }) as FutureStepText) },
	];

	return (
		<div id={t("glue.anchors.future.id")} className="container-fluid grey">
			<CoTitle titles={t("glue.future.title")} />
			<span className="text-normal">{t("glue.future.intro")}</span>
			<div className="bullet">
				<span className="subtitle">{t("glue.future.toolsLabel")}</span>
				<div className="bullet__body">
					<span className="text-normal">{t("glue.future.toolsIntro")}</span>
				</div>
			</div>
			<div className="backlog">
				{futureSteps.map((step, index) => (
					<CoCard
						key={index}
						icon={step.icon}
						title={step.title}
						tag={step.tag}
						description={step.description}
					/>
				))}
			</div>
			<div className="bullet">
				<span className="subtitle">{t("glue.future.handoffLabel")}</span>
				<div className="bullet__body">
					<span className="text-normal">{t("glue.future.handoffIntro")}</span>
				</div>
				<center>
					<img
						loading="lazy"
						className="schema-hand-off"
						src={i18n.language === "es" ? EShandOff : ENhandOff}
						alt=""
					/>
				</center>
			</div>
		</div>
	);
};

export default CoFuture;
