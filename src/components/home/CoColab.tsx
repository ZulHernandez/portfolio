import CoTitle from "../general/CoTitle";
import { useTranslation } from "react-i18next";

import galileo from "../../assets/imgs/home/galileo.svg";
import liver from "../../assets/imgs/home/liverpool.svg";
import grupoPm from "../../assets/imgs/home/grupoPM.svg";
import marsoft from "../../assets/imgs/home/marsoft.svg";

interface Colab {
	key: string;
	name: string;
	logo: string;
}

// Solo lo que no se traduce (nombre propio, logo) vive aquí; date/role/bullets
// se leen de locales/<idioma>/translation.json bajo home.colab.items.<key>.
const colabs: Colab[] = [
	{ key: "galileo", name: "Galileo | Ben&Frank - Bombavista", logo: galileo },
	{ key: "liverpool", name: "El puerto de Liverpool", logo: liver },
	{ key: "grupoPm", name: "Grupo PM", logo: grupoPm },
	{ key: "marsoft", name: "MARSOFT", logo: marsoft },
];

const CoColab = () => {
	const { t } = useTranslation();

	return (
		<div id="colab" className="container-fluid grey">
			<CoTitle titles={t("home.colab.title")} />
			<div className="colab-carrousel">
				{colabs.map((colab) => {
					const base = `home.colab.items.${colab.key}`;
					const bullets = t(`${base}.bullets`, { returnObjects: true }) as string[];
					return (
						<div key={colab.key} className="colab-card">
							<div className="colab-card__head">
								<img loading="lazy" src={colab.logo} alt={colab.name} />
								<div className="colab-card__head__text">
									<h3>{colab.name}</h3>
									<span className="text-normal">{t(`${base}.date`)}</span>
								</div>
							</div>
							<h4>{t(`${base}.role`)}</h4>
							<ul className="list-group list-group-flush">
								{bullets.map((des, index) => (
									<li key={index} className="list-group-item">
										{des}
									</li>
								))}
							</ul>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default CoColab;
