import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import { useRef, useState } from "react";
import PropTypes from "prop-types";

import oyasumi from "../../assets/imgs/about/manga/oyasumi.webp";
import uzumaki from "../../assets/imgs/about/manga/uzumaki.webp";
import gakko from "../../assets/imgs/about/manga/gakko.webp";
import bibliomania from "../../assets/imgs/about/manga/bibliomania.webp";
import eri from "../../assets/imgs/about/manga/eri.webp";
import evangelion from "../../assets/imgs/about/manga/evangelion.webp";
import cowboy from "../../assets/imgs/about/manga/cowboy.webp";
import madoka from "../../assets/imgs/about/manga/madoka.webp";
import perfect from "../../assets/imgs/about/manga/perfect.webp";
import jujutsu from "../../assets/imgs/about/manga/jujutsu.webp";

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

CoCard.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    url: PropTypes.string,
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
						<span className="text-normal">
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
						<span className="text-normal">
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

export default CoManga;
