import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import CoTitle from "../general/CoTitle";

import liver from "../../assets/imgs/home/liverpool.svg";
import grupoPm from "../../assets/imgs/home/grupoPM.svg";
import marsoft from "../../assets/imgs/home/marsoft.svg";

const colabs = [
	{
		name: "El puerto de Liverpool",
		logo: liver,
		date: ["2023 - actualidad", "2023 - present"],
		rol: ["Diseñador UX/UI senior", "Senior UX/UI Designer"],
		des: [
			[
				"Agilización de procesos de diseño",
				"Mantenimiento y modernización del sistema de diseño",
				"Dirección de equipos medianos para proyectos digitales",
				"Diseño omnicanal web, wap y app",
				"Research de primer y segundo nivel",
				"Mejora continua",
			],
			[
				"Agilization of design processes",
				"Maintenance and modernization of the design system",
				"Management of medium teams for digital projects",
				"Omnichannel design web, wap and app",
				"First and second level research",
				"Continuous improvement",
			],
		],
	},
	{
		name: "Grupo PM",
		logo: grupoPm,
		date: ["2021 - 2023", "2021 - 2023"],
		rol: ["Diseñador UX/UI senior", "Senior UX/UI Designer"],
		des: [
			[
				"Redacción y ejecución de Historias de usuario",
				"Software as a Service (SaaS)",
				"Coordinación de equipos multidisciplinarios",
				"Prototipado de alto nivel",
				"Generación de recursos gráficos",
				"Mejora de insumos",
			],
			[
				"Writing and execution of User Stories",
				"Software as a Service (SaaS)",
				"Coordination of multidisciplinary teams",
				"High-level prototyping",
				"Generation of graphic resources",
				"Improvement of inputs",
			],
		],
	},
	{
		name: "MARSOFT",
		logo: marsoft,
		date: ["2018 - 2021", "2018 - 2021"],
		rol: ["Cofundador/Diseñador UI-UX", "Co-founder/UI-UX Designer"],
		des: [
			[
				"Levantamiento de requerimientos",
				"Diseñador y desarrollador de interfaz y experiencia",
				"Administración de equipos de diseño y desarrollo",
				"Desarrollo de proyectos SaaS, e-commerce y landing pages",
			],
			[
				"Requirements gathering",
				"Interface and experience designer and developer",
				"Management of design and development teams",
				"Development of SaaS, e-commerce and landing pages",
			],
		],
	},
];

const CoColab = () => {
	const { language } = useContext(MyContext);

	return (
		<div id="colab" className="container-fluid grey">
			<CoTitle
				titles={
					language == "ES"
						? "Dónde he colaborado"
						: "Where I have collaborated"
				}
			/>
			<div className="colab-carrousel">
				{colabs.map((colab, index) => {
					return (
						<div key={index} className="colab-card">
							<div className="colab-card__head">
								<img src={colab.logo} alt={colab.name} />
								<div className="colab-card__head__text">
									<h3>{colab.name}</h3>
									<span className="text-normal">{colab.date[language == "ES" ? 0 : 1]}</span>
								</div>
							</div>
							<h4>{colab.rol[language == "ES" ? 0 : 1]}</h4>
							<ul className="list-group list-group-flush">
								{colab.des[language == "ES" ? 0 : 1].map((des, index) => {
									return (
										<li key={index} className="list-group-item">
											{des}
										</li>
									);
								})}
							</ul>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default CoColab;
