import { createContext } from "react";
import type { NavigationContextValue } from "../../types";

// `ruta` (sección activa, usada para resaltar el nav y por CoFooter) y
// `amplio` (si el menú/óverlay está expandido). Van juntos porque casi toda
// página los escribe en el mismo par de useEffect al montar/cambiar de ruta,
// y CoNav los lee juntos; separarlos más no evitaría re-renders extra ya que
// cambian en el mismo momento.
//
// El valor por defecto solo se usa si algún componente lee el contexto fuera
// del <NavigationContext.Provider> de App.tsx, lo cual no ocurre hoy — está
// aquí únicamente para satisfacer el tipo sin volver "| undefined" cada
// lectura de useContext(NavigationContext) en el resto del código.
export const NavigationContext = createContext<NavigationContextValue>({
	ruta: "/",
	setRuta: () => {},
	amplio: false,
	setAmplio: () => {},
});
