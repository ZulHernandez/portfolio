import { useContext } from "react";
import { MyContext } from "../components/context/MyContext.js";

import { useLocation } from "react-router-dom";
import { useState } from "react";

let tipos = [
	["General", "General"],
	["Sistema_de_diseño", "Design_system"],
	["Investigación", "Research"],
	["Experiencia", "Experience"],
];

let infos = [
	{
		title: ["Portafolios", "Portfolios"],
		bullets: [
			{
				text: ["zulhernandez.com", "zulhernandez.com"],
				link: "https://zulhernandez.com",
			},
			{
				text: ["linkedin.com/in/saululises", "linkedin.com/in/saululises"],
				link: "https://linkedin.com/in/saululises",
			},
			{
				text: ["behance.net/zulhernndez", "behance.net/zulhernndez"],
				link: "https://behance.net/zulhernndez",
			},
			{
				text: [
					"sketchfab.com/zulHernandez1912",
					"sketchfab.com/zulHernandez1912",
				],
				link: "sketchfab.com/zulHernandez1912",
			},
			{
				text: ["github.com/ZulHernandez", "github.com/ZulHernandez"],
				link: "github.com/ZulHernandez",
			},
		],
	},
	{
		title: ["Contacto", "Contact"],
		bullets: [
			{
				text: ["+52 5565027645", "+52 5565027645"],
				link: "tel:+525565027645",
			},
			{
				text: [
					"saululiseshernandezcruz@gmail.com",
					"saululiseshernandezcruz@gmail.com",
				],
				link: "mailto:saululiseshernandezcruz@gmail.com",
			},
		],
	},
	{
		title: ["Educación", "Education"],
		bullets: [
			{
				subtext: "Universidad Autónoma Metropolitana",
				text: [
					"Lic. en Diseño de la Comunicación Gráfica",
					"Ba. in Graphic Communication Design",
				],
				link: null,
			},
			{
				subtext: "Instituto Politécnico Nacional",
				text: ["Tec. en Programación", "Te. in Programming"],
				link: null,
			},
		],
	},
	{
		title: ["Idiomas", "Languages"],
		bullets: [
			{
				text: ["Español", "Spanish"],
				link: null,
			},
			{
				text: ["Inglés", "English"],
				link: null,
			},
		],
	},
];

let habilidades = [
	[
		["Storytelling", "Storytelling"],
		["Design Thinking", "Design Thinking"],
		["Liderazgo", "Leadership"],
		["Manejo destakeholders", "Stakeholder management"],
		["Dirección de equipos", "Team management"],
		["Pensamiento crítico", "Critical thinking"],
		["Metodologías ágiles", "Agile methodologies"],
		["Sistema de diseño", "Design system"],
	],
	[
		["Automatización", "Automation"],
		["Herramientas de diseño", "Design tools"],
		["Desarrollo", "Development"],
		["Actualización", "Update"],
		["Prototipoz de alta fidelidad", "High-fidelity prototypes"],
		["Variables de Figma", "Figma variables"],
		["UI Kits", "UI Kits"],
	],
	[
		["Investigación cuantitativa", "Quantitative research"],
		["Investigación cualitativa", "Qualitative research"],
		["Historias de usuario", "User stories"],
		["Observación directa", "Direct observation"],
		["Análisis de datos", "Data analysis"],
		["Prototipado", "Prototyping"],
		["Testeo de usabilidad", "Usability testing"],
	],
	[
		["Storytelling", "Storytelling"],
		["Journey map", "Journey map"],
		["Rediseños", "Redesigns"],
		["Gestión de proyectos", "Project management"],
		["Proyectos simultaneos", "Simultaneous projects"],
	],
];

