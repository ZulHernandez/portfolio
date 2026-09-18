import React, { useState, useEffect, useMemo, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { NavigationContext } from "./components/context/NavigationContext";
import { preloadable } from "./utils/preloadable";
import type { NavigationContextValue } from "./types";

import RoHome from "./routes/RoHome";

import CoNav from "./components/general/CoNav";
import CoFooter from "./components/general/CoFooter";
import CoPrintableResume from "./components/resume/CoPrintableResume";
import RoCarga from "./routes/RoCarga"; // Fallback de carga

// El idioma "de verdad" ya no vive en un Context propio: lo maneja i18next
// (ver src/i18n.ts). Importarlo aquí lo inicializa antes de que cualquier
// componente pida una traducción.
import "./i18n";

// 🎯 Precargado (por demanda + anticipación)
const RoWorks = preloadable(() => import("./routes/RoWorks"));

// 🌀 Cargado bajo demanda
const RoResume = React.lazy(() => import("./routes/RoResume"));
const RoAbout = React.lazy(() => import("./routes/RoAbout"));
const RoError = React.lazy(() => import("./routes/RoError"));
const RoGLUE = React.lazy(() => import("./routes/works/RoGLUE"));
const RoMovilidad = React.lazy(() => import("./routes/works/RoMovilidad"));
const RoHUBBUB = React.lazy(() => import("./routes/works/RoHUBBUB"));

import "./styles/style.css";

function App() {
	// `posicion`/`setPosicion` used to live here too, but nothing in the app
	// ever read `posicion` — it was dead state re-rendering every context
	// consumer on every update. Removed.
	const [ruta, setRuta] = useState("/");
	const [amplio, setAmplio] = useState(false);

	// 🔮 Precarga anticipada (ejemplo: al estar en home)
	useEffect(() => {
		if (ruta === "/") {
			RoWorks.preload();
		}
	}, [ruta]);

	const navigationValue: NavigationContextValue = useMemo(
		() => ({ ruta, setRuta, amplio, setAmplio }),
		[ruta, amplio]
	);

	return (
		<NavigationContext.Provider value={navigationValue}>
			{/* Todo lo que NO debe imprimirse va dentro de .app-shell — ver la
			regla @media print en _resume.scss, que oculta este wrapper entero
			y muestra solo .printable (CoPrintableResume, abajo). Antes esa
			regla enumeraba a mano cada clase visible en /resume porque
			.printable vivía dentro del árbol de esa ruta; ahora .printable se
			monta aparte, siempre, así que funciona sin importar qué página
			esté activa cuando se imprime. */}
			<div className="app-shell">
				<CoNav />

				<Suspense fallback={<RoCarga />}>
					<Routes>
						<Route path="/" element={<RoHome />} />
						<Route path="/works" element={<RoWorks />} />
						<Route path="/works/glue" element={<RoGLUE />} />
						<Route path="/works/movilidad" element={<RoMovilidad />} />
						<Route path="/works/hubbub" element={<RoHUBBUB />} />
						<Route path="/resume" element={<RoResume />} />
						<Route path="/about-me" element={<RoAbout />} />
						<Route path="*" element={<RoError />} />
					</Routes>
				</Suspense>

				<CoFooter />
			</div>
			<CoPrintableResume />
		</NavigationContext.Provider>
	);
}

export default App;
