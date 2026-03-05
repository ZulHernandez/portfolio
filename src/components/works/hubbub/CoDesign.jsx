import { useContext } from "react";
import { MyContext } from "../../context/MyContext.js";

import CoTitle from "../../general/CoTitle.jsx";

import step2 from "../../../assets/imgs/works/hubbub/step2.svg";
import step2Mov from "../../../assets/imgs/works/hubbub/step2-mov.svg";
import noise from "../../../assets/imgs/works/hubbub/noise.svg";
import data from "../../../assets/imgs/works/hubbub/data.svg";
import sound from "../../../assets/imgs/works/hubbub/sound.svg";

import hubbub1 from "../../../assets/imgs/works/hubbub/HUBBUB1.webp";
import hubbub2 from "../../../assets/imgs/works/hubbub/HUBBUB2.webp";
import hubbub3 from "../../../assets/imgs/works/hubbub/HUBBUB3.webp";
import hubbub4 from "../../../assets/imgs/works/hubbub/HUBBUB4.webp";
import hubbub5 from "../../../assets/imgs/works/hubbub/HUBBUB5.webp";

import face1 from "../../../assets/imgs/works/hubbub/face1.svg";
import face2 from "../../../assets/imgs/works/hubbub/face2.svg";
import face3 from "../../../assets/imgs/works/hubbub/face3.svg";

import i1 from "../../../assets/imgs/works/hubbub/i1.svg";
import i2 from "../../../assets/imgs/works/hubbub/i2.svg";
import i3 from "../../../assets/imgs/works/hubbub/i3.svg";
import i4 from "../../../assets/imgs/works/hubbub/i4.svg";
import i5 from "../../../assets/imgs/works/hubbub/i5.svg";
import i6 from "../../../assets/imgs/works/hubbub/i6.svg";
import i7 from "../../../assets/imgs/works/hubbub/i7.svg";
import i8 from "../../../assets/imgs/works/hubbub/i8.svg";
import i9 from "../../../assets/imgs/works/hubbub/i9.svg";
import i10 from "../../../assets/imgs/works/hubbub/i10.svg";
import i11 from "../../../assets/imgs/works/hubbub/i11.svg";

const icons = [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11];

import s1 from "../../../assets/imgs/works/hubbub/sketch/sketch1.webp";
import s2 from "../../../assets/imgs/works/hubbub/sketch/sketch2.webp";
import s3 from "../../../assets/imgs/works/hubbub/sketch/sketch3.webp";
import s4 from "../../../assets/imgs/works/hubbub/sketch/sketch4.webp";
import s5 from "../../../assets/imgs/works/hubbub/sketch/sketch5.webp";
import s6 from "../../../assets/imgs/works/hubbub/sketch/sketch6.webp";
import s7 from "../../../assets/imgs/works/hubbub/sketch/sketch7.webp";
import s8 from "../../../assets/imgs/works/hubbub/sketch/sketch8.webp";

import sign1 from "../../../assets/imgs/works/hubbub/simbolos/sign1.svg";
import sign2 from "../../../assets/imgs/works/hubbub/simbolos/sign2.svg";
import sign3 from "../../../assets/imgs/works/hubbub/simbolos/sign3.svg";
import sign4 from "../../../assets/imgs/works/hubbub/simbolos/sign4.svg";
import sign5 from "../../../assets/imgs/works/hubbub/simbolos/sign5.svg";

import vid from "../../../assets/imgs/works/hubbub/simbolos/vid.svg";
import art from "../../../assets/imgs/works/hubbub/simbolos/art.svg";
import web from "../../../assets/imgs/works/hubbub/simbolos/web.svg";
import mus from "../../../assets/imgs/works/hubbub/simbolos/mus.svg";
import mic from "../../../assets/imgs/works/hubbub/simbolos/mic.svg";
import pod from "../../../assets/imgs/works/hubbub/simbolos/pod.svg";

import con from "../../../assets/imgs/works/hubbub/simbolos/cons.svg";
import cau from "../../../assets/imgs/works/hubbub/simbolos/cau.svg";
import est from "../../../assets/imgs/works/hubbub/simbolos/est.svg";
import sol from "../../../assets/imgs/works/hubbub/simbolos/sol.svg";

import hus from "../../../assets/imgs/works/hubbub/hus.svg";

