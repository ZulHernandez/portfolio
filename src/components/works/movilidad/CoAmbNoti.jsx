import { useContext } from "react";
import { MyContext } from "../../context/MyContext.js";
import { useState } from "react";

import CoTitle from "../../../components/general/CoTitle.jsx";

import up from "../../../assets/imgs/works/movilidad/notifications/up.svg";
import center from "../../../assets/imgs/works/movilidad/notifications/center.svg";
import down from "../../../assets/imgs/works/movilidad/notifications/down.svg";
import noti from "../../../assets/imgs/works/movilidad/notifications/notification.svg";
import island from "../../../assets/imgs/works/movilidad/notifications/dIsland.svg";
import watch from "../../../assets/imgs/works/movilidad/notifications/watch.svg";
import stand from "../../../assets/imgs/works/movilidad/notifications/stand.svg";

import isla1 from "../../../assets/imgs/works/movilidad/notifications/isla1.svg";
import isla2 from "../../../assets/imgs/works/movilidad/notifications/isla2.svg";
import isla3 from "../../../assets/imgs/works/movilidad/notifications/isla3.svg";
import iOsNoti1 from "../../../assets/imgs/works/movilidad/notifications/iOsNoti1.svg";
import iOsNoti2 from "../../../assets/imgs/works/movilidad/notifications/iOsNoti2.svg";
import iOsNoti3 from "../../../assets/imgs/works/movilidad/notifications/iOsNoti3.svg";
import iWatch1 from "../../../assets/imgs/works/movilidad/notifications/iWatch1.png";
import iWatch2 from "../../../assets/imgs/works/movilidad/notifications/iWatch2.png";
import iWatch3 from "../../../assets/imgs/works/movilidad/notifications/iWatch3.png";
import standBy1 from "../../../assets/imgs/works/movilidad/notifications/standBy1.png";
import standBy2 from "../../../assets/imgs/works/movilidad/notifications/standBy2.png";

