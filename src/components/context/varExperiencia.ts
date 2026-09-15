import dayjs from "dayjs";

import sedema from "../../assets/imgs/works/sedema.svg";
import hubbub from "../../assets/imgs/works/hubbub.svg";
import marsoft from "../../assets/imgs/works/marsoft.svg";
import combucar from "../../assets/imgs/works/combucar.svg";
import idea from "../../assets/imgs/works/idea.svg";
import gook from "../../assets/imgs/works/gook.svg";
import grupopm from "../../assets/imgs/works/grupopm.svg";
import liverpool from "../../assets/imgs/works/liverpool.svg";
import galileo from "../../assets/imgs/works/galileo.svg";

import typeFreelance from "../../assets/imgs/works/type-freelance.svg";
import typeMarsoft from "../../assets/imgs/works/type-marsoft.svg";
import typeGrupopm from "../../assets/imgs/works/type-grupopm.svg";
import typeLiverpool from "../../assets/imgs/works/type-liverpool.svg";
import typeGalileo from "../../assets/imgs/works/type-galileo.svg";

import type { ExperienciaGroup } from "../../types";

// Historial laboral usado por la línea del tiempo (CoTimeline). El texto
// bilingüe (date/rol) vive en locales/<idioma>/translation.json bajo
// timeline.items.<slug>; `slug` es lo único que conecta cada puesto con su
// traducción. Lo que se queda aquí es lo que no se traduce: nombre propio,
// logo, fechas reales (para ordenar/medir) y posicionamiento visual.
//
// Nota: esta es una fuente de datos distinta a varTrabajos.ts (casos de
// portafolio) y a los arreglos "experiencias"/"proyectos" de RoResume.tsx
// (formato de CV). Describen la misma trayectoria pero con forma y
// propósito distintos; no se fusionaron para evitar alterar fechas o
// contenido sin confirmarlo contigo.
const experiencia: ExperienciaGroup[] = [
	{
		type: "Freelance",
		icon: typeFreelance,
		works: [
			{
				slug: "sedema",
				name: "SEDEMA",
				logo: sedema,
				startDate: "2021-05-01",
				endDate: "2021-11-01",
				top: "0",
			},
			{
				slug: "hubbub",
				name: "Hubbub",
				logo: hubbub,
				startDate: "2022-05-01",
				endDate: dayjs(),
				top: "0",
			},
		],
	},
	{
		type: "Marsoft",
		icon: typeMarsoft,
		works: [
			{
				slug: "marsoft",
				name: "Marsoft",
				logo: marsoft,
				startDate: "2018-04-01",
				endDate: "2021-11-01",
				top: "0",
			},
			{
				slug: "combucar",
				name: "Combucar",
				logo: combucar,
				startDate: "2018-11-01",
				endDate: "2019-02-01",
				top: "4",
			},
			{
				slug: "idea",
				name: "IDEA",
				logo: idea,
				startDate: "2018-11-01",
				endDate: "2019-03-01",
				top: "2",
			},
			{
				slug: "gook",
				name: "GOOK",
				logo: gook,
				startDate: "2020-08-01",
				endDate: "2021-09-01",
				top: "2",
			},
		],
	},
	{
		type: "Grupo-PM",
		icon: typeGrupopm,
		works: [
			{
				slug: "grupoPm",
				name: "Grupo PM",
				logo: grupopm,
				startDate: "2021-11-01",
				endDate: "2023-02-01",
				top: "0",
			},
		],
	},
	{
		type: "Liverpool",
		icon: typeLiverpool,
		works: [
			{
				slug: "liverpool",
				name: "Liverpool",
				logo: liverpool,
				startDate: "2023-02-01",
				endDate: "2025-09-01",
				top: "0",
			},
		],
	},
	{
		type: "Galileo",
		icon: typeGalileo,
		works: [
			{
				slug: "galileo",
				name: "Galileo",
				logo: galileo,
				startDate: "2025-09-01",
				endDate: dayjs(),
				top: "0",
			},
		],
	},
];

export default experiencia;
