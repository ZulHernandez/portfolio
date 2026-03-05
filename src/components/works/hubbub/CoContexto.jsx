import { useContext } from "react";
import { MyContext } from "../../../components/context/MyContext.js";

import CoTitle from "../../../components/general/CoTitle.jsx";
import CoKPI from "../../../components/general/CoKPI.jsx";

import hubbubApp from "../../../assets/imgs/works/hubbub/hubbubApp.svg";
import maps from "../../../assets/imgs/works/hubbub/maps.webp";
import atr from "../../../assets/imgs/works/hubbub/atr.svg";

import arrow from "../../../assets/imgs/vectores/arrow_outward.svg";

const CoContexto = () => {
	const { language } = useContext(MyContext);

	const bullets = [
		{
			title:
				language === "ES"
					? "1. Investigación"
					: "1. Research",
			description:
				language === "ES"
					? "Análisis de la problemática, generación y entendimiento de conceptos y research de usuarios y proyectos."
					: "Analysis of the problem, generation and understanding of concepts, and user and project research.",
			ref: language === "ES" ? "#interfaz" : "#interface",
		},
		{
			title:
				language === "ES"
					? "2. Diseño"
					: "2. Design",
			description:
				language === "ES"
					? "Definición de propuesta e identidad gráfica, sketching de ideas y prototipado del proyecto."
					: "Definition of proposal and graphic identity, sketching of ideas and prototyping of the project.",
			ref: language === "ES" ? "#notificaciones" : "#notifications",
		},
		{
			title:
				language === "ES"
					? "3. Programación"
					: "3. Programming",
			description:
				language === "ES"
					? "Planeación de ejecución, codificación y desarrollo"
					: "Planning, coding and development",
			ref: language === "ES" ? "#flujo-y-metodos" : "#flow-and-methods",
		},
	];

	return (
		<div
			id={language === "ES" ? "contexto" : "context"}
			className="container-fluid grey"
		>
			<CoTitle titles={language === "ES" ? "El contexto" : "Context"} />
			<span className="text-normal">
				{language === "ES"
					? "El Laboratorio de Diseño Acústico de la Universidad Autónoma Metropolitana lleva más de 6 años investigando y haciendo estudios sobre el fenómenos del ruido dentro de la Ciudad de México y su Área Metropolitana lo que provoco una serie de necesidades y desarrollos que se fueron implementando a lo largo del proyecto, para el momento de mi integración dentro del equipo se contaba con lo siguiente"
					: "The Acoustic Design Laboratory of the Universidad Autónoma Metropolitana has been researching and studying noise phenomena in Mexico City and its Metropolitan Area for over 6 years, leading to a series of needs and developments that were implemented throughout the project. By the time I joined the team, the following elements were already in place:"}
			</span>
			<div className="context-data">
				<div className="context-data__uno" style={{minWidth: "auto"}}>
					<img src={hubbubApp} alt="" />
					<div className="context-data__uno-mapa">
						<CoKPI
							title={""}
							dato={language === "ES" ? "1 aplicación" : "1 app"}
							desc={
								language === "ES"
									? "(Funcionando para Android y iOS)"
									: "(Working for Android and iOS)"
							}
							imgs={[""]}
							imgSize="2.4rem"
							pos="left"
							color="#4D4D4D"
						/>
						<CoKPI
							title={""}
							dato={language === "ES" ? "51 reportes" : "51 reports"}
							desc={
								language === "ES"
									? "(Para el corte de datos en abril de 2022)"
									: "(For the data cut in April 2022)"
							}
							imgs={[""]}
							imgSize="2.4rem"
							pos="left"
							color="#4D4D4D"
						/>
					</div>
				</div>
				<div className="context-data__dos" style={{minWidth: "auto"}}>
					<img src={maps} alt="" />
					<CoKPI
						title={""}
						dato={language === "ES" ? "+6 mapas" : "+6 maps"}
						desc={
							language === "ES"
								? "Incluyendo uno general de la ciudad más otras vías"
								: "Including one general map of the city and other routes"
						}
						imgs={[""]}
						imgSize="2.4rem"
						pos="left"
						color="#4D4D4D"
					/>
				</div>
				<div className="context-data__dos" style={{minWidth: "auto"}}>
					<img src={atr} alt="" />
					<CoKPI
						title={""}
						dato={language === "ES" ? "Equipo Multidisciplinar" : "Multidisciplinary Team"}
						desc={
							language === "ES"
								? "Incluyendo desarrolladores, arquitectos y diseñadores"
								: "Including developers, architects and designers"
						}
						imgs={[""]}
						imgSize="2.4rem"
						pos="left"
						color="#4D4D4D"
					/>
				</div>
			</div>
			<div>
				<span className="text-normal">
					{language === "ES"
						? "MI participación dentro del equipo era bajo el cumplimiento de una necesidad puntual, el diseño de un espacio de divulgación para los datos y conceptos del fenómeno más dashboards con diferentes vistas e intencionalidades para los datos de reportes de la aplicación. Todo el proceso de diseño de solución corrio por mi cuenta y se concreto en 3 fases:"
						: "My participation in the team was to fulfill a specific need: the design of a dissemination space for the data and concepts of the phenomenon, as well as dashboards with different views and intentions for the application report data. The entire solution design process was carried out by me and was completed in 3 phases:"}
				</span>
				<br />
				<br />
				<br />
				{bullets.map((bullet, index) => (
					<div key={index} className="bullet-point">
						<a href={bullet.ref}>
							<div>
								<span className="bullet-point__title">{bullet.title}</span>
								<img
									src={arrow}
									alt={
										language === "ES"
											? `Ir a (${bullet.title})`
											: `Go to (${bullet.title})`
									}
								/>
							</div>
						</a>
						<br />
						<span className="text-normal">{bullet.description}</span>
						<br />
						<br />
					</div>
				))}
			</div>
		</div>
	);
};

export default CoContexto;
