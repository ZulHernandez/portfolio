// Tipos compartidos entre componentes/datos. Centralizados aquí para no
// redefinir la misma forma de dato en cada archivo que la consume.

import type { Dayjs } from "dayjs";
import type { Dispatch, SetStateAction } from "react";

/** Contexto de navegación (ruta activa + estado del menú móvil). */
export interface NavigationContextValue {
	ruta: string;
	setRuta: Dispatch<SetStateAction<string>>;
	amplio: boolean;
	setAmplio: Dispatch<SetStateAction<boolean>>;
}

/** Una red social (CoNav, CoConozca). */
export interface RedItem {
	icon: string;
	text: string;
	url: string;
}

/** Un puesto de trabajo dentro de un grupo de experiencia (CoTimeline). */
export interface ExperienciaWork {
	slug: string;
	name: string;
	logo: string;
	startDate: string;
	endDate: string | Dayjs;
	top: string;
}

/** Un grupo de experiencia (freelance, empresa, ...) con sus puestos. */
export interface ExperienciaGroup {
	type: string;
	icon: string;
	works: ExperienciaWork[];
}

/** Un caso de portafolio mostrado en home (CoTrabajos/CoWorkList/CoWorkCard). */
export interface TrabajoItem {
	slug: string;
	cover: string;
	covergif: string;
	logo: string[];
	link?: string;
}
