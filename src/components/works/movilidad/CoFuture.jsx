import { useContext } from "react";
import { MyContext } from "../../../components/context/MyContext.js";

import CoTitle from "../../../components/general/CoTitle.jsx";

import PropTypes from "prop-types";

import future1 from "../../../assets/imgs/works/movilidad/future1.svg";
import future2 from "../../../assets/imgs/works/movilidad/future2.svg";
import future3 from "../../../assets/imgs/works/movilidad/future3.svg";

const CoCard = ({ icon, title, tag, description }) => {
	return (
		<div className="backlog__card">
			<div className="backlog__card-header">
				<img loading="lazy" src={icon} alt={title.join(" ")} />
				<div className="backlog__card-header-title">
					<span >{title[0]}</span>
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

CoCard.propTypes = {
	icon: PropTypes.string.isRequired,
	title: PropTypes.arrayOf(PropTypes.string).isRequired,
	tag: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};

const CoFuture = () => {
	const { language } = useContext(MyContext);

	const futureSteps = [
		{
			icon: future1,
			title: ["MONEDERO", "MOBILIDAD"],
			tag: language === "ES" ? "segunda fase" : "second phase",
			description:
				language === "ES"
					? "Implementación de recargas y venta de saldos físicos a forma de créditos para su uso dentro del aplicativo. Se comprendería como un nuevo método de pago."
					: "Implementation of recharges and sale of physical balances in the form of credits for use within the application. It would be understood as a new payment method.",
		},
		{
			icon: future2,
			title: ["TIEMPO", "REAL"],
			tag: language === "ES" ? "segunda fase" : "second phase",
			description:
				language === "ES"
					? "Integración de otras tecnologías de notificación como StandBy, notificación en WearOs y otros espacios"
					: "Integration of other notification technologies such as StandBy, WearOS notifications, and other spaces",
		},
		{
			icon: future3,
			title: ["PROGRAMA", "FIDELIZACIÓN"],
			tag: language === "ES" ? "tercera fase" : "third phase",
			description:
				language === "ES"
					? "Comprende cuponera, programa de recompensas, gamification y tratos especiales."
					: "Includes couponing, rewards program, gamification, and special deals.",
		},
	];

	return (
		<div
			id={language === "ES" ? "futuros-pasos" : "future-steps"}
			className="container-fluid grey"
		>
			<CoTitle titles={language === "ES" ? "Futuros pasos" : "Future steps"} />
			<span className="text-normal">
				{language === "ES"
					? "Se pretende que los siguientes pasos del producto caigan principalmente en tres mejoras puntuales con objetivos de negocio."
					: "The next steps for the product are primarily focused on three specific improvements with business objectives."}
			</span>
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
