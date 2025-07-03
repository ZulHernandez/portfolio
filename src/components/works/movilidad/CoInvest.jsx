import { useContext } from "react";
import { MyContext } from "../../context/MyContext.js";

import CoTitle from "../../../components/general/CoTitle.jsx";
import CoKPI from "../../../components/general/CoKPI.jsx";

import movLogo from "../../../assets/imgs/works/movilidad/electromaps/logo.svg";
import mov1 from "../../../assets/imgs/works/movilidad/electromaps/1.png";
import mov2 from "../../../assets/imgs/works/movilidad/electromaps/2.png";
import mov3 from "../../../assets/imgs/works/movilidad/electromaps/3.png";
import mov4 from "../../../assets/imgs/works/movilidad/electromaps/4.png";
import mov5 from "../../../assets/imgs/works/movilidad/electromaps/5.png";
import mov6 from "../../../assets/imgs/works/movilidad/electromaps/6.png";
import mov7 from "../../../assets/imgs/works/movilidad/electromaps/7.png";
import mov8 from "../../../assets/imgs/works/movilidad/electromaps/8.png";
import mov9 from "../../../assets/imgs/works/movilidad/electromaps/9.png";
import mov10 from "../../../assets/imgs/works/movilidad/electromaps/10.png";
import mov11 from "../../../assets/imgs/works/movilidad/electromaps/11.png";
import mov12 from "../../../assets/imgs/works/movilidad/electromaps/12.png";

import plugLogo from "../../../assets/imgs/works/movilidad/plugshare/logo.svg";
import plug1 from "../../../assets/imgs/works/movilidad/plugshare/1.png";
import plug2 from "../../../assets/imgs/works/movilidad/plugshare/2.png";
import plug3 from "../../../assets/imgs/works/movilidad/plugshare/3.png";
import plug4 from "../../../assets/imgs/works/movilidad/plugshare/4.png";
import plug5 from "../../../assets/imgs/works/movilidad/plugshare/5.png";
import plug6 from "../../../assets/imgs/works/movilidad/plugshare/6.png";
import plug7 from "../../../assets/imgs/works/movilidad/plugshare/7.png";
import plug8 from "../../../assets/imgs/works/movilidad/plugshare/8.png";
import plug9 from "../../../assets/imgs/works/movilidad/plugshare/9.png";
import plug10 from "../../../assets/imgs/works/movilidad/plugshare/10.png";
import plug11 from "../../../assets/imgs/works/movilidad/plugshare/11.png";
import plug12 from "../../../assets/imgs/works/movilidad/plugshare/12.png";
import plug13 from "../../../assets/imgs/works/movilidad/plugshare/13.png";
import plug14 from "../../../assets/imgs/works/movilidad/plugshare/14.png";
import plug15 from "../../../assets/imgs/works/movilidad/plugshare/15.png";

import chargeLogo from "../../../assets/imgs/works/movilidad/chargemap/logo.svg";
import charge1 from "../../../assets/imgs/works/movilidad/chargemap/1.png";
import charge2 from "../../../assets/imgs/works/movilidad/chargemap/2.png";
import charge3 from "../../../assets/imgs/works/movilidad/chargemap/3.png";
import charge4 from "../../../assets/imgs/works/movilidad/chargemap/4.png";
import charge5 from "../../../assets/imgs/works/movilidad/chargemap/5.png";
import charge6 from "../../../assets/imgs/works/movilidad/chargemap/6.png";
import charge7 from "../../../assets/imgs/works/movilidad/chargemap/7.png";
import charge8 from "../../../assets/imgs/works/movilidad/chargemap/8.png";
import charge9 from "../../../assets/imgs/works/movilidad/chargemap/9.png";
import charge10 from "../../../assets/imgs/works/movilidad/chargemap/10.png";

import schemaES from "../../../assets/imgs/works/movilidad/schemaES.svg";
import schemaEN from "../../../assets/imgs/works/movilidad/schemaEN.svg";

import legend1 from "../../../assets/imgs/works/movilidad/legend/1.svg";
import legend2 from "../../../assets/imgs/works/movilidad/legend/2.svg";
import legend3 from "../../../assets/imgs/works/movilidad/legend/3.svg";
import legend4 from "../../../assets/imgs/works/movilidad/legend/4.svg";
import legend5 from "../../../assets/imgs/works/movilidad/legend/5.svg";
import legend6 from "../../../assets/imgs/works/movilidad/legend/6.svg";

import diamond from "../../../assets/imgs/works/movilidad/diamond.svg";

