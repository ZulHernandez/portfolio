import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import CoTitle from "./CoTitle";

import tel from "../../assets/imgs/home/call.svg";
import mail from "../../assets/imgs/home/mail.svg";
import calendar from "../../assets/imgs/home/calendar.svg";

import github from "../../assets/imgs/home/GitHub.svg";
import sketchfab from "../../assets/imgs/home/SketchFab.svg";
import behance from "../../assets/imgs/home/Behance.svg";
import linkedin from "../../assets/imgs/home/LinkedIn.svg";

const contactos = [
	{
		icon: tel,
		text: "+52 55-6502-7645",
		url: "tel:+525565027645",
	},
	{
		icon: mail,
		text: "saululiseshernandezcruz@gmail.com",
		url: "mailto:saululiseshernandezcruz@gmail.com",
	},
	{
		icon: calendar,
		text: "¡Agendemos una cita!",
		url: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3IHfVcWon0GCIlKQNx98HMtHPHf_UV5dvAJD88J-6lr3AS9z3heiAl9kd_KvBRN88H2-5mS9VQ",
	},
];

const redes = [
	{
		icon: github,
		text: "GitHub",
		url: "https://github.com/ZulHernandez",
	},
	{
		icon: sketchfab,
		text: "SketchFab",
		url: "https://sketchfab.com/zulHernandez1912",
	},
	{
		icon: behance,
		text: "Behance",
		url: "https://www.behance.net/zulhernndez",
	},
	{
		icon: linkedin,
		text: "LinkedIn",
		url: "https://www.linkedin.com/in/saululises/",
	},
]

const CoConozca = () => {
	const { language } = useContext(MyContext);

	return (
		<div
			id={language == "ES" ? "conozcamonos" : "getInTouch"}
			className="container-fluid grey"
		>
			<CoTitle
				titles={language == "ES" ? "Conozcámonos" : "Let's get in touch"}
			/>
			<div className="contact-card">
				<div className="contact-card__text">
					<p>
						{language == "ES"
							? "Hablemos de trabajo o quizá solo un ¡Hola!"
							: "Let's talk about work or maybe just a hello!"}
					</p>
					{contactos.map((contact, index) => (
						<a key={index} href={contact.url} className="contact-card__link">
							<div className="contact-card__text-link">
								<img src={contact.icon} alt={contact.text} />
								<span>{contact.text}</span>
							</div>
						</a>
					))}
				</div>
				<div className="contact-card__redes">
					{redes.map((red, index) => (
						<a key={index} href={red.url} target="_blank" rel="noreferrer" className="contact-card__link">
							<div className="contact-card__redes">
								<img src={red.icon} alt={red.text} />
							</div>
						</a>
					))}
				</div>
			</div>
		</div>
	);
};
export default CoConozca;
