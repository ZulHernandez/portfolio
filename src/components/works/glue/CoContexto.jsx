import { useContext } from "react";
import { MyContext } from "../../../components/context/MyContext.js";

import CoTitle from "../../../components/general/CoTitle.jsx";

import etapa1 from "../../../assets/imgs/works/glue/etapaUno.svg";
import etapa2 from "../../../assets/imgs/works/glue/etapaDos.svg";
import etapa3 from "../../../assets/imgs/works/glue/etapaTres.svg";
import etapa4 from "../../../assets/imgs/works/glue/etapaCuatro.svg";
import arrow from "../../../assets/imgs/vectores/arrow_outward.svg";

import PropTypes from "prop-types";

const CoTimeCard = ({ title, bullets, color, grey }) => {
	return (
		<div className="time-card">
			<h4 style={{ color: color, textAlign: "center" }} className="subtitle">{title}</h4>
			<div className="time-card-body" style={{ borderColor: color }}>
				{bullets.map((bullet, index) => (
					<div key={index} className="time-card-body__item">
						<img
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

CoTimeCard.propTypes = {
	title: PropTypes.string.isRequired,
	bullets: PropTypes.arrayOf(
		PropTypes.shape({
			icon: PropTypes.string.isRequired,
			step: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
		})
	).isRequired,
	color: PropTypes.string.isRequired,
	grey: PropTypes.string.isRequired,
};

const CoContexto = () => {
	const { language } = useContext(MyContext);

	const timeDatas = [
		{
			title: language === "ES" ? "Previas a mi entrada" : "Before my entry",
			bullets: [
				{
					icon: etapa1,
					step: language === "ES" ? "Etapa 1" : "Stage 1",
					title:
						language === "ES"
							? "Fundación y primeros pasos"
							: "Foundation and first steps",
					description:
						language === "ES"
							? "El proyecto nació como una librería distribuida a equipos mediante Sketch y documentada en Zeplin, diseñada por consultores UX en colaboración con Marketing."
							: "The project was born as a library distributed to teams via Sketch and documented in Zeplin, designed by UX consultants in collaboration with Marketing.",
				},
				{
					icon: etapa2,
					step: language === "ES" ? "Etapa 2" : "Stage 2",
					title:
						language === "ES"
							? "Diseño atómico y Ui Kits"
							: "Atomic design and UI Kits",
					description:
						language === "ES"
							? "Se adoptó Atomic Design para la creación de componentes, facilitando la integración de UI Kits y la estandarización de documentos de diseño. Como parte de esta evolución, la librería migró a Figma."
							: "Atomic Design was adopted for component creation, facilitating the integration of UI Kits and the standardization of design documents. As part of this evolution, the library migrated to Figma.",
				},
			],
			color: "#666666",
			grey: "100%",
		},
		{
			title:
				language === "ES"
					? "Aquí esta mi participación"
					: "Here is my participation",
			bullets: [
				{
					icon: etapa3,
					step: language === "ES" ? "Etapa 3" : "Stage 3",
					title:
						language === "ES"
							? "Documentación y comunicación"
							: "Documentation & communication",
					description:
						language === "ES"
							? "Comienza una documentación detallada de los componentes, mientras un equipo interno de UX asume el mantenimiento del sistema y se difunden los logros de GLUE."
							: "A detailed documentation of the components begins, while an internal UX team takes over the maintenance of the system and the achievements of GLUE are disseminated.",
				},
				{
					icon: etapa4,
					step:
						language === "ES" ? "Etapa 4 (Actualidad)" : "Stage 4 (Present)",
					title:
						language === "ES"
							? "Design Ops e ingeniería"
							: "Design Ops and engineering",
					description:
						language === "ES"
							? "Se implementa la tokenización del sistema, mejorando la comunicación con desarrollo y automatizando procesos de diseño para optimizar tareas y eficiencia."
							: "A token system was implemented to standardize design, facilitating component creation and task automation. Additionally, an auditing tool was developed to maintain system quality.",
				},
			],
			color: "#FF2079",
			grey: "0%",
		},
	];

	const bullets = [
		{
			title:
				language === "ES"
					? "1. Tecnologías adoptadas."
					: "1. Adoption of technologies.",
			description:
				language === "ES"
					? "Busco desarrollar e integrar herramientas tecnológicas en el entorno de trabajo, con el objetivo de optimizar los flujos de trabajo, proporcionar recursos de diseño innovadores para los UXers y modernizar la administración y los procesos de diseño."
					: "I seek to develop and integrate technological tools into the work environment, with the aim of optimizing workflows, providing innovative design resources for UXers, and modernizing management and design processes.",
			ref: language === "ES" ? "#tecnologias-adoptadas" : "#technologies-used",
		},
		{
			title:
				language === "ES"
					? "2. Mejora de insumos."
					: "2. Improvement of inputs.",
			description:
				language === "ES"
					? "A través de auditorías y la definición de estándares de calidad en los procesos de diseño, trabajo para fortalecer la gobernabilidad del sistema de diseño, facilitando su uso."
					: "Through audits and the definition of quality standards in design processes, I work to strengthen the governance of the design system, facilitating its use.",
			ref: language === "ES" ? "#mejora-de-insumos" : "#improvement-of-inputs",
		},
		{
			title:
				language === "ES"
					? "3. Automatización de procesos."
					: "3. Automation of processes.",
			description:
				language === "ES"
					? "Analizo y detecto procesos susceptibles de automatización con el fin de mejorar el rendimiento general y la eficiencia operativa."
					: "I analyze and detect processes that can be automated in order to improve overall performance and operational efficiency.",
			ref: language === "ES" ? "#automatizacion-de-procesos" : "#automation-of-processes",
		}
	];

	return (
		<div
			id={language === "ES" ? "contexto" : "context"}
			className="container-fluid grey"
		>
			<CoTitle titles={language === "ES" ? "El contexto" : "Context"} />
			<span className="text-normal">
				{language === "ES"
					? "Desde la creación del departamento de Experiencia e Interfaz de Usuario dentro de la Dirección de Producto Digital, se han llevado a cabo diversos esfuerzos para desarrollar y formalizar un sistema de diseño. Estos esfuerzos se han vuelto recurrentes y han experimentado múltiples cambios debido a los avances tecnológicos y al crecimiento dinámico del equipo. En este contexto de evolución y mejora continua, la historia de GLUE (Global Liverpool User Experience) puede dividirse en cuatro grandes etapas."
					: "Since the creation of the User Experience and Interface department within the Digital Product Management, various efforts have been made to develop and formalize a design system. These efforts have become recurrent and have undergone multiple changes due to technological advancements and the dynamic growth of the team. In this context of evolution and continuous improvement, the history of GLUE (Global Liverpool User Experience) can be divided into four major stages."}
			</span>
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
				<span className="text-normal">
					{language === "ES"
						? "Mi participación en GLUE se centra en cuatro áreas clave:"
						: "My participation in GLUE focuses on four key areas:"}
				</span>
				<br />
				<br />
				<br />
				{bullets.map((bullet, index) => (
					<div key={index} className="bullet-point">
						<a href={bullet.ref}>
							<div>
								<span className="bullet-point__title">{bullet.title}</span>
								<img
									src={arrow}
									alt={
										language === "ES"
											? `Ir a (${bullet.title})`
											: `Go to (${bullet.title})`
									}
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
