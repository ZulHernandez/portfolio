import { useTranslation } from "react-i18next";

import CoTitle from "../../../components/general/CoTitle";
import CoKPI from "../../../components/general/CoKPI";

import hubbubApp from "../../../assets/imgs/works/hubbub/hubbubApp.svg";
import maps from "../../../assets/imgs/works/hubbub/maps.webp";
import atr from "../../../assets/imgs/works/hubbub/atr.svg";

import arrow from "../../../assets/imgs/vectores/arrow_outward.svg";

interface ContextBullet {
	title: string;
	description: string;
}

interface ContextBullets {
	research: ContextBullet;
	design: ContextBullet;
	programming: ContextBullet;
}

const CoContexto = () => {
	const { t } = useTranslation();

	// `ref` apunta a los ids de las propias secciones de HUBBUB (antes apuntaban,
	// por error, a los ids de MoviLidad: #interfaz/#notificaciones/#flujo-y-metodos).
	const bulletRefs = [
		`#${t("hubbub.anchors.invest.id")}`,
		`#${t("hubbub.anchors.design.id")}`,
		`#${t("hubbub.anchors.progra.id")}`,
	];
	const bullets = t("hubbub.context.bullets", { returnObjects: true }) as ContextBullets;
	const bulletList = [bullets.research, bullets.design, bullets.programming].map(
		(bullet, index) => ({ ...bullet, ref: bulletRefs[index] })
	);

	return (
		<div id={t("hubbub.anchors.context.id")} className="container-fluid grey">
			<CoTitle titles={t("hubbub.context.title")} />
			<span className="text-normal">{t("hubbub.context.intro")}</span>
			<div className="context-data">
				<div className="context-data__uno" style={{ minWidth: "auto" }}>
					<img loading="lazy" src={hubbubApp} alt="" />
					<div className="context-data__uno-mapa">
						<CoKPI
							title={""}
							dato={t("hubbub.context.kpis.app.value")}
							desc={t("hubbub.context.kpis.app.desc")}
							imgs={[""]}
							imgSize="2.4rem"
							pos="left"
							color="#4D4D4D"
						/>
						<CoKPI
							title={""}
							dato={t("hubbub.context.kpis.reports.value")}
							desc={t("hubbub.context.kpis.reports.desc")}
							imgs={[""]}
							imgSize="2.4rem"
							pos="left"
							color="#4D4D4D"
						/>
					</div>
				</div>
				<div className="context-data__dos" style={{ minWidth: "auto" }}>
					<img loading="lazy" src={maps} alt="" />
					<CoKPI
						title={""}
						dato={t("hubbub.context.kpis.maps.value")}
						desc={t("hubbub.context.kpis.maps.desc")}
						imgs={[""]}
						imgSize="2.4rem"
						pos="left"
						color="#4D4D4D"
					/>
				</div>
				<div className="context-data__dos" style={{ minWidth: "auto" }}>
					<img loading="lazy" src={atr} alt="" />
					<CoKPI
						title={""}
						dato={t("hubbub.context.kpis.team.value")}
						desc={t("hubbub.context.kpis.team.desc")}
						imgs={[""]}
						imgSize="2.4rem"
						pos="left"
						color="#4D4D4D"
					/>
				</div>
			</div>
			<div>
				<span className="text-normal">{t("hubbub.context.participationIntro")}</span>
				<br />
				<br />
				<br />
				{bulletList.map((bullet, index) => (
					<div key={index} className="bullet-point">
						<a href={bullet.ref}>
							<div>
								<span className="bullet-point__title">{bullet.title}</span>
								<img
									loading="lazy"
									src={arrow}
									alt={t("hubbub.context.goToAlt", { title: bullet.title })}
								/>
							</div>
						</a>
						<br />
						<span className="text-normal">{bullet.description}</span>
						<br />
						<br />
					</div>
				))}
			</div>
		</div>
	);
};

export default CoContexto;
