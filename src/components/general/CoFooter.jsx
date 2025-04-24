import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import sign from "/sign.svg";

let footOptions = [
	{
		id: 1,
		title: "Get in touch",
		options: [
			{
				id: 1,
				text: "(+52) 55-6502-7645",
				type: "tel:",
				link: "+525565027645",
				anchor: "_blank",
			},
			{
				id: 2,
				text: "saululiseshernandezcruz@gmail.com",
				type: "mailto:",
				link: "saululiseshernandezcruz@gmail.com",
				anchor: "_blank",
			},
			{
				id: 3,
				text: "@ZulHernandezC",
				type: "",
				link: "https://t.me/ZulHernandezC",
				anchor: "_blank",
			},
			{
				id: 4,
				text: "Schedule your appointment!",
				type: "",
				link: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3IHfVcWon0GCIlKQNx98HMtHPHf_UV5dvAJD88J-6lr3AS9z3heiAl9kd_KvBRN88H2-5mS9VQ",
				anchor: "_blank",
			},
		],
	},
	{
		id: 2,
		title: "MORE SPACES",
		options: [
			{
				id: 1,
				text: "LinkedIn (Saúl Ulises Hernández Cruz)",
				type: "",
				link: "https://www.linkedin.com/in/saululises/",
				anchor: "_blank",
			},
			{
				id: 2,
				text: "Behance (zulhernndez)",
				type: "",
				link: "https://www.behance.net/zulhernndez",
				anchor: "_blank",
			},
			{
				id: 3,
				text: "Sketchfab (Zul Hernández)",
				type: "",
				link: "https://sketchfab.com/zulHernandez1912",
				anchor: "_blank",
			},
			{
				id: 4,
				text: "GitHub (ZulHernandez)",
				type: "",
				link: "https://github.com/ZulHernandez",
				anchor: "_blank",
			},
			{
				id: 5,
				text: "Relayto (Saúl Hernández)",
				type: "",
				link: "https://relayto.com/saul-hernandez/docs",
				anchor: "_blank",
			},
		],
	},
	{
		id: 3,
		title: "Site map",
		options: [
			{
				id: 1,
				text: "Resume",
				type: "",
				link: "/",
				anchor: "",
			},
			{
				id: 2,
				text: "Experience",
				type: "",
				link: "/experience",
				anchor: "",
			},
		],
	},
	{
		id: 4,
		title: "Page Map",
		options: [
			{
				id: 1,
				text: "About me",
				type: "",
				link: "/#about-me",
				anchor: "",
			},
			{
				id: 2,
				text: "Studies & courses",
				type: "",
				link: "/#studies-courses",
				anchor: "",
			},
			{
				id: 3,
				text: "Experience & projects",
				type: "",
				link: "/#experience-projects",
				anchor: "",
			},
			{
				id: 4,
				text: "Get in touch",
				type: "",
				link: "/#get-in-touch",
				anchor: "",
			},
		],
	},
];

let footOptionsExp = [
	{
		id: 1,
		title: "Get in touch",
		options: [
			{
				id: 1,
				text: "(+52) 55-6502-7645",
				type: "tel:",
				link: "+525565027645",
				anchor: "_blank",
			},
			{
				id: 2,
				text: "saululiseshernandezcruz@gmail.com",
				type: "mailto:",
				link: "saululiseshernandezcruz@gmail.com",
				anchor: "_blank",
			},
			{
				id: 3,
				text: "@ZulHernandezC",
				type: "",
				link: "https://t.me/ZulHernandezC",
				anchor: "_blank",
			},
			{
				id: 4,
				text: "Schedule your appointment!",
				type: "",
				link: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3IHfVcWon0GCIlKQNx98HMtHPHf_UV5dvAJD88J-6lr3AS9z3heiAl9kd_KvBRN88H2-5mS9VQ",
				anchor: "_blank",
			},
		],
	},
	{
		id: 2,
		title: "MORE SPACES",
		options: [
			{
				id: 1,
				text: "LinkedIn (Saúl Ulises Hernández Cruz)",
				type: "",
				link: "https://www.linkedin.com/in/saululises/",
				anchor: "_blank",
			},
			{
				id: 2,
				text: "Behance (zulhernndez)",
				type: "",
				link: "https://www.behance.net/zulhernndez",
				anchor: "_blank",
			},
			{
				id: 3,
				text: "Sketchfab (Zul Hernández)",
				type: "",
				link: "https://sketchfab.com/zulHernandez1912",
				anchor: "_blank",
			},
			{
				id: 4,
				text: "GitHub (ZulHernandez)",
				type: "",
				link: "https://github.com/ZulHernandez",
				anchor: "_blank",
			},
			{
				id: 5,
				text: "ISSUU (Saúl Hernández)",
				type: "",
				link: "https://issuu.com/nhoro",
				anchor: "_blank",
			},
		],
	},
	{
		id: 3,
		title: "Site map",
		options: [
			{
				id: 1,
				text: "Resume",
				type: "",
				link: "/",
				anchor: "",
			},
			{
				id: 2,
				text: "Experience",
				type: "",
				link: "/experience",
				anchor: "",
			},
		],
	},
	{
		id: 4,
		title: "Experiences",
		options: [
			{
				id: 1,
				text: "Liverpool",
				type: "",
				link: "/#about-me",
				anchor: "",
			},
			{
				id: 2,
				text: "HUBBUB",
				type: "",
				link: "/#studies-courses",
				anchor: "",
			},
			{
				id: 3,
				text: "Gook Óptica",
				type: "",
				link: "/#experience-projects",
				anchor: "",
			},
		],
	},
];

