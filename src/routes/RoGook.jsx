import logo from "../assets/imgs/gook/logo.svg";
import logoName from "../assets/imgs/gook/logoName.svg";
import banner from "../assets/imgs/gook/banner.svg";
import subc from "../assets/imgs/vector/companies/CMarsoft.svg";
import { useContext } from "react";
import { MyContext } from "../components/context/MyContext";

import CoHero from "../components/general/CoHero";
import CoPuesto from "../components/gook/CoPuesto";
import CoReq from "../components/gook/CoReq";
import CoDesign from "../components/gook/CoDesign";

const RoGook = () => {
    const { language, setRuta } = useContext(MyContext);
	setRuta("/experience");
    return(
        <div
			style={{ display: "flex", flexDirection: "column" }}
			className="gook"
		>
            <CoHero
				logo={logo}
				logoName={logoName}
				company="GOOK"
				role={
					language == "EN"
						? "UX/UI designer & developer"
						: "Diseñador y desarrolaldor UX/UI"
				}
				tags={
					language == "EN"
						? ["project", "design", "programming"]
						: ["proyecto", "diseño", "programación"]
				}
				subc={subc}
				banner={banner}
			/>
            <CoPuesto/>
			<CoReq/>
			<CoDesign/>
        </div>
    )
};

export default RoGook;