import { Trans, useTranslation } from "react-i18next";
import dayjs from "dayjs";

import perfil from "../../assets/imgs/home/perfil.webp";
import useExperienceData from "../context/useExperienceData";
import { resolveLang } from "../../utils/experienceData";

// Antes "Product Design Chapter Lead" y la fecha de inicio de carrera
// (2016-04-01) estaban escritos a mano aquí Y dentro de home.hola.p1 en
// translation.json — dos lugares que se podían desincronizar del puesto
// actual real. Ahora ambos salen de public/data/experience.json (el mismo
// documento que alimenta CoColab/CoTimeline/RoResume): el título es el rol
// del job con presence.collab=true y sin endDate (el puesto vigente), y los
// años de experiencia se calculan desde `careerStartDate`. Estos valores de
// respaldo solo se usan en el instante entre el primer render y que resuelva
// el fetch (o si llegara a fallar) — mantienen el texto anterior para que no
// haya un parpadeo/vacío en el héroe de la página.
const FALLBACK_TITLE = "Product Design Chapter Lead";
const FALLBACK_CAREER_START = "2016-04-01";

const CoHola = () => {
	const { t, i18n } = useTranslation();
	const { data } = useExperienceData();
	const lang = resolveLang(i18n.language);

	const currentJob = data?.jobs
		.filter((job) => job.presence.collab && job.endDate === null)
		.sort((a, b) => b.startDate.localeCompare(a.startDate))[0];

	const title = currentJob ? currentJob.role[lang] : FALLBACK_TITLE;
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
		</div>
	);
};

export default CoHola;
