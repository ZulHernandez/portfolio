import sign from "/sign.svg";

import { useContext } from "react";
import { MyContext } from "../components/context/MyContext";
import { Link } from "react-router-dom";

const RoResume = () => {
	const { language} = useContext(MyContext);

	return (
		<div className="div-error">
			<img src={sign} />
			<div className="div-error-text">
				<h2>{language == "EN" ? "Wrong way" : "Por aquí no"}</h2>
				<p>
					{language == "EN"
						? "Seems like were not able to find what you were looking for."
						: "Parece que no fuimos capaces de encontrar aquello que estabas buscando."}
				</p>
				<p>
					{language == "EN"
						? "Feel free to explore the rest of the site."
						: "Siente libre de explorar el resto del sitio."}
				</p>
				<br />
				<Link to="/">
					<p id="link">{language == "EN"
						? "GO TO HOME PAGE"
						: "IR A LA PÁGINA PRINCIPAL"}</p>
				</Link>
			</div>
		</div>
	);
};

export default RoResume;
