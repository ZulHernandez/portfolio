import { MyContext } from "./components/context/MyContext";
import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import RoHome from "./routes/RoHome";
import RoExperience from "./routes/RoExperience";
import RoLiverpool from "./routes/RoLiverpool";
import RoHubbub from "./routes/RoHubbub";
import RoGook from "./routes/RoGook";
import RoError from "./routes/RoError";
import CoNav from "./components/general/CoNav";
import CoFooter from "./components/general/CoFooter";

import "./styles/style.css";

function App() {
	const [posicion, setPosicion] = useState(1);
	const [ruta, setRuta] = useState("/");
	const [language, setLanguage] = useState("ES");

	return (
		<>
			<MyContext.Provider value={{ posicion, setPosicion, ruta, setRuta, language, setLanguage}}>
				<CoNav lan={language} ruta={ruta} />
				<Routes>
					<Route path="/" element={<RoHome />} />
					<Route path="/experience" element={<RoExperience/>} />
					<Route path="/experience/liverpool" element={<RoLiverpool />} />
					<Route path="/experience/hubbub" element={<RoHubbub />}/>
					<Route path="/experience/gook" element={<RoGook />}/>
					<Route path="*" element={<RoError />}/>
				</Routes>
				{/* <CoFooter /> */}
			</MyContext.Provider>
		</>
	);
}

export default App;
