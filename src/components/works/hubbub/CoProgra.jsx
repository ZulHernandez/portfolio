import { useContext } from "react";
import { MyContext } from "../../context/MyContext.js";

import CoTitle from "../../general/CoTitle.jsx";
import CoKPI from "../../general/CoKPI.jsx";

import step3 from "../../../assets/imgs/works/hubbub/step3.svg";
import step3Mov from "../../../assets/imgs/works/hubbub/step3-mov.svg";

import planEs from "../../../assets/imgs/works/hubbub/planProgaming-es.svg";
import planEn from "../../../assets/imgs/works/hubbub/planProgaming-en.svg";
import techEs from "../../../assets/imgs/works/hubbub/tech-es.svg";
import techEn from "../../../assets/imgs/works/hubbub/tech-en.svg";

import hubbubLogo from "../../../assets/imgs/works/hubbub/hubbubLogo.svg";
import phpLogo from "../../../assets/imgs/works/hubbub/phpLogo.svg";
import reactLogo from "../../../assets/imgs/works/hubbub/reactLogo.svg";

import g1 from "../../../assets/imgs/works/hubbub/gifs/g1.gif";
import g2 from "../../../assets/imgs/works/hubbub/gifs/g2.gif";
import g3 from "../../../assets/imgs/works/hubbub/gifs/g3.gif";
import g4 from "../../../assets/imgs/works/hubbub/gifs/g4.gif";
import g5 from "../../../assets/imgs/works/hubbub/gifs/g5.gif";
import g6 from "../../../assets/imgs/works/hubbub/gifs/g6.gif";
import g7 from "../../../assets/imgs/works/hubbub/gifs/g7.gif";
import g8 from "../../../assets/imgs/works/hubbub/gifs/g8.gif";
import g9 from "../../../assets/imgs/works/hubbub/gifs/g9.gif";

