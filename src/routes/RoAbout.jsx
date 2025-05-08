import { useContext, useEffect } from "react";
import { MyContext } from "../components/context/MyContext.js";

import CoTitle from "../components/general/CoTitle.jsx";
import CoBtn from "../components/general/CoBtn.jsx";

import sport from "../assets/imgs/about/sport.svg";
import music from "../assets/imgs/about/music.svg";
import games from "../assets/imgs/about/games.svg";
import manga from "../assets/imgs/about/manga.svg";
import food from "../assets/imgs/about/food.svg";

const CoTab = ({ status, icon, text }) => {
	return (
		<div className={`tab-item ${status}`}>
			{icon && <img src={icon} alt="" />}
			<span>{text}</span>
		</div>
	);
};

const RoAbout = () => {
	const { language, setRuta } = useContext(MyContext);

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
				<span style={{ transform: "rotate(180deg)" }}>
					<CoBtn type={"primary"} text={null} />
				</span>
                <div className="tab-buttons">
                    <CoTab status="active" icon="sport" text={language == "ES" ? "Deporte" : "Sport"} />
                    <CoTab status="inactive" icon="music" text={language == "ES" ? "Música" : "Music"} />
                    <CoTab status="inactive" icon="games" text={language == "ES" ? "Juegos" : "Games"} />
                    <CoTab status="inactive" icon="manga" text={language == "ES" ? "Manga" : "Manga"} />
                    <CoTab status="inactive" icon="food" text={language == "ES" ? "Comida" : "Food"} />
                </div>
				<span>
					<CoBtn type={"primary"} text={null} />
				</span>
			</div>
		</div>
	);
};

export default RoAbout;
