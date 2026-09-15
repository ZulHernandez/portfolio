import { useTranslation } from "react-i18next";

import imgSport from "../../assets/imgs/about/sport/foto.webp";
import apnea from "../../assets/imgs/about/sport/apnea.svg";
import back from "../../assets/imgs/about/sport/back.svg";
import breast from "../../assets/imgs/about/sport/breast.svg";
import fly from "../../assets/imgs/about/sport/fly.svg";
import free from "../../assets/imgs/about/sport/free.svg";

const CoSport = () => {
	const { t } = useTranslation();

	const styles = [
		{ icon: apnea, text: t("about.sport.styles.apnea") },
		{ icon: back, text: t("about.sport.styles.backstroke") },
		{ icon: free, text: t("about.sport.styles.free") },
		{ icon: breast, text: t("about.sport.styles.breaststroke") },
		{ icon: fly, text: t("about.sport.styles.butterfly") },
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
							<h2>{t("about.sport.title")}</h2>
							<span className="text-normal">
								{t("about.sport.p1")}
								<br />
								<br />
								{t("about.sport.p2")}
							</span>
							<div className="tab-content__info-text__list">
								{styles.map((style, index) => (
									<div
										key={index}
										className="tab-content__info-text__list-item"
										style={{ opacity: 1 - index * 0.2 }}
									>
										<img loading="lazy" src={style.icon} alt={style.text} />
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

export default CoSport;
