import { useContext } from "react";
import { MyContext } from "../../components/context/MyContext.js";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import CoNavLeft from "../../components/general/CoNavLeft.jsx";

const RoGLUE = () => {
	const { setRuta, language, setAmplio } =
		useContext(MyContext);
	const location = useLocation();

	useEffect(() => {
		setRuta("/works/glue"); // Se ejecuta después del renderizado inicial
	}, []); // Se ejecuta solo una vez al montar el componente

	useEffect(() => {
		setAmplio(false); // Reset amplio on route change
	}, [location.pathname]);

	return (
		<>
			<CoNavLeft />
		</>
	);
};

export default RoGLUE;
