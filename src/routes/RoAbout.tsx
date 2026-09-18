import { useContext, useEffect, useState, useRef, lazy, Suspense } from "react";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";
import { useTranslation } from "react-i18next";
import { NavigationContext } from "../components/context/NavigationContext";
import { useLocation } from "react-router-dom";

import CoTitle from "../components/general/CoTitle";
import CoConozca from "../components/general/CoConozca";
import CoNavLeft from "../components/general/CoNavLeft";
import CoSeo from "../components/general/CoSeo";
import CoBtn from "../components/general/CoBtn";
import RoCarga from "../routes/RoCarga";

const RoSport = lazy(() => import("./about/RoSport"));
const RoGames = lazy(() => import("./about/RoGames"));
const RoManga = lazy(() => import("./about/RoManga"));
const RoComida = lazy(() => import("./about/RoComida"));

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

// La API key y el playlist ID viven en variables de entorno (ver .env.example);
// nunca deben quedar hardcodeadas en el código fuente.
const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const PLAYLIST_ID = import.meta.env.VITE_YOUTUBE_PLAYLIST_ID;

// Cuántas canciones desplaza cada click de flecha (ver .music-nav).
const SCROLL_AMOUNT = 320;

interface CoCardProps {
	cover?: string;
	title?: string;
	author?: string;
	url?: string | null;
}

