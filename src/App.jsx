import { MyContext } from "./components/context/MyContext";
import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import RoHome from "./routes/RoHome";
import RoWorks from "./routes/RoWorks";
import RoResume from "./routes/RoResume";
import RoError from "./routes/RoError";
import CoNav from "./components/general/CoNav";
import CoFooter from "./components/general/CoFooter";

import "./styles/style.css";

function App() {
	const [posicion, setPosicion] = useState(1);
	const [ruta, setRuta] = useState("/");
	const [language, setLanguage] = useState("ES");
	const [amplio, setAmplio] = useState(false);

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
				}}
			>
				<CoNav />
				<Routes>
					<Route path="/" element={<RoHome />} />
					<Route path="/works" element={<RoWorks />} />
					<Route path="/resume" element={<RoResume />} />
					<Route path="*" element={<RoError />} />
				</Routes>
				<CoFooter />
			</MyContext.Provider>
		</>
	);
}

export default App;