const CoAmbNoti = () => {
	const { language } = useContext(MyContext);

	const [carruselIos, setCarruselIos] = useState([
		{
			id: 1,
			text: language === "ES" ? "Isla Dinámica" : "Dynamic Island",
			img: island,
			screens: [isla1, isla2, isla3],
			alt: "Dynamic Island",
		},
		{
			id: 2,
			text: language === "ES" ? "Notificación" : "Notification",
			img: noti,
			screens: [iOsNoti1, iOsNoti2, iOsNoti3],
			alt: "Notification",
		},
		{
			id: 3,
			text: language === "ES" ? "Reloj" : "Watch",
			img: watch,
			screens: [iWatch1, iWatch2, iWatch3],
			alt: "Watch",
		},
		{
			id: 4,
			text: language === "ES" ? "StandBy" : "StandBy",
			img: stand,
			screens: [standBy1, standBy2],
			alt: "StandBy",
		}
	]);

	const [carruselAndroid, setCarruselAndroid] = useState([
		{
			id: 1,
			text: language === "ES" ? "Reloj" : "Watch",
			img: watch,
		},
		{
			id: 2,
			text: language === "ES" ? "Notificación" : "Notification",
			img: noti,
		},
	]);

	const bullets = [
		{
			title:
				language === "ES" ? "1. Carga en curso" : "1. Charging in progress",
			description:
				language === "ES"
					? "Se muestra información como el total de tiempo de carga, kilowatts cargados y porcentaje de batería actual del carro. El componente principal animado muestra el avance de la carga."
					: "Information such as total charging time, kilowatts charged, and current battery percentage of the car is displayed. The main animated component shows the progress of the charging.",
			ref: "#",
		},
		{
			title:
				language === "ES" ? "2. Carga finalizada" : "2. Charging completed",
			description:
				language === "ES"
					? "Despliega instrucciones para la desconexión del carro y ocupa un temporizador para mostrar el tiempo que falta para comenzar a cobrar la tarifa por estancia."
					: "Displays instructions for disconnecting the car and uses a timer to show the time remaining before charging the parking fee begins.",
			ref: "#",
		},
		{
			title:
				language === "ES" ? "3. Cargo por estancia" : "3. Parking fee charge",
			description:
				language === "ES"
					? "Se puede visualizar las mismas instrucciones anteriores de desconexión más la el costo de tarifa por estancia. El componente animado cambia a un cronometro."
					: "Information such as total charging time, kilowatts charged, and current battery percentage of the car is displayed. The main animated component shows the progress of the charging.",
			ref: "#",
		},
	];

	const rotateArray = (brand) => {
		if (brand === "iOs") {
			setCarruselIos((prevWorks) => [...prevWorks.slice(1), prevWorks[0]]);
		} else if (brand === "Android") {
			setCarruselAndroid((prevWorks) => [...prevWorks.slice(1), prevWorks[0]]);
		}
	};

	const rotateReverse = (brand) => {
		if (brand === "iOs") {
			setCarruselIos((prevWorks) => [
				prevWorks[prevWorks.length - 1],
				...prevWorks.slice(0, -1),
			]);
		} else if (brand === "Android") {
			setCarruselAndroid((prevWorks) => [
				prevWorks[prevWorks.length - 1],
				...prevWorks.slice(0, -1),
			]);
		}
	};

	return (
		<div
			id={language === "ES" ? "notificaciones" : "notifications"}
			className="container-fluid"
		>
			<CoTitle
				titles={
					language === "ES"
						? "Ambiente de notificaciones"
						: "Notification environment"
				}
			/>
			<div>
				<span className="text-normal">
					{language === "ES"
						? "Otro de los esfuerzos realizados para este proyecto y que implico la implementación de una tecnología que nunca se había utilizado dentro de Pocket fueron las actividades en tiempo real. Por primera vez se presentaba la necesidad de desplegar información con tracking en tiempo real que pudiese sumar valor a la experiencia del cliente sumado a las capacidades técnicas que entregaba el CMS de QiOn."
						: "Another effort made for this project, which involved the implementation of a technology that had never been used within Pocket, was real-time activities. For the first time, there was a need to display information with real-time tracking that could add value to the customer experience, along with the technical capabilities provided by QiOn's CMS."}
					<br />
					{language === "ES"
						? "Se identificaron 3 espacios específicos donde utilizar estas actividades sería muy provechoso:"
						: "Three specific spaces were identified where using these activities would be very beneficial:"}
				</span>
				<br />
				<br />
				<br />
				{bullets.map((bullet, index) => (
					<div key={index} className="bullet-point">
						<div>
							<span className="bullet-point__title">{bullet.title}</span>
						</div>
						<br />
						<span className="text-normal">{bullet.description}</span>
						<br />
						<br />
					</div>
				))}
			</div>
			<div>
				<h2 className="subtitle">iOs</h2>
				<div className="example-container">
					<div className="example-container__control">
						<div className="example-container__control-arrows">
							<img
								className="arrow"
								src={up}
								alt="Up arrow"
								onClick={() => {
									rotateReverse("iOs");
								}}
							/>
							<img src={center} alt="Center arrow" />
							<img
								className="arrow"
								src={down}
								alt="Down arrow"
								onClick={() => {
									rotateArray("iOs");
								}}
							/>
						</div>
						<div className="example-container__control-buttons">
							<div
								id="uno"
								key={carruselIos[0].id}
								className="example-container__control-buttons-item"
							>
								<img
									className="example-container__control-item-img"
									src={carruselIos[0].img}
									alt={carruselIos[0].text}
								/>
								<span className="example-container__control-item-text">
									{carruselIos[0].text}
								</span>
							</div>
							<div
								id="dos"
								key={carruselIos[1].id}
								className="example-container__control-buttons-item"
							>
								<img
									className="example-container__control-item-img"
									src={carruselIos[1].img}
									alt={carruselIos[1].text}
								/>
								<span className="example-container__control-item-text">
									{carruselIos[1].text}
								</span>
							</div>
							<div
								id="tres"
								key={carruselIos[2].id}
								className="example-container__control-buttons-item"
							>
								<img
									className="example-container__control-item-img"
									src={carruselIos[2].img}
									alt={carruselIos[2].text}
								/>
								<span className="example-container__control-item-text">
									{carruselIos[2].text}
								</span>
							</div>
						</div>
					</div>
					<div className="example-container__screens">
						{carruselIos[1].screens &&
							carruselIos[1].screens.map((screen, index) => (
								<img
									key={index}
									className="example-container__screens-item"
									src={screen}
									alt={carruselIos[1].alt}
								/>
							))}
					</div>
				</div>
			</div>
			<div>
				<h2 className="subtitle">Android</h2>
				<div className="example-container">
					<div className="example-container__control">
						<div className="example-container__control-arrows">
							<img
								className="arrow"
								src={up}
								alt="Up arrow"
								onClick={() => {
									rotateReverse("Android");
								}}
							/>
							<img src={center} alt="Center arrow" />
							<img
								className="arrow"
								src={down}
								alt="Down arrow"
								onClick={() => {
									rotateArray("Android");
								}}
							/>
						</div>
						<div className="example-container__control-buttons">
							<div
								id="uno"
								key={carruselAndroid[0].id}
								className="example-container__control-buttons-item"
							>
								<img
									className="example-container__control-item-img"
									src={carruselAndroid[0].img}
									alt={carruselAndroid[0].text}
								/>
								<span className="example-container__control-item-text">
									{carruselAndroid[0].text}
								</span>
							</div>
							<div
								id="dos"
								key={carruselAndroid[1].id}
								className="example-container__control-buttons-item"
							>
								<img
									className="example-container__control-item-img"
									src={carruselAndroid[1].img}
									alt={carruselAndroid[1].text}
								/>
								<span className="example-container__control-item-text">
									{carruselAndroid[1].text}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CoAmbNoti;
