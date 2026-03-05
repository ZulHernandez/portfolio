import React, { useContext, useRef } from "react";
import PropTypes from "prop-types";
import { MyContext } from "../../context/MyContext.js";
import HTMLFlipBook from "react-pageflip";

import CoTitle from "../../../components/general/CoTitle.jsx";

import step1 from "../../../assets/imgs/works/hubbub/step1.svg";
import step1Mov from "../../../assets/imgs/works/hubbub/step1-mov.svg";
import noise from "../../../assets/imgs/works/hubbub/noise.svg";
import data from "../../../assets/imgs/works/hubbub/data.svg";
import sound from "../../../assets/imgs/works/hubbub/sound.svg";

import sign1 from "../../../assets/imgs/works/hubbub/simbolos/sign1.svg";
import sign2 from "../../../assets/imgs/works/hubbub/simbolos/sign2.svg";
import sign3 from "../../../assets/imgs/works/hubbub/simbolos/sign3.svg";
import sign4 from "../../../assets/imgs/works/hubbub/simbolos/sign4.svg";
import sign5 from "../../../assets/imgs/works/hubbub/simbolos/sign5.svg";

import vid from "../../../assets/imgs/works/hubbub/simbolos/vid.svg";
import art from "../../../assets/imgs/works/hubbub/simbolos/art.svg";
import web from "../../../assets/imgs/works/hubbub/simbolos/web.svg";
import mus from "../../../assets/imgs/works/hubbub/simbolos/mus.svg";
import mic from "../../../assets/imgs/works/hubbub/simbolos/mic.svg";
import pod from "../../../assets/imgs/works/hubbub/simbolos/pod.svg";

import con from "../../../assets/imgs/works/hubbub/simbolos/cons.svg";
import cau from "../../../assets/imgs/works/hubbub/simbolos/cau.svg";
import est from "../../../assets/imgs/works/hubbub/simbolos/est.svg";
import sol from "../../../assets/imgs/works/hubbub/simbolos/sol.svg";

const tesisImgs = Object.values(
	import.meta.glob("../../../assets/imgs/works/hubbub/tesis/*.webp", {
		eager: true,
	}),
);

// 1. Definimos el componente de la página con forwardRef
const CoPage = React.forwardRef((props, ref) => {
	return (
		<div
			className="page"
			ref={ref}
		>
			<img src={tesisImgs[props.number - 1].default} alt={`Page ${props.number}`} />
		</div>
	);
});

CoPage.displayName = "CoPage";

const CoMyBook = () => {
	/* const bookRef = useRef();

	// Función para pasar página por botón
	const nextButtonClick = () => {
		bookRef.current.pageFlip().flipNext();
	};

	const prevButtonClick = () => {
		bookRef.current.pageFlip().flipPrev();
	};
 */

	return (
		<HTMLFlipBook
			width={110} // Ancho de UNA página
			height={85} // Alto de la página (proporción habitual A4)
			minWidth={110*2}
			size="stretch" // Permite que el libro se adapte al contenedor
			drawShadow={false} // Sombra para dar efecto 3D
			flippingTime={500}
			usePortrait={true} // Orientación vertical
			autoSize={true} // Ajusta el tamaño automáticamente
			showCover={true} // Muestra la portada
			className="my-book"
		>
			{tesisImgs.map((img, index) => (
				<CoPage key={index} number={index + 1} />
			))}
		</HTMLFlipBook>
	);
};

