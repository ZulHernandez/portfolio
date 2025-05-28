import { useContext } from "react";
import { MyContext } from "../../components/context/MyContext.js";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import CoNavLeft from "../../components/general/CoNavLeft.jsx";
import CoSumario from "../../components/works/CoSumario.jsx";

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

	const sumarios = [
		{
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
		},
	];

	return (
		<>
			<CoNavLeft />
			<div>
				{sumarios.map((sumario, index) => (
					<CoSumario
						key={index}
						foto={sumario.foto}
						company={sumario.company}
						title={sumario.title}
						date={sumario.date}
						description={sumario.description}
						bullets={sumario.bullets}
					/>
				))}
			</div>
		</>
	);
};

export default RoGLUE;
