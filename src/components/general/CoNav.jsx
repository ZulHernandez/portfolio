import sign from "/sign.svg";
import signGrey from "/Greysign.svg";
import menu from "../../assets/imgs/vectores/menu.svg";

import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { MyContext } from "../../components/context/MyContext";
import useScreenSize from "../context/useScreenSize";

import github from "../../assets/imgs/home/GitHub.svg";
import sketchfab from "../../assets/imgs/home/SketchFab.svg";
import behance from "../../assets/imgs/home/Behance.svg";
import linkedin from "../../assets/imgs/home/LinkedIn.svg";

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

const redes = [
	{
		icon: github,
		text: "GitHub",
		url: "https://github.com/ZulHernandez",
	},
	{
		icon: sketchfab,
		text: "SketchFab",
		url: "https://sketchfab.com/zulHernandez1912",
	},
	{
		icon: behance,
		text: "Behance",
		url: "https://www.behance.net/zulhernndez",
	},
	{
		icon: linkedin,
		text: "LinkedIn",
		url: "https://www.linkedin.com/in/saululises/",
	},
];

//* Componente del header
const CoNav = () => {
	const { ruta, language, setLanguage, amplio, setAmplio } = useContext(MyContext);
	const { width, height } = useScreenSize();

	if (width >= 800) {
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
			<div
				className="nav-header"
				style={{
					height: amplio ? "100vh" : "min-content",
				}}
			>
				<div className="nav-header__sup">
					<img
						id="menu"
						style={{ transform: amplio ? "scaleY(-1)" : "scaleY(1)" }}
						src={menu}
						alt="Menú"
						onClick={() => {
							setAmplio(!amplio);
						}}
					/>
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
				<div
					className="nav-header__links"
					style={{
						display: amplio ? "flex" : "none",
						paddingBottom: amplio ? "50px" : "20px",
					}}
				>
					<div className="nav-header__links--text">
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
					<div className="contact-card__redes">
						{redes.map((red, index) => (
							<a key={index} href={red.url} className="contact-card__link">
								<div className="contact-card__redes">
									<img src={red.icon} alt={red.text} />
								</div>
							</a>
						))}
					</div>
				</div>
			</div>
		);
	}
};

export default CoNav;
