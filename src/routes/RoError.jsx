import sign from "/sign.svg";

import { useContext } from "react";
import { MyContext } from "../components/context/MyContext";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import CoBtn from "../components/general/CoBtn";

const RoResume = () => {
	const { language } = useContext(MyContext);
	const { setAmplio } = useContext(MyContext);
	const location = useLocation();

	useEffect(() => {
		setAmplio(false); // Reset amplio on route change
	}, [location.pathname]);

	return (
		<div className="div-error">
			<img loading="lazy" src={sign} />
			<div className="div-error-text">
				<h1>{language == "EN" ? "Wrong way" : "Por aquí no"}</h1>
				<p>
					{language == "EN"
						? "Seems like were not able to find what you were looking for."
						: "Parece que no fuimos capaces de encontrar aquello que estabas buscando."}
					<br />
					<br />
					{language == "EN"
						? "Feel free to explore the rest of the site."
						: "Siente libre de explorar el resto del sitio."}
				</p>
				<br />
				<br />
				<br />
				<br />
				<div className="work__cta">
					<CoBtn
						type="secondary"
						text={
							language == "ES"
								? "Ir al inicio del sitio"
								: "Go to the home page"
						}
						link="/"
					/>
				</div>
			</div>
		</div>
	);
};

export default RoResume;
