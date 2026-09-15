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

import type { TrabajoItem } from "../../types";

// El contenido bilingüe (tags/title/des/date/comp) vive en
// locales/<idioma>/translation.json bajo works.items.<slug>, no aquí. `slug`
// es la única llave que conecta cada trabajo con su traducción; lo que se
// queda en este archivo es lo que no se traduce (imágenes, link de detalle).
const varTrabajos = (): { trabajos: TrabajoItem[] } => {
	const trabajos: TrabajoItem[] = [
		{
			slug: "glue",
			cover: GLUE,
			covergif: GLUEgif,
			logo: [liver],
			link: "glue",
		},
		{
			slug: "movilidad",
			cover: MOVILIDAD,
			covergif: MOVILIDADgif,
			logo: [liver],
			link: "movilidad",
		},
		{
			slug: "activa",
			cover: ACTIVA,
			covergif: ACTIVAgif,
			logo: [liver],
		},
		{
			slug: "hubbub",
			cover: HUBBUB,
			covergif: HUBBUBgif,
			logo: [uam],
			link: "hubbub",
		},
		{
			slug: "galeria",
			cover: GALERIA,
			covergif: GALERIAgif,
			logo: [liver],
		},
		{
			slug: "gook",
			cover: GOOK,
			covergif: GOOKgif,
			logo: [marsoft, gook],
		},
	];

	return { trabajos };
};

export default varTrabajos;
