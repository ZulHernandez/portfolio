import CoNavLeft from "../components/general/CoNavLeft.jsx";
import CoTrabajos from "../components/works/CoTrabajos.jsx";
import CoTimeline from "../components/works/CoTimeline.jsx";

import { useContext } from "react";
import { MyContext } from "../components/context/MyContext.js";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const RoWorks = () => {
	const { setRuta, setAmplio } = useContext(MyContext);
    const { language } = useContext(MyContext);
	const location = useLocation();

	setRuta("/works");

	useEffect(() => {
		setAmplio(false); // Reset amplio on route change
	}, [location.pathname]);

	return (
		<>
            <CoNavLeft />
			<div>
				<CoTrabajos />
				<CoTimeline />
			</div>
		</>
	);
};

export default RoWorks;