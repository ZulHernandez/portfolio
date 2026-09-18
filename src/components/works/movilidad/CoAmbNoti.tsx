import { useTranslation } from "react-i18next";
import { useState } from "react";

import CoTitle from "../../../components/general/CoTitle";

import island from "../../../assets/imgs/works/movilidad/notifications/dIsland.svg";
import noti from "../../../assets/imgs/works/movilidad/notifications/notification.svg";
import watch from "../../../assets/imgs/works/movilidad/notifications/watch.svg";
import stand from "../../../assets/imgs/works/movilidad/notifications/stand.svg";

import isla1 from "../../../assets/imgs/works/movilidad/notifications/isla1.webp";
import isla2 from "../../../assets/imgs/works/movilidad/notifications/isla2.webp";
import isla3 from "../../../assets/imgs/works/movilidad/notifications/isla3.webp";
import iOsNoti1 from "../../../assets/imgs/works/movilidad/notifications/iOsNoti1.webp";
import iOsNoti2 from "../../../assets/imgs/works/movilidad/notifications/iOsNoti2.webp";
import iOsNoti3 from "../../../assets/imgs/works/movilidad/notifications/iOsNoti3.webp";
import iWatch1 from "../../../assets/imgs/works/movilidad/notifications/iWatch1.webp";
import iWatch2 from "../../../assets/imgs/works/movilidad/notifications/iWatch2.webp";
import iWatch3 from "../../../assets/imgs/works/movilidad/notifications/iWatch3.webp";
import standBy1 from "../../../assets/imgs/works/movilidad/notifications/standBy1.webp";
import standBy2 from "../../../assets/imgs/works/movilidad/notifications/standBy2.webp";

import anNoti1 from "../../../assets/imgs/works/movilidad/notifications/anNoti1.webp";
import anNoti2 from "../../../assets/imgs/works/movilidad/notifications/anNoti2.webp";
import anNoti3 from "../../../assets/imgs/works/movilidad/notifications/anNoti3.webp";
import wear1 from "../../../assets/imgs/works/movilidad/notifications/wear1.webp";
import wear2 from "../../../assets/imgs/works/movilidad/notifications/wear2.webp";
import wear3 from "../../../assets/imgs/works/movilidad/notifications/wear3.webp";

interface NotiItem {
	id: number;
	text: string;
	img: string;
	screens: string[];
	alt: string;
}

interface NotiLabels {
	island: string;
	notification: string;
	watch: string;
	standby: string;
}

interface NotiBullet {
	title: string;
	description: string;
}

interface NotiBullets {
	charging: NotiBullet;
	completed: NotiBullet;
	fee: NotiBullet;
}

// Antes este carrusel forzaba a Android a mostrar 4 botones (rotando
// arriba/abajo) aunque solo hubiera 2 categorías reales de notificación
// (reloj y notificación) — los otros 2 eran las mismas 2 categorías
// duplicadas, "para homologar experiencia con el carrusel de arriba" (iOS
// sí tiene 4: Isla Dinámica, Notificación, Reloj, StandBy). Ahora cada
// plataforma muestra únicamente sus categorías reales como pestañas (4 en
// iOS, 2 en Android) y, debajo, la galería de capturas de la pestaña activa
// — mismo patrón de pestañas que ya usamos en el diagrama de hand-off de
// GLUE y en los test flows de arriba.
const CoAmbNoti = () => {
	const { t } = useTranslation();
	const labels = t("movilidad.ambNoti.labels", { returnObjects: true }) as NotiLabels;

	const iosItems: NotiItem[] = [
		{ id: 1, text: labels.island, img: island, screens: [isla1, isla2, isla3], alt: "iOsIsland" },
		{ id: 2, text: labels.notification, img: noti, screens: [iOsNoti1, iOsNoti2, iOsNoti3], alt: "iOsNotification" },
		{ id: 3, text: labels.watch, img: watch, screens: [iWatch1, iWatch2, iWatch3], alt: "iWatch" },
		{ id: 4, text: labels.standby, img: stand, screens: [standBy1, standBy2], alt: "standBy" },
	];

	const androidItems: NotiItem[] = [
		{ id: 1, text: labels.watch, img: watch, screens: [wear1, wear2, wear3], alt: "wear" },
		{ id: 2, text: labels.notification, img: noti, screens: [anNoti1, anNoti2, anNoti3], alt: "noti" },
	];

	const [iosTab, setIosTab] = useState(0);
	const [androidTab, setAndroidTab] = useState(0);

	const bulletsData = t("movilidad.ambNoti.bullets", { returnObjects: true }) as NotiBullets;
	const bullets = [
		{ ...bulletsData.charging, ref: "#" },
		{ ...bulletsData.completed, ref: "#" },
		{ ...bulletsData.fee, ref: "#" },
	];

	return (
		<div id={t("movilidad.anchors.ambNoti.id")} className="container-fluid">
			<CoTitle titles={t("movilidad.ambNoti.title")} />
			<div>
				<span className="text-normal">
					{t("movilidad.ambNoti.intro1")}
					<br />
					{t("movilidad.ambNoti.intro2")}
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
			<div className="example">
				<h2 className="subtitle">iOs</h2>
				<div className="noti-tabs">
					{iosItems.map((item, index) => (
						<button
							key={item.id}
							type="button"
							className={`noti-tabs__tab ${iosTab === index ? "active" : ""}`}
							onClick={() => setIosTab(index)}
							aria-pressed={iosTab === index}
						>
							<img loading="lazy" src={item.img} alt="" />
							<span>{item.text}</span>
						</button>
					))}
				</div>
				<div className="example-container__screens">
					{iosItems[iosTab].screens.map((screen, index) => (
						<img
							loading="lazy"
							key={index}
							className={iosItems[iosTab].alt}
							src={screen}
							alt={iosItems[iosTab].text}
						/>
					))}
				</div>
			</div>
			<div className="example">
				<h2 className="subtitle">Android</h2>
				<div className="noti-tabs">
					{androidItems.map((item, index) => (
						<button
							key={item.id}
							type="button"
							className={`noti-tabs__tab ${androidTab === index ? "active" : ""}`}
							onClick={() => setAndroidTab(index)}
							aria-pressed={androidTab === index}
						>
							<img loading="lazy" src={item.img} alt="" />
							<span>{item.text}</span>
						</button>
					))}
				</div>
				<div className="example-container__screens">
					{androidItems[androidTab].screens.map((screen, index) => (
						<img
							loading="lazy"
							key={index}
							className={androidItems[androidTab].alt}
							src={screen}
							alt={androidItems[androidTab].text}
						/>
					))}
				</div>
			</div>
			<span className="text-normal">{t("movilidad.ambNoti.outro")}</span>
		</div>
	);
};

export default CoAmbNoti;
