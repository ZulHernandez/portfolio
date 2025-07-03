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

import watchFrame from "../../../assets/imgs/works/movilidad/notifications/watch.png";
import charginCar from "../../../assets/imgs/works/movilidad/notifications/charginCar.svg";
import tempo from "../../../assets/imgs/works/movilidad/notifications/tempo.svg";
import crono from "../../../assets/imgs/works/movilidad/notifications/crono.svg";

import icon1 from "../../../assets/imgs/works/movilidad/notifications/icon1.svg";
import icon2 from "../../../assets/imgs/works/movilidad/notifications/icon2.svg";
import icon3 from "../../../assets/imgs/works/movilidad/notifications/icon3.svg";

const IOsWatch = () => {
	return (
		<>
			<div id="frame1" className="example-container__frame">
				<img src={watchFrame} alt="Watch Frame" />
				<div className="div-notification watch">
					<img src={charginCar} alt="" />
					<div className="div-notification__text">
						<div className="watch-time">
							<span className="watch-time-title">Carga completa en:</span>
							<span className="watch-time-subtitle">72 min</span>
						</div>
						<div className="watch-dato">
							<span className="watch-dato-title">% total de la batería</span>
							<span className="watch-dato-data">45%</span>
						</div>
					</div>
				</div>
			</div>
			<div id="frame2" className="example-container__frame">
				<img src={watchFrame} alt="Watch Frame" />
				<div className="div-notification watch">
					<img src={tempo} alt="" />
					<div className="div-notification__text">
						<div className="watch-dato">
							<span className="watch-dato-title">25/08/2024 13:40</span>
							<span
								className="watch-dato-data"
								style={{ fontSize: "0.48rem", color: "#fff" }}
							>
								Cuentas con 5 minutos para desconectar la pistola de carga del
								automovil. Para evitar cargos por estancia
							</span>
						</div>
					</div>
				</div>
			</div>
			<div id="frame3" className="example-container__frame">
				<img src={watchFrame} alt="Watch Frame" />
				<div className="div-notification watch">
					<img src={crono} alt="" />
					<div className="div-notification__text">
						<div className="watch-dato">
							<span className="watch-dato-title">25/08/2024 13:40</span>
							<span
								className="watch-dato-data"
								style={{ fontSize: "0.48rem", color: "#fff" }}
							>
								Desconecta tu carro de la estación de carga. Se cobrarán $20.75
								por cada minuto de estancia dentro de la zona de carga.
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

const IOsIsland = () => {
	return (
		<>
			<div id="frame1" className="example-container__frame">
				<div className="div-notification island">
					<img src={icon1} alt="" />
					<div>
						<span>231</span>
						<span className="unity">
							<sup>kW</sup>
						</span>
					</div>
				</div>
				<div className="div-notification island extended">
					<img src={charginCar} alt="" />
					<div className="extended-text">
						<div className="extended-text__head">
							<div className="extended-text__head-data">
								<span className="extended-text__head-data-title">
									Carga completa en:
								</span>
								<span className="extended-text__head-data-subtitle">
									72 min
								</span>
							</div>
							<div>
								<span className="extended-text__head-data-status">
									• Cargando
								</span>
							</div>
						</div>
						<div className="extended-text__body">
							<div className="extended-text__body-dato">
								<span className="extended-text__body-dato-title">
									kW totales cargados
								</span>
								<span className="extended-text__body-dato-data">120kW</span>
							</div>
							<div className="extended-text__body-dato">
								<span className="extended-text__body-dato-title">
									kW totales cargados
								</span>
								<span className="extended-text__body-dato-data">120kW</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="frame2" className="example-container__frame">
				<div className="div-notification island">
					<img src={icon2} alt="" />
					<span style={{ color: "#5493F8" }}>3:50</span>
				</div>
				<div className="div-notification island extended">
					<img src={tempo} alt="" />
					<div className="extended-text">
						<div className="extended-text__head">
							<span className="extended-text__body-dato-title">
								25/08/2024 13:40
							</span>
							<div>
								<span
									className="extended-text__head-data-status"
									style={{ color: "#5493F8" }}
								>
									• Desconecta tu auto
								</span>
							</div>
						</div>
						<div className="extended-text__body">
							<span style={{ fontSize: "1rem", color: "#fff" }}>
								Cuentas con 5 minutos para desconectar la pistola de carga del
								automovil. Para evitar cargos por estancia
							</span>
						</div>
					</div>
				</div>
			</div>
			<div id="frame3" className="example-container__frame">
				<div className="div-notification island">
					<img src={icon3} alt="" />
					<span style={{ color: "#EC9E00" }}>
						5<sup>min</sup>
					</span>
				</div>
				<div className="div-notification island extended">
					<img src={crono} alt="" />
					<div className="extended-text">
						<div className="extended-text__head">
							<span className="extended-text__body-dato-title">
								25/08/2024 13:40
							</span>
							<div>
								<span
									className="extended-text__head-data-status"
									style={{ color: "#EC9E00" }}
								>
									• Desconecta tu auto
								</span>
							</div>
						</div>
						<div className="extended-text__body">
							<span style={{ fontSize: "1rem", color: "#fff" }}>
								Desconecta tu carro de la estación de carga. Se cobrarán $20.75
								por cada minuto de estancia dentro de la zona de carga.
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

const IOsNotification = () => {
	return (
		<>
			<div id="frame1" className="example-container__frame">
				<div className="div-notification cell">
					<div className="cell-head">
						<span>Liverpool Pocket</span>
						<span
							className="extended-text__head-data-status"
							style={{ color: "#37ABC6" }}
						>
							• Cargando
						</span>
					</div>
					<img src={charginCar} alt="" />
					<div className="div-notification__text">
						<div className="watch-time">
							<span className="watch-time-title">Carga completa en:</span>
							<span className="watch-time-subtitle">72 min</span>
						</div>
						<div className="watch-dato">
							<span className="watch-dato-title">% total de la batería</span>
							<span className="watch-dato-data">45%</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

const CoAmbNoti = () => {
	const { language } = useContext(MyContext);

	const [carruselIos, setCarruselIos] = useState([
		{
			id: 1,
			text: language === "ES" ? "Isla Dinámica" : "Dynamic Island",
			img: island,
		},
		{
			id: 2,
			text: language === "ES" ? "Notificación" : "Notification",
			img: noti,
		},
		{
			id: 3,
			text: language === "ES" ? "Reloj" : "Watch",
			img: watch,
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

	const rotateArray = () => {
		setCarruselIos((prevWorks) => [...prevWorks.slice(1), prevWorks[0]]);
	};

	const rotateReverse = () => {
		setCarruselIos((prevWorks) => [
			prevWorks[prevWorks.length - 1],
			...prevWorks.slice(0, -1),
		]);
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

			<h2 className="subtitle">iOs</h2>
			<div className="example-container">
				<div className="example-container__control">
					<div className="example-container__control-arrows">
						<img
							className="arrow"
							src={up}
							alt="Up arrow"
							onClick={() => {
								rotateReverse();
							}}
						/>
						<img src={center} alt="Center arrow" />
						<img
							className="arrow"
							src={down}
							alt="Down arrow"
							onClick={() => {
								rotateArray();
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
				{(() => {
					switch (carruselIos[1].id) {
						case 1:
							return <IOsIsland />;
						case 2:
							return <IOsNotification />;
						case 3:
							return <IOsWatch />;
						default:
							return null;
					}
				})()}
			</div>
		</div>
	);
};

export default CoAmbNoti;
