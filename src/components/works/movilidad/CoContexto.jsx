import { useContext } from "react";
import { MyContext } from "../../../components/context/MyContext.js";

import CoTitle from "../../../components/general/CoTitle.jsx";
import CoKPI from "../../../components/general/CoKPI.jsx";

import map from "../../../assets/imgs/works/movilidad/cdmx.svg";
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
		}
	];

	return (
		<div
			id={language === "ES" ? "contexto" : "context"}
			className="container-fluid grey"
		>
			<CoTitle titles={language === "ES" ? "El contexto" : "Context"} />
			<span className="text-normal">
				{language === "ES"
					? "Producto de la colaboración entre BYD y Liverpool más el creciente mercado de carros eléctricos dentro de territorio mexicano provoco la necesidad de la instalación y ofrecimiento de puntos de carga en espacios estratégicos. El Puerto de Liverpool gracias a su división de inmoviliaria generan una serie de espacios dentro de centros comerciales como las Galerías y otros más donde se Liverpool tiene presencia para la instalación de electrolineras dentro de la Ciudad de Mexico."
					: "Due to the collaboration between BYD and Liverpool, along with the growing market for electric cars in Mexico, there was a need to install and offer charging points in strategic locations. Liverpool's real estate division creates a series of spaces within shopping centers like Galerías and others where Liverpool has a presence, allowing for the installation of electric charging stations within Mexico City."}
			</span>
			<div className="context-data">
				<div className="context-data__uno">
					<img src={map} alt="" />
					<div className="context-data__uno-mapa">
						<CoKPI
							title={""}
							dato={language === "ES" ? "17 estaciones" : "17 stations"}
							desc={
								language === "ES"
									? "(Distribuidas en la zona norte de la CDMX)"
									: "(Distributed in the northern area of CDMX)"
							}
							imgs={[""]}
							imgSize="2.4rem"
							pos="left"
							color="#4D4D4D"
						/>
						<CoKPI
							title={""}
							dato={language === "ES" ? "139 cargadores" : "139 chargers"}
							desc={
								language === "ES"
									? "(Ubicados en estaciones de carga especializadas y centros comerciales)"
									: "(Located in specialized charging stations and shopping centers)"
							}
							imgs={[""]}
							imgSize="2.4rem"
							pos="left"
							color="#4D4D4D"
						/>
					</div>
				</div>
				<div className="context-data__dos">
					<div className="context-data__dos-pistolas">
						{[pistola1, pistola2, pistola3, pistola4, pistola5, pistola6].map(
							(pistolaImg, i) => (
								<img src={pistolaImg} alt={`Pistola ${i + 1}`} key={i + 1} />
							)
						)}
					</div>
					<span className="text-normal">
						<center>
							{language === "ES"
								? "6 tipos diferentes de cargadores"
								: "6 different types of chargers"}
						</center>
					</span>
				</div>
				<div className="context-data__dos">
					<img id="brandColab" src={brandColab} alt="" />
					<span className="text-normal">
						<center>
							{language === "ES"
								? "Colaboración directa con QiOn para la infraestructura y Openpay para pagos"
								: "Direct collaboration with QiOn for infrastructure and Openpay for payments"}
						</center>
					</span>
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
						<br /><br />
					</div>
				))}
			</div>
		</div>
	);
};

export default CoContexto;
