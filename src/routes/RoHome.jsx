import CoHola from "../components/home/CoHola.jsx";
import CoColab from "../components/home/CoColab.jsx";
import CoTrabajos from "../components/home/CoTrabajos.jsx";
import CoConozca from "../components/general/CoConozca.jsx";
import CoNavLeft from "../components/general/CoNavLeft.jsx";

import { useContext } from "react";
import { MyContext } from "../components/context/MyContext.js";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const RoHome = () => {
	const { setRuta, setAmplio } = useContext(MyContext);
	const location = useLocation();
	const { language } = useContext(MyContext);

	let anclasHome = [
		{
			text: language == "ES" ? "Hola" : "Hello",
			id: language == "ES" ? "hola" : "hello",
		},
		{
			text:
				language == "ES" ? "Colaboraciones" : "Collaborations",
			id: language == "ES" ? "colab" : "colab",
		},
		{
			text: language == "ES" ? "Mis trabajos" : "My works",
			id: language == "ES" ? "trabajos" : "works",
		},
		{
			text: language == "ES" ? "Conozcámonos" : "Get in touch",
			id: language == "ES" ? "conozcamonos" : "getInTouch",
		},
	];

	// Mover la actualización de estado a useEffect
	useEffect(() => {
		setRuta("/"); // Se ejecuta después del renderizado inicial
	}, []); // Se ejecuta solo una vez al montar el componente

	useEffect(() => {
		setAmplio(false); // Reset amplio on route change
	}, [location.pathname]);

	return (
		<>
			<div>
				<CoHola />
				<CoColab />
				<CoTrabajos />
				<CoConozca />
			</div>
			<CoNavLeft anclas={anclasHome} />
		</>
	);
};

export default RoHome;
