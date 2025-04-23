import logo from "../assets/imgs/hubbub/logo.svg";
import logoName from "../assets/imgs/hubbub/logoName.svg";
import banner from "../assets/imgs/hubbub/banner.svg";
import subc from "../assets/imgs/vector/companies/CUAM.svg";
import { useContext } from "react";
import { MyContext } from "../components/context/MyContext";

import CoHero from "../components/general/CoHero";
import CoPuesto from "../components/hubbub/CoPuesto";
import CoResPri from "../components/hubbub/CoResPri";
import CoResSec from "../components/hubbub/CoResSec";
import CoDefDesign from "../components/hubbub/CoDefDesign";
import CoTools from "../components/hubbub/CoTools";
import CoPlan from "../components/hubbub/CoPlan";
import CoSite from "../components/hubbub/CoSite";

import acrobat from "../assets/imgs/hubbub/acrobat.svg";
import github from "../assets/imgs/hubbub/GitHub.svg";
import behance from "../assets/imgs/hubbub/Behance.svg";
import hubbub from "../assets/imgs/hubbub/hubbub.svg";

const CoLinks = () => {
	let links = [
		{
			name: "Tesis",
			link: "https://drive.google.com/file/d/1y1VJYzoFg9sFRbTNdPsxPaBtnTXigo6Y/view?usp=sharing",
			icon: acrobat,
		},
		{
			name: "GitHub",
			link: "https://github.com/ZulHernandez/HUBBUB",
			icon: github,
		},
		{
			name: "Behance",
			link: "https://www.behance.net/gallery/149854339/HUBBUB-ver-el-ruido",
			icon: behance,
		},
	];

	return links.map((link) => {
		return (
			<a
				key={links.indexOf(link)}
				href={link.link}
				target="_blank"
				rel="noreferrer"
			>
				<img
					loading="lazy"
					className="link-icon"
					src={link.icon}
					alt={link.name}
				/>
				<p>{link.name}</p>
			</a>
		);
	});
};

const CoFrame = () => {
	return (
		<div>
			<iframe
				allowfullscreen
				src="https://relayto.com/saul-hernandez/ver-el-ruido-un-ejercicio-de-visualizacion-de-la-informacion-para-el-ruido-de-la-ciudad-de-otxc8jwj5vnqe?embed=1"
				width="100%"
				height="100%"
				style={{ mixBlendMode: "multiply" }}
			></iframe>
			{/* <iframe
					title="paleyPark"
					frameBorder="0"
					allowfullscreen
					mozallowfullscreen="true"
					webkitallowfullscreen="true"
					allow="autoplay; fullscreen; xr-spatial-tracking"
					src="https://sketchfab.com/models/de7a7fbca06140319776930b19a0ddbf/embed?autospin=1&autostart=1&camera=0&annotations_visible=1"
				></iframe> */}
		</div>
	);
};

const RoHubbub = () => {
	const { language, setRuta } = useContext(MyContext);
	setRuta("/experience");
	return (
		<div
			style={{ display: "flex", flexDirection: "column" }}
			className="hubbub"
		>
			<CoHero
				logo={logo}
				logoName={logoName}
				company="HUBBUB"
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
			<CoPuesto />
			<CoResPri />
			<CoResSec />
			<center>
				<hr className="line-hubbub" />
			</center>
			<CoDefDesign />
			<CoTools />
			<CoPlan />
			<center>
				<hr className="line-hubbub" />
			</center>
			<CoSite />
			<center>
				<hr className="line-hubbub" />
			</center>
			<div style={{ padding: "10rem" }}>
				<div style={{ paddingBottom: "10rem" }} className="img-fin">
					<img loading="lazy" src={hubbub} id="code" />
				</div>
				<p
					style={{ textAlign: "center", width: "100%" }}
					className="monBs-dark"
				>
					{language == "EN"
						? "All the documents related to the project can be found in the following links."
						: "Todos los documentos relacionados con el proyecto los puedes encontrar en los siguientes enlaces."}
				</p>
				<div style={{ paddingTop: "5rem" }} className="cont-link">
					<CoLinks />
				</div>
				<br /><br />
				<CoFrame />
			</div>
		</div>
	);
};
export default RoHubbub;
