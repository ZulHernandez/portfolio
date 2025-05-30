import { useContext } from "react";
import { MyContext } from "../../../components/context/MyContext.js";

import CoTitle from "../../../components/general/CoTitle.jsx";
import CoIcon from "../../general/CoIcon.jsx";
import CoFile from "../../general/CoFile.jsx";

import drive from "../../../assets/imgs/works/glue/drive.svg";
import folder from "../../../assets/imgs/vectores/folder.svg";
import script from "../../../assets/imgs/vectores/script.svg";

const CoInsumos = () => {
	const { language } = useContext(MyContext);

	const files = [
		{
			level: 0,
			icon: folder,
			text: language === "ES" ? "Tipografías" : "Fonts",
		},
		{
			level: 1,
			icon: folder,
			text:
				language === "ES"
					? "FontFamily-Marca1,MarcaN"
					: "FontFamily-Brand1,BrandN",
		},
		{
			level: 2,
			icon: script,
			text: "FontFamily-FontWeight.otf",
		},
	];

	const projects = [
		{
			title: language === "ES" ? "Proyecto UX" : "UX Project",
			bullets: [
				{
					level: 0,
					icon: null,
					text: "🖼️ Cover",
				},
				{
					level: 0,
					icon: null,
					text: "🖍️ Ui / Ready for BA + DEV",
				},
				{
					level: 1,
					icon: null,
					text: "📲 App",
				},
				{
					level: 1,
					icon: null,
					text: "🖥️ Desktop",
				},
				{
					level: 1,
					icon: null,
					text: "💊 Tablet",
				},
				{
					level: 1,
					icon: null,
					text: "📱 Mobile",
				},
				{
					level: 0,
					icon: null,
					text: "---",
				},
				{
					level: 0,
					icon: null,
					text: "🤖 Prototype",
				},
				{
					level: 0,
					icon: null,
					text: "---",
				},
				{
					level: 0,
					icon: null,
					text: "📕 Historial de versiones",
				},
				{
					level: 0,
					icon: null,
					text: "🔎 Business + Research",
				},
				{
					level: 0,
					icon: null,
					text: "🧠 UX",
				},
				{
					level: 0,
					icon: null,
					text: "---",
				},
				{
					level: 0,
					icon: null,
					text: "🏝 Sandbox",
				},
				{
					level: 0,
					icon: null,
					text: "🛠 Local Components + Tools",
				},
			],
		},
		{
			title: language === "ES" ? "Proyecto Interno" : "Internal Project",
			bullets: [
				{
					level: 0,
					icon: null,
					text: "🖼️ Cover",
				},
				{
					level: 0,
					icon: null,
					text: "🏬 Business",
				},
				{
					level: 0,
					icon: null,
					text: "🏝 Sandbox",
				},
				{
					level: 0,
					icon: null,
					text: "🧠 Brainstorming",
				},
				{
					level: 0,
					icon: null,
					text: "🗺️ Sitemap",
				},
				{
					level: 0,
					icon: null,
					text: "📕 Historial de versiones",
				},
				{
					level: 1,
					icon: null,
					text: "Benchmark",
				},
				{
					level: 1,
					icon: null,
					text: "Interviews",
				},
				{
					level: 0,
					icon: null,
					text: "👁️ Visuales",
				},
				{
					level: 0,
					icon: null,
					text: "🛠 Local Components + Toolsx",
				},
			],
		},
		{
			title: "Research",
			bullets: [
				{
					level: 0,
					icon: null,
					text: "🖼️ Cover",
				},
				{
					level: 0,
					icon: null,
					text: "🤖 Prototype",
				},
				{
					level: 0,
					icon: null,
					text: "---",
				},
				{
					level: 0,
					icon: null,
					text: "📕 Historial de versiones",
				},
				{
					level: 0,
					icon: null,
					text: "🧠 UX",
				},
				{
					level: 0,
					icon: null,
					text: "---",
				},
				{
					level: 0,
					icon: null,
					text: "🏝 Sandbox",
				},
				{
					level: 0,
					icon: null,
					text: "🛠 Local Components + Tools",
				},
			],
		},
	];

	return (
		<div
			id={language === "ES" ? "mejora-de-insumos" : "improvement-of-inputs"}
			className="container-fluid"
		>
			<CoTitle
				titles={
					language === "ES" ? "Mejora de insumos" : "Improvement of Inputs"
				}
			/>
			<span>
				{language === "ES"
					? "Dentro de los procesos de HandOff de los proyectos se mejoraron diferentes dolencias que equipos como Desarrollo y Business Analyst lo que provoco una serie de trabajos para la atención a estos problemas:"
					: "Within the HandOff processes of the projects, different pains were improved that teams such as Development and Business Analyst had, which led to a series of works to address these problems:"}
			</span>
			<div className="bullet">
				<span className="subtitle">
					{language === "ES"
						? "· Conglomeración y cuidado de tipografías"
						: "· Consolidation and care of fonts"}
				</span>
				<div className="bullet__body">
					<span>
						{language === "ES"
							? "Se decidió por crear un repositorio donde se conglomeraran todas las tipografías que son utilizadas a los largo del e-commerce, herramientas internas y otros sitios pertenecientes a Liverpool. Este repositorio se genero en Drive y se construyo bajo las necesidades particulares del equipo de Ux  y los desarrolladores Front-End. Se genero una nomenclatura que sirviese para ambos equipos y se termino por documentar la misma dentro de la librería de variables de Figma."
							: "A repository was created to consolidate all the fonts used throughout the e-commerce, internal tools, and other sites belonging to Liverpool. This repository was generated in Drive and built according to the specific needs of the UX team and Front-End developers. A nomenclature was created to serve both teams and was ultimately documented within the Figma variable library."}
					</span>
					<div className="bullet__body__card">
						<CoIcon icon={drive} text="Drive" />
						<div className="bullet__body__card-schema">
							{files.map((file, index) => (
								<CoFile
									key={index}
									level={file.level}
									icon={file.icon}
									text={file.text}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className="bullet">
				<span className="subtitle">
					{language === "ES"
						? "· Estructura de documentos en Figma"
						: "· Structure of documents in Figma"}
				</span>
				<div className="bullet__body">
					<div>
						<span>
							{language === "ES"
								? "Producto de una serie de acercamientos, platicas y encuestas con equipos que consultan los documentos de Figma como parte de su flujo de trabajo de entre los que se incluyen Frontend devs, Business Analysts, Negocio y QA se genero una estructura dentro de los documentos de Figma que funcionaba para acomodar de forma correcta y en orden de prioridad aquellas paginas que lo fuesen, así se termino por crear una estructura que comprende los siguientes puntos."
								: "As a result of a series of approaches, discussions, and surveys with teams that consult Figma documents as part of their workflow, including Frontend devs, Business Analysts, Business, and QA, a structure was generated within the Figma documents that worked to correctly accommodate and prioritize those pages that needed it. Thus, a structure was created that includes the following points."}
						</span>
						<ul>
							<li>
								{language === "ES"
									? "Adición de emojis para mejorar la identificación de páginas"
									: "Addition of emojis to improve page identification"}
							</li>
							<li>
								{language === "ES"
									? "Agrupación de paginas por semántica parecida"
									: "Grouping of pages by similar semantics"}
							</li>
							<li>
								{language === "ES"
									? "Creación de tres tipos diferentes de documentos: proyectos Ux, research y herramientas internas"
									: "Creation of three different types of documents: Ux projects, research, and internal tools"}
							</li>
						</ul>
					</div>
				</div>
				<div className="bullet__carrousel">
					{projects.map((project, index) => (
						<div className="bullet__body__card" key={index}>
							<div id="schema" className="bullet__body__card-schema">
								<span className="bullet__body__card-title">
									{project.title}
								</span>
								{project.bullets.map((bullet, index) => (
									<CoFile
										key={index}
										level={bullet.level}
										icon={bullet.icon}
										text={bullet.text}
									/>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default CoInsumos;
