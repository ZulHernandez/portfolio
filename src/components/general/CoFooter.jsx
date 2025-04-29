import { useContext } from "react";
import { MyContext } from "../context/MyContext.js";
import sign from "/Greysign.svg";

let foots = [
	{
		title: ["Otros espacios", "Other spaces"],
		links: [
			{
				name: [
					"LinkedIn (Saúl Ulises Hernández Cruz)",
					"LinkedIn (Saúl Ulises Hernández Cruz)",
				],
				url: "https://www.linkedin.com/in/saululises/",
			},
			{
				name: ["Behance (zulhernndez)", "Behance (zulhernndez)"],
				url: "https://www.behance.net/zulhernndez",
			},
			{
				name: ["Sketchfab (Zul Hernández)", "Sketchfab (Zul Hernández)"],
				url: "https://sketchfab.com/zulHernandez1912", // Updated URL for GitHub
			},

			{
				name: ["GitHub (ZulHernandez)", "GitHub (ZulHernandez)"],
				url: "https://github.com/ZulHernandez", // Added GitHub link
			},
		],
	},
	{
		title: ["Mapa del sitio", "Site map"],
		links: [
			{
				name: ["Inicio", "Home"],
				url: "/",
			},
			{
				name: ["Trabajos", "Works"],
				url: "/works",
			},
			{
				name: ["Currículo", "Resume"],
				url: "/resume",
			},
			{
				name: ["Sobre mi", "About me"],
				url: "/about-me",
			},
		],
	},
];

const CoFooter = () => {
	const { language } = useContext(MyContext);
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
									<span
										href={link.url}
										key={index}
										onClick={() => setRuta(link.url)}
                                        className={ruta === link.url ? "active" : ""}
									>
										{link.name[language == "ES" ? 0 : 1]}
									</span>
								);
							})}
						</div>
					);
				})}
				<div className="footer__links-card">
					<h4>Opciones</h4>
				</div>
			</div>
            <img src={sign} alt="Home" />
		</footer>
	);
};

export default CoFooter;
