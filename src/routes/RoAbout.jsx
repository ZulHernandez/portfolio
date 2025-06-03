import { useContext, useEffect, useState, useRef } from "react";
import { MyContext } from "../components/context/MyContext.js";
import { useLocation } from "react-router-dom";

import CoTitle from "../components/general/CoTitle.jsx";
import CoConozca from "../components/general/CoConozca.jsx";
import CoNavLeft from "../components/general/CoNavLeft.jsx";

import sport from "../assets/imgs/about/sport.svg";
import music from "../assets/imgs/about/music.svg";
import games from "../assets/imgs/about/games.svg";
import manga from "../assets/imgs/about/manga.svg";	
import food from "../assets/imgs/about/food.svg";

import imgSport from "../assets/imgs/about/sport/foto.webp";
import apnea from "../assets/imgs/about/sport/apnea.svg";
import back from "../assets/imgs/about/sport/back.svg";
import breast from "../assets/imgs/about/sport/breast.svg";
import fly from "../assets/imgs/about/sport/fly.svg";
import free from "../assets/imgs/about/sport/free.svg";

import imgMusic from "../assets/imgs/about/music/foto.webp";
import amp from "../assets/imgs/about/music/amp.svg";
import electric from "../assets/imgs/about/music/electric.svg";
import guitar from "../assets/imgs/about/music/guitar.svg";
import melodic from "../assets/imgs/about/music/melodic.svg";
import microphone from "../assets/imgs/about/music/microphone.svg";

import f1 from "../assets/imgs/about/games/Frame-1.webp";
import f2 from "../assets/imgs/about/games/Frame-2.webp";
import f3 from "../assets/imgs/about/games/Frame-3.webp";
import f4 from "../assets/imgs/about/games/Frame-4.webp";
import f5 from "../assets/imgs/about/games/Frame-5.webp";
import f6 from "../assets/imgs/about/games/Frame-6.webp";
import f7 from "../assets/imgs/about/games/Frame-7.webp";
import f8 from "../assets/imgs/about/games/Frame-8.webp";

import oyasumi from "../assets/imgs/about/manga/oyasumi.webp";
import uzumaki from "../assets/imgs/about/manga/uzumaki.webp";
import gakko from "../assets/imgs/about/manga/gakko.webp";
import bibliomania from "../assets/imgs/about/manga/bibliomania.webp";
import eri from "../assets/imgs/about/manga/eri.webp";
import evangelion from "../assets/imgs/about/manga/evangelion.webp";
import cowboy from "../assets/imgs/about/manga/cowboy.webp";
import madoka from "../assets/imgs/about/manga/madoka.webp";
import perfect from "../assets/imgs/about/manga/perfect.webp";
import jujutsu from "../assets/imgs/about/manga/jujutsu.webp";

import apio from "../assets/imgs/about/food/apio.svg";
import tomate from "../assets/imgs/about/food/tomate.svg";
import hierbabuena from "../assets/imgs/about/food/hierbabuena.svg";
import chile from "../assets/imgs/about/food/chile.svg";
import naranja from "../assets/imgs/about/food/naranja.svg";
import limon from "../assets/imgs/about/food/limon.svg";
import sal from "../assets/imgs/about/food/sal.svg";

const API_KEY = "AIzaSyD786eN8Xt3Z-ItaSYVSDuZ4AVLrApAPD4";
const PLAYLIST_ID = "PLC_vmjLKExTmybkcbAHXzqPsZuVH9Lc6I";

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
						className="music-card__cover"
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

