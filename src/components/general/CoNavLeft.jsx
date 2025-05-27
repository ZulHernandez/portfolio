import { useContext } from "react";
import { MyContext } from "../context/MyContext.js";

let anclasHome = [
	{
		text: ["Hola", "Hello"],
		id: ["hola", "hello"],
	},
	{
		text: ["Dónde he colaborado", "Where I have collaborated"],
		id: ["colab", "colab"],
	},
	{
		text: ["Mis trabajos destacados", "My featured works"],
		id: ["trabajos", "works"],
	},
	{
		text: ["Conozcámonos", "Let's get in touch"],
		id: ["conozcamonos", "getInTouch"],
	},
];

let anclasResume = [
	{
		text: ["Mis trabajos", "My works"],
		id: ["mis-trabajos", "my-works"],
	},
	{
		text: ["Línea del tiempo", "Timeline"],
		id: ["linea-del-tiempo", "timeline"],
	},
];

let anclasGlue = [
	{
		text: ["Sumario", "Summary"],
		id: ["sumario", "summary"],
	},
	{
		text: ["El contexto", "Context"],
		id: ["contexto", "context"],
	},
	{
		text: ["Tecnologias adoptadas", "Technologies Used"],
		id: ["tecnologias-adoptadas", "technologies-used"],
	},
	{
		text: ["Automatización de procesos", "Automation of Processes"],
		id: ["automatizacion-de-procesos", "automation-of-processes"],
	},
	{
		text: ["Futuros pasos", "Future Steps"],
		id: ["futuros-pasos", "future-steps"],
	},
];

const CoNavLeft = () => {
	const { language } = useContext(MyContext);
	const { ruta, setRuta } = useContext(MyContext);

	let anclas;
	switch (ruta) {
		case "/":
			anclas = anclasHome;
			break;
		case "/works":
			anclas = anclasResume;
			break;
		case "/works/glue":
			anclas = anclasGlue;
			break;
		default:
			anclas = null;
			break;
	}

	return (
		<div className="nav-left">
			{anclas.map((ancla, index) => {
				return (
					<a
						key={index}
						href={`#${ancla.id[language == "ES" ? 0 : 1]}`}
						onClick={() => {
							document
								.getElementById(ancla.id[language == "ES" ? 0 : 1])
								.scrollIntoView({ behavior: "smooth" });
						}}
					>
						<span>{ancla.text[language == "ES" ? 0 : 1]}</span>
					</a>
				);
			})}
		</div>
	);
};

export default CoNavLeft;
