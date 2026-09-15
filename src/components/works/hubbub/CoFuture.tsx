import { useTranslation } from "react-i18next";

import CoTitle from "../../../components/general/CoTitle";

import coloquio from "../../../assets/imgs/works/hubbub/coloquio.svg";
import location from "../../../assets/imgs/works/hubbub/location.svg";
import articles from "../../../assets/imgs/works/hubbub/articles.svg";

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

interface FutureSteps {
	coloquio: FutureStepText;
	implementation: FutureStepText;
	articles: FutureStepText;
}

const CoFuture = () => {
	const { t } = useTranslation();

	const steps = t("hubbub.future.steps", { returnObjects: true }) as FutureSteps;
	const futureSteps = [
		{ icon: coloquio, ...steps.coloquio },
		{ icon: location, ...steps.implementation },
		{ icon: articles, ...steps.articles },
	];

	return (
		<div id={t("hubbub.anchors.future.id")} className="container-fluid grey">
			<CoTitle titles={t("hubbub.future.title")} />
			<span className="text-normal">{t("hubbub.future.intro")}</span>
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
		</div>
	);
};

export default CoFuture;
