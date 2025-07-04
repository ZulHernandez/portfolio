import { useContext } from "react";
import { MyContext } from "../../context/MyContext.js";
import { useState } from "react";

import CoTitle from "../../../components/general/CoTitle.jsx";

import flow1 from "../../../assets/imgs/works/movilidad/flow/flow1.svg";
import flow2 from "../../../assets/imgs/works/movilidad/flow/flow2.svg";
import flow3 from "../../../assets/imgs/works/movilidad/flow/flow3.svg";
import flow4 from "../../../assets/imgs/works/movilidad/flow/flow4.svg";
import flow5 from "../../../assets/imgs/works/movilidad/flow/flow5.svg";
import flow6 from "../../../assets/imgs/works/movilidad/flow/flow6.svg";
import flow7 from "../../../assets/imgs/works/movilidad/flow/flow7.svg";
import arrow from "../../../assets/imgs/works/movilidad/flow/arrow.svg";

const CoAmbNoti = () => {
	const { language } = useContext(MyContext);

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
                
            </div>
		</div>
	);
};

export default CoAmbNoti;
