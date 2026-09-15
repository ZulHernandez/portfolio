import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

import f1 from "../../assets/imgs/about/games/f1.webp";
import f2 from "../../assets/imgs/about/games/f2.webp";
import f3 from "../../assets/imgs/about/games/f3.webp";
import f4 from "../../assets/imgs/about/games/f4.webp";
import f5 from "../../assets/imgs/about/games/f5.webp";
import f6 from "../../assets/imgs/about/games/f6.webp";
import f7 from "../../assets/imgs/about/games/f7.webp";
import f8 from "../../assets/imgs/about/games/f8.webp";

const CoGames = () => {
	const { t } = useTranslation();

	const [opacities, setOpacities] = useState([
		1, 0, 0, 0, 0.05, 0.1, 0.15, 0.2,
	]);

	const frames = [f1, f2, f3, f4, f5, f6, f7, f8];

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
						<h2>{t("about.games.title")}</h2>
						<span className="text-normal">
							{t("about.games.p1")}
							<br />
							<br />
							<b>{t("about.games.silksong")}</b>
						</span>
						<h4>{t("about.games.boardTitle")}</h4>
						<span className="text-normal">{t("about.games.boardParagraph")}</span>
					</div>
				</div>
			</div>
			<div className="frame-container">
				{frames.map((frame, i) => (
					<div key={i}>
						<img
							loading="lazy"
							src={frame}
							alt={`Frame ${i + 1}`}
							style={{ zIndex: i + 1, opacity: opacities[i] }}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default CoGames;
