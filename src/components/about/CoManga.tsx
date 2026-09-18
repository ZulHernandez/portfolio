import { useTranslation } from "react-i18next";
import { useRef, useState } from "react";

import CoBtn from "../general/CoBtn";

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

interface CoCardProps {
	cover: string;
	title: string;
	author: string;
	url: string | null;
}

const CoCard = ({ cover, title, author, url }: CoCardProps) => {
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
						// Antes tenía origin=http://localhost:5173 hardcodeado (mismo bug
						// que se corrigió en RoAbout.jsx/CoMusic). En este componente en
						// particular ninguna entrada de `mangas`/`animes` trae `url`, así
						// que esta rama no se ejecuta hoy, pero se deja correcta por si se
						// agrega alguna con video.
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

// Cuántas tarjetas desplaza cada click de flecha (ver .music-nav en
// _about.scss) — mismo valor que .colab-nav en Home (_home.scss).
const SCROLL_AMOUNT = 320;

const CoManga = () => {
	const { t } = useTranslation();
	const mangaListRef = useRef<HTMLDivElement>(null);
	const animeListRef = useRef<HTMLDivElement>(null);

	const scrollMangas = (direction: 1 | -1) => {
		mangaListRef.current?.scrollBy({ left: direction * SCROLL_AMOUNT, behavior: "smooth" });
	};
	const scrollAnimes = (direction: 1 | -1) => {
		animeListRef.current?.scrollBy({ left: direction * SCROLL_AMOUNT, behavior: "smooth" });
	};

	const mangas = [
		{ cover: oyasumi, title: "Oyasumi Punpun", author: "Inio Asano", url: null },
		{ cover: eri, title: "Sayonara Eri", author: "Tatsuki Fujimoto", url: null },
		{ cover: uzumaki, title: "Uzumaki", author: "Junji Ito", url: null },
		{ cover: gakko, title: "Gakkō Gurashi!", author: "Norimitsu Kaihō", url: null },
		{ cover: bibliomania, title: "Bibliomania", author: "Orval, Macchiro", url: null },
	];

	const animes = [
		{ cover: evangelion, title: "Neon Genesis Evangelion", author: "Hideaki Anno", url: null },
		{ cover: cowboy, title: "Cowboy Bebop", author: "Shinichirō Watanabe", url: null },
		{ cover: madoka, title: "Puella Magi Madoka Magica", author: "Gen Urobuchi", url: null },
		{ cover: perfect, title: "Perfect Blue", author: "Satoshi Kon", url: null },
		{ cover: jujutsu, title: "Jujutsu Kaisen", author: "Gege Akutami", url: null },
	];

	return (
		<div className="tab-body">
			<div className="tab-content">
				<div className="tab-content__info">
					<div className="tab-content__info-text">
						<h2>{t("about.manga.title")}</h2>
						<span className="text-normal">{t("about.manga.p1")}</span>
					</div>
				</div>
			</div>
			<div className="music-list" ref={mangaListRef}>
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
			<div className="music-nav">
				<CoBtn
					type="secondary"
					icon="block"
					onClick={() => scrollMangas(-1)}
					ariaLabel={t("about.carousel.prev")}
					style={{ transform: "scale(0.5) rotate(180deg)" }}
				/>
				<CoBtn
					type="secondary"
					icon="block"
					onClick={() => scrollMangas(1)}
					ariaLabel={t("about.carousel.next")}
					style={{ transform: "scale(0.5)" }}
				/>
			</div>
			<div className="tab-content">
				<div className="tab-content__info">
					<div className="tab-content__info-text">
						<span className="text-normal">{t("about.manga.animeIntro")}</span>
					</div>
				</div>
			</div>
			<div className="music-list" ref={animeListRef}>
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
			<div className="music-nav">
				<CoBtn
					type="secondary"
					icon="block"
					onClick={() => scrollAnimes(-1)}
					ariaLabel={t("about.carousel.prev")}
					style={{ transform: "scale(0.5) rotate(180deg)" }}
				/>
				<CoBtn
					type="secondary"
					icon="block"
					onClick={() => scrollAnimes(1)}
					ariaLabel={t("about.carousel.next")}
					style={{ transform: "scale(0.5)" }}
				/>
			</div>
		</div>
	);
};

export default CoManga;