const CoCard = ({ cover, title, author, url }: CoCardProps) => {
	const iframeRef = useRef<HTMLIFrameElement>(null);
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
						}?enablejsapi=1&origin=${window.location.origin}`}
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

interface CoTabProps {
	status?: string;
	icon?: string;
	text?: string;
}

const CoTab = ({ status, icon, text }: CoTabProps) => {
	return (
		<div className={`tab-buttons__item ${status}`}>
			<img loading="lazy" src={icon} alt={text} />
			<span className="text-normal">{text}</span>
		</div>
	);
};

interface Song {
	title: string;
	artist: string;
	coverImage: string;
	publishedAt: string;
	url: string;
}

interface YouTubePlaylistItem {
	snippet: {
		title: string;
		videoOwnerChannelTitle: string;
		publishedAt: string;
		thumbnails: { maxres: { url: string } };
		resourceId: { videoId: string };
	};
}

const CoMusic = () => {
	const { t } = useTranslation();

	const instruments = [
		{ icon: guitar, text: t("about.music.instruments.guitar") },
		{ icon: electric, text: t("about.music.instruments.electricGuitar") },
		{ icon: melodic, text: t("about.music.instruments.melodica") },
		{ icon: microphone, text: t("about.music.instruments.voice") },
		{ icon: amp, text: t("about.music.instruments.amplifier") },
	];

	const [songs, setSongs] = useState<Song[]>([]);
	const musicListRef = useRef<HTMLDivElement>(null);

	const scrollMusic = (direction: 1 | -1) => {
		musicListRef.current?.scrollBy({ left: direction * SCROLL_AMOUNT, behavior: "smooth" });
	};

	useEffect(() => {
		const fetchSongs = async () => {
			if (!API_KEY || !PLAYLIST_ID) {
				console.warn(
					"Faltan VITE_YOUTUBE_API_KEY / VITE_YOUTUBE_PLAYLIST_ID en el .env; se omite la carga de canciones."
				);
				return;
			}

			try {
				// maxResults=10 se quedaba corto: playlistItems devuelve los
				// elementos en el orden de POSICIÓN de la playlist (no por
				// fecha), así que si ya tiene más de 10 canciones, las
				// agregadas más recientemente (al final) nunca llegaban a
				// pedirse — de ahí que la lista se viera desactualizada. 50
				// es el máximo por página que acepta la API; cubre cualquier
				// playlist personal razonable sin necesitar paginación.
				const response = await fetch(
					`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${PLAYLIST_ID}&key=${API_KEY}`
				);
				const data = (await response.json()) as { items?: YouTubePlaylistItem[] };

				if (!data.items) {
					console.error("Respuesta inesperada de YouTube API:", data);
					return;
				}

				// Ordenar por fecha de publicación y tomar los últimos 3
				const sortedSongs = data.items
					.sort(
						(a, b) =>
							new Date(b.snippet.publishedAt).getTime() - new Date(a.snippet.publishedAt).getTime()
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
						<h2>{t("about.music.title")}</h2>
						<span className="text-normal">
							{t("about.music.p1")}
							<br />
							<br />
							{t("about.music.p2")}
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
					{t("about.music.recentlyListening")}
					<br />
					<br />
					<br />
				</span>
				<div className="music-list" ref={musicListRef}>
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
				<div className="music-nav">
					<CoBtn
						type="secondary"
						icon="block"
						onClick={() => scrollMusic(-1)}
						ariaLabel={t("about.carousel.prev")}
						style={{ transform: "scale(0.5) rotate(180deg)" }}
					/>
					<CoBtn
						type="secondary"
						icon="block"
						onClick={() => scrollMusic(1)}
						ariaLabel={t("about.carousel.next")}
						style={{ transform: "scale(0.5)" }}
					/>
				</div>
			</div>
		</div>
	);
};

const RoAbout = () => {
	const { t } = useTranslation();
	const { setRuta, setAmplio } = useContext(NavigationContext);
	const location = useLocation();
	const [filtro, setFiltro] = useState(2);

	const anclasAbout = [
		{ text: t("about.anchors.intro.label"), id: t("about.anchors.intro.id") },
		{ text: t("home.anchors.conozca.label"), id: t("home.anchors.conozca.id") },
	];

	// Los tabs de "about" eran <span onClick> sin foco ni rol accesible; se
	// mantiene el <span> (para no anidar el <div> de CoTab dentro de un
	// <button>) pero se le da semántica y operación por teclado de botón.
	const onTabKeyDown = (e: ReactKeyboardEvent, activate: () => void) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			activate();
		}
	};

	useEffect(() => {
		setRuta("/about-me"); // Se ejecuta después del renderizado inicial
	}, [setRuta]);

	useEffect(() => {
		setAmplio(false); // Reset amplio on route change
	}, [location.pathname, setAmplio]);

	return (
		<div>
			<CoSeo routeKey="about" path="/about-me" />
			<div
				id={t("about.anchors.intro.id")}
				className="container-fluid"
				style={{ minHeight: "50vh" }}
			>
				<CoTitle titles={t("about.intro.title")} />
				<span className="text-normal">{t("about.intro.subtitle")}</span>
				<div className="tab">
					<div className="tab-buttons">
						<span
							role="button"
							tabIndex={0}
							aria-pressed={filtro == 2}
							onClick={() => setFiltro(2)}
							onKeyDown={(e) => onTabKeyDown(e, () => setFiltro(2))}
						>
							<CoTab
								status={filtro == 2 ? "active" : "inactive"}
								icon={music}
								text={t("about.tabs.music")}
							/>
						</span>
						<span
							role="button"
							tabIndex={0}
							aria-pressed={filtro == 4}
							onClick={() => setFiltro(4)}
							onKeyDown={(e) => onTabKeyDown(e, () => setFiltro(4))}
						>
							<CoTab
								status={filtro == 4 ? "active" : "inactive"}
								icon={manga}
								text={t("about.tabs.manga")}
							/>
						</span>
						<span
							role="button"
							tabIndex={0}
							aria-pressed={filtro == 3}
							onClick={() => setFiltro(3)}
							onKeyDown={(e) => onTabKeyDown(e, () => setFiltro(3))}
						>
							<CoTab
								status={filtro == 3 ? "active" : "inactive"}
								icon={games}
								text={t("about.tabs.games")}
							/>
						</span>
						<span
							role="button"
							tabIndex={0}
							aria-pressed={filtro == 1}
							onClick={() => setFiltro(1)}
							onKeyDown={(e) => onTabKeyDown(e, () => setFiltro(1))}
						>
							<CoTab
								status={filtro == 1 ? "active" : "inactive"}
								icon={sport}
								text={t("about.tabs.sport")}
							/>
						</span>
						<span
							role="button"
							tabIndex={0}
							aria-pressed={filtro == 5}
							onClick={() => setFiltro(5)}
							onKeyDown={(e) => onTabKeyDown(e, () => setFiltro(5))}
						>
							<CoTab
								status={filtro == 5 ? "active" : "inactive"}
								icon={food}
								text={t("about.tabs.food")}
							/>
						</span>
					</div>
				</div>
				<Suspense fallback={<RoCarga />}>
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
