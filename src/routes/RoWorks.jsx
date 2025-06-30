import CoNavLeft from "../components/general/CoNavLeft.jsx";
import CoTrabajos from "../components/works/CoTrabajos.jsx";
import CoTimeline from "../components/works/CoTimeline.jsx";
import CoContexto from "../components/works/movilidad/CoContexto.jsx";

import { useContext } from "react";
import { MyContext } from "../components/context/MyContext.js";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const RoWorks = () => {
	const { setRuta, setAmplio } = useContext(MyContext);
	const location = useLocation();
	const { language } = useContext(MyContext);

	let anclasWork = [
		{
			text: language == "ES" ? "Mis trabajos" : "My works",
			id: language == "ES" ? "mis-trabajos" : "my-works",
		},
		{
			text: language == "ES" ? "Cronología" : "Timeline",
			id: language == "ES" ? "linea-del-tiempo" : "timeline",
		},
	];

	useEffect(() => {
		setRuta("/works");
	}, []);

	useEffect(() => {
		setAmplio(false); // Reset amplio on route change
	}, [location.pathname]);

	return (
		<>
			<div>
				<CoTrabajos />
				<CoTimeline />
				<CoContexto />
			</div>
			<CoNavLeft anclas={anclasWork} />
		</>
	);
};

export default RoWorks;
