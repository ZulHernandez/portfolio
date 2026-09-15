import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { NavigationContext } from "../context/NavigationContext";
import sign from "/sign.svg";
import { Link } from "react-router-dom";
import CoLanguageSwitch from "./CoLanguageSwitch";

interface OtherSpaceLink {
	name: string;
	url: string;
	target: string;
}

// Nombres de perfiles (idénticos en ambos idiomas) — no necesitan pasar por
// i18n, solo la etiqueta del grupo ("Otros espacios") sí.
const otherSpaces: OtherSpaceLink[] = [
	{
		name: "LinkedIn (Saúl Ulises Hernández Cruz)",
		url: "https://www.linkedin.com/in/saululises/",
		target: "_blank",
	},
	{
		name: "Behance (zulhernndez)",
		url: "https://www.behance.net/zulhernndez",
		target: "_blank",
	},
	{
		name: "Sketchfab (Zul Hernández)",
		url: "https://sketchfab.com/zulHernandez1912",
		target: "_blank",
	},
	{
		name: "GitHub (ZulHernandez)",
		url: "https://github.com/ZulHernandez",
		target: "_blank",
	},
];

// El mapa del sitio reutiliza las mismas claves de traducción que CoNav
// (nav.home, nav.works, ...) en vez de repetir "Inicio"/"Home" otra vez.
const siteMap = [
	{ navKey: "home", url: "/" },
	{ navKey: "works", url: "/works" },
	{ navKey: "resume", url: "/resume" },
	{ navKey: "about", url: "/about-me" },
];

const CoFooter = () => {
	const { ruta, setRuta } = useContext(NavigationContext);
	const { t } = useTranslation();

	return (
		<footer className="container-fluid no-print">
			<div className="footer__links">
				<div className="footer__links-card">
					<h4>{t("footer.otherSpaces")}</h4>
					{otherSpaces.map((link, index) => (
						<Link to={link.url} key={index} target={link.target} rel="noopener noreferrer">
							<span onClick={() => setRuta(link.url)}>{link.name}</span>
						</Link>
					))}
				</div>
				<div className="footer__links-card">
					<h4>{t("footer.siteMap")}</h4>
					{siteMap.map((link, index) => (
						<Link to={link.url} key={index}>
							<span
								onClick={() => setRuta(link.url)}
								className={ruta === link.url ? "active" : ""}
							>
								{t(`nav.${link.navKey}`)}
							</span>
						</Link>
					))}
				</div>
				<div className="footer__links-card">
					<h4>{t("footer.options")}</h4>
					<CoLanguageSwitch />
				</div>
			</div>
			<img loading="lazy" src={sign} alt="Home" />
		</footer>
	);
};

export default CoFooter;
