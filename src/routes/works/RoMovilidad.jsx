import { useContext } from "react";
import { MyContext } from "../../components/context/MyContext.js";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import CoNavLeft from "../../components/general/CoNavLeft.jsx";
import CoSumario from "../../components/works/CoSumario.jsx";
import CoContexto from "../../components/works/movilidad/CoContexto.jsx";
import CoInvest from "../../components/works/movilidad/CoInvest.jsx";
import CoAmbNoti from "../../components/works/movilidad/CoAmbNoti.jsx";

import fotoGLUE from "../../assets/imgs/gifs/MOVILIDAD.mp4";
import liverpool from "../../assets/imgs/works/companies/liverpool.svg";

const RoMovilidad = () => {
	const { setRuta, language, setAmplio } = useContext(MyContext);
	const location = useLocation();

	useEffect(() => {
		setRuta("/works/glue"); // Se ejecuta después del renderizado inicial
	}, []); // Se ejecuta solo una vez al montar el componente

	useEffect(() => {
		setAmplio(false); // Reset amplio on route change
	}, [location.pathname]);

	const sumario = {
		foto: fotoGLUE,
		company: liverpool,
		title: language === "ES" ? "Sistema de electrolineras, MoviLidad" : "Electrolineras system, MoviLidad",
		date: language === "ES" ? "oct 2023 - abr 2025" : "oct 2023 - apr 2025",
		description:
			language === "ES"
				? "Aplicativo para el ofrecimiento de centro de carga para automóviles eléctricos"
				: "Application for the offering of charging centers for electric cars",
		bullets: {
			role: [
				language === "ES" ? "Diseñador UX / UI" : "UX / UI designer",
				language === "ES"
					? "Product designer, service designer, BA"
					: "Product designer, service designer, BA",
			],
			sector:
				language === "ES"
					? "Automotriz, fuentes alternativas, servicios"
					: "Automotive, alternative fuels, services",
			team:
				language === "ES"
					? "Desarrolladores Front y Back, negocio automotriz, business analist, project manager"
					: "Front and Back developers, automotive business, business analyst, project manager",
		},
	};

	const anclasMovilidad = [
		{
			text: language == "ES" ? "Sumario" : "Summary",
			id: language == "ES" ? "sumario" : "summary",
		},
		{
			text: language == "ES" ? "El contexto" : "Context",
			id: language == "ES" ? "contexto" : "context",
		},
		{
			text: language == "ES" ? "Interfaz" : "Interface",
			id: language == "ES" ? "interfaz" : "interface",
		},
		{
			text: language == "ES" ? "Notificaciones" : "Notification",
			id: language == "ES" ? "notificaciones" : "notifications",
		},
		{
			text: language == "ES" ? "Flujo y métodos" : "Flow and Methods",
			id: language == "ES" ? "flujo-y-metodos" : "flow-and-methods",
		},
		{
			text: language == "ES" ? "Futuros pasos" : "Future Steps",
			id: language == "ES" ? "futuros-pasos" : "future-steps",
		},
	];

	return (
		<>
			<CoNavLeft anclas={anclasMovilidad} />
			<div>
				<CoSumario
					foto={sumario.foto}
					company={sumario.company}
					title={sumario.title}
					date={sumario.date}
					description={sumario.description}
					role={sumario.bullets.role}
					sector={sumario.bullets.sector}
					team={sumario.bullets.team}
				/>
				<CoContexto />
				<CoInvest />
				<center>
					<hr style={{ border: "0.2rem solid #ccc", margin: "1rem 0", width: "80%", borderRadius: "5rem"}} />
				</center>
				<CoAmbNoti />
			</div>
		</>
	);
};

export default RoMovilidad;