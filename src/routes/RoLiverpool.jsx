import logo from "../assets/imgs/liverpool/logo.svg";
import logoName from "../assets/imgs/liverpool/logoName.svg";
import banner from "../assets/imgs/liverpool/banner.webp";
import { useContext } from "react";
import { MyContext } from "../components/context/MyContext";

import CoHero from "../components/general/CoHero";
import CoPuesto from "../components/liverpool/CoPuesto";
import CoResearch from "../components/liverpool/CoResearch";
import CoFrame from "../components/liverpool/CoFrame";
import CoEngine from "../components/liverpool/CoEngine";

const RoLiverpool = () => {
	const { language, setRuta } = useContext(MyContext);
    setRuta("/experience");
	return (
		<div
			style={{ display: "flex", flexDirection: "column" }}
			className="liverpool"
		>
			<CoHero
				logo={logo}
				logoName={logoName}
				company="Liverpool"
				role={language == "EN" ? "UX/UI senior designer" : "Diseñador UX/UI senior"}
				tags={language == "EN" ? ["job", "design", "programming"] : ["trabajo", "diseño", "programación"]}
				subc={null}
				banner={banner}
			/>
			<CoPuesto />
			<CoResearch />
			<CoFrame />
			<center>
				<hr className="line-liver" />
			</center>
			<CoEngine />
		</div>
	);
};
export default RoLiverpool;
