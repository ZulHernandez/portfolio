import github from "../../assets/imgs/home/GitHub.svg";
import sketchfab from "../../assets/imgs/home/SketchFab.svg";
import behance from "../../assets/imgs/home/Behance.svg";
import linkedin from "../../assets/imgs/home/LinkedIn.svg";

import type { RedItem } from "../../types";

// Redes sociales mostradas en CoNav (menú móvil) y CoConozca ("Conozcámonos").
// Antes este mismo arreglo (icon/text/url) vivía duplicado en ambos archivos;
// si una URL cambiaba había que recordar actualizarla en los dos lugares.
const redes: RedItem[] = [
	{
		icon: github,
		text: "GitHub",
		url: "https://github.com/ZulHernandez",
	},
	{
		icon: sketchfab,
		text: "SketchFab",
		url: "https://sketchfab.com/zulHernandez1912",
	},
	{
		icon: behance,
		text: "Behance",
		url: "https://www.behance.net/zulhernndez",
	},
	{
		icon: linkedin,
		text: "LinkedIn",
		url: "https://www.linkedin.com/in/saululises/",
	},
];

export default redes;
