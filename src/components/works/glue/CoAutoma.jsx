/* eslint-disable no-mixed-spaces-and-tabs */
import { useContext } from "react";
import { MyContext } from "../../../components/context/MyContext.js";

import CoTitle from "../../../components/general/CoTitle.jsx";
import CoKPI from "../../general/CoKPI.jsx";

import projectSetter from "../../../assets/imgs/works/glue/projectSetter.svg";
import plpFiller from "../../../assets/imgs/works/glue/plpFiller.svg";
import frameReferencer from "../../../assets/imgs/works/glue/frameReferencer.svg";
import arrow from "../../../assets/imgs/works/glue/arrow_back.svg";

import credential from "../../../assets/imgs/works/glue/credential.svg";
import crawler from "../../../assets/imgs/works/glue/crawler.svg";

import node from "../../../assets/imgs/works/glue/node.svg";
import express from "../../../assets/imgs/works/glue/express.svg";
import puppeteer from "../../../assets/imgs/works/glue/puppeteer.svg";
import js from "../../../assets/imgs/works/glue/js.svg";
import render from "../../../assets/imgs/works/glue/render.svg";
import insomnia from "../../../assets/imgs/works/glue/insomnia.svg";
import cron from "../../../assets/imgs/works/glue/cron.svg";

import PropTypes from "prop-types";

const CoCardPlugin = ({
	icon,
	title,
	description,
	kpi,
	color,
	capacidades,
}) => {
	const { language } = useContext(MyContext);

	return (
		<div className="plugins-carrousel__card">
			<div className="plugins-carrousel__card-header">
				<img src={icon} alt={title} />
				<div className="plugins-carrousel__card-header-title">
					<span className="text-normal" style={{ color: color }}>
						{title[0]}
					</span>
					<span className="text-normal" style={{ color: color }}>
						{title[1]}
					</span>
				</div>
			</div>
			<span className="text-normal">{description}</span>
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
			<div className="plugins-carrousel__card-kpi-list">
				{kpi.length === 1 ? (
					<CoKPI
						title=""
						dato={kpi[0].dato}
						desc={kpi[0].desc}
						imgs={[null]}
						color={color}
						pos="center"
					/>
				) : kpi.length === 2 ? (
					<>
						<CoKPI
							title=""
							dato={kpi[0].dato}
							desc={kpi[0].desc}
							imgs={[null]}
							color="#4D4D4D"
							pos="center"
						/>
						<img src={arrow} alt="" />
						<CoKPI
							title=""
							dato={kpi[1].dato}
							desc={kpi[1].desc}
							imgs={[null]}
							color={color}
							pos="center"
						/>
					</>
				) : null}
			</div>
			<span className="subtitle">
				{language === "ES" ? "Capacidades" : "Capabilities"}
			</span>
			<div>
				{capacidades.map((capacidad, index) => (
					<li
						className="text-normal"
						key={index}
						style={{ paddingLeft: capacidad.nivel * 2 + "rem" }}
					>
						{capacidad.text}
					</li>
				))}
			</div>
		</div>
	);
};

CoCardPlugin.propTypes = {
	icon: PropTypes.string.isRequired,
	title: PropTypes.arrayOf(PropTypes.string).isRequired,
	description: PropTypes.string.isRequired,
	kpi: PropTypes.array.isRequired,
	color: PropTypes.string.isRequired,
	capacidades: PropTypes.array.isRequired,
};

const CoCardServer = ({ icon, title, description, tech }) => {
	return (
		<div id="server-card" className="plugins-carrousel__card">
			<div className="plugins-carrousel__card-header">
				<img src={icon} alt={title} />
				<div className="plugins-carrousel__card-header-title">
					<span style={{ color: "#4D4D4D" }}>{title[0]}</span>
					<span style={{ color: "#4D4D4D" }}>{title[1]}</span>
				</div>
				<div className="plugins-carrousel__card-header-tech">
					{tech.map((item, index) => (
						<img
							key={index}
							src={item}
							style={{ width: "2rem", height: "2rem", margin: "0 0.5rem" }}
						/>
					))}
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
			<span>{description}</span>
		</div>
	);
};

