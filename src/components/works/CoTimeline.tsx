import CoTitle from "../general/CoTitle";
import dayjs from "dayjs";
import { useState, useEffect } from "react";
import useScreenSize from "../context/useScreenSize";
import { useTranslation } from "react-i18next";
import { ACCENT_COLORS } from "../../utils/accentColors";
import experiencia from "../context/varExperiencia";
import type { ExperienciaWork } from "../../types";

import CoBtn from "../general/CoBtn";

import small from "../../assets/imgs/vectores/small.svg";
import medium from "../../assets/imgs/vectores/medium.svg";
import large from "../../assets/imgs/vectores/large.svg";

// Antes esta misma cadena de 4 ternarios (con un hex hardcodeado por rama, y
// un tab suelto pegado al color por defecto) se repetía dos veces en este
// archivo para colorear el mismo dato (trabajo.type).
const TIMELINE_TYPE_COLORS: Record<string, string> = {
	Freelance: ACCENT_COLORS.orange,
	Marsoft: ACCENT_COLORS.blue,
	"Grupo-PM": ACCENT_COLORS.purple,
	Liverpool: ACCENT_COLORS.pink,
};
const getTimelineTypeColor = (type: string): string =>
	TIMELINE_TYPE_COLORS[type] || ACCENT_COLORS.dark;

let sortedTrabajos: ExperienciaWork[] = experiencia
	.flatMap((job) => job.works)
	.sort((a, b) => (dayjs(a.startDate).isBefore(dayjs(b.startDate)) ? -1 : 1));

sortedTrabajos = [sortedTrabajos.pop() as ExperienciaWork, ...sortedTrabajos];

interface CoWorkCardProps {
	id?: string;
	trabajo: ExperienciaWork;
}

const CoWorkCard = ({ id, trabajo }: CoWorkCardProps) => {
	const { t } = useTranslation();
	const base = `timeline.items.${trabajo.slug}`;

	return (
		<div id={id} className="time-line-info__card">
			<div className="time-line-info__card-head">
				<img loading="lazy" src={trabajo.logo} alt={trabajo.name} />
				<div className="time-line-info__card-head__text">
					<h2>{trabajo.name}</h2>
					<p className="text-normal">{t(`${base}.date`)}</p>
				</div>
			</div>
			<h3>{t(`${base}.role`)}</h3>
		</div>
	);
};

