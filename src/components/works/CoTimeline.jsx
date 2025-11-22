import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import CoTitle from "../general/CoTitle";
import dayjs from "dayjs";
import { useState, useEffect } from "react";
import useScreenSize from "../context/useScreenSize";
import PropTypes from "prop-types";

import CoBtn from "../general/CoBtn";

import small from "../../assets/imgs/vectores/small.svg";
import medium from "../../assets/imgs/vectores/medium.svg";
import large from "../../assets/imgs/vectores/large.svg";
import polilibro from "../../assets/imgs/works/polilibro.svg";
import yalmalay from "../../assets/imgs/works/yalmalay.svg";
import sedema from "../../assets/imgs/works/sedema.svg";
import hubbub from "../../assets/imgs/works/hubbub.svg";
import marsoft from "../../assets/imgs/works/marsoft.svg";
import combucar from "../../assets/imgs/works/combucar.svg";
import idea from "../../assets/imgs/works/idea.svg";
import gook from "../../assets/imgs/works/gook.svg";
import grupopm from "../../assets/imgs/works/grupopm.svg";
import liverpool from "../../assets/imgs/works/liverpool.svg";
import galileo from "../../assets/imgs/works/galileo.svg";

import typeFreelance from "../../assets/imgs/works/type-freelance.svg";
import typeMarsoft from "../../assets/imgs/works/type-marsoft.svg";
import typeGrupopm from "../../assets/imgs/works/type-grupopm.svg";
import typeLiverpool from "../../assets/imgs/works/type-liverpool.svg";
import typeGalileo from "../../assets/imgs/works/type-galileo.svg";

const trabajos = [
	{
		type: "Freelance",
		icon: typeFreelance,
		works: [
			/* 			{
				name: "Polilibro",
				logo: polilibro,
				startDate: "2016-11-01",
				endDate: "2017-02-01",
				date: ["nov 2016 - feb 2017", "nov 2016 - feb 2017"],
				rol: ["Desarrollador y diseñador web", "Web developer and designer"],
				top: "0",
			},
			{
				name: "Yalmalay",
				logo: yalmalay,
				startDate: "2017-05-01",
				endDate: "2017-10-01",
				date: ["may 2017 - oct 2017", "may 2017 - oct 2017"],
				rol: ["Desarrollador y diseñador web", "Web developer and designer"],
				top: "0",
			}, */
			{
				name: "SEDEMA",
				logo: sedema,
				startDate: "2021-05-01",
				endDate: "2021-11-01",
				date: ["may 2021 - nov 2021", "may 2021 - nov 2021"],
				rol: ["Diseñador web", "Web designer"],
				top: "0",
			},
			{
				name: "Hubbub",
				logo: hubbub,
				startDate: "2022-05-01",
				endDate: dayjs(),
				date: ["may 2022 - actualidad", "may 2022 - present"],
				rol: ["Desarrollador web", "Web developer"],
				top: "0",
			},
		],
	},
	{
		type: "Marsoft",
		icon: typeMarsoft,
		works: [
			{
				name: "Marsoft",
				logo: marsoft,
				startDate: "2018-04-01",
				endDate: "2021-11-01",
				date: ["abr 2018 - nov 2021", "apr 2018 - nov 2021"],
				rol: [
					"Cofundador y Director de diseño",
					"Co-founder and Design Director",
				],
				top: "0",
			},
			{
				name: "Combucar",
				logo: combucar,
				startDate: "2018-11-01",
				endDate: "2019-02-01",
				date: ["nov 2018 - feb 2019", "nov 2018 - feb 2019"],
				rol: ["Diseñador web", "Web designer"],
				top: "4",
			},
			{
				name: "IDEA",
				logo: idea,
				startDate: "2018-11-01",
				endDate: "2019-03-01",
				date: ["nov 2018 - mar 2019", "nov 2018 - mar 2019"],
				rol: ["Diseñador web", "Web designer"],
				top: "2",
			},
			{
				name: "GOOK",
				logo: gook,
				startDate: "2020-08-01",
				endDate: "2021-09-01",
				date: ["ago 2020 - sep 2021", "aug 2020 - sep 2021"],
				rol: ["Diseñador UI/UX", "UI/UX designer"],
				top: "2",
			},
		],
	},
	{
		type: "Grupo-PM",
		icon: typeGrupopm,
		works: [
			{
				name: "Grupo PM",
				logo: grupopm,
				startDate: "2021-11-01",
				endDate: "2023-02-01",
				date: ["nov 2021 - feb 2023", "nov 2021 - feb 2023"],
				rol: ["Diseñador UX/UI Senior", "Senior UX/UI designer"],
				top: "0",
			},
		],
	},
	{
		type: "Liverpool",
		icon: typeLiverpool,
		works: [
			{
				name: "Liverpool",
				logo: liverpool,
				startDate: "2023-02-01",
				endDate: "2025-09-01",
				date: ["feb 2023 - actualidad", "feb 2023 - present"],
				rol: ["Diseñador UX/UI Senior", "Senior UX/UI designer"],
				top: "0",
			},
		],
	},
	{
		type: "Galileo",
		icon: typeGalileo,
		works: [
			{
				name: "Galileo",
				logo: galileo,
				startDate: "2025-09-01",
				endDate: dayjs(),
				date: ["sep 2025 - actualidad", "sep 2025 - present"],
				rol: ["Product Design Chapter Lead", "Product Design Chapter Lead"],
				top: "0",
			},
		],
	},
];

