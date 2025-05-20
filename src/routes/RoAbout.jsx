import { useContext, useEffect, useState, useRef } from "react";
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

import imgMusic from "../assets/imgs/about/music/foto.jpeg";
import amp from "../assets/imgs/about/music/amp.svg";
import electric from "../assets/imgs/about/music/electric.svg";
import guitar from "../assets/imgs/about/music/guitar.svg";
import melodic from "../assets/imgs/about/music/melodic.svg";
import microphone from "../assets/imgs/about/music/microphone.svg";

import f1 from "../assets/imgs/games/Frame-1.png";
import f2 from "../assets/imgs/games/Frame-2.png";
import f3 from "../assets/imgs/games/Frame-3.png";
import f4 from "../assets/imgs/games/Frame-4.png";
import f5 from "../assets/imgs/games/Frame-5.png";
import f6 from "../assets/imgs/games/Frame-6.png";
import f7 from "../assets/imgs/games/Frame-7.png";
import f8 from "../assets/imgs/games/Frame-8.png";

const API_KEY = "AIzaSyD786eN8Xt3Z-ItaSYVSDuZ4AVLrApAPD4";
const PLAYLIST_ID = "PLC_vmjLKExTmybkcbAHXzqPsZuVH9Lc6I";

const CoMusicCard = ({ cover, song, artist, album, year, url }) => {
	const iframeRef = useRef(null);
	const [display, setDisplay] = useState(0);

	return (
		<div
			className="music-card"
			onMouseEnter={() => {
				setDisplay(1);
			}}
			onMouseLeave={() => {
				setDisplay(0);
			}}
		>
			<div
				className="music-card__cover"
				style={{
					backgroundImage: `url(${cover})`,
					display: display == 0 ? "block" : "none",
				}}
			></div>
			<div
				className="music-card__cover"
				style={{
					display: display == 1 ? "block" : "none",
				}}
			>
				<iframe
					ref={iframeRef}
					className="music-card__cover"
					src={`https://www.youtube.com/embed/${
						url.split("v=")[1]
					}?enablejsapi=1&origin=http://localhost:5173`}
					title={`${song} by ${artist}`}
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
					referrerPolicy="strict-origin-when-cross-origin"
				></iframe>
			</div>
			<div className="music-card__info">
				<h3>{song}</h3>
				<p>
					{artist}
					{/*  - {album} */}
				</p>
				{/* <p id="year">{year}</p> */}
			</div>
		</div>
	);
};

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
				<div className="tab-content__body">
					<div className="tab-content__info">
						<div className="tab-content__info-text">
							<h2>
								{language == "ES" ? "Me encanta nadar" : "I love swimming"}
							</h2>
							<span>
								{language == "ES"
									? "Llevo nadando ya más de un año y no podría estar más enamorado de este deporte, es una sensación increíble el poder perderse en el agua después de un día de trabajo."
									: "I have been swimming for more than a year now and I couldn't be more in love with this sport, it is an incredible feeling to be able to get lost in the water after a day of work."}
								<br />
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
		</div>
	);
};