const CoGames = () => {
	const { language } = useContext(MyContext);

	const [opacities, setOpacities] = useState([
		1, 0, 0, 0, 0.05, 0.1, 0.15, 0.2,
	]);

	useEffect(() => {
		const interval = setInterval(() => {
			setOpacities((prev) => {
				const newArray = [
					prev[prev.length - 1],
					...prev.slice(0, prev.length - 1),
				]; // Moves last element to the front
				return newArray;
			});
		}, 41 * 10);

		return () => clearInterval(interval); // Cleanup on unmount
	}, []);

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

const CoManga = () => {
	const { language } = useContext(MyContext);

	const mangas = [
		{
			cover: oyasumi,
			title: "Oyasumi Punpun",
			author: "Inio Asano",
			url: null,
		},
		{
			cover: eri,
			title: "Sayonara Eri",
			author: "Tatsuki Fujimoto",
			url: null,
		},
		{
			cover: uzumaki,
			title: "Uzumaki",
			author: "Junji Ito",
			url: null,
		},
		{
			cover: gakko,
			title: "Gakkō Gurashi!",
			author: "Norimitsu Kaihō",
			url: null,
		},

		{
			cover: bibliomania,
			title: "Bibliomania",
			author: "Orval, Macchiro",
			url: null,
		},
	];

	const animes = [
		{
			cover: evangelion,
			title: "Neon Genesis Evangelion",
			author: "Hideaki Anno",
			url: null,
		},
		{
			cover: cowboy,
			title: "Cowboy Bebop",
			author: "Shinichirō Watanabe",
			url: null,
		},
		{
			cover: madoka,
			title: "Puella Magi Madoka Magica",
			author: "Gen Urobuchi",
			url: null,
		},
		{
			cover: perfect,
			title: "Perfect Blue",
			author: "Satoshi Kon",
			url: null,
		},
		{
			cover: jujutsu,
			title: "Jujutsu Kaisen",
			author: "Gege Akutami",
			url: null,
		},
	];

	return (
		<div className="tab-body">
			<div className="tab-content">
				<div className="tab-content__info">
					<div className="tab-content__info-text">
						<h2>
							{language == "ES"
								? "Slices of live, terror y ¿mechas?"
								: "Slices of life, terror and mechas?"}
						</h2>
						<span>
							{language == "ES"
								? "Soy más de leer manga que ver anime y asi he encontrado increíbles autores que me han hecho pasar buenos y malos momentos. Aquí esta mi top de mangas aunque, si es posible, deberías leer más sobre el autor."
								: "I prefer reading manga over watching anime, and this has led me to discover incredible authors who have given me both good and bad moments. Here is my top manga, although if possible, you should read more about the author."}
						</span>
					</div>
				</div>
			</div>
			<div className="music-list">
				{mangas.map((manga, index) => (
					<CoCard
						key={index}
						cover={manga.cover}
						title={manga.title}
						author={manga.author}
						url={manga.url}
					/>
				))}
			</div>
			<div className="tab-content">
				<div className="tab-content__info">
					<div className="tab-content__info-text">
						<span>
							{language == "ES"
								? "A pesar de gustar más el formato manga, hay obras que definitivamente no podría más sino viéndolas a toda color y animadas. Te recomiendo mucho darles un vistazo, podrían gustarte bastante."
								: "Despite preferring the manga format, there are definitely works that I couldn't enjoy as much if I didn't watch them in full color and animated. I highly recommend checking them out; you might like them a lot."}
						</span>
					</div>
				</div>
			</div>
			<div className="music-list">
				{animes.map((anime, index) => (
					<CoCard
						key={index}
						cover={anime.cover}
						title={anime.title}
						author={anime.author}
						url={anime.url}
					/>
				))}
			</div>
		</div>
	);
};

const CoComida = () => {
	const { language } = useContext(MyContext);

	const ingredientes = [
		{
			icon: apio,
			text: language == "ES" ? "Apio" : "Celery",
		},
		{
			icon: tomate,
			text: language == "ES" ? "Tomate" : "Tomato",
		},
		{
			icon: hierbabuena,
			text: language == "ES" ? "Hierbabuena" : "Mint",
		},
		{
			icon: chile,
			text: language == "ES" ? "Chile serrano" : "Serrano pepper",
		},
		{
			icon: naranja,
			text: language == "ES" ? "Naranja" : "Orange",
		},
		{
			icon: limon,
			text: language == "ES" ? "Limón" : "Lemon",
		},
		{
			icon: sal,
			text: language == "ES" ? "Sal" : "Salt",
		},
	];

	const ingredienteItems = [
		{
			cantidad: "1",
			text: language == "ES" ? "Rama de apio" : "Celery stalk",
		},
		{
			cantidad: "2",
			text:
				language == "ES"
					? "Tomates (Jitomate verde)"
					: "Tomatoes (Green tomato)",
		},
		{
			cantidad: "3",
			text: language == "ES" ? "Hojas de hierbabuena" : "Mint leaves",
		},
		{
			cantidad: "1",
			text: language == "ES" ? "Chile serrano" : "Serrano peppers",
		},
		{
			cantidad: "1",
			text: language == "ES" ? "Naranja" : "Orange",
		},
		{
			cantidad: "1",
			text:
				language == "ES" ? "Limón verde sin semilla" : "Seedless green lemon",
		},
		{
			cantidad: "-",
			text: language == "ES" ? "Sal" : "Salt",
		},
		{
			cantidad: "-",
			text: language == "ES" ? "Oregano" : "Oregano",
		},
		{
			cantidad: "-",
			text: language == "ES" ? "Agua" : "Water",
		},
	];

	const steps = [
		{
			cantidad: "1",
			text:
				language == "ES"
					? "Picamos la rama de apio, los tomates, las hojas de hierbabuena y el chile serrano."
					: "Chop the celery stalk, tomatoes, mint leaves, and serrano pepper.",
		},
		{
			cantidad: "2",
			text:
				language == "ES"
					? "Exprimimos el jugo del limón y el de naranja, reservamos."
					: "Juice the lemon and orange, set aside.",
		},
		{
			cantidad: "3",
			text:
				language == "ES"
					? "Molcajeteamos o procesamos con la licuadora y agregamos la sal y el orégano al gusto."
					: "Grind in a mortar or blender and add salt and oregano to taste.",
		},
		{
			cantidad: "4",
			text:
				language == "ES"
					? "Si lo requiere la licuadora o tu en el molcajete puedes agregar agua poco a poco hasta lograr la consistencia que más te guste, yo la prefiero un poco más pastosa."
					: "If the blender requires it or you in the mortar, you can add water little by little until you achieve the consistency you like best; I prefer it a little thicker.",
		},
		{
			cantidad: "5",
			text:
				language == "ES"
					? "Acompaña con totopos o para unos taquitos."
					: "Serve with tortilla chips or tacos.",
		},
	];

	return (
		<div className="tab-body">
			<div className="tab-content">
				<div className="tab-content__info">
					<div className="tab-content__info-text">
						<h2>
							{language == "ES"
								? "Comida asiática, cocinar y una receta "
								: "Asian food, cooking, and a recipe"}
						</h2>
						<span>
							{language == "ES"
								? "Me encanta comer pero también amo cocinar, de las cosas que mas suelo cocinar son comida asiática desde platillos salados como ramen, giozas u onigiris como también platillos dulces como el helado de matcha. La comida mexicana obviamente me encanta, hago una birria espectacular y justo les dejare una reseta de salsa verde cruda para que puedan comer con su familia."
								: "I love eating but I also love cooking. Some of the things I cook the most are Asian food, from savory dishes like ramen, gyozas, or onigiris to sweet dishes like matcha ice cream. I obviously love Mexican food; I make a spectacular birria, and I will leave you a recipe for raw green salsa so you can enjoy it with your family."}
						</span>
						<div className="tab-content__info-text__list">
							{ingredientes.map((ingrediente, index) => (
								<div key={index} className="tab-content__info-text__list-item">
									<img src={ingrediente.icon} alt={ingrediente.text} />
								</div>
							))}
						</div>
						<br />
						<br />
						<center>
							<div className="receipe">
								<div className="receipe__ingredients">
									<h3>{language == "ES" ? "Ingredientes" : "Ingredients"}</h3>
									<div className="receipe__ingredients-list">
										{ingredienteItems.map((item, index) => (
											<div
												className="receipe__ingredients-list-item"
												key={index}
											>
												<span>{item.cantidad}</span>
												<span>{item.text}</span>
											</div>
										))}
									</div>
								</div>
								<div className="receipe__instructions">
									<h3>{language == "ES" ? "Instrucciones" : "Instructions"}</h3>
									<div className="receipe__instructions-list">
										{steps.map((item, index) => (
											<div
												className="receipe__instructions-list-item"
												key={index}
											>
												<span>{item.cantidad}</span>
												<span>{item.text}</span>
											</div>
										))}
									</div>
								</div>
							</div>
						</center>
					</div>
				</div>
			</div>
		</div>
	);
};

const RoAbout = () => {
	const { language, setRuta, setAmplio } = useContext(MyContext);
	const location = useLocation();
	const [filtro, setFiltro] = useState(2);

	useEffect(() => {
		setRuta("/about-me");
	}, [setRuta]);

	useEffect(() => {
		setAmplio(false); // Reset amplio on route change
	}, [location.pathname]);

	return (
		<div>
			<CoNavLeft />
			<div
				id={language == "ES" ? "esto-soy-yo" : "this-is-me"}
				className="container-fluid"
				style={{ minHeight: "50vh" }}
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
				{filtro === 1 && <CoSport />}
				{filtro === 2 && <CoMusic />}
				{filtro === 3 && <CoGames />}
				{filtro === 4 && <CoManga />}
				{filtro === 5 && <CoComida />}
			</div>
			<CoConozca></CoConozca>
		</div>
	);
};

export default RoAbout;
