import CoTitle from "../general/CoTitle";
import { useTranslation } from "react-i18next";

import useExperienceData from "../context/useExperienceData";
import { COLLAB_LOGOS } from "../context/experienceAssets";
import { formatDateRange, resolveLang } from "../../utils/experienceData";

// El nombre/logo/rol/fechas/bullets de cada colaboración vive en
// public/data/experience.json (jobs con presence.collab === true), no aquí —
// ver ese archivo para dar de alta o editar una colaboración. Lo único que
// sigue en código es el logo (COLLAB_LOGOS), porque es un asset que pasa por
// el build de Vite, no texto.
const CoColab = () => {
	const { t, i18n } = useTranslation();
	const lang = resolveLang(i18n.language);
	const { data } = useExperienceData();

	const colabs = (data?.jobs ?? []).filter((job) => job.presence.collab);

	return (
		<div id="colab" className="container-fluid grey">
			<CoTitle titles={t("home.colab.title")} />
			<div className="colab-carrousel">
				{colabs.map((colab) => {
					const bullets = colab.bullets?.collab?.[lang] ?? [];
					return (
						<div key={colab.slug} className="colab-card">
							<div className="colab-card__head">
								<img loading="lazy" src={COLLAB_LOGOS[colab.slug]} alt={colab.company} />
								<div className="colab-card__head__text">
									<h3>{colab.company}</h3>
									<span className="text-normal">
										{formatDateRange(colab.startDate, colab.endDate, lang, "year")}
									</span>
								</div>
							</div>
							<h4>{colab.role[lang]}</h4>
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
