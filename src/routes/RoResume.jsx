
import { useContext } from "react";
import { MyContext } from "../components/context/MyContext.js";

import { useLocation } from "react-router-dom";

const RoHome = () => {
	const { setRuta, language } = useContext(MyContext);

	setRuta("/resume");

	return (
		
			<div>
                <h1>resume</h1><br /><br /><br /><br /><br /><br /><br />
                <p>Welcome to the resume page!</p>
			</div>
		
	);
};

export default RoHome;