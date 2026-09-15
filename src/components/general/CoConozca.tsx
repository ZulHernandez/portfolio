import CoTitle from "./CoTitle";
import { useTranslation } from "react-i18next";

import tel from "../../assets/imgs/home/call.svg";
import mail from "../../assets/imgs/home/mail.svg";
import calendar from "../../assets/imgs/home/calendar.svg";

import redes from "../context/varRedes";

interface Contacto {
	icon: string;
	text: string;
	url: string;
}

const contactos: Contacto[] = [
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

const CoConozca = () => {
	const { t } = useTranslation();

	return (
		<div id={t("home.anchors.conozca.id")} className="container-fluid grey">
			<CoTitle titles={t("getInTouch.title")} />
			<div className="contact-card">
				<div className="contact-card__text">
					<p>{t("getInTouch.subtitle")}</p>
					{contactos.map((contact, index) => (
						<a key={index} href={contact.url} className="contact-card__link">
							<div className="contact-card__text-link">
								<img loading="lazy" src={contact.icon} alt={contact.text} />
								<span>{contact.text}</span>
							</div>
						</a>
					))}
				</div>
				<div className="contact-card__redes">
					{redes.map((red, index) => (
						<a
							key={index}
							href={red.url}
							target="_blank"
							rel="noreferrer"
							className="contact-card__link"
						>
							<div className="contact-card__redes">
								<img loading="lazy" src={red.icon} alt={red.text} />
							</div>
						</a>
					))}
				</div>
			</div>
		</div>
	);
};
export default CoConozca;