const CoDesign = () => {
	const { language } = useContext(MyContext);

	const stepColumns = [
		{
			title: language === "ES" ? "Entendiendo HUBBUB" : "Understanding HUBBUB",
			text:
				language === "ES"
					? "Comprensión y entendimiento completo de la identidad gráfica actual del proyecto, incluye la formación de una para el sitio."
					: "Recognition and complete understanding of the project's current graphic identity, including the formation of a site.",
		},
		{
			title: language === "ES" ? "Sketching" : "Sketching",
			text:
				language === "ES"
					? "Exteriorización de ideas, paper prototyping y exploración de diferentes visualizadores gráficos."
					: "Externalization of ideas, paper prototyping, and exploration of different graphic visualizers.",
		},
		{
			title: language === "ES" ? "Maquetado" : "Mockup",
			text:
				language === "ES"
					? "Refinamiento de ideas, creación de la experiencia y bajada de interfaz a prototipo de alta fidelidad"
					: "Refinement of ideas, creation of the experience, and lowering the interface to a high-fidelity prototype.",
		},
	];

	const analisis = [
		{
			icon: noise,
			title: language === "ES" ? "Sobre el ruido" : "About noise",
			text:
				language === "ES"
					? "El ruido es un fenómeno altamente estudiado pero pocas veces difundido dentro de la cultura mexicana lo que ha provocado un desconocimiento de conceptos que permitiría acercar y orientar a las personas para el entendimiento del mismo"
					: "Noise is a highly studied phenomenon but rarely disseminated within Mexican culture, which has led to a lack of understanding of concepts that would help bring people closer and guide them to understand it.",
		},
		{
			icon: data,
			title: language === "ES" ? "Datos inocuos" : "Harmless data",
			text:
				language === "ES"
					? "Los datos inocuos son aquellos que no causan daño ni afectan negativamente a las personas o al medio ambiente. En el contexto de la movilidad, es fundamental identificar y utilizar datos inocuos para garantizar un diseño responsable y sostenible."
					: "Harmless data is data that does not cause harm or negatively affect people or the environment. In the context of mobility, it is essential to identify and use harmless data to ensure responsible and sustainable design.",
		},
		{
			icon: sound,
			title:
				language === "ES"
					? "Alcance con no profesionales"
					: "Reaching non-professionals",
			text:
				language === "ES"
					? "Sumado a lo comentado de los datos inocuos, no solo se delimita la necesidad de encontrar espacios de acceso publico a esta información, también es importante establecer un nivel apropiado de lenguaje para que cualquier interesado pueda hacer suyos estos conceptos e información."
					: "In addition to what was mentioned about harmless data, it is not only necessary to find public access spaces for this information, but it is also important to establish an appropriate level of language so that any interested party can make these concepts and information their own.",
		},
	];

	const areaData = [
		{
			title: language === "ES" ? "Rango de edad" : "Age range",
			data: [
				{
					name: language === "ES" ? "<15 años" : "<15 years",
					numero: 1,
					simbolo: sign1,
				},
				{
					name: language === "ES" ? "15-24 años" : "15-24 years",
					numero: 47,
					simbolo: sign2,
				},
				{
					name: language === "ES" ? "25-34 años" : "25-34 years",
					numero: 13,
					simbolo: sign3,
				},
				{
					name: language === "ES" ? "35-44 años" : "35-45 years",
					numero: 6,
					simbolo: sign4,
				},
				{
					name: language === "ES" ? "45+ años" : "45+ years",
					numero: 1,
					simbolo: sign5,
				},
			],
		},
		{
			title:
				language === "ES"
					? "¿Te interesa y crees importante conocer el fenómeno del ruido?"
					: "Are you interested in and do you think it is important to understand the phenomenon of noise?",
			data: [
				{
					name:
						language === "ES"
							? "Es importante y me es interesante"
							: "It is important and interesting to me",
					numero: 50,
					simbolo: sign1,
				},
				{
					name:
						language === "ES"
							? "Es importante pero no me interesa"
							: "It is important but not interesting to me",
					numero: 17,
					simbolo: sign3,
				},
				{
					name: language === "ES" ? "Me es indiferente" : "I am indifferent",
					numero: 1,
					simbolo: sign5,
				},
			],
		},
		{
			title:
				language === "ES"
					? "¿Has escuchado sobre el fenómeno del ruido?"
					: "Have you heard about the phenomenon of noise?",
			data: [
				{
					name:
						language === "ES" ? "Si lo he escuchado" : "Yes, I have heard it",
					numero: 37,
					simbolo: sign1,
				},
				{
					name:
						language === "ES"
							? "No, nunca lo he escuchado"
							: "No, I have never heard it",
					numero: 31,
					simbolo: sign3,
				},
			],
		},
	];

	const barraData = [
		{
			title:
				language === "ES"
					? "¿Cómo te gusta conocer nuevos temas?"
					: "How do you like to learn about new topics?",
			data: [
				{
					name: language === "ES" ? "Videos" : "Videos",
					numero: 94.7,
					simbolo: vid,
				},
				{
					name: language === "ES" ? "Artículos" : "Articles",
					numero: 70.5,
					simbolo: art,
				},
				{
					name: language === "ES" ? "Sitios web" : "Websites",
					numero: 67.6,
					simbolo: web,
				},
				{
					name: language === "ES" ? "Museos" : "Museums",
					numero: 66.8,
					simbolo: mus,
				},
				{
					name: language === "ES" ? "Conferencias" : "Conferences",
					numero: 45.2,
					simbolo: mic,
				},
				{
					name: language === "ES" ? "Podcasts" : "Podcasts",
					numero: 8.4,
					simbolo: pod,
				},
			],
		},
		{
			title:
				language === "ES"
					? "¿Qué te gustaría conocer?"
					: "What would you like to learn about?",
			data: [
				{
					name: language === "ES" ? "Consecuencias" : "Consequences",
					numero: 84.7,
					simbolo: con,
				},
				{
					name: language === "ES" ? "Causas" : "Causes",
					numero: 62.1,
					simbolo: cau,
				},
				{
					name: language === "ES" ? "Estadísticas" : "Statistics",
					numero: 46.6,
					simbolo: est,
				},
				{
					name: language === "ES" ? "Soluciones" : "Solutions",
					numero: 12.9,
					simbolo: sol,
				},
			],
		},
	];

	return (
		<div
			id={language === "ES" ? "diseño" : "design"}
			className="container-fluid"
		>
			<CoTitle titles={language === "ES" ? "Diseño" : "Design"} />
			<span className="text-normal">
				{language === "ES"
					? "Toda la etapa de diseño agrupo los esfuerzos de diseño de solución, es decir, que implica diferentes procesos de diseño gráfico, experiencia de usuario, benchmarking e interfaz, todos estos procesos se pueden vaciar en tres espacios."
					: "Within the design stage, all efforts related to solution design were grouped, which involves different processes of graphic design, user experience, benchmarking, and interface. All these processes can be poured into three spaces."}
			</span>
			<center style={{ width: "100%" }}>
				<img className="step-image" loading="lazy" src={step2} alt="step 2" />
				<img
					className="step-image-mov"
					loading="lazy"
					src={step2Mov}
					alt="step 2 mov"
				/>
			</center>
			<div className="step-columns">
				{stepColumns.map((col, index) => (
					<div key={index} className="step-column three-columns">
						<h3 className="subtitle">{col.title}</h3>
						<br />
						<span className="text-normal">{col.text}</span>
					</div>
				))}
			</div>
			<div style={{ width: "100%" }}>
				<h3 className="subtitle">
					{language === "ES"
						? "Apartado de entendimiento sobre HUBBUB"
						: "Understanding HUBBUB section"}
				</h3>
				<br />
				<span className="text-normal">
					{language === "ES"
						? "Para el momento en el que el proyecto comenzó HUBBUB ya contaba con una serie de canales donde mostraba una cierta estética."
						: "By the time the project began, HUBBUB already had a series of channels where it displayed a certain aesthetic."}
				</span>
			</div>
			<div className="screens">
				{[hubbub1, hubbub2, hubbub3, hubbub4, hubbub5].map((image, index) => (
					<img
						id={`hubbub-${index + 1}`}
						key={index}
						src={image}
						alt={`HUBBUB ${index + 1}`}
					/>
				))}
			</div>
			<span className="text-normal">
				{language === "ES"
					? "De todo esto se destacó la paleta de colores, el estilo iconográfico más tipografías y voz y tono. También se rescataron ciertos términos y assets cómo íconos y logotipos, Todos estos recursos gráficos se vaciaron en una nueva UI creada para el canal del sitio web que nosotros desarrollaríamos además de mejorar iconografía y, señalética y otros aspectos de la interfaz."
					: "From all this, the color palette, iconographic style, typography, voice, and tone stood out. Certain terms and assets such as icons and logos were also rescued. All these graphic resources were poured into a new UI created for the website channel that we would develop, in addition to improving iconography, signage, and other aspects of the interface."}
			</span>
			<div className="design-space">
				<div className="first-column">
					<img src={face1} alt="face 1" />
					<img src={face2} alt="face 2" />
					<img src={face3} alt="face 3" />
				</div>
				<div className="second-column">
					<span className="title">MONTSERRAT</span>
					<span className="typo">
						Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww
						Xx Yy Zz 1 2 3 4 5 6 7 8 9 0
					</span>
					<div className="icons">
						{icons.map((icon, index) => (
							<img key={index} src={icon} alt={`icon ${index + 1}`} />
						))}
					</div>
					<div className="colours">
						{["#FFF200", "#0075FF", "#EF5DA8", "#333333"].map(
							(color, index) => (
								<div
									key={index}
									className="colour"
									style={{
										backgroundColor: color,
										borderRadius:
											index === 0
												? "1rem 0rem 0rem 1rem"
												: index === 3
													? "0rem 1rem 1rem 0rem"
													: "0rem",
									}}
								>
									<span
										style={{
											color: index === 3 ? "#ffffff" : "#333333",
											mixBlendMode: index === 3 ? "difference" : "normal",
										}}
									>
										{color}
									</span>
								</div>
							),
						)}
					</div>
				</div>
			</div>
			<div style={{ width: "100%" }}>
				<h3 className="subtitle">
					{language === "ES" ? "Apartado de sketching" : "Sketching section"}
				</h3>
				<br />
				<span className="text-normal">
					{language === "ES"
						? "Para el sketching se realizaron una serie de bocetos en papel que no solamente permitió explorar ideas de interacción y composición de forma rápida, también, permitió involucrar a equipos de no diseñadores (el caso de los integrantes del laboratorio) al proceso de construcción de la idea. Estos bocetos también permitieron iterar rápidamente entre componentes e identificar que clase de datos queríamos mostrar."
						: "For the sketching, a series of paper sketches were made that not only allowed for quick exploration of interaction and composition ideas but also involved non-designer teams (such as laboratory members) in the idea construction process. These sketches also allowed for rapid iteration between components and identification of the types of data we wanted to display."}
				</span>
			</div>
			<div id="sketches" className="sketches">
				<div className="sketch-row1">
					{[s1, s2, s3].map((sketch, index) => (
						<img key={index} src={sketch} alt={`sketch ${index + 1}`} />
					))}
				</div>
				<div className="sketch-row2">
					{[s4, s5, s6, s7, s8].map((sketch, index) => (
						<img key={index} src={sketch} alt={`sketch ${index + 5}`} />
					))}
				</div>
			</div>
			<div id="sketches-mov" className="sketches">
				{[s1, s2, s3, s4, s5, s6, s7, s8].map((sketch, index) => (
					<img key={index} src={sketch} alt={`sketch ${index + 1}`} />
				))}
			</div>
			<div style={{ width: "100%" }}>
				<h3 className="subtitle">
					{language === "ES" ? "Apartado de maquetado" : "Mockup section"}
				</h3>
				<br />
				<span className="text-normal">
					{language === "ES"
						? "Una vez que se termino la fase de exploración de ideas alimentada de los comentarios del equipo se paso a la fase de maquetado fino, allí se generaron componentes y todas las pantallas necesarias para ambas partes de la experiencia, todo este trabajo se realizo en figma y, de igual forma, se sometió a diferentes presentaciones con los involucrados para realizar ajustes  puntuales como en navegadores y visualizadores."
						: "Once the idea exploration phase, fueled by team feedback, was completed, we moved on to the fine mockup phase. In this phase, components and all necessary screens for both parts of the experience were created. All this work was done in Figma and, similarly, subjected to various presentations with stakeholders to make specific adjustments, such as in browsers and viewers."}
				</span>
			</div>
			<iframe
				width="800"
				height="450"
				src="https://embed.figma.com/design/DCKDjbG9VOColuADoF4xsS/HUBBUB?node-id=0-1&embed-host=share"
				allowFullScreen
			></iframe>
			<span className="text-normal">
				{language === "ES"
					? "Sumado a la maquetación de experiencia realizado en Figma , también se bajo a documentación un documento de historias de usuario e historias técnicas que ayudarían a una implementación rápida en la etapa de desarrollo. Estas historias fueron vaciadas en este siguiente documento."
					: "In addition to the experience mockup done in Figma, a document of user stories and technical stories was also created to facilitate rapid implementation during the development phase. These stories were documented in the following document."}
			</span>
			<div id="hus">
				<img src={hus} alt="User Stories Document" />
			</div>
		</div>
	);
};

export default CoDesign;
