import CoTitle from "../general/CoTitle";
import dayjs from "dayjs";
import { useState, useEffect } from "react";
import useScreenSize from "../context/useScreenSize";
import { useTranslation } from "react-i18next";
import { ACCENT_COLORS } from "../../utils/accentColors";
import { formatDateRange, resolveLang } from "../../utils/experienceData";
import useExperienceData from "../context/useExperienceData";
import { TIMELINE_LOGOS, GROUP_ICONS } from "../context/experienceAssets";
import type { ExperienceJob } from "../../types";

import CoBtn from "../general/CoBtn";

import small from "../../assets/imgs/vectores/small.svg";
import medium from "../../assets/imgs/vectores/medium.svg";
import large from "../../assets/imgs/vectores/large.svg";

interface CoWorkCardProps {
	id?: string;
	trabajo: ExperienceJob;
	lang: "en" | "es";
}

const CoWorkCard = ({ id, trabajo, lang }: CoWorkCardProps) => {
	return (
		<div id={id} className="time-line-info__card">
			<div className="time-line-info__card-head">
				<img loading="lazy" src={TIMELINE_LOGOS[trabajo.slug]} alt={trabajo.name} />
				<div className="time-line-info__card-head__text">
					<h2>{trabajo.name}</h2>
					<p className="text-normal">{formatDateRange(trabajo.startDate, trabajo.endDate, lang)}</p>
				</div>
			</div>
			<h3>{trabajo.role[lang]}</h3>
		</div>
	);
};

const CoTimeline = () => {
	const { t, i18n } = useTranslation();
	const lang = resolveLang(i18n.language);
	const { data } = useExperienceData();
	const { width } = useScreenSize();
	const [coeficiente, setCoeficiente] = useState(1);
	// Trabajos que sí aparecen en la línea del tiempo, ordenados por fecha de
	// inicio y luego rotados para que el más reciente quede primero (así
	// works[1], la tarjeta central, arranca mostrando el puesto actual). Vive
	// en estado porque el usuario los rota con las flechas; se siembra una
	// sola vez cuando llega la data (ver useEffect de abajo).
	const [works, setWorks] = useState<ExperienceJob[]>([]);

	useEffect(() => {
		if (!data) return;
		const sorted = data.jobs
			.filter((job) => job.presence.timeline)
			.sort((a, b) => (dayjs(a.startDate).isBefore(dayjs(b.startDate)) ? -1 : 1));
		if (sorted.length === 0) return;
		setWorks([sorted[sorted.length - 1], ...sorted.slice(0, -1)]);
	}, [data]);

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

	// No renderizar hasta tener al menos 3 trabajos (lo mínimo que necesitan
	// las 3 tarjetas centrales): cubre tanto el instante entre que monta el
	// componente y llega el fetch, como un experience.json mal formado.
	if (!data || works.length < 3) return null;

	const timelineJobs = data.jobs.filter((job) => job.presence.timeline);
	const groups = data.groups
		.map((group) => ({
			...group,
			works: timelineJobs.filter((job) => job.group === group.key),
		}))
		.filter((group) => group.works.length > 0);

	const getGroupColor = (key: string): string => {
		const group = data.groups.find((g) => g.key === key);
		return group ? ACCENT_COLORS[group.color] : ACCENT_COLORS.dark;
	};

	const earliestJob = timelineJobs.reduce((earliest, job) =>
		dayjs(job.startDate).isBefore(dayjs(earliest.startDate)) ? job : earliest
	);
	const startDate = dayjs(earliestJob.startDate).subtract(2, "month");
	const currentDate = dayjs().add(2, "month");
	const monthsArray = getMonthsBetween(startDate, currentDate);

	return (
		<div id={t("timeline.id")} className="container-fluid grey">
			<CoTitle titles={t("timeline.heading")} />
			<div className="time-line-filters">
				{groups.map((group) => {
					return (
						<div
							className="time-line-filters__boton"
							key={group.key}
							style={{
								backgroundColor: getGroupColor(group.key),
							}}
						>
							<img loading="lazy" src={GROUP_ICONS[group.key]} alt={group.key} />
							<span>{group.key.replace("-", " ")}</span>
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
					{groups.map((group) => {
						return (
							<div
								id={group.key}
								key={group.key}
								className="time-line-squema__container"
							>
								{group.works.map((work, workIndex) => {
									const workEnd = work.endDate ? dayjs(work.endDate) : dayjs();
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
												backgroundColor: getGroupColor(group.key),
												width: `calc(${
													workEnd.diff(dayjs(work.startDate), "month") * 4
												}px + ${
													workEnd.diff(dayjs(work.startDate), "month") * coeficiente
												}rem)`,
												left: `calc(${
													dayjs(work.startDate).diff(startDate, "month") * 4
												}px + ${
													dayjs(work.startDate).diff(startDate, "month") *
													coeficiente
												}rem)`,
												bottom: workIndex * 1.5 - Number(work.top ?? 0) * 1.5 + "rem",
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
				<CoWorkCard id="cardUno" trabajo={works[0]} lang={lang} />
				<CoWorkCard id="cardDos" trabajo={works[1]} lang={lang} />
				<CoWorkCard id="cardTres" trabajo={works[2]} lang={lang} />
				<CoBtn type={"primary"} onClick={rotateArray} ariaLabel={t("timeline.nextAlt")} />
			</div>
		</div>
	);
};

export default CoTimeline;
