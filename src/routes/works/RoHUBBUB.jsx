import { useContext } from "react";
import { MyContext } from "../../components/context/MyContext.js";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import CoNavLeft from "../../components/general/CoNavLeft.jsx";
import CoSumario from "../../components/works/CoSumario.jsx";
import CoContexto from "../../components/works/hubbub/CoContexto.jsx";

import CoInvest from "../../components/works/movilidad/CoInvest.jsx";
import CoAmbNoti from "../../components/works/movilidad/CoAmbNoti.jsx";
import CoFlow from "../../components/works/movilidad/CoFlow.jsx";
import CoFuture from "../../components/works/movilidad/CoFuture.jsx";

import fotoHUBBUB from "../../assets/imgs/gifs/HUBBUB.mp4";
import liverpool from "../../assets/imgs/works/companies/liverpool.svg";

const RoMovilidad = () => {
	const { setRuta, language, setAmplio } = useContext(MyContext);
	const location = useLocation();

	useEffect(() => {
		setRuta("/works/hubbub"); // Se ejecuta después del renderizado inicial
	}, []); // Se ejecuta solo una vez al montar el componente

	useEffect(() => {
		setAmplio(false); // Reset amplio on route change
	}, [location.pathname]);

	const sumario = {
		foto: fotoHUBBUB,
		company: liverpool,
		title: language === "ES" ? "HUBBUB y la visualización del ruido en la CDMX" : "HUBBUB and the visualization of noise in Mexico City",
		date: language === "ES" ? "may 2022 - actualidad" : "may 2022 - present",
		description:
			language === "ES"
				? "Sitio web para el despliegue de data sobre el fenómeno del ruido en la CDMX y área Metropolitana"
				: "Website for the deployment of data on the phenomenon of noise in Mexico City and Metropolitan area",
		bullets: {
			role: [
				language === "ES" ? "Desarrollador UX / UI" : "UX / UI developer",
				language === "ES"
					? "Product designer, BA, developer, project manager"
					: "Product designer, BA, developer, project manager",
			],
			sector:
				language === "ES"
					? "Investigación, divulgación científica, data visualization"
					: "Research, scientific dissemination, data visualization",
			team:
				language === "ES"
					? "Investigadores"
					: "Researchers",
		},
	};

	const anclasHubbub = [
		{
			text: language == "ES" ? "Sumario" : "Summary",
			id: language == "ES" ? "sumario" : "summary",
		},
		{
			text: language == "ES" ? "El contexto" : "Context",
			id: language == "ES" ? "contexto" : "context",
		},
		{
			text: language == "ES" ? "Investigación" : "Research",
			id: language == "ES" ? "investigacion" : "research",
		},
		{
			text: language == "ES" ? "Diseño" : "Design",
			id: language == "ES" ? "diseno" : "design",
		},
		{
			text: language == "ES" ? "Programación" : "Programming",
			id: language == "ES" ? "programacion" : "programming",
		},
		{
			text: language == "ES" ? "Otros medios y futuros pasos" : "Other media and future steps",
			id: language == "ES" ? "futuros-pasos" : "future-steps",
		},
	];

	return (
		<>
			<CoNavLeft anclas={anclasHubbub} />
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
				<center>
					<hr style={{ border: "0.2rem solid #ccc", margin: "1rem 0", width: "80%", borderRadius: "5rem"}} />
				</center>
				<CoFlow />
				<CoFuture />
			</div>
		</>
	);
};

export default RoMovilidad;