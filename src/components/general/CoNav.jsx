import sign from "/sign.svg";
import signGrey from "/Greysign.svg";
import menu from "../../assets/imgs/vectores/menu.svg";

import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { MyContext } from "../../components/context/MyContext";
import useScreenSize from "../context/useScreenSize";

let opciones = [
	{
		id: 1,
		name: "Home",
		icon: [sign, signGrey],
		link: "/",
	},
	{
		id: 2,
		name: ["Trabajos", "Works"],
		icon: null,
		link: "/works",
	},
	{
		id: 3,
		name: ["Currículo", "Resume"],
		icon: null,
		link: "/resume",
	},
	{
		id: 4,
		name: ["Sobre mí", "About me"],
		icon: null,
		link: "/about-me",
	},
];

//* Componente del header
const CoNav = () => {
	const { ruta, language, setLanguage } = useContext(MyContext);
	const { width, height } = useScreenSize();
	const [amplio, setAmplio] = useState(false);

	if (width >= 900) {
		return (
			<div className="nav-header">
				<div className="nav-header__links">
					{opciones.map((opcion) => (
						<Link to={opcion.link} key={opcion.id}>
							{opcion.icon ? (
								<img
									src={ruta === opcion.link ? opcion.icon[0] : opcion.icon[1]}
									alt={opcion.name}
								/>
							) : (
								<span className={ruta === opcion.link ? "active" : ""}>
									{language === "ES" ? opcion.name[0] : opcion.name[1]}
								</span>
							)}
							{opcion.name[language]}
						</Link>
					))}
				</div>
				<div className="nav-header__options">
					<span
						className={language === "EN" ? "active" : ""}
						onClick={() => setLanguage("EN")}
					>
						EN
					</span>
					<span style={{ textDecoration: "none" }}>&nbsp;|&nbsp;</span>
					<span
						className={language === "ES" ? "active" : ""}
						onClick={() => setLanguage("ES")}
					>
						ES
					</span>
				</div>
			</div>
		);
	} else {
		
		return (
			<div className="nav-header">
				<div className="nav-header__sup">
					<img id="menu" src={menu} alt="Menú" onClick={() => {setAmplio(!amplio)}}/>
					<div className="nav-header__options">
						<span
							className={language === "EN" ? "active" : ""}
							onClick={() => setLanguage("EN")}
						>
							EN
						</span>
						<span style={{ textDecoration: "none" }}>&nbsp;|&nbsp;</span>
						<span
							className={language === "ES" ? "active" : ""}
							onClick={() => setLanguage("ES")}
						>
							ES
						</span>
					</div>
				</div>
				<div className="nav-header__links" style={{ display: amplio ? "flex" : "none", paddingBottom: amplio ? "50px" : "20px" }}>
					{opciones.map((opcion) => (
						<Link to={opcion.link} key={opcion.id}>
							{opcion.icon ? (
								<img
									src={ruta === opcion.link ? opcion.icon[0] : opcion.icon[1]}
									alt={opcion.name}
								/>
							) : (
								<span className={ruta === opcion.link ? "active" : ""}>
									{language === "ES" ? opcion.name[0] : opcion.name[1]}
								</span>
							)}
						</Link>
					))}
				</div>
			</div>
		);
	}
};

export default CoNav;