let Resumenes = [
	[
		[
			"Diseñador de productos digitales con experiencia en Fintech y e-commerce, metodologías ágiles y comunicación con equipos multidisciplinarios.",
			"Digital product designer with experience in Fintech and e-commerce, agile methodologies and communication with multidisciplinary teams.",
		],
		[
			"Diseño, desarrollo y automatización de sistemas de diseño basados en Design Operations, integrando herramientas como plugins propios, UI Kits, plantillas, documentación y guías de estilo.",
			"Design, development and automation of design systems based on Design Operations, integrating tools such as custom plugins, UI Kits, templates, documentation and style guides.",
		],
	],
	[
		[
			"Diseñador de productos digitales con experiencia en Fintech y e-commerce, especializado en sistemas de diseño y automatización.",
			"Digital product designer with experience in Fintech and e-commerce, specialized in design systems and automation.",
		],
		[
			"Experto en Design Operations, integrando herramientas como plugins propios, UI Kits, plantillas, documentación y guías de estilo.",
			"Expert in Design Operations, integrating tools such as custom plugins, UI Kits, templates, documentation and style guides.",
		],
	],
	[
		[
			"Diseñador de productos digitales con sólidos conocimientos en investigación de usuarios para el diseño de experiencias e interfaces optimizadas.",
			"Digital product designer with solid knowledge in user research for the design of optimized experiences and interfaces.",
		],
		[
			"Gestión de equipos y proyectos multidisciplinarios mientras conecta directamente con los usuarios.",
			"Management of multidisciplinary teams and projects while connecting directly with users.",
		],
	],
	[
		[
			"Diseñador UX/UI senior enfocado en la creación de journeys optimizados, historias de usuario impactantes y flujos intuitivos para sistemas de Fintech y comercio electrónico.",
			"Senior UX/UI designer focused on creating optimized journeys, impactful user stories and intuitive flows for Fintech and e-commerce systems.",
		],
	],
];

let experiencias = [
	{
		empresa: "El Puerto de Liverpool",
		rol: ["Diseñador UX/UI Senior", "Senior UX/UI Designer"],
		ubicacion: ["Ciudad de México", "Mexico City"],
		fecha: ["feb 2023 - Actualidad", "feb 2023 - Present"],
		bullets: [
			[
				"Creación de archivos de diseño para equipos de desarrollo en iOS, Android y web.",
				"Creation of design files for development teams in iOS, Android and web.",
			],
			[
				"Prototipado de alta fidelidad en Figma para grandes sistemas de comercio electrónico y fintech.",
				"High-fidelity prototyping in Figma for large e-commerce and fintech systems.",
			],
			[
				"Gestión simultánea de 3 a 5 equipos y proyectos relacionados con UX/UI.",
				"Simultaneous management of 3 to 5 teams and projects related to UX/UI.",
			],
			[
				"Rediseño de proyectos existentes para optimización y mejora de flujos de usuario.",
				"Redesign of existing projects for optimization and improvement of user flows.",
			],
		],
		subbullets: null,
	},
	{
		empresa: "Grupo People Media",
		rol: ["Diseñador UX/UI Senior", "Senior UX/UI Designer"],
		ubicacion: ["Ciudad de México", "Mexico City"],
		fecha: ["nov 2021 - feb 2023", "nov 2021 - feb 2023"],
		bullets: [
			[
				"Diseño de sistemas de pago, inventario y administración de usuarios para el Instituto Mexicano del Seguro Social.",
				"Design of payment, inventory and user management systems for the Mexican Social Security Institute.",
			],
			[
				"Redacción de historias de usuario y técnicas para journeys.",
				"Writing user stories and techniques for journeys.",
			],
			[
				"Gestión simultánea de 3 a 5 equipos y proyectos relacionados con UX/UI.",
				"Simultaneous management of 3 to 5 teams and projects related to UX/UI.",
			],
			[
				"Creación de prototipos altamente interactivos utilizados en presentaciones gubernamentales y presidenciales.",
				"Creation of highly interactive prototypes used in government and presidential presentations.",
			],
		],
		subbullets: null,
	},
	{
		empresa: "Marsoft",
		rol: ["Cofundador y Director de diseño", "Co-founder and Design Director"],
		ubicacion: ["Ciudad de México", "Mexico City"],
		fecha: ["abr 2018 - nov 2021", "apr 2018 - nov 2021"],
		bullets: [
			[
				"Investigación de soluciones de experiencia e interfaz para diversas industrias y propósitos.",
				"Research of experience and interface solutions for various industries and purposes.",
			],
			[
				"Prototipado de alta fidelidad en Figma y Adobe XD.",
				"High-fidelity prototyping in Figma and Adobe XD.",
			],
			[
				"Investigación de requisitos suaves y duros directamente con usuarios finales y empresas.",
				"Research of soft and hard requirements directly with end users and companies.",
			],
			[
				"Comunicación directa y gestión de repositorios con clientes.",
				"Direct communication and management of repositories with clients.",
			],
			[
				"Atención a proyectos variados:",
				"Attention to various projects:",
			],
		],
		subbullets: [
			[
				"GOOK Óptica: comercio electrónico y gestión de inventario para productos de salud visual.",
				"GOOK Optics: e-commerce and inventory management for visual health products.",
			],
			[
				"IDEA: diseño y desarrollo de página web para ingeniería alimentaria.",
				"IDEA: design and development of a website for food engineering.",
			],
			[
				"Combucar: diseño y desarrollo de página web para una empresa de instalación de gas natural.",
				"Combucar: design and development of a website for a natural gas installation company."
			]
		]
	},
];