let sortedTrabajos = trabajos
	.flatMap((job) => job.works)
	.sort((a, b) => (dayjs(a.startDate).isBefore(dayjs(b.startDate)) ? -1 : 1));

sortedTrabajos = [sortedTrabajos.pop(), ...sortedTrabajos];
const CoWorkCard = ({ id, trabajo }) => {
	const { language } = useContext(MyContext);

	return (
		<div id={id} className="time-line-info__card">
			<div className="time-line-info__card-head">
				<img loading="lazy" src={trabajo.logo} alt={trabajo.name} />
				<div className="time-line-info__card-head__text">
					<h2>{trabajo.name}</h2>
					<p className="text-normal">
						{trabajo.date[language === "ES" ? 0 : 1]}
					</p>
				</div>
			</div>
			<h3>{trabajo.rol[language == "ES" ? 0 : 1]}</h3>
		</div>
	);
};

CoWorkCard.propTypes = {
	id: PropTypes.string,
	trabajo: PropTypes.shape({
		name: PropTypes.string.isRequired,
		logo: PropTypes.string.isRequired,
		startDate: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
			.isRequired,
		endDate: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
			.isRequired,
		date: PropTypes.arrayOf(PropTypes.string).isRequired,
		rol: PropTypes.arrayOf(PropTypes.string).isRequired,
		top: PropTypes.string.isRequired,
	}),
};

const CoTimeline = () => {
	const [works, setWorks] = useState(sortedTrabajos);
	const { language } = useContext(MyContext);
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

	/* function handleResize() {
        if (width >= 1400) {
            setCoeficiente(1.2);
        } else if (width >= 1200) {
            setCoeficiente(1);
        } else if (width >= 900) {
            setCoeficiente(0.8);
        } else {
            setCoeficiente(0.5);
        }
    } */

	function scrollToAnchor(anchorId) {
		const container = document.querySelector(".time-line");
		const target = document.getElementById(anchorId);
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

	const buscaArray = (name) => {
		scrollToAnchor("anch" + name);
		let newArray = [...works];

		while (newArray[1]?.name !== name) {
			newArray = [...newArray.slice(1), newArray[0]];
		}
		setWorks(newArray);
	};

	function getMonthsBetween(startDate, endDate) {
		let months = [];
		let currentDate = dayjs(startDate).startOf("month");

		while (currentDate.isBefore(dayjs(endDate).endOf("month"))) {
			let monthName = currentDate.format("MM");
			let year = currentDate.format("YY");

			// Push as an array: [Month, Year] only when it's January
			months.push(monthName === "01" ? [monthName, year] : [monthName, null]);

			currentDate = currentDate.add(1, "month");
		}

		return months;
	}

	let startDate = dayjs(trabajos[1].works[0].startDate).subtract(2, "month");
	let currentDate = dayjs().add(2, "month");
	const monthsArray = getMonthsBetween(startDate, currentDate);

	return (
		<div
			id={language === "ES" ? "linea-del-tiempo" : "timeline"}
			className="container-fluid grey"
		>
			<CoTitle titles={language === "ES" ? "Línea del tiempo" : "Timeline"} />
			<div className="time-line-filters">
				{trabajos.map((trabajo, index) => {
					return (
						<div
							className="time-line-filters__boton"
							key={index}
							style={{
								backgroundColor:
									trabajo.type === "Freelance"
										? "#FF904B"
										: trabajo.type === "Marsoft"
										? "#2088FF"
										: trabajo.type === "Grupo-PM"
										? "#7220FF"
										: trabajo.type === "Liverpool"
										? "#FF2079"
										: "#333333	",
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
					{trabajos.map((trabajo, index) => {
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
											onClick={() => {
												buscaArray(work.name);
											}}
											style={{
												backgroundColor:
													trabajo.type === "Freelance"
														? "#FF904B"
														: trabajo.type === "Marsoft"
														? "#2088FF"
														: trabajo.type === "Grupo-PM"
														? "#7220FF"
														: trabajo.type === "Liverpool"
														? "#FF2079"
														: "#333333	",
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
												bottom: workIndex * 1.5 - work.top * 1.5 + "rem",
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
				<span onClick={rotateReverse} style={{ transform: "rotate(180deg)" }}>
					<CoBtn type={"primary"} text={null} />
				</span>
				<CoWorkCard id="cardUno" trabajo={works[0]} />
				<CoWorkCard id="cardDos" trabajo={works[1]} />
				<CoWorkCard id="cardTres" trabajo={works[2]} />
				<span onClick={rotateArray}>
					<CoBtn type={"primary"} text={null} />
				</span>
			</div>
		</div>
	);
};

export default CoTimeline;
