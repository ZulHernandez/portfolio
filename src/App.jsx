import { MyContext } from "./components/context/MyContext";
import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import RoHome from "./routes/RoHome";
import RoWorks from "./routes/RoWorks";
import RoResume from "./routes/RoResume";
import RoError from "./routes/RoError";
import RoAbout from "./routes/RoAbout";
import CoNav from "./components/general/CoNav";
import CoFooter from "./components/general/CoFooter";

import RoGlue from "./routes/work/RoGlue";

import "./styles/style.css";

function App() {
	const [posicion, setPosicion] = useState(1);
	const [ruta, setRuta] = useState("/");
	const [language, setLanguage] = useState("ES");
	const [amplio, setAmplio] = useState(false);
	const [filtroResumen, setFiltroResumen] = useState(0);

	return (
		<>
			<MyContext.Provider
				value={{
					posicion,
					setPosicion,
					ruta,
					setRuta,
					language,
					setLanguage,
					amplio,
					setAmplio,
					filtroResumen,
					setFiltroResumen,
				}}
			>
				<CoNav />
				<Routes>
					<Route path="/" element={<RoHome />} />
					<Route path="/works" element={<RoWorks />} />
					<Route path="/works/glue" element={<RoGlue />} />
					<Route path="/resume" element={<RoResume />} />
					<Route path="/about-me" element={<RoAbout />} />
					<Route path="*" element={<RoError />} />
				</Routes>
				<CoFooter />
			</MyContext.Provider>
		</>
	);
}

export default App;
