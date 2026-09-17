// Los logos/íconos SÍ siguen viviendo en código (a diferencia de fechas,
// roles y bullets, que ahora están en public/data/experience.json): son
// binarios que pasan por el pipeline de build de Vite (optimización, hash de
// nombre de archivo), no texto que se pueda soltar en un JSON servido tal
// cual. Agregar un trabajo con un logo NUEVO sigue necesitando este archivo +
// un deploy normal; cambiar fechas/rol/bullets de un trabajo ya existente no
// toca nada de esto.
//
// La llave es `slug` (o `group` para los íconos de la línea del tiempo), la
// misma que usa cada `job` de experience.json — así se conectan sin repetir
// el logo por cada idioma ni por cada sección.

import sedema from "../../assets/imgs/works/sedema.svg";
import hubbub from "../../assets/imgs/works/hubbub.svg";
import marsoftTimeline from "../../assets/imgs/works/marsoft.svg";
import combucar from "../../assets/imgs/works/combucar.svg";
import idea from "../../assets/imgs/works/idea.svg";
import gook from "../../assets/imgs/works/gook.svg";
import grupopmTimeline from "../../assets/imgs/works/grupopm.svg";
import liverpoolTimeline from "../../assets/imgs/works/liverpool.svg";
import galileoTimeline from "../../assets/imgs/works/galileo.svg";

import typeFreelance from "../../assets/imgs/works/type-freelance.svg";
import typeMarsoft from "../../assets/imgs/works/type-marsoft.svg";
import typeGrupopm from "../../assets/imgs/works/type-grupopm.svg";
import typeLiverpool from "../../assets/imgs/works/type-liverpool.svg";
import typeGalileo from "../../assets/imgs/works/type-galileo.svg";

import galileoHome from "../../assets/imgs/home/galileo.svg";
import liverpoolHome from "../../assets/imgs/home/liverpool.svg";
import grupoPmHome from "../../assets/imgs/home/grupoPM.svg";
import marsoftHome from "../../assets/imgs/home/marsoft.svg";

/** Logo por `job.slug`, para las tarjetas chicas de la línea del tiempo (CoTimeline). */
export const TIMELINE_LOGOS: Record<string, string> = {
	sedema,
	hubbub,
	marsoft: marsoftTimeline,
	combucar,
	idea,
	gook,
	grupoPm: grupopmTimeline,
	liverpool: liverpoolTimeline,
	galileo: galileoTimeline,
};

/** Ícono por `group.key`, para los filtros de la línea del tiempo (CoTimeline). */
export const GROUP_ICONS: Record<string, string> = {
	Freelance: typeFreelance,
	Marsoft: typeMarsoft,
	"Grupo-PM": typeGrupopm,
	Liverpool: typeLiverpool,
	Galileo: typeGalileo,
};

/** Logo por `job.slug`, para las tarjetas de "Where I have collaborated" (CoColab). */
export const COLLAB_LOGOS: Record<string, string> = {
	galileo: galileoHome,
	liverpool: liverpoolHome,
	grupoPm: grupoPmHome,
	marsoft: marsoftHome,
};
