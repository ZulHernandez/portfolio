import { useContext } from "react";
import { MyContext } from "../../components/context/MyContext.js";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import CoNavLeft from "../../components/general/CoNavLeft.jsx";
import CoSumario from "../../components/works/CoSumario.jsx";
import CoContexto from "../../components/works/glue/CoContexto.jsx";
import CoTech from "../../components/works/glue/CoTech.jsx";
import CoInsumos from "../../components/works/glue/CoInsumos.jsx";
import CoAutoma from "../../components/works/glue/CoAutoma.jsx";
import CoFuture from "../../components/works/glue/CoFuture.jsx";

import fotoGLUE from "../../assets/imgs/gifs/GLUE.gif";
import liverpool from "../../assets/imgs/works/companies/liverpool.svg";

const RoGLUE = () => {
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
		title: language === "ES" ? "GLUE y DesignOps" : "GLUE & DesignOps",
		date: language === "ES" ? "feb 2023 - Actualidad" : "feb 2023 - Present",
		description:
			language === "ES"
				? "Como parte de la evolución y mejora constante del sistema de diseño en Liverpool, se ha decidido integrar herramientas de automatización de tareas, adoptar nuevas tecnologías, como las variables en Figma, y optimizar los procesos de auditoría y administración del sistema."
				: "As part of the ongoing evolution and improvement of the design system at Liverpool, we have decided to integrate task automation tools, adopt new technologies such as variables in Figma, and optimize the processes of auditing and managing the system.",
		bullets: {
			role: [
				language === "ES" ? "Ingeniero de tokens" : "Tokens Engineer",
				language === "ES"
					? "Desarrollador, diseñador UI y administrador"
					: "Developer, UI Designer & Admin",
			],
			sector:
				language === "ES"
					? "Design Ops, sistema de diseño, servicios internos, e-commerce"
					: "Design Ops, design system, internal services, e-commerce",
			team:
				language === "ES"
					? "Desarrolladores front y back, diseñadores UX/UI y researchers"
					: "Front and back developers, UX/UI designers and researchers",
		},
	};

	return (
		<>
			<CoNavLeft />
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
                <CoTech />
				<center>
					<hr style={{ border: "0.2rem solid #ccc", margin: "1rem 0", width: "80%", borderRadius: "5rem"}} />
				</center>
				<CoInsumos />
				<center>
					<hr style={{ border: "0.2rem solid #ccc", margin: "1rem 0", width: "80%", borderRadius: "5rem"}} />
				</center>
				<CoAutoma />
				<CoFuture />
			</div>
		</>
	);
};

export default RoGLUE;
