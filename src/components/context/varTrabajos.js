import GLUE from "../../assets/imgs/home/GLUE.webp";
import GLUEgif from "../../assets/imgs/gifs/GLUE.mp4";

import MOVILIDAD from "../../assets/imgs/home/MOVILIDAD.webp";
import MOVILIDADgif from "../../assets/imgs/gifs/MOVILIDAD.mp4";

import ACTIVA from "../../assets/imgs/home/ACTIVA.webp";
import ACTIVAgif from "../../assets/imgs/gifs/ACTIVA.mp4";

import HUBBUB from "../../assets/imgs/home/HUBBUB.webp";
import HUBBUBgif from "../../assets/imgs/gifs/HUBBUB.mp4";

import GALERIA from "../../assets/imgs/home/GALERIA.webp";
import GALERIAgif from "../../assets/imgs/gifs/GALERIA.mp4";

import GOOK from "../../assets/imgs/home/GOOK.webp";
import GOOKgif from "../../assets/imgs/gifs/GOOK.mp4";

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
				["Desarrollo", "Sistema de Diseño"],
				["Development", "Design system"],
			],
			title: ["GLUE y DesignOps", "GLUE & DesignOps"],
			des: [
				"Automatización, tokenización y mantenimiento de un Sistema de Diseño",
				"Sistem Design atumatization, tokenization & management",
			],
			date: ["feb 2023 - actualidad", "feb 2023 - present"],
			logo: [liver],
			comp: ["El Puerto de Liverpool", "El Puerto de Liverpool"],
			link: "glue"
		},
		{
			cover: MOVILIDAD,
			covergif: MOVILIDADgif,
			tags: [
				["Experiencia", "Interfaz", "Investigación", "Servicios"],
				["Experience", "Interface", "Research", "Services"],
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
			link: "movilidad"
		},
		{
			cover: ACTIVA,
			covergif: ACTIVAgif,
			tags: [
				["Experiencia", "Interfaz", "Investigación", "Fintech"],
				["Experience", "Interface", "Research", "Fintech"],
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
				["Desarrollo", "Experiencia", "Interfaz", "Investigación", "Visualización de datos"],
				["Development", "Experience", "Interface", "Research", "Data visualization"],
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
			link: "hubbub"
		},
		{
			cover: GALERIA,
			covergif: GALERIAgif,
			tags: [
				["Experiencia", "Interfaz", "Investigación", "Rediseño"],
				["Experience", "Interface", "Research", "Redesign"],
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
				["Experiencia", "Interfaz", "Investigación", "E-commerce"],
				["Experience", "Interface", "Research", "E-commerce"],
			],
			title: [
				"Vendamos y organizemos lentes",
				"Let's sell and organice glasses",
			],
			des: [
				"Desarrollo de E-commerce más CMR con administración de inventarios para una tienda de óptica",
				"Development of E-commerce plus CRM with inventory management for an optical store.",
			],
			date: ["ago 2020 - sep 2021", "aug 2020 - sep 2021"],
			logo: [marsoft, gook],
			comp: ["Marsoft × Gook Optica", "Marsoft × Gook Optica"],
		},
	];

	return { trabajos };
};

export default varTrabajos;
