import { useContext, useEffect, useState } from "react";
import { MyContext } from "../components/context/MyContext.js";

import CoTitle from "../components/general/CoTitle.jsx";

import sport from "../assets/imgs/about/sport.svg";
import music from "../assets/imgs/about/music.svg";
import games from "../assets/imgs/about/games.svg";
import manga from "../assets/imgs/about/manga.svg";
import food from "../assets/imgs/about/food.svg";

import imgSport from "../assets/imgs/about/sport/foto.jpeg";
import apnea from "../assets/imgs/about/sport/apnea.svg";
import back from "../assets/imgs/about/sport/back.svg";
import breast from "../assets/imgs/about/sport/breast.svg";
import fly from "../assets/imgs/about/sport/fly.svg";
import free from "../assets/imgs/about/sport/free.svg";

const CoTab = ({ status, icon, text }) => {
	return (
		<div className={`tab-buttons__item ${status}`}>
			<img src={icon} alt={text} />
			<span>{text}</span>
		</div>
	);
};

const CoSport = () => {
	const { language } = useContext(MyContext);

	const styles = [
		{
			icon: apnea,
			text: language == "ES" ? "Apnea" : "Apnea",
		},
		{
			icon: back,
			text: language == "ES" ? "Dorso" : "Backstroke",
		},
		{
			icon: free,
			text: language == "ES" ? "Libre" : "Free",
		},
		{
			icon: breast,
			text: language == "ES" ? "Pecho" : "Breaststroke",
		},
		{
			icon: fly,
			text: language == "ES" ? "Mariposa" : "Butterfly",
		},
	];

	return (
		<div className="tab-body">
			<div className="tab-content">
				<div
					className="div-img"
					style={{ backgroundImage: "url(" + imgSport + ")" }}
				></div>
				<div className="tab-content__info">
					<div className="tab-content__info-text">
						<h2>Me encanta nadar</h2>
						<span>
							{language == "ES"
								? "Llevo nadando ya más de un año y no podría estar más enamorado de este deporte, es una sensación increíble el poder perderse en el agua después de un día de trabajo."
								: "I have been swimming for more than a year now and I couldn't be more in love with this sport, it is an incredible feeling to be able to get lost in the water after a day of work."}
							<br />
							{language == "ES"
								? "Si tuviera que calificar que hacer un tier-list de que estilo me gusta más..."
								: "If I had to rate what style I like the most..."}
						</span>
						<div className="tab-content__info-text__list">
							{styles.map((style, index) => (
								<div
									key={index}
									className="tab-content__info-text__list-item"
									style={{ opacity: 1 - index * 0.2 }}
								>
									<img src={style.icon} alt={style.text} />
									<span>{style.text}</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const CoMusic = () => {
	const { language } = useContext(MyContext);

	return (
		<div className="tab-body">
			<div className="tab-content">
				<div
					className="div-img"
					style={{ backgroundImage: "url(" + imgSport + ")" }}
				></div>
				<div className="tab-content__info">
					<div className="tab-content__info-text">
						<h2>Me encanta nadar</h2>
						<span>
							{language == "ES"
								? "Llevo nadando ya más de un año y no podría estar más enamorado de este deporte, es una sensación increíble el poder perderse en el agua después de un día de trabajo."
								: "I have been swimming for more than a year now and I couldn't be more in love with this sport, it is an incredible feeling to be able to get lost in the water after a day of work."}
							<br />
							{language == "ES"
								? "Si tuviera que calificar que hacer un tier-list de que estilo me gusta más..."
								: "If I had to rate what style I like the most..."}
						</span>
						<div className="tab-content__info-text__list">
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const RoAbout = () => {
	const { language, setRuta } = useContext(MyContext);

	const [filtro, setFiltro] = useState(1);

	useEffect(() => {
		setRuta("/about-me");
	}, [setRuta]);

	return (
		<div
			id={language == "ES" ? "conozcamonos" : "get-to-know-me"}
			className="container-fluid"
		>
			<CoTitle
				titles={
					language == "ES"
						? "Conozcámonos un poco más"
						: "Get to know me a little more"
				}
			/>
			<span id="span">
				{language == "ES"
					? "Te dejo este apartado para que conozcas más sobre mi, más allá de mi trabajo hay otras cosas sobre mi que pueden ser interesantes."
					: "I leave you this section so you can learn more about me, beyond my work there are other things about me that may be interesting."}
			</span>
			<div className="tab">
				<div className="tab-buttons">
					<span onClick={() => setFiltro(1)}>
						<CoTab
							status={filtro == 1 ? "active" : "inactive"}
							icon={sport}
							text={language == "ES" ? "Deporte" : "Sport"}
						/>
					</span>
					<span onClick={() => setFiltro(2)}>
						<CoTab
							status={filtro == 2 ? "active" : "inactive"}
							icon={music}
							text={language == "ES" ? "Música" : "Music"}
						/>
					</span>
					<span onClick={() => setFiltro(3)}>
						<CoTab
							status={filtro == 3 ? "active" : "inactive"}
							icon={games}
							text={language == "ES" ? "Juegos" : "Games"}
						/>
					</span>
					<span onClick={() => setFiltro(4)}>
						<CoTab
							status={filtro == 4 ? "active" : "inactive"}
							icon={manga}
							text={language == "ES" ? "Manga" : "Manga"}
						/>
					</span>
					<span onClick={() => setFiltro(5)}>
						<CoTab
							status={filtro == 5 ? "active" : "inactive"}
							icon={food}
							text={language == "ES" ? "Comida" : "Food"}
						/>
					</span>
				</div>
			</div>
			{filtro === 1 && <CoSport />}
			{filtro === 2 && <CoMusic />}
			{filtro === 3 && <CoGames />}
			{filtro === 4 && <CoManga />}
			{filtro === 5 && <CoFood />}
		</div>
	);
};

export default RoAbout;
