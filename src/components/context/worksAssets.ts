// Igual que experienceAssets.ts: las imágenes/gifs SÍ siguen viviendo en
// código (a diferencia de título, descripción, tags y fechas, que ahora
// están en public/data/works.json), porque son binarios que pasan por el
// pipeline de build de Vite. Dar de alta un caso con media NUEVA sigue
// necesitando este archivo + un deploy normal; cambiar texto/tags/fechas de
// un caso ya existente no toca nada de esto.
//
// La llave es `slug`, la misma que usa cada entrada de works.json.

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

export interface WorkAssetEntry {
	cover: string;
	covergif: string;
	logos: string[];
}

/** Media por `work.slug` (ver public/data/works.json). */
export const WORK_ASSETS: Record<string, WorkAssetEntry> = {
	glue: { cover: GLUE, covergif: GLUEgif, logos: [liver] },
	movilidad: { cover: MOVILIDAD, covergif: MOVILIDADgif, logos: [liver] },
	activa: { cover: ACTIVA, covergif: ACTIVAgif, logos: [liver] },
	hubbub: { cover: HUBBUB, covergif: HUBBUBgif, logos: [uam] },
	galeria: { cover: GALERIA, covergif: GALERIAgif, logos: [liver] },
	gook: { cover: GOOK, covergif: GOOKgif, logos: [marsoft, gook] },
};