const RoHome = () => {
	const { setRuta, language } = useContext(MyContext);
	const [filtro, setFiltro] = useState(0);

	setRuta("/resume");

	return (
		<div id="resume" className="container-fluid">
			<div className="tags-list">
				{tipos.map((tipo, index) => (
					<div
						key={index}
						className={
							index == filtro ? "tags-list__tag active" : "tags-list__tag"
						}
						onClick={() => {
							setFiltro(index);
						}}
						style={{
							backgroundColor:
								index === filtro
									? index === 0
										? "#ff2079"
										: index === 1
										? "#2088FF"
										: index === 2
										? "#7220FF"
										: "#FF904B"
									: "transparent",
							borderColor:
								index === 0
									? "#ff2079"
									: index === 1
									? "#2088FF"
									: index === 2
									? "#7220FF"
									: "#FF904B",
						}}
					>
						<span
							style={{
								color:
									index === filtro
										? "#fff"
										: index === 0
										? "#ff2079"
										: index === 1
										? "#2088FF"
										: index === 2
										? "#7220FF"
										: "#FF904B",
							}}
						>
							{language == "ES"
								? tipo[0].replaceAll("_", " ")
								: tipo[1].replaceAll("_", " ")}
						</span>
					</div>
				))}
			</div>
			<div className="resume__sheet">
				<div className="resume__sheet-header">
					<h1
						style={{
							color:
								filtro === 0
									? "#ff2079"
									: filtro === 1
									? "#2088FF"
									: filtro === 2
									? "#7220FF"
									: "#FF904B",
						}}
					>
						Saúl Hernández
					</h1>
					<h2>Diseñador UX/UI Senior en El Puerto de Liverpool</h2>
					<hr />
				</div>
				<div className="resume__sheet-content">
					<div className="resume__sheet-content__info">
						{infos.map((info, index) => (
							<div key={index} className="resume__sheet-content__info-card">
								<h3>{language == "ES" ? info.title[0] : info.title[1]}</h3>
								<div className="resume__sheet-content__info-card__bullets">
									{info.bullets.map((bullet, index) => (
										<div key={index}>
											<p>
												{bullet.subtext && <span>{bullet.subtext}</span>}
												{bullet.subtext && <br />}
											</p>
											<a
												href={bullet.link}
												target="_blank"
												rel="noopener noreferrer"
											>
												<p>
													{language == "ES" ? bullet.text[0] : bullet.text[1]}
												</p>
											</a>
										</div>
									))}
								</div>
							</div>
						))}
						<div className="resume__sheet-content__info-card">
							<h3>{language == "ES" ? "Habilidades" : "Skills"}</h3>
							<div className="resume__sheet-content__info-card__bullets">
								{habilidades[filtro].map((habilidad, index) => (
									<div key={index}>
										<p>{language == "ES" ? habilidad[0] : habilidad[1]}</p>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="resume__sheet-content__body">
						<h3>{language == "ES" ? "Resumen" : "Summary"}</h3>
						<div className="resume__sheet-content__body-summary">
							<ul>
								{Resumenes[filtro].map((resumen, index) => (
									<li key={index}>
										{language == "ES" ? resumen[0] : resumen[1]}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RoHome;
