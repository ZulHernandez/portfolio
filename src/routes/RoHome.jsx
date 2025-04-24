import CoHola from "../components/home/CoHola.jsx";
import CoColab from "../components/home/CoColab.jsx";
import CoTrabajos from "../components/home/CoTrabajos.jsx";

import { useContext } from "react";
import { MyContext } from "../components/context/MyContext.js";


const RoResume = () => {
	const { setRuta } = useContext(MyContext);
    setRuta("/");

	return (
		<>
			{/* <CoLeftNav /> */}
			<div style={{ display: "flex", flexDirection: "column" }}>
				<br /><br /><br /><br /><br />
				<CoHola />
				<CoColab />
				<CoTrabajos />
				{/* <CoEstudios />
				<CoExperiencia />
				<CoContact /> */}
			</div>
		</>
	);
};

export default RoResume;
