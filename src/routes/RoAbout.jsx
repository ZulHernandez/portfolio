import { useContext, useEffect, useState, useRef } from "react";
import { MyContext } from "../components/context/MyContext.js";
import { useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";

import CoTitle from "../components/general/CoTitle.jsx";
import CoConozca from "../components/general/CoConozca.jsx";
import CoNavLeft from "../components/general/CoNavLeft.jsx";
import RoCarga from "../routes/RoCarga.jsx";

const RoSport = lazy(() => import("./about/RoSport.jsx"));
const RoGames = lazy(() => import("./about/RoGames.jsx"));
const RoManga = lazy(() => import("./about/RoManga.jsx"));
const RoComida = lazy(() => import("./about/RoComida.jsx"));

import sport from "../assets/imgs/about/sport.svg";
import music from "../assets/imgs/about/music.svg";
import games from "../assets/imgs/about/games.svg";
import manga from "../assets/imgs/about/manga.svg";
import food from "../assets/imgs/about/food.svg";

import imgMusic from "../assets/imgs/about/music/foto.webp";
import amp from "../assets/imgs/about/music/amp.svg";
import electric from "../assets/imgs/about/music/electric.svg";
import guitar from "../assets/imgs/about/music/guitar.svg";
import melodic from "../assets/imgs/about/music/melodic.svg";
import microphone from "../assets/imgs/about/music/microphone.svg";

const API_KEY = "AIzaSyD786eN8Xt3Z-ItaSYVSDuZ4AVLrApAPD4";
const PLAYLIST_ID = "PLC_vmjLKExTmybkcbAHXzqPsZuVH9Lc6I";

import PropTypes from "prop-types";

const CoCard = ({ cover, title, author, url }) => {
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
			{url == null ? (
				<div
					className="music-card__cover"
					style={{
						backgroundImage: `url(${cover})`,
					}}
				></div>
			) : (
				<div
					className="music-card__cover"
					style={{
						backgroundImage: `url(${cover})`,
						display: display == 0 ? "block" : "none",
					}}
				></div>
			)}
			{url == null ? null : (
				<div
					className="music-card__cover"
					style={{
						display: display == 1 ? "block" : "none",
					}}
				>
					<iframe
						ref={iframeRef}
						src={`https://www.youtube.com/embed/${
							url.split("v=")[1]
						}?enablejsapi=1&origin=http://localhost:5173`}
						title={`${title} by ${author}`}
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
						referrerPolicy="strict-origin-when-cross-origin"
					></iframe>
				</div>
			)}
			<div className="music-card__info">
				<h3>{title}</h3>
				<p>{author}</p>
			</div>
		</div>
	);
};

CoCard.propTypes = {
	cover: PropTypes.string,
	title: PropTypes.string,
	author: PropTypes.string,
	url: PropTypes.string,
};

const CoTab = ({ status, icon, text }) => {
	return (
		<div className={`tab-buttons__item ${status}`}>
			<img loading="lazy" src={icon} alt={text} />
			<span className="text-normal">{text}</span>
		</div>
	);
};

CoTab.propTypes = {
	status: PropTypes.string,
	icon: PropTypes.string,
	text: PropTypes.string,
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
						<span className="text-normal">
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
									<img
										loading="lazy"
										src={instrument.icon}
										alt={instrument.text}
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<div style={{ width: "100%" }}>
				<span className="text-normal">
					{language == "ES"
						? "Ultimamente he estado escuchando:"
						: "Recently, I have been listening to:"}
					<br />
					<br />
					<br />
				</span>
				<div className="music-list">
					{songs.map((song, index) => (
						<CoCard
							key={index}
							cover={song.coverImage}
							title={song.title}
							author={song.artist}
							url={song.url}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

const RoAbout = () => {
	const { language, setRuta, setAmplio } = useContext(MyContext);
	const location = useLocation();
	const [filtro, setFiltro] = useState(2);

	const anclasAbout = [
		{
			text: language == "ES" ? "Esto soy yo" : "This is me",
			id: language == "ES" ? "esto-soy-yo" : "this-is-me",
		},
		{
			text: language == "ES" ? "Conozcámonos" : "Get in touch",
			id: language == "ES" ? "conozcamonos" : "getInTouch",
		},
	];

	useEffect(() => {
		setRuta("/about-me"); // Se ejecuta después del renderizado inicial
	}, []);

	useEffect(() => {
		setAmplio(false); // Reset amplio on route change
	}, [location.pathname]);

	return (
		<div>
			<div
				id={language == "ES" ? "esto-soy-yo" : "this-is-me"}
				className="container-fluid"
				style={{ minHeight: "50vh" }}
			>
				<CoTitle titles={language == "ES" ? "Este soy yo" : "This is me"} />
				<span className="text-normal">
					{language == "ES"
						? "Te dejo este apartado para que conozcas más sobre mi, más allá de mi trabajo hay otras cosas sobre mi que pueden ser interesantes."
						: "I leave you this section so you can learn more about me, beyond my work there are other things about me that may be interesting."}
				</span>
				<div className="tab">
					<div className="tab-buttons">
						<span onClick={() => setFiltro(2)}>
							<CoTab
								status={filtro == 2 ? "active" : "inactive"}
								icon={music}
								text={language == "ES" ? "Música" : "Music"}
							/>
						</span>
						<span onClick={() => setFiltro(4)}>
							<CoTab
								status={filtro == 4 ? "active" : "inactive"}
								icon={manga}
								text={language == "ES" ? "Manga" : "Manga"}
							/>
						</span>
						<span onClick={() => setFiltro(3)}>
							<CoTab
								status={filtro == 3 ? "active" : "inactive"}
								icon={games}
								text={language == "ES" ? "Juegos" : "Games"}
							/>
						</span>
						<span onClick={() => setFiltro(1)}>
							<CoTab
								status={filtro == 1 ? "active" : "inactive"}
								icon={sport}
								text={language == "ES" ? "Deporte" : "Sport"}
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
				<Suspense
					fallback={<RoCarga/>}
				>
					{filtro === 1 && <RoSport />}
					{filtro === 2 && <CoMusic />}
					{filtro === 3 && <RoGames />}
					{filtro === 4 && <RoManga />}
					{filtro === 5 && <RoComida />}
				</Suspense>
			</div>
			<CoConozca></CoConozca>
			<CoNavLeft anclas={anclasAbout} />
		</div>
	);
};

export default RoAbout;
