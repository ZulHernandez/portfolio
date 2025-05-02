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
						className={
							ruta == `/${ancla.id[language == "ES" ? 0 : 1]}`
								? "nav-left__link active"
								: "nav-left__link"
						}
						onClick={() => setRuta(`/${ancla.id[language == "ES" ? 0 : 1]}`)}
					>
						{ancla.text[language == "ES" ? 0 : 1]}
					</a>
				);
			})}
		</div>
	);
};

export default CoNavLeft;