const CoInvest = () => {
	const { language } = useContext(MyContext);

	const stepColumns = [
		{
			title: language === "ES" ? "Análisis" : "Analysis",
			text:
				language === "ES"
					? "Reconocimiento de la problemática , objetivos del equipo de Diseño acústico con su proyecto de HUBBUB y delimitación del marco teórico a presentar dentro del tema."
					: "Recognition of the problem, objectives of the Acoustic Design team with their HUBBUB project, and delimitation of the theoretical framework to be presented within the topic.",
		},
		{
			title: language === "ES" ? "Investigación" : "Research",
			text:
				language === "ES"
					? "Investigación sobre las necesidades del usuario, espacios de comunicación, benchmarks y guías de diseño del producto."
					: "Research on user needs, communication spaces, benchmarks, and product design guidelines.",
		},
		{
			title: language === "ES" ? "Conceptos" : "Concepts",
			text:
				language === "ES"
					? "Investigación sobre el fenómeno del ruido y visualización de datos así como el diseño centrado en el usuario abarcando conceptos, teoremas y filosofía."
					: "Research on the phenomenon of noise and data visualization, as well as user-centered design encompassing concepts, theorems, and philosophy.",
		},
	];

	const analisis = [
		{
			icon: noise,
			title: language === "ES" ? "Sobre el ruido" : "About noise",
			text:
				language === "ES"
					? "El ruido es un fenómeno altamente estudiado pero pocas veces difundido dentro de la cultura mexicana lo que ha provocado un desconocimiento de conceptos que permitiría acercar y orientar a las personas para el entendimiento del mismo"
					: "Noise is a highly studied phenomenon but rarely disseminated within Mexican culture, which has led to a lack of understanding of concepts that would help bring people closer and guide them to understand it.",
		},
		{
			icon: data,
			title: language === "ES" ? "Datos inocuos" : "Harmless data",
			text:
				language === "ES"
					? "Los datos inocuos son aquellos que no causan daño ni afectan negativamente a las personas o al medio ambiente. En el contexto de la movilidad, es fundamental identificar y utilizar datos inocuos para garantizar un diseño responsable y sostenible."
					: "Harmless data is data that does not cause harm or negatively affect people or the environment. In the context of mobility, it is essential to identify and use harmless data to ensure responsible and sustainable design.",
		},
		{
			icon: sound,
			title:
				language === "ES"
					? "Alcance con no profesionales"
					: "Reaching non-professionals",
			text:
				language === "ES"
					? "Sumado a lo comentado de los datos inocuos, no solo se delimita la necesidad de encontrar espacios de acceso publico a esta información, también es importante establecer un nivel apropiado de lenguaje para que cualquier interesado pueda hacer suyos estos conceptos e información."
					: "In addition to what was mentioned about harmless data, it is not only necessary to find public access spaces for this information, but it is also important to establish an appropriate level of language so that any interested party can make these concepts and information their own.",
		},
	];

	const areaData = [
		{
			title: language === "ES" ? "Rango de edad" : "Age range",
			data: [
				{
					name: language === "ES" ? "<15 años" : "<15 years",
					numero: 1,
					simbolo: sign1,
				},
				{
					name: language === "ES" ? "15-24 años" : "15-24 years",
					numero: 47,
					simbolo: sign2,
				},
				{
					name: language === "ES" ? "25-34 años" : "25-34 years",
					numero: 13,
					simbolo: sign3,
				},
				{
					name: language === "ES" ? "35-44 años" : "35-45 years",
					numero: 6,
					simbolo: sign4,
				},
				{
					name: language === "ES" ? "45+ años" : "45+ years",
					numero: 1,
					simbolo: sign5,
				},
			],
		},
		{
			title:
				language === "ES"
					? "¿Te interesa y crees importante conocer el fenómeno del ruido?"
					: "Are you interested in and do you think it is important to understand the phenomenon of noise?",
			data: [
				{
					name:
						language === "ES"
							? "Es importante y me es interesante"
							: "It is important and interesting to me",
					numero: 50,
					simbolo: sign1,
				},
				{
					name:
						language === "ES"
							? "Es importante pero no me interesa"
							: "It is important but not interesting to me",
					numero: 17,
					simbolo: sign3,
				},
				{
					name: language === "ES" ? "Me es indiferente" : "I am indifferent",
					numero: 1,
					simbolo: sign5,
				},
			],
		},
		{
			title:
				language === "ES"
					? "¿Has escuchado sobre el fenómeno del ruido?"
					: "Have you heard about the phenomenon of noise?",
			data: [
				{
					name:
						language === "ES" ? "Si lo he escuchado" : "Yes, I have heard it",
					numero: 37,
					simbolo: sign1,
				},
				{
					name:
						language === "ES"
							? "No, nunca lo he escuchado"
							: "No, I have never heard it",
					numero: 31,
					simbolo: sign3,
				},
			],
		},
	];

	const barraData = [
		{
			title:
				language === "ES"
					? "¿Cómo te gusta conocer nuevos temas?"
					: "How do you like to learn about new topics?",
			data: [
				{
					name: language === "ES" ? "Videos" : "Videos",
					numero: 94.7,
					simbolo: vid,
				},
				{
					name: language === "ES" ? "Artículos" : "Articles",
					numero: 70.5,
					simbolo: art,
				},
				{
					name: language === "ES" ? "Sitios web" : "Websites",
					numero: 67.6,
					simbolo: web,
				},
				{
					name: language === "ES" ? "Museos" : "Museums",
					numero: 66.8,
					simbolo: mus,
				},
				{
					name: language === "ES" ? "Conferencias" : "Conferences",
					numero: 45.2,
					simbolo: mic,
				},
				{
					name: language === "ES" ? "Podcasts" : "Podcasts",
					numero: 8.4,
					simbolo: pod,
				},
			],
		},
		{
			title:
				language === "ES"
					? "¿Qué te gustaría conocer?"
					: "What would you like to learn about?",
			data: [
				{
					name: language === "ES" ? "Consecuencias" : "Consequences",
					numero: 84.7,
					simbolo: con,
				},
				{
					name: language === "ES" ? "Causas" : "Causes",
					numero: 62.1,
					simbolo: cau,
				},
				{
					name: language === "ES" ? "Estadísticas" : "Statistics",
					numero: 46.6,
					simbolo: est,
				},
				{
					name: language === "ES" ? "Soluciones" : "Solutions",
					numero: 12.9,
					simbolo: sol,
				},
			],
		},
	];

	return (
		<div
			id={language === "ES" ? "investigacion" : "research"}
			className="container-fluid"
		>
			<CoTitle titles={language === "ES" ? "Investigación" : "Research"} />
			<span className="text-normal">
				{language === "ES"
					? "Dentro de la etapa de investigación se realizaron diferentes esfuerzo no solamente relacionados con la parte de interfaz y experiencia, también se tuvieron que realizar marcos teóricos y un profundo entendimiento de los conceptos que se verterían dentro del proyecto. Inclusive una etapa de definición de solución se dio dentro esto siendo, de forma muy sintetizada, una etapa compuesta por tres partes."
					: "Within the research stage, different efforts were made not only related to the interface and experience part, but also theoretical frameworks and a deep understanding of the concepts that would be poured into the project were required. Even a solution definition stage took place within this, being, in a very synthesized way, a stage composed of three parts."}
			</span>
			<center style={{ width: "100%"}}>
				<img className="step-image" loading="lazy" src={step1} alt="step 1" />
				<img className="step-image-mov" loading="lazy" src={step1Mov} alt="step 2" />
			</center>
			<div className="step-columns">
				{stepColumns.map((col, index) => (
					<div key={index} className="step-column three-columns">
						<h3 className="subtitle">{col.title}</h3>
						<br />
						<span className="text-normal">{col.text}</span>
					</div>
				))}
			</div>
			<div>
				<h3 className="subtitle">
					{language === "ES" ? "Apartado de análisis" : "Analysis section"}
				</h3>
				<br />
				<span className="text-normal">
					{language === "ES"
						? "Se realizaron dos ejercicios en paralelo para la obtención y primer acercamiento a hipótesis. El primero de estos fueron entrevistas al Laboratorio de Diseño acústico quienes ya tenían una serie de datos que apoyaban la construcción de una seríe de necesidades primarias para el proyecto la cuales se ven reflejadas en tres pilares que terminarían orientado las posteriores etapas de investigación."
						: "Two exercises were carried out in parallel to obtain and make a first approach to hypotheses. The first of these were interviews with the Acoustic Design Laboratory, which already had a series of data that supported the construction of a series of primary needs for the project, which are reflected in three pillars that would end up guiding the subsequent stages of research."}
				</span>
			</div>
			<div className="step-columns">
				{analisis.map((col, index) => (
					<div key={index} className="step-columns__item three-columns">
						<img loading="lazy" src={col.icon} alt={`Icon for ${col.title}`} />
						<h3 className="subtitle">{col.title}</h3>
						<span className="text-normal">{col.text}</span>
					</div>
				))}
			</div>
			<div>
				<h3 className="subtitle">
					{language === "ES" ? "Apartado de research" : "Research section"}
				</h3>
				<br />
				<span className="text-normal">
					{language === "ES"
						? "Identificadas las problemáticas, objetivos y alcance del proyecto entonces se procedió a delimitar una solución de diseño, esto bajo un enfoque de User Centred Design. por lo que se realizaron una serie de encuestas y acercamientos a interesados. Los resultado obtenidos se pueden vaciar en las siguientes gráficas."
						: "Once the problems, objectives, and scope of the project were identified, a design solution was then delineated, under a User Centered Design approach. A series of surveys and approaches to stakeholders were conducted. The results obtained can be reflected in the following graphs."}
				</span>
			</div>
			<div className="step-columns">
				{areaData.map((area, index) => (
					<div key={index} className="step-columns__item three-columns">
						<h3 className="subtitle">{area.title}</h3>
						<div className="step-columns__item-graph">
							{area.data.map((dataPoint, dataIdx) =>
								Array.from({ length: dataPoint.numero }, (_, idx) => (
									<img
										key={`${dataIdx}-${idx}`}
										src={dataPoint.simbolo}
										alt={dataPoint.name + " " + idx}
									/>
								)),
							)}
						</div>
						<br />
						<div
							className={
								area.data.length > 3
									? "step-columns__item-legend"
									: "step-columns__item-legendList"
							}
						>
							{area.data.map((dataPoint, dataIdx) => (
								<div key={dataIdx} className="legend-item">
									<img
										src={dataPoint.simbolo}
										alt={dataPoint.name + " legend"}
									/>
									<span className="text-normal">
										{dataPoint.name}
										{area.data.length > 3 ? <br /> : " "}
										{parseFloat((dataPoint.numero * 100) / 68).toFixed(1)}%
									</span>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
			<div className="step-columns">
				{barraData.map((barra, index) => (
					<div key={index} className="step-columns__item two-columns">
						<h3 className="subtitle">{barra.title}</h3>
						<div className="step-columns__item-barra">
							{barra.data.map((dataPoint, dataIdx) => (
								<div key={dataIdx} className="barra-data">
									<img src={dataPoint.simbolo} alt={dataPoint.name} />
									<div className="barra-data__bar">
										<div
											className="barra-data__bar-fill"
											style={{ width: `${dataPoint.numero}%` }}
										></div>
									</div>
								</div>
							))}
						</div>
						<br />
						<div
							className={
								barra.data.length > 3
									? "step-columns__item-legend"
									: "step-columns__item-legendList"
							}
						>
							{barra.data.map((dataPoint, dataIdx) => (
								<div key={dataIdx} className="legend-item">
									<img
										src={dataPoint.simbolo}
										alt={dataPoint.name + " legend"}
									/>
									<span className="text-normal">
										{dataPoint.name}
										{barra.data.length > 3 ? <br /> : " "}
										{dataPoint.numero}%
									</span>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
			<div>
				<span className="text-normal">
					{language === "ES"
						? "De todas estas encuestas se pudieron obtener las siguientes conclusiones:"
						: "From all these surveys, the following conclusions could be drawn:"}
				</span>
				<ul>
					<li className="text-normal">
						{language === "ES"
							? "La comunidad realmente encuentra importante e interesante hablar sobre un fenómeno como el ruido."
							: "The community really finds it important and interesting to talk about a phenomenon like noise."}
					</li>
					<li className="text-normal">
						{language === "ES"
							? "Prácticamente la mitad de los encuestados no conocen nada del fenómeno"
							: "Almost half of the respondents know nothing about the phenomenon."}
					</li>
					<li className="text-normal">
						{language === "ES"
							? "Los videos son el medio preferido para conocer nuevos temas, seguidos de artículos y sitios web."
							: "Videos are the preferred medium for learning about new topics, followed by articles and websites."}
					</li>
					<li className="text-normal">
						{language === "ES"
							? "Los tres principales medios bajo los cuales la gente gusta de informarse es por medio de videos, artículos y sitios web; es decir que los medios digitales son predilectos en general"
							: "The top three media through which people like to get informed are videos, articles, and websites; that is, digital media are generally preferred."}
					</li>
					<li className="text-normal">
						{language === "ES"
							? "Existe un interés mayor por aquellas consecuencias que trae el ruido seguido de aquello que lo provoca y después estadística o datos informativos del mismo"
							: "There is a greater interest in the consequences of noise, followed by its causes, and then statistics or informative data about it."}
					</li>
				</ul>
				<span className="text-normal">
					{language === "ES"
						? "Lo que ya ayuda a determinar como diseño de solución un sitio web que vacié la información de los artículos publicados por el laboratorio. Generar dos espacios dentro del sitio web, uno enfocado a contextos, marcos teóricos e incluso consecuencias y el segundo como un dashboard organizado de consulta sobre los reportes obtenidos a través de la aplicación."
						: "This already helps to determine a website as a solution design that pours the information from the articles published by the laboratory. Create two spaces within the website, one focused on contexts, theoretical frameworks, and even consequences, and the second as an organized consultation dashboard on the reports obtained through the application."}
				</span>
			</div>
			<div>
				<h3 className="subtitle">
					{language === "ES" ? "Apartado de conceptos" : "Concepts section"}
				</h3>
				<br />
				<span className="text-normal">
					{language === "ES"
						? "Como parte del entendimiento y apropiación de conceptos se generando toda una investigación misma que se abarcan en los capítulos 1, 2 y 3 de la tesina VER EL RUIDO “Un ejercicio de visualización de la información para el ruido de la Ciudad de México”"
						: "As part of the understanding and appropriation of concepts, an entire investigation was generated, which is covered in chapters 1, 2, and 3 of the thesis SEE THE NOISE “An exercise in information visualization for the noise of Mexico City”"}
				</span>
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					width: "100%",
					clipPath: "inset(0% round 1rem)",
					borderRadius: "1rem",
					boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
				}}>
				<CoMyBook />
			</div>
		</div>
	);
};

export default CoInvest;