const CoProgra = () => {
	const { language } = useContext(MyContext);

	const stepColumns = [
		{
			title: language === "ES" ? "Planeación" : "Planning",
			text:
				language === "ES"
					? "Definición de módulos a programar, planificación de tiempo en sprints y selección de tecnologías."
					: "Definition of modules to program, time planning in sprints, and technology selection.",
		},
		{
			title: language === "ES" ? "Codificación" : "Coding",
			text:
				language === "ES"
					? "Programación de funcionalidades, creación de componentes y conexión a base de datos."
					: "Programming of functionalities, creation of components, and database connection.",
		},
		{
			title: language === "ES" ? "Implementación*" : "Implementation*",
			text:
				language === "ES"
					? "Ejecución, QA y evaluación del sistema. Salida a productivo dentro de servidores de la universidad."
					: "Execution, QA, and system evaluation. Deployment to production within university servers.",
		},
	];

	const planLegend = [
		{
			title: language === "ES" ? "Funciones generales" : "General Functions",
			bullets: [
				language === "ES" ? "Navegador Izquierdo" : "Left Navigator",
				language === "ES" ? "Navegador Derecho" : "Right Navigator",
				"Footer",
				language === "ES" ? "Nosotros (Swal)" : "About Us (Swal)",
				language === "ES" ? "Legales" : "Legal",
				language === "ES"
					? "Acciones de accesibilidad"
					: "Accessibility Actions",
				"Hero image",
			],
			color: "#FF2079",
		},
		{
			title:
				language === "ES"
					? "El ruido (página del sitio)"
					: "The Noise (Site Page)",
			bullets: [
				language === "ES" ? "El oído" : "The Ear",
				language === "ES" ? "Clasificación del ruido" : "Noise Classification",
				language === "ES" ? "Legislación del ruido" : "Noise Legislation",
				language === "ES" ? "Componentes del ruido" : "Noise Components",
				language === "ES" ? "Efectos de la salud" : "Health Effects",
				language === "ES" ? "Cómo se mide el ruido" : "How Noise is Measured",
				language === "ES" ? "Áreas de estudio" : "Study Areas",
				language === "ES" ? "Artículos HUBBUB" : "HUBBUB Articles",
				language === "ES" ? "Referencias" : "References",
			],
			color: "#2088FF",
		},
		{
			title:
				language === "ES"
					? "Ver el ruido (página del sitio)"
					: "View the Noise (Site Page)",
			bullets: [
				language === "ES" ? "Introducción" : "Introduction",
				language === "ES" ? "Participación" : "Participation",
				language === "ES" ? "Presión sonora" : "Sound Pressure",
				language === "ES" ? "Variables" : "Variables",
				language === "ES" ? "Fuentes emisoras" : "Emitting Sources",
				language === "ES" ? "Alcaldías" : "Municipalities",
				language === "ES" ? "Mapa de ruido" : "Noise Map",
			],
			color: "#FF7520",
		},
	];

	const planKPI = [
		{
			title: "461 hrs",
			dato:
				language === "ES"
					? "93 hrs de diseño + 368 de codificación"
					: "93 hrs of design + 368 hrs of coding",
		},
		{
			title: language === "ES" ? "3 módulos" : "3 Modules",
			dato:
				language === "ES"
					? "Reparten navegación y las dos páginas"
					: "They share navigation and the two pages",
		},
		{
			title: language === "ES" ? "18 semanas" : "18 Weeks",
			dato:
				language === "ES"
					? "aproximadamente 4 meses y medio de desarrollo"
					: "approximately 4 and a half months of development",
		},
	];

	return (
		<div
			id={language === "ES" ? "programacion" : "programming"}
			className="container-fluid"
		>
			<CoTitle titles={language === "ES" ? "Programación" : "Programming"} />
			<span className="text-normal">
				{language === "ES"
					? "La etapa de programación comprende todo el proceso de codificación y planificación de esfuerzos."
					: "The programming stage encompasses the entire process of coding and effort planning."}
			</span>
			<center style={{ width: "100%" }}>
				<img className="step-image" loading="lazy" src={step3} alt="step 3" />
				<img
					className="step-image-mov"
					loading="lazy"
					src={step3Mov}
					alt="step 3 mov"
				/>
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
			<span className="text-normal">
				{language === "ES"
					? "* Esta última etapa no se ha llevado acabo pues se continua con esperas del lado de negocio"
					: "* This last stage has not been carried out as it continues with waits on the business side."}
			</span>
			<div style={{ width: "100%" }}>
				<h3 className="subtitle">
					{language === "ES" ? "Apartado de planeación" : "Planning Section"}
				</h3>
				<br />
				<span className="text-normal">
					{language === "ES"
						? "Partiendo de lo vaciado dentro de las Historias de Usuario se pudieron identificar sin problemas cuales eran los módulos a trabajar y así se pudieron distribuir esfuerzo a lo largo de sprints de dos semana con juntas semanales para revisiones  y entregas oficiales. se distribuyo todo de la siguiente forma."
						: "Based on the information gathered in the User Stories, it was possible to identify without problems which modules to work on and thus distribute effort over two-week sprints with weekly meetings for reviews and official deliveries. Everything was distributed as follows."}
				</span>
			</div>
			<center style={{ width: "100%" }}>
				<img
					style={{ width: "80%" }}
					loading="lazy"
					src={language === "ES" ? planEs : planEn}
					alt={language === "ES" ? "Planeación" : "Planning"}
				/>
			</center>
			<div className="step-columns">
				{planLegend.map((col, index) => (
					<div key={index} className="step-column three-columns">
						<h3 className="text-normal" style={{ color: col.color }}>
							{col.title}
						</h3>
						<br />
						{col.bullets.map((bullet, idx) => (
							<p key={idx} className="text-normal">
								• {bullet}
							</p>
						))}
					</div>
				))}
			</div>
			<div className="step-columns">
				{planKPI.map((kpi, index) => (
					<div key={index} className="step-column three-columns">
						<CoKPI
							dato={kpi.title}
							desc={kpi.dato}
							imgs={[]}
							imgSize="0"
							pos="center"
							color="#000"
						/>
					</div>
				))}
			</div>
			<span className="text-normal">
				{language === "ES"
					? "Además de la definición de de tiempos y administración del proyecto, también se definieron las tecnologías que se involucrarían tanto en el desarrollo como en los repositorios y comunicación del equipo, en este sentido se retoman espacios  que se fueron creando naturalmente en espacio etapas anteriores y también se adjuntan la información tecnica"
					: "In addition to defining project timelines and management, the technologies involved in both development and team communication were also defined. In this regard, spaces that were naturally created in previous stages are revisited, and technical information is also attached."}
			</span>
			<center style={{ width: "100%" }}>
				<img
					style={{ width: "50%" }}
					loading="lazy"
					src={language === "ES" ? techEs : techEn}
					alt={language === "ES" ? "Tecnologías" : "Technologies"}
				/>
			</center>
			<div style={{ width: "100%" }}>
				<h3 className="subtitle">
					{language === "ES" ? "Apartado de codificación" : "Coding Section"}
				</h3>
				<br />
				<span className="text-normal">
					{language === "ES"
						? "En un primer acercamiento al proyecto, se había realizado utilizando PHP como base, y allí se trabajaron por primera vez todos los visualizadores gráficos sinembargo, y pensando en la escalabilidad y modularidad del proyecto, se decidió crear una versión basada en React.js que funcionaría mucho mejor para su despliegue en web, estas dos etapas del proyecto se realizaron en diferentes momentos del tiempo y es con lo que se ha estad trabajando últimamente. Aqui se tienes algunas características de estas dos versiones"
						: "In a first approach to the project, it was carried out using PHP as a base, and there all the graphical viewers were worked on for the first time. However, thinking about the scalability and modularity of the project, it was decided to create a version based on React.js that would work much better for its deployment on the web. These two stages of the project were carried out at different times, and this is what has been worked on lately. Here are some features of these two versions."}
				</span>
			</div>
			<div className="tokens-list">
				<div className="tokens-list__card">
					<div className="tokens-list__card-header">
						<div className="tokens-list__card-header-title">
							<img loading="lazy" src={hubbubLogo} alt="hubbub" />
							<span className="text-normal">+</span>
							<img loading="lazy" src={phpLogo} alt="PHP" />
						</div>
						<span>
							{language === "ES"
								? "jun 2022 - sep 2023"
								: "jun 2022 - sep 2023"}
						</span>
					</div>
					<span className="text-normal">
						{language === "ES"
							? "Primer versión realizada para correr en PHP, sirvió como base para el rediseño en React.js"
							: "First version built to run on PHP, it served as a basis for the redesign in React.js"}
					</span>
					<CoKPI
						title=""
						dato={language === "ES" ? "3 tecnologías" : "3 technologies"}
						desc={
							language === "ES"
								? "Destaca: JavaScript, PHP, SCSS"
								: "Highlights: JavaScript, PHP, SCSS"
						}
						imgs={[]}
						imgSize="0"
						pos="center"
						color="#000"
					/>
					<div className="tech-chart">
						<div className="tech-chart-element" style={{ width: "44.7%" }}>
							<div id="js" />
							<span>
								JavaScript <br /> 44.7%
							</span>
						</div>
						<div className="tech-chart-element" style={{ width: "41.5%" }}>
							<div id="php" />
							<span>
								PHP <br /> 41.5%
							</span>
						</div>
						<div className="tech-chart-element" style={{ width: "13.8%" }}>
							<div id="scss" />
							<span>
								SCSS <br /> 13.8%
							</span>
						</div>
					</div>
					<CoKPI
						title=""
						dato={language === "ES" ? "2 ramas" : "2 branches"}
						desc={
							language === "ES"
								? "La principal y una versión responsiva para mobiles"
								: "The main one and another for a resposive mobile version"
						}
						imgs={[]}
						imgSize="0"
						pos="center"
						color="#000"
					/>
				</div>
				<div className="tokens-list__card">
					<div className="tokens-list__card-header">
						<div className="tokens-list__card-header-title">
							<img loading="lazy" src={hubbubLogo} alt="hubbub" />
							<span className="text-normal">+</span>
							<img loading="lazy" src={reactLogo} alt="PHP" />
						</div>
						<span>
							{language === "ES"
								? "sep 2024 - actualidad"
								: "sep 2024 - present"}
						</span>
					</div>
					<span className="text-normal">
						{language === "ES"
							? "Segunda versión del sitio con mejoras en componentes e integración completa con React.js"
							: "Second version of the site with improvements in components and full integration with React.js"}
					</span>
					<CoKPI
						title=""
						dato={language === "ES" ? "3 tecnologías" : "3 technologies"}
						desc={
							language === "ES"
								? "Destaca: JavaScript, HTML, SCSS"
								: "Highlights: JavaScript, HTML, SCSS"
						}
						imgs={[]}
						imgSize="0"
						pos="center"
						color="#000"
					/>
					<div className="tech-chart">
						<div className="tech-chart-element" style={{ width: "88.2%" }}>
							<div id="js" />
							<span>
								JavaScript <br /> 88.2%
							</span>
						</div>
						<div className="tech-chart-element" style={{ width: "0.4%" }}>
							<div id="html" />
						</div>
						<div className="tech-chart-element" style={{ width: "11.4%" }}>
							<div id="scss" />
							<span>
								SCSS <br /> 11.4%
							</span>
						</div>
					</div>
					<CoKPI
						title=""
						dato={language === "ES" ? "2 ramas" : "2 branches"}
						desc={
							language === "ES"
								? "La principal y una versión dedicada a la implementación de iframes"
								: "The main one and another dedicated to the implementation of iframes"
						}
						imgs={[]}
						imgSize="0"
						pos="center"
						color="#000"
					/>
				</div>
			</div>
			<span className="text-normal">
				{language === "ES"
					? "Muchos de visualizadores gráficos se prestan de librerías de JavaScript como p5, noise, charts o integraciones a APIs como la de sketchfab. Estos ejemplos de visualizadores que se encuentran ya actualmente programados:"
					: "Many of the graphical viewers rely on JavaScript libraries such as p5, noise, charts, or integrations with APIs like Sketchfab. These are examples of viewers that are already programmed:"}
			</span>
			<div id="sketches" className="sketches">
				<div className="sketch-row1">
					{[g1, g2, g3].map((sketch, index) => (
						<img key={index} src={sketch} alt={`gif ${index + 1}`} />
					))}
				</div>
				<div className="sketch-row2">
					{[g4, g5, g6, g7, g8].map((sketch, index) => (
						<img key={index} src={sketch} alt={`gif ${index + 5}`} />
					))}
				</div>
				<img src={g9} alt="gif 9" style={{ width: "100%" }} />
			</div>
			<div id="sketches-mov" className="sketches">
				{[g1, g2, g3, g4, g5, g6, g7, g8, g9].map((sketch, index) => (
					<img id={`gif-${index + 1}`} key={index} src={sketch} alt={`gif ${index + 1}`} />
				))}
			</div>
		</div>
	);
};

export default CoProgra;
