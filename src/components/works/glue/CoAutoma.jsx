import { useContext } from "react";
import { MyContext } from "../../../components/context/MyContext.js";

import CoTitle from "../../../components/general/CoTitle.jsx";

const CoCardPlugin = ({ title, description, icon }) => {
	return (
		<div className="plugins-carrousel__card">
			<div className="plugins-carrousel__card__icon">
				<img src={icon} alt={title} />
			</div>
			<div className="plugins-carrousel__card__content">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
};

const CoAutoma = () => {
	const { language } = useContext(MyContext);

    const plugins = [
        {
            icon: "/path/to/automation-plugin-icon.svg",
            title: ["PROJECT" , "SETTER"],
            description: language === "ES"
                ? "Genera un proyecto con la estructura de páginas estandarizada de acuerdo al tipo de proyecto deseado"
                : "Generates a project with the standardized page structure according to the desired project type.",
            kpi: [
                {
                    
                }
            ]
        },
        {
            title: language === "ES" ? "Plugin de Auditoría" : "Audit Plugin",
            description: language === "ES"
                ? "Facilita la auditoría de componentes y estilos en el sistema de diseño."
                : "Facilitates the auditing of components and styles in the design system.",
            icon: "/path/to/audit-plugin-icon.svg"
        },
        {
            title: language === "ES" ? "Plugin de Exportación" : "Export Plugin",
            description: language === "ES"
                ? "Permite la exportación rápida de activos y componentes del sistema de diseño."
                : "Allows quick export of assets and components from the design system.",
            icon: "/path/to/export-plugin-icon.svg"
        }
    ];

	return (
		<div
			id={
				language === "ES"
					? "automatizacion-de-procesos"
					: "automation-of-processes"
			}
			className="container-fluid"
		>
			<CoTitle
				titles={
					language === "ES"
						? "Automatización de procesos"
						: "Automation of processes"
				}
			/>
			<span>
				{language === "ES"
					? "Como parte de los esfuerzo para mejorar los procesos de diseño de los diseñadores UX se programaron 3 plugin para Figma más 2 servidores extra que permitieron aumentar la productividad del equipo:"
					: "To improve the design processes of UX designers, 3 plugins for Figma and 2 additional servers were programmed, which increased the team's productivity:"}
			</span>
			<div className="plugins">
				<span className="subtitle">
					{language === "ES" ? "PlugIns (3 herramientas)" : "Plugins (3 tools)"}
				</span>
				<div className="plugins-carrousel">
					<CoCardPlugin

					/>
				</div>
			</div>
		</div>
	);
};

export default CoAutoma;