const CoTimeline = () => {
	const [works, setWorks] = useState<ExperienciaWork[]>(sortedTrabajos);
	const { t } = useTranslation();
	const { width } = useScreenSize();
	const [coeficiente, setCoeficiente] = useState(1);

	useEffect(() => {
		if (width >= 1400) {
			setCoeficiente(1.2);
		} else if (width >= 1200) {
			setCoeficiente(1);
		} else if (width >= 900) {
			setCoeficiente(0.8);
		} else {
			setCoeficiente(0.5);
		}
	}, [width]);

	function scrollToAnchor(anchorId: string) {
		const container = document.querySelector(".time-line") as HTMLElement | null;
		const target = document.getElementById(anchorId);
		if (!container || !target) return;
		container.scrollTo({
			left: target.offsetLeft - container.offsetLeft,
			behavior: "smooth",
		});
	}

	const rotateArray = () => {
		setWorks((prevWorks) => [...prevWorks.slice(1), prevWorks[0]]);
		scrollToAnchor("anch" + works[2].name);
	};
	const rotateReverse = () => {
		setWorks((prevWorks) => [
			prevWorks[prevWorks.length - 1],
			...prevWorks.slice(0, -1),
		]);
		scrollToAnchor("anch" + works[0].name);
	};

	const buscaArray = (name: string) => {
		scrollToAnchor("anch" + name);
		let newArray = [...works];

		while (newArray[1]?.name !== name) {
			newArray = [...newArray.slice(1), newArray[0]];
		}
		setWorks(newArray);
	};

	function getMonthsBetween(
		startDate: dayjs.Dayjs,
		endDate: dayjs.Dayjs
	): Array<[string, string | null]> {
		const months: Array<[string, string | null]> = [];
		let currentDate = dayjs(startDate).startOf("month");

		while (currentDate.isBefore(dayjs(endDate).endOf("month"))) {
			const monthName = currentDate.format("MM");
			const year = currentDate.format("YY");

			// Push as an array: [Month, Year] only when it's January
			months.push(monthName === "01" ? [monthName, year] : [monthName, null]);

			currentDate = currentDate.add(1, "month");
		}

		return months;
	}

	const startDate = dayjs(experiencia[1].works[0].startDate).subtract(2, "month");
	const currentDate = dayjs().add(2, "month");
	const monthsArray = getMonthsBetween(startDate, currentDate);

	return (
		<div id={t("timeline.id")} className="container-fluid grey">
			<CoTitle titles={t("timeline.heading")} />
			<div className="time-line-filters">
				{experiencia.map((trabajo, index) => {
					return (
						<div
							className="time-line-filters__boton"
							key={index}
							style={{
								backgroundColor: getTimelineTypeColor(trabajo.type),
							}}
						>
							<img loading="lazy" src={trabajo.icon} alt={trabajo.type} />
							<span>{trabajo.type.replace("-", " ")}</span>
						</div>
					);
				})}
			</div>
			<div className="time-line">
				<div className="time-line-measure">
					{monthsArray.map((month, index) => {
						return (
							<div className="time-line-measure__line" key={index}>
								<span>{month[1] == null ? "" : "20" + month[1]}</span>
								<img
									loading="lazy"
									src={
										month[0] === "01"
											? large
											: month[0] === "05" || month[0] === "09"
											? medium
											: small
									}
									alt={`Month ${month[0]}`}
								/>
							</div>
						);
					})}
				</div>
				<div className="time-line-squema">
					{experiencia.map((trabajo, index) => {
						return (
							<div
								id={trabajo.type}
								key={index}
								className="time-line-squema__container"
							>
								{trabajo.works.map((work, workIndex) => {
									return (
										<div
											className="time-line-squema__container-item"
											key={workIndex}
											id={"anch" + work.name}
											role="button"
											tabIndex={0}
											onClick={() => {
												buscaArray(work.name);
											}}
											onKeyDown={(e) => {
												if (e.key === "Enter" || e.key === " ") {
													e.preventDefault();
													buscaArray(work.name);
												}
											}}
											style={{
												backgroundColor: getTimelineTypeColor(trabajo.type),
												width: `calc(${
													dayjs(work.endDate).diff(
														dayjs(work.startDate),
														"month"
													) * 4
												}px + ${
													dayjs(work.endDate).diff(
														dayjs(work.startDate),
														"month"
													) * coeficiente
												}rem)`,
												left: `calc(${
													dayjs(work.startDate).diff(startDate, "month") * 4
												}px + ${
													dayjs(work.startDate).diff(startDate, "month") *
													coeficiente
												}rem)`,
												bottom: workIndex * 1.5 - Number(work.top) * 1.5 + "rem",
												opacity: work.name == works[1].name ? 1 : 0.5,
											}}
										>
											<span>{work.name}</span>
										</div>
									);
								})}
							</div>
						);
					})}
				</div>
			</div>
			<div className="time-line-info">
				<CoBtn
					type={"primary"}
					onClick={rotateReverse}
					style={{ transform: "rotate(180deg)" }}
					ariaLabel={t("timeline.previousAlt")}
				/>
				<CoWorkCard id="cardUno" trabajo={works[0]} />
				<CoWorkCard id="cardDos" trabajo={works[1]} />
				<CoWorkCard id="cardTres" trabajo={works[2]} />
				<CoBtn type={"primary"} onClick={rotateArray} ariaLabel={t("timeline.nextAlt")} />
			</div>
		</div>
	);
};

export default CoTimeline;