const CoMusic = () => {
	const { language } = useContext(MyContext);

	const instruments = [
		{
			icon: guitar,
			text: language == "ES" ? "Guitarra" : "Guitar",
		},
		{
			icon: electric,
			text: language == "ES" ? "Guitarra eléctrica" : "Electric Guitar",
		},
		{
			icon: melodic,
			text: language == "ES" ? "Melódica" : "Melodica",
		},
		{
			icon: microphone,
			text: language == "ES" ? "Voz" : "Voice",
		},
		{
			icon: amp,
			text: language == "ES" ? "Amplificador" : "Amplifier",
		},
	];

	const [songs, setSongs] = useState([]);

	useEffect(() => {
		const fetchSongs = async () => {
			try {
				const response = await fetch(
					`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=${PLAYLIST_ID}&key=${API_KEY}`
				);
				const data = await response.json();

				// Ordenar por fecha de publicación y tomar los últimos 3
				const sortedSongs = data.items
					.sort(
						(a, b) =>
							new Date(b.snippet.publishedAt) - new Date(a.snippet.publishedAt)
					)
					.slice(0, 5)
					.map((item) => ({
						title: item.snippet.title,
						artist: item.snippet.videoOwnerChannelTitle.split(" - ")[0],
						coverImage: item.snippet.thumbnails.maxres.url,
						publishedAt: item.snippet.publishedAt,
						url: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`,
					}));

				setSongs(sortedSongs);
			} catch (error) {
				console.error("Error fetching songs:", error);
			}
		};

		fetchSongs();
	}, []);

	return (
		<div className="tab-body">
			<div className="tab-content">
				<div
					className="div-img"
					style={{ backgroundImage: "url(" + imgMusic + ")" }}
				></div>

				<div className="tab-content__info">
					<div className="tab-content__info-text">
						<h2>
							{language == "ES"
								? "Escuchar y tocar música es maravilloso"
								: "Listening to and playing music is wonderful"}
						</h2>
						<span>
							{language == "ES"
								? "Me encanta escuchar música y no solo como parte del fondo mientras comino por la ciudad, realmente me encanta darme mi tiempo para sentarme y escuchar un buen álbum de PinkFloyd, Gorillaz o Joji."
								: "I love listening to music and not just as background music while walking around the city, I really enjoy taking my time to sit down and listen to a good album by Pink Floyd, Gorillaz, or Joji."}
							<br />
							<br />
							{language == "ES"
								? "También toco y canto; me gusta mucho tomar mi guitarra, mi melódica o la guitarra eléctrica, prender el amplificador y tocar por horas y horas."
								: "I also play and sing; I really enjoy taking my guitar, my melodica, or the electric guitar, turning on the amplifier, and playing for hours and hours."}
						</span>
						<div className="tab-content__info-text__list">
							{instruments.map((instrument, index) => (
								<div key={index} className="tab-content__info-text__list-item">
									<img src={instrument.icon} alt={instrument.text} />
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<div style={{ width: "100%" }}>
				<span>
					{language == "ES"
						? "Ultimamente he estado escuchando:"
						: "Recently, I have been listening to:"}
				</span>
				<div className="music-list">
					{songs.map((song, index) => (
						<CoMusicCard
							key={index}
							cover={song.coverImage}
							song={song.title}
							artist={song.artist}
							url={song.url}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

const CoGames = () => {
	const { language } = useContext(MyContext);

	let opacities = [0, 0, 0, 0.2, 0.4, 0.6, 0.8, 1];

	window.onload = () => {
		setInterval(() => {
			opacities.unshift(opacities.pop()); // Mueve el último elemento al inicio
			console.log(opacities); // Muestra el array actualizado
		}, 41);
	};

	return (
		<div className="tab-body">
			<div className="tab-content">
				<div className="tab-content__info">
					<div className="tab-content__info-text">
						<h2>
							{language == "ES"
								? "Soy más de singleplayer..."
								: "I prefer singleplayer games..."}
						</h2>
						<span>
							{language == "ES"
								? "Me gustan los juegos donde me encuentro solo descubriendo una gran historia. Diría que mis géneros favoritos son los walking simulators, los metroid-vania y los plataformeros clasicos. Definitivamente mi juego favorito es Hollowknight."
								: "I like games where I find myself alone discovering a great story. I would say my favorite genres are walking simulators, metroidvanias, and classic platformers. Definitely, my favorite game is Hollow Knight."}
							<br />
							<br />
							<b>
								{language == "ES"
									? "P.D. Silk Song es real!"
									: "P.S. Silk Song is real!"}
							</b>
						</span>
						<h4>
							{language == "ES"
								? "... pero me encantan los juegos de mesa"
								: "... but i also like board games"}
						</h4>
						<span>
							{language == "ES"
								? "Últimamente he estado coleccionando y descubriendo juegos de mesas que me han encantado, no tengo muchos aún en mi colección pero pronto estare llenos de ellos"
								: "Lately, I have been collecting and discovering board games that I have loved, I don't have many yet in my collection but soon I will be filled with them"}
						</span>
					</div>
				</div>
			</div>
			<div className="frame-container">
				{[...Array(8)].map((_, i) => (
					<div key={i}>
						<img
							src={eval(`f${i + 1}`)}
							alt={`Frame ${i + 1}`}
							style={{ zIndex: i + 1, opacity: opacities[i] }}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

const RoAbout = () => {
	const { language, setRuta } = useContext(MyContext);

	const [filtro, setFiltro] = useState(3);

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
		</div>
	);
};

export default RoAbout;
