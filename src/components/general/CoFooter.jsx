import { useContext } from "react";
import { MyContext } from "../context/MyContext.js";
import sign from "/sign.svg";
import { Link } from "react-router-dom";

const foots = [
	{
		title: ["Otros espacios", "Other spaces"],
		links: [
			{
				name: [
					"LinkedIn (Saúl Ulises Hernández Cruz)",
					"LinkedIn (Saúl Ulises Hernández Cruz)",
				],
				url: "https://www.linkedin.com/in/saululises/",
				target: "_blank",
			},
			{
				name: ["Behance (zulhernndez)", "Behance (zulhernndez)"],
				url: "https://www.behance.net/zulhernndez",
				target: "_blank",
			},
			{
				name: ["Sketchfab (Zul Hernández)", "Sketchfab (Zul Hernández)"],
				url: "https://sketchfab.com/zulHernandez1912", // Updated URL for GitHub
				target: "_blank",
			},

			{
				name: ["GitHub (ZulHernandez)", "GitHub (ZulHernandez)"],
				url: "https://github.com/ZulHernandez", // Added GitHub link
				target: "_blank",
			},
		],
	},
	{
		title: ["Mapa del sitio", "Site map"],
		links: [
			{
				name: ["Inicio", "Home"],
				url: "/",
				target: "",
			},
			{
				name: ["Trabajos", "Works"],
				url: "/works",
				target: "",
			},
			{
				name: ["Currículo", "Resume"],
				url: "/resume",
				target: "",
			},
			{
				name: ["Sobre mi", "About me"],
				url: "/about-me",
				target: "",
			},
		],
	},
];

const CoFooter = () => {
	const { language, setLanguage } = useContext(MyContext);
	const { ruta, setRuta } = useContext(MyContext);

	return (
		<footer className="container-fluid">
			<div className="footer__links">
				{foots.map((foot, index) => {
					return (
						<div className="footer__links-card" key={index}>
							<h4>{foot.title[language == "ES" ? 0 : 1]}</h4>
							{foot.links.map((link, index) => {
								return (
									<Link
										to={link.url}
										key={index}
										target={link.target}
										rel="noopener noreferrer"
									>
										<span
											key={index}
											onClick={() => setRuta(link.url)}
											className={ruta === link.url ? "active" : ""}
										>
											{link.name[language == "ES" ? 0 : 1]}
										</span>
									</Link>
								);
							})}
						</div>
					);
				})}
				<div className="footer__links-card">
					<h4>{language === "ES" ? "Opciones" : "Options"}</h4>
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
			</div>
			<img src={sign} alt="Home" />
		</footer>
	);
};

export default CoFooter;
