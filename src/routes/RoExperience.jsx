import { useContext } from "react";
import { MyContext } from "../components/context/MyContext";

import CoHome from "../components/experience/CoHome";
import CoProject from "../components/experience/CoProject";
import CoMain from "../components/experience/CoMain";

const RoExperience = () => {
	const { setRuta } = useContext(MyContext);
	setRuta("/experience");

	return (
		<>
			<div style={{ display: "flex", flexDirection: "column" }}>
				<CoHome />
				<center>
					<hr className="line-exp" />
				</center>
                <CoMain/>
				<CoProject />
			</div>
		</>
	);
};
export default RoExperience;
