import { useTranslation } from "react-i18next";
import { useState, Fragment } from "react";

import CoTitle from "../../../components/general/CoTitle";
import CoBtn from "../../../components/general/CoBtn";

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

import screen1 from "../../../assets/imgs/works/movilidad/flow/screen1.webp";
import screen2 from "../../../assets/imgs/works/movilidad/flow/screen2.webp";
import screen3 from "../../../assets/imgs/works/movilidad/flow/screen3.webp";
import screen4 from "../../../assets/imgs/works/movilidad/flow/screen4.webp";
import screen5 from "../../../assets/imgs/works/movilidad/flow/screen5.webp";
import screen6 from "../../../assets/imgs/works/movilidad/flow/screen6.webp";
import screen7 from "../../../assets/imgs/works/movilidad/flow/screen7.webp";

const screenImgs = [screen1, screen2, screen3, screen4, screen5, screen6, screen7];
const flowIcons = [flow1, flow2, flow3, flow4, flow5, flow6, flow7];

type TestFlowSlug = "autoCharge" | "doubleAuth" | "refund";
type StepSlug = "map" | "qr" | "config" | "status1" | "status2" | "status3" | "thanks";

const testFlowIcons: Record<TestFlowSlug, string[]> = {
	autoCharge: [flow3, flow8, flow4, flow9],
	doubleAuth: [flow3, flow8, flow4, flow8],
	refund: [flow3, flow8, flow4, flow10],
};

interface StepLabel {
	label: string;
}

type StepsData = Record<StepSlug, StepLabel>;

interface ScreenText {
	text: string[];
}

type ScreensData = Record<StepSlug, ScreenText>;

interface TestFlowText {
	title: string;
	steps: string[];
	text: string;
}

type TestFlowsData = Record<TestFlowSlug, TestFlowText>;

// Antes este componente vivía en CoFlow.jsx pero se llamaba internamente
// "CoAmbNoti" (residuo de haber copiado CoAmbNoti.jsx como plantilla) — lo
// que chocaba, en nombre, con el componente real CoAmbNoti.jsx. La ruta y
// los datos ya apuntaban correctamente al flujo de transacción; solo el
// nombre interno estaba mal.
const CoFlow = () => {
	const { t } = useTranslation();
	const [step, setStep] = useState(0);
	const [flow, setFlow] = useState(0);

	const stepsData = t("movilidad.flow.steps", { returnObjects: true }) as StepsData;
	const stepSlugs: StepSlug[] = ["map", "qr", "config", "status1", "status2", "status3", "thanks"];
	const flujo = stepSlugs.map((slug, index) => ({
		icon: flowIcons[index],
		text: stepsData[slug].label,
	}));

	const screensData = t("movilidad.flow.screens", { returnObjects: true }) as ScreensData;
	const screens = stepSlugs.map((slug, index) => ({
		img: screenImgs[index],
		title: stepsData[slug].label,
		text: screensData[slug].text,
	}));

	const testFlowsData = t("movilidad.flow.testFlows", { returnObjects: true }) as TestFlowsData;
	const testFlowSlugs: TestFlowSlug[] = ["autoCharge", "doubleAuth", "refund"];
	const flujoPruebas = testFlowSlugs.map((slug) => ({
		title: testFlowsData[slug].title,
		steps: testFlowsData[slug].steps.map((title, index) => ({
			icon: testFlowIcons[slug][index],
			title,
		})),
		text: testFlowsData[slug].text,
	}));

	return (
		<div id={t("movilidad.anchors.flow.id")} className="container-fluid">
			<CoTitle titles={t("movilidad.flow.title")} />
			<span className="text-normal">{t("movilidad.flow.intro")}</span>
			<div className="flow-schema">
				{flujo.map((item, index) => (
					<Fragment key={index}>
						{index != 0 && <img loading="lazy" src={arrow} alt="arrow" />}
						<button
							type="button"
							className="flow-schema-item"
							aria-current={step == index}
							style={{
								filter: step == index ? "opacity(1)" : "opacity(0.25)",
								background: "none",
								border: "none",
							}}
							onClick={() => setStep(index)}
						>
							<img loading="lazy" src={item.icon} alt={item.text} />
							<span>{item.text}</span>
						</button>
					</Fragment>
				))}
			</div>
			<center style={{ width: "100%" }}>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						alignItems: "flex-start",
						gap: "4rem",
						width: "100%",
						maxWidth: "1200px",
						margin: "0 auto",
					}}
				>
					<CoBtn
						type={"primary"}
						text={""}
						onClick={() => setStep(step == 0 ? 6 : step - 1)}
						style={{ transform: "rotate(180deg)", marginTop: "20rem" }}
						ariaLabel={t("movilidad.flow.stepPreviousAlt")}
					/>
					<div className="flow-description">
						<img
							loading="lazy"
							src={screens[step].img}
							alt={screens[step].title}
						/>
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
					</div>
					<CoBtn
						type={"primary"}
						text={""}
						onClick={() => setStep(step == 6 ? 0 : step + 1)}
						style={{ transform: "rotate(0deg)", marginTop: "20rem" }}
						ariaLabel={t("movilidad.flow.stepNextAlt")}
					/>
				</div>
			</center>
			<br />
			<span className="text-normal">{t("movilidad.flow.testFlowsIntro")}</span>
			<div
				style={{
					width: "80%",
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<CoBtn
					type={"primary"}
					text={""}
					onClick={() => setFlow(flow == 0 ? 2 : flow - 1)}
					style={{ transform: "rotate(180deg)", marginTop: "10rem" }}
					ariaLabel={t("movilidad.flow.flowPreviousAlt")}
				/>
				<div className="flow-description">
					<div className="flow-description-content">
						<span className="subtitle">{flujoPruebas[flow].title}</span>
						<div
							className="flow-schema"
							style={{ justifyContent: "flex-start", width: "80%" }}
						>
							{flujoPruebas[flow].steps.map((step, index) => (
								<Fragment key={index}>
									{index != 0 && <img loading="lazy" src={arrow} alt="arrow" />}
									<button
										type="button"
										className="flow-schema-item"
										style={{ background: "none", border: "none" }}
										onClick={() => setStep(index)}
									>
										<img loading="lazy" src={step.icon} alt={step.title} />
										<span>{step.title}</span>
									</button>
								</Fragment>
							))}
						</div>
					</div>
				</div>
				<CoBtn
					type={"primary"}
					text={""}
					onClick={() => setFlow(flow == 2 ? 0 : flow + 1)}
					style={{ marginTop: "10rem" }}
					ariaLabel={t("movilidad.flow.flowNextAlt")}
				/>
			</div>
			<center style={{ width: "90%" }}>
				<span className="text-normal">{flujoPruebas[flow].text}</span>
			</center>
		</div>
	);
};

export default CoFlow;
