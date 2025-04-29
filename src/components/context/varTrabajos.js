import GLUE from "../../assets/imgs/home/GLUE.png"
import GLUEgif from "../../assets/imgs/gifs/GLUE.gif";

import MOVILIDAD from "../../assets/imgs/home/MOVILIDAD.png";
import MOVILIDADgif from "../../assets/imgs/gifs/MOVILIDAD.gif";

import ACTIVA from "../../assets/imgs/home/ACTIVA.png";
import ACTIVAgif from "../../assets/imgs/gifs/ACTIVA.gif"

import HUBBUB from "../../assets/imgs/home/HUBBUB.png";
import HUBBUBgif from "../../assets/imgs/gifs/HUBBUB.gif";

import GALERIA from "../../assets/imgs/home/GALERIA.png";
import GALERIAgif from "../../assets/imgs/gifs/GALERIA.gif";

import GOOK from "../../assets/imgs/home/GOOK.png";
import GOOKgif from "../../assets/imgs/gifs/GOOK.gif"

import liver from "../../assets/imgs/home/liverpool.svg";
import uam from "../../assets/imgs/home/uma.svg";
import marsoft from "../../assets/imgs/home/marsoft.svg";
import gook from "../../assets/imgs/home/gook.svg";

const varTrabajos = () => {
	const trabajos = [
		{
			cover: GLUE,
			covergif: GLUEgif,
			tags: [
				[
					"Automatización",
					"Desarrollo",
					"Interfaz",
					"Plug Ins",
					"Sistema de diseño",
				],
				[
					"Automatization",
					"Development",
					"Interface",
					"Plugins",
					"Design System",
				],
			],
			title: ["GLUE y DesignOps", "GLUE & DesignOps"],
			des: [
				"Automatización, tokenización y mantenimiento de un Sistema de Diseño",
				"Sistem Design atumatization, tokenization & management",
			],
			date: ["feb 2023 - actualidad", "feb 2023 - present"],
			logo: [liver],
			comp: ["El Puerto de Liverpool", "El Puerto de Liverpool"],
		},
		{
			cover: MOVILIDAD,
			covergif: MOVILIDADgif,
			tags: [
				["Experiencia", "Interfaz", "Investigación", "Servicios", "Journey"],
				["Experience", "Interface", "Research", "Services", "Journey"],
			],
			title: [
				"Sistema de electrolineras, MoviLidad",
				"Electrolineras system, MoviLidad",
			],
			des: [
				"Aplicativo para el ofrecimiento de centro de carga para automóviles eléctricos",
				"Application for the offering of charging centers for electric cars",
			],
			date: ["oct 2024 - may 2025", "oct 2024 - may 2025"],
			logo: [liver],
			comp: ["El Puerto de Liverpool", "El Puerto de Liverpool"],
		},
		{
			cover: ACTIVA,
			covergif: ACTIVAgif,
			tags: [
				[
					"Experiencia",
					"Interfaz",
					"Investigación",
					"Fintech",
					"Mejora continua",
				],
				[
					"Experience",
					"Interface",
					"Research",
					"Fintech",
					"Continuous improvement",
				],
			],
			title: [
				"Activa, un producto de ahorro e inversión",
				"Activa, a savings and investment product",
			],
			des: [
				"Proyecto de fintech en colaboración con Actinver sobre ahorro e inversión para usuarios Liverpool",
				"Fintech project in collaboration with Actinver on savings and investment for Liverpool users",
			],
			date: ["mar 2023 - actualidad", "mar 2023 - present"],
			logo: [liver],
			comp: ["El Puerto de Liverpool", "El Puerto de Liverpool"],
		},
		{
			cover: HUBBUB,
			covergif: HUBBUBgif,
			tags: [
				[
					"Deserrallo",
					"Experiencia",
					"Interfaz",
					"Investigación",
					"Planeación",
					"Visualización de datoa",
				],
				[
					"Development",
					"Experience",
					"Interface",
					"Research",
					"Planning",
					"Data visualization",
				],
			],
			title: [
				"HUBBUB y la visualización del ruido en la CDMX",
				"HUBBUB and the visualization of noise in Mexico City",
			],
			des: [
				"Sitio web para el despliegue de data sobre el fenómeno del ruido en la CDMX y área Metropolitana",
				"Website for the deployment of data on the phenomenon of noise in Mexico City and Metropolitan area",
			],
			date: ["feb 2023 - actualidad", "feb 2023 - present"],
			logo: [uam],
			comp: [
				"Laboratorio de Diseño Acústico - UAM Azcapotzalco",
				"Laboratory of Acoustic Design - UAM Azcapotzalco",
			],
		},
		{
			cover: GALERIA,
			covergif: GALERIAgif,
			tags: [
				[
					"Experiencia",
					"Interfaz",
					"Investigación",
					"Rediseño",
					"Inmobiliaria",
				],
				["Experience", "Interface", "Research", "Redesign", "Real estate"],
			],
			title: ["Un rediseño completo de imagen", "A complete redesign of image"],
			des: [
				"Rediseño completo para el sitio de Galerias.com, cadena de centros comerciales pertenecientes a El Puerto de Liverpool",
				"Complete redesign for the Galerias.com site, a chain of shopping centers belonging to El Puerto de Liverpool",
			],
			date: ["mar 2024 - oct 2024", "mar 2024 - oct 2024"],
			logo: [liver],
			comp: ["El Puerto de Liverpool", "El Puerto de Liverpool"],
		},
		{
			cover: GOOK,
			covergif: GOOKgif,
			tags: [
				["Experiencia", "Interfaz", "Investigación", "SaaS", "e-commerce"],
				["Experience", "Interface", "Research", "SaaS", "e-commerce"],
			],
			title: [
				"Vendamos y organizemos lentes",
				"Let's sell and organice glasses",
			],
			des: [
				"Desarrollo de e-commerce más CMR con administración de inventarios para una tienda de óptica",
				"Development of e-commerce plus CRM with inventory management for an optical store.",
			],
			date: ["ago 2020 - sep 2021", "aug 2020 - sep 2021"],
			logo: [marsoft, gook],
			comp: ["Marsoft × Gook Optica", "Marsoft × Gook Optica"],
		},
	];

    return {trabajos};
};

export default varTrabajos;