import option1 from "../../../assets/imgs/works/movilidad/option1.svg";
import option2 from "../../../assets/imgs/works/movilidad/option2.svg";
import option3 from "../../../assets/imgs/works/movilidad/option3.svg";
import option4 from "../../../assets/imgs/works/movilidad/option4.svg";
import option5 from "../../../assets/imgs/works/movilidad/option5.svg";

import screen1 from "../../../assets/imgs/works/movilidad/exHome1.png";
import screen2 from "../../../assets/imgs/works/movilidad/exHome2.png";
import wordMapES from "../../../assets/imgs/works/movilidad/wordMapES.svg";
import wordMapEN from "../../../assets/imgs/works/movilidad/wordMapEN.svg";

const CoInvest = () => {
	const { language } = useContext(MyContext);

	const marcas = [
		{
			logo: movLogo,
			images: [
				mov1,
				mov2,
				mov3,
				mov4,
				mov5,
				mov6,
				mov7,
				mov8,
				mov9,
				mov10,
				mov11,
				mov12,
			],
		},
		{
			logo: plugLogo,
			images: [
				plug1,
				plug2,
				plug3,
				plug4,
				plug5,
				plug6,
				plug7,
				plug8,
				plug9,
				plug10,
				plug11,
				plug12,
				plug13,
				plug14,
				plug15,
			],
		},
		{
			logo: chargeLogo,
			images: [
				charge1,
				charge2,
				charge3,
				charge4,
				charge5,
				charge6,
				charge7,
				charge8,
				charge9,
				charge10,
			],
		},
	];

	const legends = [
		{
			icon: legend1,
			description: language === "ES" ? "Flujo principal" : "Main flow",
		},
		{
			icon: legend2,
			description:
				language === "ES" ? "Acciones secundarias" : "Secondary actions",
		},
		{
			icon: legend3,
			description: language === "ES" ? "Flujo deprecado" : "Deprecated flow",
		},
		{
			icon: legend4,
			description: language === "ES" ? "Flujo externo" : "External flow",
		},
		{
			icon: legend5,
			description: language === "ES" ? "Secuencia directa" : "Direct sequence",
		},
		{
			icon: legend6,
			description:
				language === "ES" ? "Secuencia alterna" : "Alternate sequence",
		},
	];

	const ejercicios = [
		{
			ejercicio:
				language === "ES"
					? "Se pide al usuario ordenar las opciones de la arriba de acuerdo a la importancia que tenga para el"
					: "The user is asked to order the options above according to their importance",
			objetivo:
				language === "ES"
					? "Conocer cuales son las prioridades y expectativas del usuario para con las capacidades del aplicativo"
					: "To know the user's priorities and expectations regarding the application's capabilities",
			resultado:
				language === "ES"
					? "En orden de relevancia las opciones fueron ordenadas: Mapa, Navegación, Monedero, Histórico y Ayuda"
					: "In order of relevance, the options were arranged: Map, Navigation, Wallet, History, and Help",
			conclusiones: [
				language === "ES"
					? "El Mapa se vuelve fundamental para el usuario pues describe un flujo natural para la ubicación de electrolineras que, posteriormente, habilitara el resto de flujo de transacción el cual, finalmente, es la tarea principal a realizar."
					: "The Map becomes fundamental for the user as it describes a natural flow for locating charging stations, which will subsequently enable the rest of the transaction flow, which is ultimately the main task to be performed.",
				language === "ES"
					? "La Navegación, que implica la capacidad del usuario para usar el mapa y el resto de actividades del aplicativo aparece como complementario a la exploración y, por consecuente, permanece en relevancia."
					: "Navigation, which involves the user's ability to use the map and the rest of the application's activities, appears as complementary to exploration and, consequently, remains relevant.",
				language === "ES"
					? "El Monedero se vuelven la tercer opción fundamental del aplicativo al habilitar al usuario para generar pagos y, por consecuencia, completar la última parte del journey principal"
					: "The Wallet becomes the third fundamental option of the application by enabling the user to make payments and, consequently, complete the last part of the main journey.",
			],
		},
		{
			ejercicio:
				language === "ES"
					? "Se pide al usuario elegir cual de las dos opciones le parece más apropiada para poder acceder a las diferentes opciones que ofrece el aplicativo además de complementar su elección con una pregunta abierta para que exprese sus razones."
					: "The user is asked to choose which of the two options seems more appropriate to access the different options offered by the application, in addition to complementing their choice with an open question to express their reasons.",
			objetivo:
				language === "ES"
					? "Orientar la interfaz a una opción que satisfaga funcional y estéticamente las necesidades de nuestro usuario además de recopilar información cualitativa de su elección"
					: "To guide the interface towards an option that functionally and aesthetically meets the needs of our user, in addition to gathering qualitative information about their choice.",
			resultado:
				language === "ES"
					? "La pantalla más elegida fue la número uno teniendo una preferencia del 69% de los encuestados"
					: "The most chosen screen was number one, with a preference of 69% of respondents.",
			conclusiones: [
				language === "ES"
					? "Mayoritariamente los usuario expresaron una inclinación para la pantalla numero 1 acompañado de comentarios destacando una interfaz limpia, una navegación más sencilla pensada incluso en la posición de la píldora de opciones."
					: "Majority of users expressed a preference for screen number 1, accompanied by comments highlighting a clean interface and simpler navigation, even considering the position of the options pill.",
			],
		},
	];

	return (
		<div
			id={language === "ES" ? "interfaz" : "interface"}
			className="container-fluid"
		>
			<CoTitle
				titles={
					language === "ES"
						? "Investigación y definición de interfaz"
						: "Research and definition of interface"
				}
			/>
			<span className="text-normal">
				{language === "ES"
					? "Una de las partes más importante del diseño del aplicativo era la interfaz y la forma en que el usuario tendría que aprender a usarla pues quienes utilizarían este apartado de red de carga serian usuarios que actualmente ya estuviesen familiarizados o en su defecto se tendrían que familiarizar con el ambiente de Pocket, la aplicación de Liverpool."
					: "One of the most important parts of the application's design was the interface and how the user would have to learn to use it, as those who would use this charging network section would be users who were already familiar with it or, failing that, would have to familiarize themselves with the Pocket environment, Liverpool's application."}
				<br />
				<br />
				{language === "ES"
					? "No solo se trataba de usar componentes y lenguaje grafico previamente utilizado dentro de Pocket, también se tendría que acercar a lo que otras aplicaciones del mismo giro ya ofrecía al cliente, Con esto en mente, los primeros pasos fueron generar los benchmarks de múltiples empresas."
					: "Not only did it involve using previously used components and graphic language within Pocket, but it also had to approach what other applications in the same field already offered to the customer. With this in mind, the first steps were to generate benchmarks from multiple companies."}
			</span>
			<div className="research">
				{marcas.map((marca, index) => (
					<div key={index} className="research__brand">
						<img className="brand-logo" src={marca.logo} alt="Brand Logo" />
						<div className="research__brand-screens">
							{marca.images.map((image, imgIndex) => (
								<img
									key={imgIndex}
									src={image}
									alt={`Image ${imgIndex + 1}`}
									className="brand-image"
								/>
							))}
						</div>
					</div>
				))}
			</div>
			<span className="text-normal">
				{language === "ES"
					? "Una vez establecidos puntos importantes como el mapa a modo de pantalla principal, filtrado de resultados y flujos transaccionales prepago se decidió maqueta una experiencia que se acercarse a esta estructura y, al mismo tiempo, incluyese todas las ofertas y accionables que ofrecía la misma app, esto derivó en un mapa como el siguiente:"
					: "Once important points such as the map as the main screen, result filtering, and prepaid transactional flows were established, it was decided to mock up an experience that approached this structure and, at the same time, included all the offers and actionables that the app itself offered, this resulted in a map like the following:"}
			</span>
			<div className="schema" style={{}}>
				<div className="schema-legenda">
					{legends.map((legend, index) => (
						<div key={index} className="schema-legenda__item">
							<img src={legend.icon} alt={`Legend ${index + 1}`} />
							<span>{legend.description}</span>
						</div>
					))}
				</div>
				<img src={language === "ES" ? schemaES : schemaEN} alt="" />
			</div>
			<span className="text-normal">
				{language === "ES"
					? "Como última parte de la investigación y producto de algunos comentarios del lado de negocio también se decidió poner a test la página home del aplicativo, esto se realizo dentro con una encuesta en Maze y los resultados fueron los siguientes."
					: "As a final part of the research and as a result of some comments from the business side, it was also decided to test the home page of the application. This was done through a survey in Maze, and the results were as follows:"}
			</span>
			<div className="questions">
				<div className="questions__item">
					<div
						className="questions__item-grafica"
						style={{ backgroundColor: "#ff7520" }}
					>
						<div id="mujer" className="questions__item-grafica-barra">
							{language === "ES" ? "50% mujeres" : "50% women"}
						</div>
						<div id="hombre" className="questions__item-grafica-barra">
							{language === "ES" ? "47% hombres" : "47% men"}
						</div>
						<div id="otros" className="questions__item-grafica-barra"></div>
					</div>
					<CoKPI
						title={""}
						dato={language === "ES" ? "30 participantes" : "30 participants"}
						desc={
							language === "ES"
								? "(En un plazo de 3 semanas)"
								: "(Over a period of 3 weeks)"
						}
						imgs={[""]}
						imgSize="2.4rem"
						pos="left"
						color="#4D4D4D"
					/>
				</div>
				<div className="questions__item">
					<div className="questions__item-grafica" style={{ clipPath: "none" }}>
						<img src={diamond} alt="" />
						<div id="preg1" className="questions__item-grafica-preg">
							<span>2</span>
							{language === "ES" ? "Introductorias" : "Introductory"}
						</div>
						<img src={diamond} alt="" />
						<div id="preg2" className="questions__item-grafica-preg">
							<span>3</span>
							{language === "ES"
								? "Jerarquía y opciones"
								: "Hierarchy and options"}
						</div>
						<img src={diamond} alt="" />
						<div id="preg3" className="questions__item-grafica-preg">
							<span>3</span>
							{language === "ES"
								? "Estética y accesibilidad"
								: "Aesthetics and accessibility"}
						</div>
						<img src={diamond} alt="" />
						<div id="preg4" className="questions__item-grafica-preg">
							<span>1</span>
							{language === "ES" ? "Final" : "Final"}
						</div>
						<img src={diamond} alt="" />
					</div>
					<CoKPI
						title={""}
						dato={language === "ES" ? "9 preguntas" : "9 questions"}
						desc={
							language === "ES"
								? "(Combinando diferentes tipos de instrumentos)"
								: "(Combining different types of instruments)"
						}
						imgs={[""]}
						imgSize="2.4rem"
						pos="left"
						color="#4D4D4D"
					/>
				</div>
			</div>
			<div className="exercise">
				<div className="exercise__imgs">
					{Array.from({ length: 5 }, (_, index) => {
						const options = [option1, option2, option3, option4, option5];
						return (
							<img
								key={index}
								src={options[index]}
								alt={`Diamond ${index + 1}`}
								style={{ width: "10rem", transform: `scale(${1 - index / 7})` }}
							/>
						);
					})}
				</div>
				<div className="exercise__text">
					<div className="exercise__text-column">
						<div className="exercise__text-column__item">
							<h3>{language === "ES" ? "Ejercicio" : "Exercise"}</h3>
							<span className="text-normal">{ejercicios[0].ejercicio}</span>
						</div>
						<div className="exercise__text-column__item">
							<h3>{language === "ES" ? "Objetivo" : "Objective"}</h3>
							<span className="text-normal">{ejercicios[0].objetivo}</span>
						</div>
						<div className="exercise__text-column__item">
							<h3>{language === "ES" ? "Resultado" : "Result"}</h3>
							<span className="text-normal">{ejercicios[0].resultado}</span>
						</div>
					</div>
					<div className="exercise__text-column">
						<div className="exercise__text-column__item">
							<h3>{language === "ES" ? "Conclusiones" : "Conclusions"}</h3>
							{ejercicios[0].conclusiones.map((conclusion, index) => (
								<span key={index} className="text-normal">
									{conclusion}
								</span>
							))}
						</div>
					</div>
				</div>
			</div>
			<br /><br />
            <div className="exercise">
				<div className="exercise__imgs">
					<img id="screen1" src={screen1} alt="" />
					<img id="wordMap" src={language === "ES" ? wordMapES : wordMapEN} alt="Word Map" />
					<img id="screen2" src={screen2} alt="" />
				</div>
				<br />
				<div className="exercise__text">
					<div className="exercise__text-column">
						<div className="exercise__text-column__item">
							<h3>{language === "ES" ? "Ejercicio" : "Exercise"}</h3>
							<span className="text-normal">{ejercicios[1].ejercicio}</span>
						</div>
						<div className="exercise__text-column__item">
							<h3>{language === "ES" ? "Objetivo" : "Objective"}</h3>
							<span className="text-normal">{ejercicios[1].objetivo}</span>
						</div>
					</div>
					<div className="exercise__text-column">
						<div className="exercise__text-column__item">
							<h3>{language === "ES" ? "Resultado" : "Result"}</h3>
							<span className="text-normal">{ejercicios[1].resultado}</span>
						</div>
						<div className="exercise__text-column__item">
							<h3>{language === "ES" ? "Conclusiones" : "Conclusions"}</h3>
							{ejercicios[1].conclusiones.map((conclusion, index) => (
								<span key={index} className="text-normal">
									{conclusion}
								</span>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CoInvest;
