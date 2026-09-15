import { useTranslation } from "react-i18next";

import CoTitle from "../../../components/general/CoTitle";

import future1 from "../../../assets/imgs/works/movilidad/future1.svg";
import future2 from "../../../assets/imgs/works/movilidad/future2.svg";
import future3 from "../../../assets/imgs/works/movilidad/future3.svg";

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
	tag: string;
	description: string;
}

interface FutureSteps {
	wallet: FutureStepText;
	realtime: FutureStepText;
	loyalty: FutureStepText;
}

const CoFuture = () => {
	const { t } = useTranslation();

	const steps = t("movilidad.future.steps", { returnObjects: true }) as FutureSteps;
	// Los títulos son nombres de feature en mayúsculas, iguales en ambos
	// idiomas (antes "MOBILIDAD" tenía una errata, corregida a "MOVILIDAD").
	const futureSteps = [
		{ icon: future1, title: ["MONEDERO", "MOVILIDAD"], ...steps.wallet },
		{ icon: future2, title: ["TIEMPO", "REAL"], ...steps.realtime },
		{ icon: future3, title: ["PROGRAMA", "FIDELIZACIÓN"], ...steps.loyalty },
	];

	return (
		<div id={t("movilidad.anchors.future.id")} className="container-fluid grey">
			<CoTitle titles={t("movilidad.future.title")} />
			<span className="text-normal">{t("movilidad.future.intro")}</span>
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
