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

let anclasAbout = [
	{
		text: ["Este soy yo", "This is me"],
		id: ["esto-soy-yo", "this-is-me"],
	},
	{
		text: ["Conozcámonos", "Let's get in touch"],
		id: ["conozcamonos", "getInTouch"],
	},
]

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
		case "/about-me":
			anclas = anclasAbout;
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
