import { useTranslation } from "react-i18next";
import { useState } from "react";

import CoTitle from "../../../components/general/CoTitle";

import up from "../../../assets/imgs/works/movilidad/notifications/up.svg";
import center from "../../../assets/imgs/works/movilidad/notifications/center.svg";
import down from "../../../assets/imgs/works/movilidad/notifications/down.svg";
import noti from "../../../assets/imgs/works/movilidad/notifications/notification.svg";
import island from "../../../assets/imgs/works/movilidad/notifications/dIsland.svg";
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

interface CarruselItem {
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

const CoAmbNoti = () => {
	const { t } = useTranslation();
	const labels = t("movilidad.ambNoti.labels", { returnObjects: true }) as NotiLabels;

	const [carruselIos, setCarruselIos] = useState<CarruselItem[]>([
		{ id: 1, text: labels.island, img: island, screens: [isla1, isla2, isla3], alt: "iOsIsland" },
		{ id: 2, text: labels.notification, img: noti, screens: [iOsNoti1, iOsNoti2, iOsNoti3], alt: "iOsNotification" },
		{ id: 3, text: labels.watch, img: watch, screens: [iWatch1, iWatch2, iWatch3], alt: "iWatch" },
		{ id: 4, text: labels.standby, img: stand, screens: [standBy1, standBy2], alt: "standBy" },
	]);

	const [carruselAndroid, setCarruselAndroid] = useState<CarruselItem[]>([
		{ id: 1, text: labels.watch, img: watch, screens: [wear1, wear2, wear3], alt: "wear" },
		{ id: 2, text: labels.notification, img: noti, screens: [anNoti1, anNoti2, anNoti3], alt: "noti" },
		{ id: 3, text: labels.watch, img: watch, screens: [wear1, wear2, wear3], alt: "wear" },
		{ id: 4, text: labels.notification, img: noti, screens: [anNoti1, anNoti2, anNoti3], alt: "noti" },
	]);

	const bulletsData = t("movilidad.ambNoti.bullets", { returnObjects: true }) as NotiBullets;
	const bullets = [
		{ ...bulletsData.charging, ref: "#" },
		{ ...bulletsData.completed, ref: "#" },
		{ ...bulletsData.fee, ref: "#" },
	];

	const rotateArray = (brand: string) => {
		if (brand === "iOs") {
			setCarruselIos((prevWorks) => [...prevWorks.slice(1), prevWorks[0]]);
		} else if (brand === "Android") {
			setCarruselAndroid((prevWorks) => [...prevWorks.slice(1), prevWorks[0]]);
		}
	};

	const rotateReverse = (brand: string) => {
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
				<div className="example-container">
					<div className="example-container__control">
						<div className="example-container__control-arrows">
							<img
								loading="lazy"
								className="arrow"
								src={up}
								alt="Up arrow"
								role="button"
								tabIndex={0}
								onClick={() => {
									rotateReverse("iOs");
								}}
								onKeyDown={(e) => {
									if (e.key === "Enter" || e.key === " ") {
										e.preventDefault();
										rotateReverse("iOs");
									}
								}}
							/>
							<img loading="lazy" src={center} alt="Center arrow" />
							<img
								loading="lazy"
								className="arrow"
								src={down}
								alt="Down arrow"
								role="button"
								tabIndex={0}
								onClick={() => {
									rotateArray("iOs");
								}}
								onKeyDown={(e) => {
									if (e.key === "Enter" || e.key === " ") {
										e.preventDefault();
										rotateArray("iOs");
									}
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
									loading="lazy"
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
									loading="lazy"
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
									loading="lazy"
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
									loading="lazy"
									key={index}
									className={carruselIos[1].alt}
									src={screen}
									alt={carruselIos[1].alt}
								/>
							))}
					</div>
				</div>
			</div>
			<div className="example">
				<h2 className="subtitle">Android</h2>
				<div className="example-container">
					<div className="example-container__control">
						<div className="example-container__control-arrows">
							<img
								loading="lazy"
								className="arrow"
								src={up}
								alt="Up arrow"
								role="button"
								tabIndex={0}
								onClick={() => {
									rotateReverse("Android");
								}}
								onKeyDown={(e) => {
									if (e.key === "Enter" || e.key === " ") {
										e.preventDefault();
										rotateReverse("Android");
									}
								}}
							/>
							<img loading="lazy" src={center} alt="Center arrow" />
							<img
								loading="lazy"
								className="arrow"
								src={down}
								alt="Down arrow"
								role="button"
								tabIndex={0}
								onClick={() => {
									rotateArray("Android");
								}}
								onKeyDown={(e) => {
									if (e.key === "Enter" || e.key === " ") {
										e.preventDefault();
										rotateArray("Android");
									}
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
									loading="lazy"
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
									loading="lazy"
									className="example-container__control-item-img"
									src={carruselAndroid[1].img}
									alt={carruselAndroid[1].text}
								/>
								<span className="example-container__control-item-text">
									{carruselAndroid[1].text}
								</span>
							</div>
							<div
								id="tres"
								key={carruselAndroid[2].id}
								className="example-container__control-buttons-item"
							>
								<img
									loading="lazy"
									className="example-container__control-item-img"
									src={carruselAndroid[2].img}
									alt={carruselAndroid[2].text}
								/>
								<span className="example-container__control-item-text">
									{carruselAndroid[2].text}
								</span>
							</div>
						</div>
					</div>
					<div className="example-container__screens">
						{carruselAndroid[1].screens &&
							carruselAndroid[1].screens.map((screen, index) => (
								<img
									loading="lazy"
									key={index}
									className={carruselAndroid[1].alt}
									src={screen}
									alt={carruselAndroid[1].alt}
								/>
							))}
					</div>
				</div>
			</div>
			<span className="text-normal">{t("movilidad.ambNoti.outro")}</span>
		</div>
	);
};

export default CoAmbNoti;
