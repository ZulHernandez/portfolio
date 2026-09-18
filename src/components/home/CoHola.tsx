import { Trans, useTranslation } from "react-i18next";
import dayjs from "dayjs";

import perfil from "../../assets/imgs/home/perfil.webp";
import CoBtn from "../general/CoBtn";
import useExperienceData from "../context/useExperienceData";

// Antes la fecha de inicio de carrera (2016-04-01) estaba escrita a mano
// aquí. Ahora sale de public/data/experience.json (`careerStartDate`, el
// mismo documento que alimenta CoColab/CoTimeline/RoResume). Este valor de
// respaldo solo se usa en el instante entre el primer render y que resuelva
// el fetch (o si llegara a fallar) — evita un parpadeo/vacío en el héroe.
//
// El título ("Senior Product Designer & Design Systems Lead") es un
// posicionamiento para quien no conoce la nomenclatura interna de Galileo
// ("Product Design Chapter Lead", modelo Spotify) — vive en
// home.hola.positioningTitle, deliberadamente separado del puesto real que
// sí se muestra tal cual en Colaboraciones/Resume.
const FALLBACK_CAREER_START = "2016-04-01";

const CoHola = () => {
	const { t } = useTranslation();
	const { data } = useExperienceData();

	const title = t("home.hola.positioningTitle");
	const years = dayjs().diff(dayjs(data?.careerStartDate ?? FALLBACK_CAREER_START), "year");

	return (
		<div id={t("home.anchors.hola.id")} className="container-fluid">
			<div id="hola-head">
				<img loading="lazy" src={perfil} alt="Saúl Ulises Hernández Cruz" />
				<div id="hola-head__text">
					<h2>{t("home.hola.greeting")}</h2>
					<h1>Saúl Hernández</h1>
					<div id="pd" style={{ width: "100%" }}>
						{title}
					</div>
				</div>
			</div>
			<div id="hola-text">
				<p>
					<Trans i18nKey="home.hola.p1" values={{ title, years }} components={{ b: <b /> }} />
				</p>
				<br />
				<p>
					<Trans i18nKey="home.hola.p2" components={{ b: <b /> }} />
				</p>
				<br />
				<p>
					<Trans i18nKey="home.hola.p3" components={{ b: <b /> }} />
				</p>
			</div>
			<div id="hola-cta">
				<CoBtn type="secondary" text={t("home.hola.seeWorkCta")} link="/works" />
				<CoBtn type="primary" text={t("home.hola.downloadCvCta")} onClick={() => window.print()} />
			</div>
		</div>
	);
};

export default CoHola;
