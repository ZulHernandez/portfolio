import { useContext } from "react";
import { MyContext } from "../../../components/context/MyContext.js";

import CoTitle from "../../../components/general/CoTitle.jsx";

import coloquio from "../../../assets/imgs/works/hubbub/coloquio.svg";
import location from "../../../assets/imgs/works/hubbub/location.svg";
import articles from "../../../assets/imgs/works/hubbub/articles.svg";

import PropTypes from "prop-types";

const CoCard = ({ icon, title, tag, description }) => {
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
			icon: coloquio,
			title: [
				language === "ES" ? "Coloquio" : "International",
				language === "ES" ? "Internacional" : "Coloquium",
			],
			tag: language === "ES" ? "1er y 2da edición" : "1st and 2nd edition",
			description:
				language === "ES"
					? "Siendo expositor en las dos últimas ediciones del “Coloquio internacional de paisaje sonoro” organizadas por instituciones como la Universidad Autónoma Metropolitana, la Benemérita Universidad Autónoma de Puebla y otras universidades públicas."
					: "Being a speaker at the last two editions of the “International Colloquium on Soundscape” organized by institutions such as the Universidad Autónoma Metropolitana, the Benemérita Universidad Autónoma de Puebla, and other public universities.",
		},
		{
			icon: location,
			title: [
				language === "ES" ? "Implementación" : "Implementation",
				language === "ES" ? "en otras localidades" : "in other locations",
			],
			tag: language === "ES" ? "amplificación" : "amplification",
			description:
				language === "ES"
					? "Gracias a la exposición que ha tenido el  proyecto dentro de eventos, coloquios y espacios internacionales este proyecto se esta planeando replicar en otros estados de la república y en otros países iberoamericanos"
					: "Thanks to the exposure that the project has had within international events, colloquiums and spaces, this project is being planned to be replicated in other states of the republic and in other Ibero-American countries",
		},
		{
			icon: articles,
			title: [
				language === "ES" ? "Artículos" : "Articles",
				language === "ES" ? "y patentes" : "and patents",
			],
			tag: language === "ES" ? "en proceso" : "in process",
			description:
				language === "ES"
					? "La Universidad Autónoma Metropolitana en conjunto con diferentes instituciones gubernamentales y prensa científica buscan la aprobación de artículos relacionados a la investigación más el registro del sitio y metodología de obtención de datos como patente"
					: "The Universidad Autónoma Metropolitana, in conjunction with various governmental institutions and scientific press, is seeking the approval of articles related to the research as well as the registration of the site and data collection methodology as a patent",
		},
	];

	return (
		<div
			id={language === "ES" ? "futuros-pasos" : "future-steps"}
			className="container-fluid grey"
		>
			<CoTitle
				titles={
					language === "ES"
						? "Otros medios y futuros pasos"
						: "Other media and future steps"
				}
			/>
			<span className="text-normal">
				{language === "ES"
					? "Más allá de la salida a productivo el proyecto, al representar una investigación científica universitaria, ha permeado otros canales desde los cuales se plantea dar seguimiento o se pretende desarrollar aún más el alcance del mismo. de esto se han dado ya algunos eventos y otros se encuentran en camino."
					: "Beyond the production release of the project, as it represents a university scientific research, it has permeated other channels from which it is planned to follow up or further develop its scope. Some events have already taken place and others are on the way."}
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
