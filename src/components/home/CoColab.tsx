import { useRef } from "react";
import CoTitle from "../general/CoTitle";
import CoBtn from "../general/CoBtn";
import { useTranslation } from "react-i18next";

import useExperienceData from "../context/useExperienceData";
import { COLLAB_LOGOS } from "../context/experienceAssets";
import { formatDateRange, resolveLang } from "../../utils/experienceData";

// El nombre/logo/rol/fechas/bullets de cada colaboración vive en
// public/data/experience.json (jobs con presence.collab === true), no aquí —
// ver ese archivo para dar de alta o editar una colaboración. Lo único que
// sigue en código es el logo (COLLAB_LOGOS), porque es un asset que pasa por
// el build de Vite, no texto.
//
// El carrusel (.colab-carrousel) es un overflow-x: auto sin ninguna pista
// visual de que hay más contenido a los lados — antes no había forma de
// saber que se podía desplazar. Estas flechas usan scrollBy sobre una ref al
// contenedor; CoBtn en modo solo-ícono (sin `text`) ya trae el chevron que
// apunta a la derecha, así que la flecha "anterior" solo rota ese mismo
// ícono 180°.
const SCROLL_AMOUNT = 320;

const CoColab = () => {
	const { t, i18n } = useTranslation();
	const lang = resolveLang(i18n.language);
	const { data } = useExperienceData();
	const carrouselRef = useRef<HTMLDivElement>(null);

	const colabs = (data?.jobs ?? []).filter((job) => job.presence.collab);

	const scroll = (direction: 1 | -1) => {
		carrouselRef.current?.scrollBy({ left: direction * SCROLL_AMOUNT, behavior: "smooth" });
	};

	return (
		<div id="colab" className="container-fluid grey">
			<CoTitle titles={t("home.colab.title")} />
			<div className="colab-carrousel" ref={carrouselRef}>
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
			<div className="colab-nav">
				<CoBtn
					type="secondary"
					icon="block"
					onClick={() => scroll(-1)}
					ariaLabel={t("home.colab.prev")}
					style={{ transform: "scale(0.5) rotate(180deg)" }}
				/>
				<CoBtn
					type="secondary"
					icon="block"
					onClick={() => scroll(1)}
					ariaLabel={t("home.colab.next")}
					style={{ transform: "scale(0.5)" }}
				/>
			</div>
		</div>
	);
};

export default CoColab;
