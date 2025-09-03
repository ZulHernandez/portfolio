import { useContext } from "react";
import { MyContext } from "../../../components/context/MyContext.js";

import CoTitle from "../../../components/general/CoTitle.jsx";
import CoKPI from "../../../components/general/CoKPI.jsx";

import hubbubApp from "../../../assets/imgs/works/hubbub/hubbubApp.svg";
import maps from "../../../assets/imgs/works/hubbub/maps.png";

import pistola1 from "../../../assets/imgs/works/movilidad/ccs1.svg";
import pistola2 from "../../../assets/imgs/works/movilidad/gb.svg";
import pistola3 from "../../../assets/imgs/works/movilidad/j1772.svg";
import pistola4 from "../../../assets/imgs/works/movilidad/TAC.svg";
import pistola5 from "../../../assets/imgs/works/movilidad/tesla.svg";
import pistola6 from "../../../assets/imgs/works/movilidad/type2.svg";
import brandColab from "../../../assets/imgs/works/movilidad/brandColab.svg";
import arrow from "../../../assets/imgs/vectores/arrow_outward.svg";

const CoContexto = () => {
	const { language } = useContext(MyContext);

	const bullets = [
		{
			title:
				language === "ES"
					? "1. Investigación y definición de interfaz"
					: "1. Research and definition of interface",
			description:
				language === "ES"
					? "Benchamarks e investigación directa con usuarios para la definición del flujo principal del usuario."
					: "Benchmarks and direct user research to define the main user flow.",
			ref: language === "ES" ? "#interfaz" : "#interface",
		},
		{
			title:
				language === "ES"
					? "2. Ambiente de notificaciones"
					: "2. Notification environment",
			description:
				language === "ES"
					? "Integración de actividades en tiempo real más estatus para el usuario más allá del aplicativo y ambiente de Liverpool"
					: "Integration of real-time activities and status for the user beyond the application and Liverpool environment.",
			ref: language === "ES" ? "#notificaciones" : "#notifications",
		},
		{
			title:
				language === "ES"
					? "3. Flujo transaccional y métodos de pago"
					: "3. Transaction flow and payment methods",
			description:
				language === "ES"
					? "Modificación y adaptación constante del flujo transaccional mas la exploración de métodos de pago que influenciaron directamente el flujo del usuario"
					: "Modification and constant adaptation of the transactional flow, as well as the exploration of payment methods that directly influenced the user's flow.",
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
			</div>
			<div>
				<span className="text-normal">
					{language === "ES"
						? "Los temas de desarrollo del proyecto dentro del enfoque de UX que fueron mas interesantes serian estos cuatro:"
						: "The project development topics within the UX approach that were most interesting would be these four:"}
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