let footOpciones = [
	{
		id: 1,
		title: "Contactemos",
		options: [
			{
				id: 1,
				text: "(+52) 55-6502-7645",
				type: "tel:",
				link: "+525565027645",
				anchor: "_blank",
			},
			{
				id: 2,
				text: "saululiseshernandezcruz@gmail.com",
				type: "mailto:",
				link: "saululiseshernandezcruz@gmail.com",
				anchor: "_blank",
			},
			{
				id: 3,
				text: "@ZulHernandezC",
				type: "",
				link: "https://t.me/ZulHernandezC",
				anchor: "_blank",
			},
			{
				id: 4,
				text: "Agendar una cita",
				type: "",
				link: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3IHfVcWon0GCIlKQNx98HMtHPHf_UV5dvAJD88J-6lr3AS9z3heiAl9kd_KvBRN88H2-5mS9VQ",
				anchor: "_blank",
			},
		],
	},
	{
		id: 2,
		title: "OTROS ESPACIOS",
		options: [
			{
				id: 1,
				text: "LinkedIn (Saúl Ulises Hernández Cruz)",
				type: "",
				link: "https://www.linkedin.com/in/saululises/",
				anchor: "_blank",
			},
			{
				id: 2,
				text: "Behance (zulhernndez)",
				type: "",
				link: "https://www.behance.net/zulhernndez",
				anchor: "_blank",
			},
			{
				id: 3,
				text: "Sketchfab (Zul Hernández)",
				type: "",
				link: "https://sketchfab.com/zulHernandez1912",
				anchor: "_blank",
			},
			{
				id: 4,
				text: "GitHub (ZulHernandez)",
				type: "",
				link: "https://github.com/ZulHernandez",
				anchor: "_blank",
			},
			{
				id: 5,
				text: "Relayto (Saúl Hernández)",
				type: "",
				link: "https://relayto.com/saul-hernandez/docs",
				anchor: "_blank",
			},
		],
	},
	{
		id: 3,
		title: "MAPA DEL SITIO",
		options: [
			{
				id: 1,
				text: "Curriculum",
				type: "",
				link: "/",
				anchor: "",
			},
			{
				id: 2,
				text: "Experiencia",
				type: "",
				link: "/experience",
				anchor: "",
			},
		],
	},
	{
		id: 4,
		title: "Mapa de la página",
		options: [
			{
				id: 1,
				text: "Sobre mi",
				type: "",
				link: "/#sobre-mi",
				anchor: "",
			},
			{
				id: 2,
				text: "Estudios y cursos",
				type: "",
				link: "/#estudios-cursos",
				anchor: "",
			},
			{
				id: 3,
				text: "Experiencia y proyectos",
				type: "",
				link: "/#experiencia-proyectos",
				anchor: "",
			},
			{
				id: 4,
				text: "Contáctame",
				type: "",
				link: "/#contactame",
				anchor: "",
			},
		],
	},
];

