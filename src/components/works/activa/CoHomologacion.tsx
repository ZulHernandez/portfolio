import { useState } from "react";
import { useTranslation } from "react-i18next";

import CoTitle from "../../general/CoTitle";

import glueOld1 from "../../../assets/imgs/works/activa/glue-old-1-no-internet.webp";
import glueOld2 from "../../../assets/imgs/works/activa/glue-old-2-biometricos-fallido.webp";
import glueNew1 from "../../../assets/imgs/works/activa/glue-new-1-mantenimiento.webp";
import glueNew2 from "../../../assets/imgs/works/activa/glue-new-2-biometrico-fallido.webp";

import glueOld3 from "../../../assets/imgs/works/activa/glue-old-3-perfil-cuentas.webp";
import glueOld4 from "../../../assets/imgs/works/activa/glue-old-4-nivel-experiencia.webp";
import glueNew3 from "../../../assets/imgs/works/activa/glue-new-3-perfil-cuentas.webp";
import glueNew4 from "../../../assets/imgs/works/activa/glue-new-4-nivel-experiencia.webp";

import glueOld5 from "../../../assets/imgs/works/activa/glue-old-5-simula-inversion.webp";
import glueOld6 from "../../../assets/imgs/works/activa/glue-old-6-resumen-inversion.webp";
import glueNew5 from "../../../assets/imgs/works/activa/glue-new-5-simula-inversion.webp";
import glueNew6 from "../../../assets/imgs/works/activa/glue-new-6-resumen-inversion.webp";

import tabChatError from "../../../assets/imgs/works/activa/icons/tab-chat-error.svg";
import tabQuiz from "../../../assets/imgs/works/activa/icons/tab-quiz.svg";
import tabBulletChart from "../../../assets/imgs/works/activa/icons/tab-bullet-chart.svg";

interface ErrorScreen {
	caption: string;
}

const TABS = [
	{ key: "errorPages", icon: tabChatError },
	{ key: "questions", icon: tabQuiz },
	{ key: "charts", icon: tabBulletChart },
] as const;

type TabKey = (typeof TABS)[number]["key"];

// Cada pestaña reutiliza los mismos 2 slots "UI Vieja" + 2 slots "Nueva UI".
// El contenido de cada slot viene directo de los exports de Zul en Figma
// (frame "Homologación", instancias repetidas por pestaña) — no se inventa
// ni se reconstruye ninguna pantalla.
const TAB_IMAGES: Record<TabKey, { old: string[]; new: string[] }> = {
	errorPages: { old: [glueOld1, glueOld2], new: [glueNew1, glueNew2] },
	questions: { old: [glueOld3, glueOld4], new: [glueNew3, glueNew4] },
	charts: { old: [glueOld5, glueOld6], new: [glueNew5, glueNew6] },
};

const CoHomologacion = () => {
	const { t } = useTranslation();
	const [activeTab, setActiveTab] = useState<TabKey>("errorPages");

	const bullets = t("activa.homologacion.bullets", { returnObjects: true }) as string[];
	const oldScreens = t(`activa.homologacion.${activeTab}.old`, { returnObjects: true }) as ErrorScreen[];
	const newScreens = t(`activa.homologacion.${activeTab}.new`, { returnObjects: true }) as ErrorScreen[];
	const oldImgs = TAB_IMAGES[activeTab].old;
	const newImgs = TAB_IMAGES[activeTab].new;

	return (
		<div id={t("activa.anchors.homologacion.id")} className="container-fluid">
			<hr
				style={{
					border: "0.2rem solid #ccc",
					margin: "1rem 0",
					width: "80%",
					borderRadius: "5rem",
				}}
			/>
			<CoTitle titles={t("activa.homologacion.title")} />
			<span className="text-normal">{t("activa.homologacion.intro")}</span>
			<ul className="activa-homologacion-bullets">
				{bullets.map((bullet, index) => (
					<li key={index}>
						<span className="text-normal">{bullet}</span>
					</li>
				))}
			</ul>

			<div className="activa-tab-switcher">
				{TABS.map((tab) => (
					<button
						type="button"
						className={`activa-tab-switcher__pill${activeTab === tab.key ? " is-active" : ""}`}
						key={tab.key}
						onClick={() => setActiveTab(tab.key)}
					>
						<img src={tab.icon} alt="" />
						<span>{t(`activa.homologacion.tabs.${tab.key}`)}</span>
					</button>
				))}
			</div>
			<div className="activa-glue-compare">
				<div className="activa-glue-compare__col">
					<h5>{t("activa.homologacion.oldUiLabel")}</h5>
					<div className="activa-glue-compare__screens">
						{oldScreens.map((screen, index) => (
							<div className="activa-glue-compare__screen" key={index}>
								<img loading="lazy" src={oldImgs[index]} alt={screen.caption} />
								<span className="text-normal">{screen.caption}</span>
							</div>
						))}
					</div>
				</div>
				<div className="activa-glue-compare__col">
					<h5>{t("activa.homologacion.newUiLabel")}</h5>
					<div className="activa-glue-compare__screens">
						{newScreens.map((screen, index) => (
							<div className="activa-glue-compare__screen" key={index}>
								<img loading="lazy" src={newImgs[index]} alt={screen.caption} />
								<span className="text-normal">{screen.caption}</span>
							</div>
						))}
					</div>
				</div>
			</div>

			<span className="text-normal">{t("activa.homologacion.outro")}</span>
		</div>
	);
};

export default CoHomologacion;