CoCardServer.propTypes = {
	icon: PropTypes.string.isRequired,
	title: PropTypes.arrayOf(PropTypes.string).isRequired,
	description: PropTypes.string.isRequired,
	tech: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const CoAutoma = () => {
	const { language } = useContext(MyContext);

	const plugins = [
		{
			icon: projectSetter,
			title: ["PROJECT", "SETTER"],
			description:
				language === "ES"
					? "Genera un proyecto con la estructura de páginas estandarizada de acuerdo al tipo de proyecto deseado"
					: "Generates a project with the standardized page structure according to the desired project type.",
			kpi: [
				{
					dato: "30 min",
					desc:
						language === "ES"
							? "Proceso que comprendía copiar el témplate, generar una portada y ajustar el archivo manualmente de ser necesario"
							: "Process that involved copying the template, generating a cover page, and manually adjusting the file if necessary.",
				},
				{
					dato: language === "ES" ? "30 seg" : "30 sec",
					desc:
						language === "ES"
							? "Se reduce el tiempo en un " +
							  Math.round(100 - (30 * 100) / 1800) +
							  "% sin necesidad de un ajuste manual concreto pues el plugin permite presetearlo"
							: "Time is reduced by " +
							  Math.round(100 - (30 * 100) / 1800) +
							  "% without the need for specific manual adjustments, as the plugin allows presetting.",
				},
			],
			color: "#FF3C8A",
			capacidades: [
				{
					nivel: 0,
					text:
						language === "ES"
							? "Se requiere de credenciales para utilizar el plugin"
							: "Credentials are required to use the plugin",
				},
				{
					nivel: 0,
					text:
						language === "ES"
							? "Se puede editar información directa del proyecto para la portada como nombre del proyecto, coordinación del proyecto y si es o no un proyecto que involucra más coordinaciones"
							: "You can edit project information directly for the cover page, such as project name, project coordination, and whether it involves more coordinations or not.",
				},
				{
					nivel: 0,
					text:
						language === "ES"
							? "Inicialización de 4 tipos de proyectos:"
							: "Initialization of 4 types of projects:",
				},
				{
					nivel: 1,
					text:
						language === "ES"
							? "Proyecto completo estándar de UX"
							: "Standard UX project",
				},
				{
					nivel: 1,
					text:
						language === "ES"
							? "Proyecto de research para investigaciones"
							: "Research project for investigations",
				},
				{
					nivel: 1,
					text:
						language === "ES"
							? "Proyecto de herramienta de ventas para desarrollos internos"
							: "Sales tool project for internal development",
				},
				{
					nivel: 1,
					text:
						language === "ES"
							? "Proyecto personalizado que permite seleccionar que páginas se busca insertar"
							: "Custom project that allows selecting which pages to insert",
				},
				{
					nivel: 0,
					text:
						language === "ES"
							? "Insertar páginas dentro del la estructura de páginas"
							: "Insert pages within the page structure",
				},
			],
		},
		{
			icon: plpFiller,
			title: ["PLP", "FILLER"],
			description:
				language === "ES"
					? "Pensado para generar la vista de un PLP completo de forma rápida y con información real obtenida directamente del productivo del e-commerce"
					: "Designed to quickly generate a complete PLP view with real information obtained directly from the e-commerce production environment.",
			kpi: [
				{
					dato: "2 hrs",
					desc:
						language === "ES"
							? "Proceso que comprendía ajustar manualmente la información de un PLP con datos reales del productivo"
							: "Process that involved manually adjusting the information of a PLP with real data from the production environment.",
				},
				{
					dato: language === "ES" ? "30 seg" : "30 sec",
					desc:
						language === "ES"
							? `Se reduce el tiempo en un ${Math.round(
									100 - (30 * 100) / 3600
							  )}% con el mero esfuerzo de un texto y un click`
							: `Time is reduced by ${Math.round(
									100 - (30 * 100) / 3600
							  )}% with the mere effort of a text and a click.`,
				},
			],
			color: "#5010F3",
			capacidades: [
				{
					nivel: 0,
					text:
						language === "ES"
							? "Se obtiene la información directamente del productivo del e-commerce de Liverpool"
							: "Information is obtained directly from the Liverpool e-commerce production environment.",
				},
				{
					nivel: 0,
					text:
						language === "ES"
							? "Dicha información se pinta directamente en un componente tipo card PLP"
							: "This information is directly rendered in a PLP card component.",
				},
				{
					nivel: 0,
					text:
						language === "ES"
							? "Solo se requiere de un texto valido."
							: "Only a valid text is required.",
				},
			],
		},
		{
			icon: frameReferencer,
			title: ["FRAME", "REFERENCER"],
			description:
				language === "ES"
					? "Permite conectar a través de hipervínculos y flechas dos frames con el objetivo de enlazarlos de alguna forma."
					: "Allows connecting two frames through hyperlinks and arrows to link them in some way.",
			kpi: [
				{
					dato:
						language === "ES" ? "Navegación y peso" : "Navigation and weight",
					desc:
						language === "ES"
							? "Permite una navegación dentro de documentos grandes mucho más ligera gracias a los hipervínculos y flechas. La duplicación en png de frames aligera el peso del documento."
							: "Allows for much lighter navigation within large documents thanks to hyperlinks and arrows. The duplication in PNG of frames lightens the document's weight.",
				},
			],
			color: "#EC48FC",
			capacidades: [
				{
					nivel: 0,
					text:
						language === "ES"
							? "Puedes modificar el color de las referencias e hipervínculos"
							: "You can modify the color of references and hyperlinks",
				},
				{
					nivel: 0,
					text:
						language === "ES"
							? "Puedes activar o desactivar las siguientes opciones:"
							: "You can activate or deactivate the following options:",
				},
				{
					nivel: 1,
					text:
						language === "ES"
							? "Generar una copia del frame en PNG"
							: "Generate a copy of the frame in PNG",
				},
				{
					nivel: 1,
					text:
						language === "ES" ? "Generar hipervínculos" : "Generate hyperlinks",
				},
				{
					nivel: 1,
					text:
						language === "ES"
							? "Crear conectores entre dos frames"
							: "Create connectors between two frames",
				},
				{
					nivel: 0,
					text:
						language === "ES"
							? "Se pueden generar esas interacciones entre dos frames seleccionando un frame y después seleccionar otro con la tecla SHIFT"
							: "These interactions can be generated between two frames by selecting one frame and then selecting another with the SHIFT key.",
				},
			],
		},
	];

	const servers = [
		{
			icon: credential,
			title: ["CREDENTIAL", "SERVER"],
			description:
				language === "ES"
					? "Servidor dedicado a validar y verificar credenciales"
					: "Server dedicated to validating and verifying credentials.",
			tech: [node, express, js, render, insomnia, cron],
		},
		{
			icon: crawler,
			title: ["CRAWLER", "SERVER"],
			description:
				language === "ES"
					? "Servidor dedicado a validar y verificar credenciales"
					: "Server dedicated to validating and verifying credentials.",
			tech: [node, express, puppeteer, js, render, insomnia, cron],
		},
	];

	return (
		<div
			id={
				language === "ES"
					? "automatizacion-de-procesos"
					: "automation-of-processes"
			}
			className="container-fluid"
		>
			<CoTitle
				titles={
					language === "ES"
						? "Automatización de procesos"
						: "Automation of processes"
				}
			/>
			<span className="text-normal">
				{language === "ES"
					? "Como parte de los esfuerzo para mejorar los procesos de diseño de los diseñadores UX se programaron 3 plugin para Figma más 2 servidores extra que permitieron aumentar la productividad del equipo:"
					: "To improve the design processes of UX designers, 3 plugins for Figma and 2 additional servers were programmed, which increased the team's productivity:"}
			</span>
			<div className="plugins">
				<span className="subtitle">
					{language === "ES" ? "PlugIns (3 herramientas)" : "Plugins (3 tools)"}
				</span>
				<div className="plugins-carrousel">
					{plugins.map((plugin, index) => (
						<CoCardPlugin
							key={index}
							icon={plugin.icon}
							title={plugin.title}
							description={plugin.description}
							kpi={plugin.kpi}
							color={plugin.color}
							capacidades={plugin.capacidades}
						/>
					))}
				</div>
			</div>
			<div className="plugins">
				<span className="subtitle">
					{language === "ES"
						? "Servidores (2 herramientas)"
						: "Servers (2 tools)"}
				</span>
				<div id="server" className="plugins-carrousel">
					{servers.map((server, index) => (
						<CoCardServer
							key={index}
							icon={server.icon}
							title={server.title}
							description={server.description}
							tech={server.tech}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default CoAutoma;
