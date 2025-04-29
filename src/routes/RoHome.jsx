import CoHola from "../components/home/CoHola.jsx";
import CoColab from "../components/home/CoColab.jsx";
import CoTrabajos from "../components/home/CoTrabajos.jsx";
import CoConozca from "../components/home/CoConozca.jsx";

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
				<CoConozca />
				{/* <CoEstudios />
				<CoExperiencia />
				<CoContact /> */}
			</div>
		</>
	);
};

export default RoResume;