let footOpcionesExp = [
	{
		id: 1,
		title: "Contactemos",
		options: [
			{
				id: 1,
				text: "(+52) 55-6502-7645",
				type: "tel:",
				link: "+525565027645",
				anchor: "_blank",
			},
			{
				id: 2,
				text: "saululiseshernandezcruz@gmail.com",
				type: "mailto:",
				link: "saululiseshernandezcruz@gmail.com",
				anchor: "_blank",
			},
			{
				id: 3,
				text: "@ZulHernandezC",
				type: "",
				link: "https://t.me/ZulHernandezC",
				anchor: "_blank",
			},
			{
				id: 4,
				text: "Agendar una cita",
				type: "",
				link: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3IHfVcWon0GCIlKQNx98HMtHPHf_UV5dvAJD88J-6lr3AS9z3heiAl9kd_KvBRN88H2-5mS9VQ",
				anchor: "_blank",
			},
		],
	},
	{
		id: 2,
		title: "OTROS ESPACIOS",
		options: [
			{
				id: 1,
				text: "LinkedIn (Saúl Ulises Hernández Cruz)",
				type: "",
				link: "https://www.linkedin.com/in/saululises/",
				anchor: "_blank",
			},
			{
				id: 2,
				text: "Behance (zulhernndez)",
				type: "",
				link: "https://www.behance.net/zulhernndez",
				anchor: "_blank",
			},
			{
				id: 3,
				text: "Sketchfab (Zul Hernández)",
				type: "",
				link: "https://sketchfab.com/zulHernandez1912",
				anchor: "_blank",
			},
			{
				id: 4,
				text: "GitHub (ZulHernandez)",
				type: "",
				link: "https://github.com/ZulHernandez",
				anchor: "_blank",
			},
			{
				id: 5,
				text: "ISSUU (Saúl Hernández)",
				type: "",
				link: "https://issuu.com/nhoro",
				anchor: "_blank",
			},
		],
	},
	{
		id: 3,
		title: "MAPA DEL SITIO",
		options: [
			{
				id: 1,
				text: "Curriculum",
				type: "",
				link: "/",
				anchor: "",
			},
			{
				id: 2,
				text: "Experiencia",
				type: "",
				link: "/experience",
				anchor: "",
			},
		],
	},
	{
		id: 4,
		title: "Experiencias",
		options: [
			{
				id: 1,
				text: "Liverpool",
				type: "",
				link: "/#about-me",
				anchor: "",
			},
			{
				id: 2,
				text: "HUBBUB",
				type: "",
				link: "/#studies-courses",
				anchor: "",
			},
			{
				id: 3,
				text: "Gook Óptica",
				type: "",
				link: "/#experience-projects",
				anchor: "",
			},
		],
	},
];

const CoFootOption = () => {
	const { ruta, language } = useContext(MyContext);
	let array;
	if (ruta == "/" || ruta.includes("/#")) {
		language == "EN" ? (array = footOptions) : (array = footOpciones);
	} else if (ruta.includes("/experience")) {
		language == "EN" ? (array = footOptionsExp) : (array = footOpcionesExp);
	}

	return array.map((footOption) => {
		return (
			<div key={footOption.id} className="cont-footer-card">
				<h4>{footOption.title}</h4>
				<div className="cont-footer-card-text">
					{footOption.options.map((option) => {
						return (
							<a
								key={option.id}
								href={option.type + option.link}
								target={option.anchor}
								rel="noreferrer"
							>
								<p>{option.text}</p>
							</a>
						);
					})}
				</div>
			</div>
		);
	});
};

const CoFootMap = () => {
	return (
		<div className="cont-footer">
			<CoFootOption />
			<img loading="lazy" className="cont-footer-img" src={sign} alt="Sign" />
		</div>
	);
};

const CoCopy = () => {
	const { language } = useContext(MyContext);
	return (
		<div className="cont-copy">
			{language == "EN"
				? "We value your privacy and the trust you place in us. The personal information you provide us, such as your name and email, will not be used for any commercial purpose. We will only use this information to communicate with you and provide you with the services you have requested. If you have any questions or concerns about our privacy practices, please do not hesitate to contact us."
				: "Valoramos tu privacidad y la confianza que depositas en nosotros. La información personal que nos proporcionas, como tu nombre y correo electrónico, no será utilizada para ningún fin comercial. Solo utilizaremos esta información para comunicarnos contigo y brindarte los servicios que has solicitado. Si tienes alguna pregunta o inquietud sobre nuestras prácticas de privacidad, no dudes en ponerte en contacto con nosotros"}
		</div>
	);
};

const CoFooter = () => {
	return (
		<div className="foot">
			<CoFootMap />
			<CoCopy />
		</div>
	);
};

export default CoFooter;
 