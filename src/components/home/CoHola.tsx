import { Trans, useTranslation } from "react-i18next";
import dayjs from "dayjs";

import perfil from "../../assets/imgs/home/perfil.webp";

const CoHola = () => {
	const { t } = useTranslation();

	const startDate = dayjs("2016-04-01");
	const currentDate = dayjs();
	const diff = currentDate.diff(startDate, "year");
	return (
		<div id={t("home.anchors.hola.id")} className="container-fluid">
			<div id="hola-head">
				<img loading="lazy" src={perfil} alt="Saúl Ulises Hernández Cruz" />
				<div id="hola-head__text">
					<h2>{t("home.hola.greeting")}</h2>
					<h1>Saúl Hernández</h1>
					<div id="pd" style={{ width: "100%" }}>
						Product Design Chapter Lead
					</div>
				</div>
			</div>
			<div id="hola-text">
				<p>
					<Trans i18nKey="home.hola.p1" values={{ years: diff }} components={{ b: <b /> }} />
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
