import sign from "/sign.svg";
import signGrey from "/Greysign.svg";
import menu from "../../assets/imgs/vectores/menu.svg";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { NavigationContext } from "../context/NavigationContext";
import useScreenSize from "../context/useScreenSize";
import CoLanguageSwitch from "./CoLanguageSwitch";
import redes from "../context/varRedes";
import { MOBILE_BREAKPOINT } from "../../utils/breakpoints";

interface Opcion {
	id: number;
	key: string;
	icon: [string, string] | null;
	link: string;
}

const opciones: Opcion[] = [
	{ id: 1, key: "home", icon: [sign, signGrey], link: "/" },
	{ id: 2, key: "works", icon: null, link: "/works" },
	{ id: 3, key: "resume", icon: null, link: "/resume" },
	{ id: 4, key: "about", icon: null, link: "/about-me" },
];

//* Componente del header
const CoNav = () => {
	const { ruta, amplio, setAmplio } = useContext(NavigationContext);
	const { t } = useTranslation();
	const { width } = useScreenSize();

	if (width >= MOBILE_BREAKPOINT) {
		return (
			<div className="nav-header">
				<div className="nav-header__links">
					{opciones.map((opcion) => (
						<Link to={opcion.link} key={opcion.id}>
							{opcion.icon ? (
								<img
									src={ruta === opcion.link ? opcion.icon[0] : opcion.icon[1]}
									alt={t(`nav.${opcion.key}`)}
								/>
							) : (
								<span className={ruta === opcion.link ? "active" : ""}>
									{t(`nav.${opcion.key}`)}
								</span>
							)}
						</Link>
					))}
				</div>
				<CoLanguageSwitch />
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
					<button
						type="button"
						aria-expanded={amplio}
						aria-label={t("nav.menuAlt")}
						onClick={() => {
							setAmplio(!amplio);
						}}
						style={{
							background: "none",
							border: "none",
							padding: 0,
							cursor: "pointer",
						}}
					>
						<img
							id="menu"
							style={{ transform: amplio ? "scaleY(-1)" : "scaleY(1)" }}
							src={menu}
							alt=""
						/>
					</button>
					<CoLanguageSwitch />
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
										alt={t(`nav.${opcion.key}`)}
									/>
								) : (
									<span className={ruta === opcion.link ? "active" : ""}>
										{t(`nav.${opcion.key}`)}
									</span>
								)}
							</Link>
						))}
					</div>
					<div className="contact-card__redes">
						{redes.map((red, index) => (
							<a key={index} href={red.url} className="contact-card__link">
								<div className="contact-card__redes">
									<img loading="lazy" src={red.icon} alt={red.text} />
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
