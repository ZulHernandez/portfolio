import { useContext } from "react";
import { MyContext } from "../../context/MyContext.js";
import { useState } from "react";

import CoTitle from "../../../components/general/CoTitle.jsx";
import CoBtn from "../../../components/general/CoBtn.jsx";

import flow1 from "../../../assets/imgs/works/movilidad/flow/flow1.svg";
import flow2 from "../../../assets/imgs/works/movilidad/flow/flow2.svg";
import flow3 from "../../../assets/imgs/works/movilidad/flow/flow3.svg";
import flow4 from "../../../assets/imgs/works/movilidad/flow/flow4.svg";
import flow5 from "../../../assets/imgs/works/movilidad/flow/flow5.svg";
import flow6 from "../../../assets/imgs/works/movilidad/flow/flow6.svg";
import flow7 from "../../../assets/imgs/works/movilidad/flow/flow7.svg";
import flow8 from "../../../assets/imgs/works/movilidad/flow/flow8.svg";
import flow9 from "../../../assets/imgs/works/movilidad/flow/flow9.svg";
import flow10 from "../../../assets/imgs/works/movilidad/flow/flow10.svg";
import arrow from "../../../assets/imgs/works/movilidad/flow/arrow.svg";

import screen1 from "../../../assets/imgs/works/movilidad/flow/screen1.png";
import screen2 from "../../../assets/imgs/works/movilidad/flow/screen2.png";
import screen3 from "../../../assets/imgs/works/movilidad/flow/screen3.png";
import screen4 from "../../../assets/imgs/works/movilidad/flow/screen4.png";
import screen5 from "../../../assets/imgs/works/movilidad/flow/screen5.png";
import screen6 from "../../../assets/imgs/works/movilidad/flow/screen6.png";
import screen7 from "../../../assets/imgs/works/movilidad/flow/screen7.png";

