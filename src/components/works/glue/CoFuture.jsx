import { useContext } from "react";
import { MyContext } from "../../../components/context/MyContext.js";

import CoTitle from "../../../components/general/CoTitle.jsx";

import superapp from "../../../assets/imgs/works/glue/superapp.svg";
import bolito from "../../../assets/imgs/works/glue/bolito.svg";
import audit from "../../../assets/imgs/works/glue/audit.svg";
import ecomerce from "../../../assets/imgs/works/glue/ecomerce.svg";
import EShandOff from "../../../assets/imgs/works/glue/ES-hand-off.svg";
import ENhandOff from "../../../assets/imgs/works/glue/EN-hand-off.svg";

import PropTypes from "prop-types";

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
			icon: superapp,
			title: ["SUPER", "APP"],
			tag: language === "ES" ? "nuevo" : "new",
			description:
				language === "ES"
					? "App pensada para la agrupación completa de todos los sub-plugins involucrados en el proceso de diseño"
					: "App designed for the complete grouping of all sub-plugins involved in the design process",
		},
		{
			icon: bolito,
			title: ["BOLITO", "WRITTER"],
			tag: language === "ES" ? "nuevo" : "new",
			description:
				language === "ES"
					? "Implementación de un LLM (Llama) como asistente de copy writting, voz y tono, redacción y más"
					: "Implementation of a LLM (Llama) as a copywriting, voice and tone, writing assistant and more",
		},
		{
			icon: audit,
			title: ["AUDIT", "ASISTAND"],
			tag: language === "ES" ? "nuevo" : "new",
			description:
				language === "ES"
					? "Asistente de auditorias automático para componentes, tokens e instancias"
					: "Automatic audit assistant for components, tokens and instances",
		},
		{
			icon: ecomerce,
			title: ["E-COMMERCE", "FILLER"],
			tag: language === "ES" ? "mejora" : "improvement",
			description:
				language === "ES"
					? "Mejora del PDP filler integrando PDP y otros espacios del e-commerce"
					: "Improvement of the PDP filler by integrating PDP and other spaces of the e-commerce",
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
					? "Desde la creación del departamento de Experiencia e Interfaz de Usuario dentro de la Dirección de Producto Digital, se han llevado a cabo diversos esfuerzos para desarrollar y formalizar un sistema de diseño. Estos esfuerzos se han vuelto recurrentes y han experimentado múltiples cambios debido a los avances tecnológicos y al crecimiento dinámico del equipo. En este contexto de evolución y mejora continua, la historia de GLUE (Global Liverpool User Experience) puede dividirse en cuatro grandes etapas."
					: "Since the creation of the User Experience and Interface department within the Digital Product Management, various efforts have been made to develop and formalize a design system. These efforts have become recurrent and have undergone multiple changes due to technological advancements and the dynamic growth of the team. In this context of evolution and continuous improvement, the history of GLUE (Global Liverpool User Experience) can be divided into four major stages."}
			</span>
			<div className="bullet">
				<span className="subtitle">
					{language === "ES" ? "· Herramientas de diseño" : "· Design tools"}
				</span>
				<div className="bullet__body">
					<span className="text-normal">
						{language === "ES"
							? "Se tiene en puerta la creación de al menos 4 plugins más que atenderán otras necesidades del proceso de diseño. También se plantea mejorara los que ya se tienen. De estas herramientas ya en desarrollo se tienen las siguientes."
							: "At least 4 more plugins are planned to address other needs in the design process. There are also plans to improve the existing ones. The following tools are already in development."}
					</span>
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
				<span className="subtitle">
					{language === "ES" ? "· Procesos de hand-off" : "· Handoff processes"}
				</span>
				<div className="bullet__body">
					<span className="text-normal">
						{language === "ES"
							? "De cara a procesos de entrega y distribución de frameworks de diseño más la integración de otros equipos de diseño como marketing, branding y otros se ha optado por la investigación de métodos de tokenización y distribucion de bibliotecas de diferentes formas a los equipos."
							: "In order to improve handoff and distribution processes of design frameworks, as well as the integration of other design teams such as marketing, branding, and others, research has been conducted on methods for tokenization and distribution of libraries in various ways to the teams."}
					</span>
				</div>
				<center>
					<img loading="lazy" className="schema-hand-off" src={language === "ES" ? EShandOff : ENhandOff} alt="" />
				</center>
			</div>
		</div>
	);
};

export default CoFuture;