const CoAmbNoti = () => {
	const { language } = useContext(MyContext);
	const [step, setStep] = useState(0);
	const [flow, setFlow] = useState(0);

	const flujo = [
		{
			icon: flow1,
			text: language === "ES" ? "Mapa" : "Map",
		},
		{
			icon: flow2,
			text: language === "ES" ? "Lectura de QR" : "QR Reading",
		},
		{
			icon: flow3,
			text:
				language === "ES" ? "Configuración de carga" : "Charging configuration",
		},
		{
			icon: flow4,
			text: language === "ES" ? "Estatus 1: Cargando" : "Status 1: Charging",
		},
		{
			icon: flow5,
			text:
				language === "ES"
					? "Estatus 2: Carga finalizada"
					: "Status 2: Charging completed",
		},
		{
			icon: flow6,
			text:
				language === "ES"
					? "Estatus 3: Cargo por estancía"
					: "Status 3: Charge by idling",
		},
		{
			icon: flow7,
			text: language === "ES" ? "Página de agradecimiento" : "Thank you page",
		},
	];

	const screens = [
		{
			img: screen1,
			title: language === "ES" ? "Mapa" : "Map",
			text: [
				language === "ES"
					? "Esta es la página principal del aplicativo, de esta se desprenden todas las acciones secundarias para manipular la información que se refleja en el mapa y, al mismo tiempo, permite acceder a otras secciones del aplicativo."
					: "This is the main page of the application, from which all secondary actions to manipulate the information displayed on the map are derived, and at the same time, it allows access to other sections of the application.",
				language === "ES"
					? "En esta pantalla se puede ver el mapa de la ciudad, con las estacionesSu objetivo es el permitir identificar donde están ubicadas las estaciones de carga, información sobre la misma y comenzar el flujo transaccional bajo la lectura del QR adjunto al tótem de carga."
					: "On this screen, you can see the city map with the charging stations.",
			],
		},
		{
			img: screen2,
			title: language === "ES" ? "Lectura de QR" : "QR Reading",
			text: [
				language === "ES"
					? "Se activa la cámara del dispositivo y se realiza la lectura del código impreso en el tótem de carga."
					: "The device's camera is activated and the code printed on the charging totem is read.",
				language === "ES"
					? "En ese momento se carga la información de esa pistola de carga y se procede a la configuración de carga."
					: "At that moment, the information of that charging gun is loaded and the charging configuration is proceeded.",
			],
		},
		{
			img: screen3,
			title:
				language === "ES" ? "Configuración de carga" : "Charging configuration",
			text: [
				language === "ES"
					? "Se carga la información de la pistola de cargo lo cual incluye: identificador, nombre de la estación, tipo de cargador, velocidad de carga, tarifa por carga y tarifa por estancia. Además de esta información se permite configurar por 3 tipos de input los cuales pueden ser por cantidad de dinero que se desea recargar, porcentaje final al que se quiere dejar el vehículo o la cantidad de Kilowatts que se buscan cargar."
					: "The charging gun information is loaded, which includes: identifier, station name, charger type, charging speed, charging fee, and idling fee. In addition to this information, it allows configuration through 3 types of inputs which can be by the amount of money to recharge, final percentage to leave the vehicle, or the amount of kilowatts to be charged.",
				language === "ES"
					? "Una vez configurada la carga se procede a iniciar el flujo transaccionalEl resto de información es para la selección del método de pago dando opción a la selección de alguno de los métodos que tenga ya guardados dentro de su billetera Liverpool o el registro de uno nuevo más la adición de usar el saldo que posea dentro de su monedero digital."
					: "Once the charge is configured, the transactional flow is initiated. The rest of the information is for selecting the payment method, giving the option to select one of the methods already saved in their Liverpool wallet or registering a new one, plus the addition of using the balance they have in their digital wallet.",
				language === "ES"
					? "Mucha de esta configuración dependiendo de la forma en que se comportaba ya actualmente el checkout de e-commerce."
					: "Much of this configuration depends on how the e-commerce checkout was already behaving.",
			],
		},
		{
			img: screen4,
			title: language === "ES" ? "Estatus 1: Cargando" : "Status 1: Charging",
			text: [
				language === "ES"
					? "Esta página muestra resumidamente el avance de la carga del automóvil así como información para cualquier problema que pueda suscitarse desde información del cargador hasta un botón para la interrupción de la carga."
					: "This page briefly shows the progress of the car's charge as well as information for any problems that may arise, from charger information to a button for interrupting the charge.",
				language === "ES"
					? "Se ve acompañado de una actividad en tiempo real que refleja la misma experiencia."
					: "It is accompanied by a real-time activity that reflects the same experience.",
			],
		},
		{
			img: screen5,
			title:
				language === "ES"
					? "Estatus 2: Carga finalizada"
					: "Status 2: Charging completed",
			text: [
				language === "ES"
					? "Ya finalizada o interrumpida la carga este pase al estatus de carga finalizada donde se pide al usuario desconectar su coche y abandonar el área de carga de lo contraria se comenzara a cobrar la estancia."
					: "Once the charge is completed or interrupted, it moves to the status of completed charging where the user is asked to disconnect their car and leave the charging area, otherwise, idling charges will begin.",
				language === "ES"
					? "Este mensaje también se acompaña con una actividad en tiempo real que advierte la cantidad de tiempo que le queda al usuario antes de comenzar el cobro por estancia."
					: "This message is also accompanied by a real-time activity that warns the user of the amount of time left before idling charges begin.",
			],
		},
		{
			img: screen6,
			title:
				language === "ES"
					? "Estatus 3: Cargo por estancía"
					: "Status 3: Charge by idling",
			text: [
				language === "ES"
					? "Aquí el aplicativo comienza a sumar una tarifa por minuto de estancia del coche dentro del área de carga. Se acompaña de una actividad en tiempo real que va sumando los minutos que allá pasado y su equivalente en tarifa."
					: "Here the application starts to add a fee per minute for the car's stay in the charging area. It is accompanied by a real-time activity that adds up the minutes spent and their equivalent in fees.",
			],
		},
		{
			img: screen7,
			title: language === "ES" ? "Página de agradecimiento" : "Thank you page",
			text: [
				language === "ES"
					? "Finalizado todo el proceso de carga y, de no haberse suscitado ningún problema se muestra un resumen del cobro por toda la actividad realizada y se realiza el cobro automaticamente."
					: "Once the entire charging process is completed and no issues have arisen, a summary of the charge for all the activity performed is displayed, and the charge is processed automatically.",
			],
		},
	];

	const flujoPruebas = [
		{
			title:
				language === "ES"
					? "Flujo con cobro automático"
					: "Flow with automatic charge",
			steps: [
				{
					icon: flow3,
					title:
						language === "ES"
							? "Configuración de carga"
							: "Charging configuration",
				},
				{
					icon: flow8,
					title:
						language === "ES"
							? "Selección de tarjeta e ingreso de licencias"
							: "Card selection and license entry",
				},
				{
					icon: flow4,
					title: language === "ES" ? "Proceso de carga" : "Charging process",
				},
				{
					icon: flow9,
					title: language === "ES" ? "Cobro automático" : "Automatic payment",
				},
			],
			text:
				language === "ES"
					? "En esta propuesta se pueden almacenar las licencias durante el proceso de carga lo que  permite que, al final del cobro, simplemente se realice el cargo a la tarjeta seleccionada al principio y se muestre el thankyou page"
					: "In this proposal, licenses can be stored during the charging process, allowing for the charge to be made to the selected card at the beginning and displaying the thank you page at the end.",
		},
		{
			title:
				language === "ES"
					? "Flujo con doble autenticación"
					: "Flow with double authentication",
			steps: [
				{
					icon: flow3,
					title:
						language === "ES"
							? "Configuración de carga"
							: "Charging configuration",
				},
				{
					icon: flow8,
					title:
						language === "ES"
							? "Selección de tarjeta, ingreso de licencias y precobro de carga"
							: "Card selection, license entry, and pre-charge",
				},
				{
					icon: flow4,
					title: language === "ES" ? "Proceso de carga" : "Charging process",
				},
				{
					icon: flow8,
					title:
						language === "ES"
							? "Reingreso de credenciales y ajuste de cobro"
							: "Re-enter credentials and charge adjustment",
				},
			],
			text:
				language === "ES"
					? "Aquí se pretende hacer un cobro basado exclusivamente en el monto de carga configurado, al final se pide al cliente volverse a identificar para hacer el ajuste del saldo ya sea cobrando o reembolsando"
					: "In this proposal, the aim is to make a charge based exclusively on the configured charging amount. At the end, the customer is asked to re-identify themselves to adjust the balance, either by charging or refunding.",
		},
		{
			title: language === "ES" ? "Flujo con devolución" : "Flow with refund",
			steps: [
				{
					icon: flow3,
					title:
						language === "ES"
							? "Configuración de carga"
							: "Charging configuration",
				},
				{
					icon: flow8,
					title:
						language === "ES"
							? "Selección de tarjeta, ingreso de licencias y precobro de monto excedente"
							: "Card selection, license entry, and pre-charge of excess amount",
				},
				{
					icon: flow4,
					title: language === "ES" ? "Proceso de carga" : "Charging process",
				},
				{
					icon: flow10,
					title:
						language === "ES"
							? "Devolución del sobrante"
							: "Refund of excess amount",
				},
			],
			text:
				language === "ES"
					? "Con este flujo se pretende cobrar una cantidad excedente de dinero que asegure el cobro de todo tipo de conceptos y, posteriormente se genera la devolución."
					: "In this proposal, the aim is to charge an excess amount of money to ensure the collection of all types of concepts, and subsequently generate the refund.",
		},
	];

	return (
		<div
			id={language === "ES" ? "flujo-y-metodos" : "flow-and-methods"}
			className="container-fluid"
		>
			<CoTitle
				titles={
					language === "ES"
						? "Flujo transaccional y métodos de pagos"
						: "Transactional Flow and Payment Methods"
				}
			/>
			<span className="text-normal">
				{language === "ES"
					? "De entre todos los flujos que componen al aplicativo de red de carga el principal y más importante es el transaccional, es decir aquel que permitía llevar la carga del vehículo y generar el cobro por el servicio."
					: "Among all the flows that make up the charging network application, the main and most important one is the transactional flow, which allows for the vehicle's charge to be processed and the service fee to be generated."}
			</span>
			<div className="flow-schema">
				{flujo.map((item, index) => (
					<>
						{index != 0 && <img src={arrow} alt="arrow" />}
						<a
							key={index}
							className="flow-schema-item"
							style={{
								filter: step == index ? "opacity(1)" : "opacity(0.25)",
							}}
							onClick={() => setStep(index)}
						>
							<img src={item.icon} alt={item.text} />
							<span>{item.text}</span>
						</a>
					</>
				))}
			</div>
			<center style={{ width: "100%" }}>
				<div className="flow-description">
					<div
						style={{ transform: "rotate(180deg)" }}
						onClick={() => setStep(step == 0 ? 6 : step - 1)}
					>
						<CoBtn type={"primary"} text={""} link={""} />
					</div>
					<img src={screens[step].img} alt={screens[step].title} />
					<div className="flow-description-text">
						<h2 className="subtitle">{screens[step].title}</h2>
						{screens[step].text.map((text, index) => (
							<span
								key={index}
								className="text-normal"
								style={{ width: "100%" }}
							>
								{text}
							</span>
						))}
					</div>
					<div onClick={() => setStep(step == 6 ? 0 : step + 1)}>
						<CoBtn type={"primary"} text={""} link={""} />
					</div>
				</div>
			</center>
			<br />
			<span className="text-normal">
				{language === "ES"
					? "Este flujo tuvo diferentes modificaciones basadas en la formas de pago y el tipo de pasarela de pago que se podía implementar dentro del mismo lo que provoco una serie de iteraciones dentro del mismo, un resumen del tipo de flujos que se propusieron fueron los siguientes:"
					: "This flow underwent different modifications based on the payment methods and the type of payment gateway that could be implemented within the flow, which led to a series of iterations. A summary of the types of flows proposed is as follows:"}
			</span>
			<center style={{ width: "100%" }}>
				<div className="flow-description">
					<div
						style={{ transform: "rotate(180deg)" }}
						onClick={() => setFlow(flow == 0 ? 2 : flow - 1)}
					>
						<CoBtn type={"primary"} text={""} link={""} />
					</div>
					<div className="flow-description-content">
						<span className="subtitle">{flujoPruebas[flow].title}</span>
						<div className="flow-schema">
							{flujoPruebas[flow].steps.map((step, index) => (
								<>
									{index != 0 && <img src={arrow} alt="arrow" />}
									<div
										key={index}
										className="flow-schema-item"
										onClick={() => setStep(index)}
									>
										<img src={step.icon} alt={step.title} />
										<span>{step.title}</span>
									</div>
								</>
							))}
						</div>
					</div>
					<div onClick={() => setFlow(flow == 2 ? 0 : flow + 1)}>
						<CoBtn type={"primary"} text={""} link={""} />
					</div>
				</div>
				<center style={{ width: "90%" }}>
					<span className="text-normal">{flujoPruebas[flow].text}</span>
				</center>
			</center>
		</div>
	);
};

export default CoAmbNoti;
