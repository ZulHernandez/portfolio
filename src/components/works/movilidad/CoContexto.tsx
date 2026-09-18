import { useTranslation } from "react-i18next";
import { useRef } from "react";

import CoTitle from "../../../components/general/CoTitle";
import CoKPI from "../../../components/general/CoKPI";
import CoBtn from "../../../components/general/CoBtn";

import map from "../../../assets/imgs/works/movilidad/cdmx.svg";
import pistola1 from "../../../assets/imgs/works/movilidad/ccs1.svg";
import pistola2 from "../../../assets/imgs/works/movilidad/gb.svg";
import pistola3 from "../../../assets/imgs/works/movilidad/j1772.svg";
import pistola4 from "../../../assets/imgs/works/movilidad/TAC.svg";
import pistola5 from "../../../assets/imgs/works/movilidad/tesla.svg";
import pistola6 from "../../../assets/imgs/works/movilidad/type2.svg";
import brandColab from "../../../assets/imgs/works/movilidad/brandColab.svg";
import arrow from "../../../assets/imgs/vectores/arrow_outward.svg";

interface ContextBullet {
	title: string;
	description: string;
}

interface ContextBullets {
	research: ContextBullet;
	notifications: ContextBullet;
	transactionFlow: ContextBullet;
}

// Cuánto desplaza cada click de flecha (ver .context-data-nav en
// _movilidad.scss) — mismo valor que .carrousel-nav en GLUE. Solo aplica en
// desktop/tablet: en mobile la fila se apila vertical y no scrollea.
const SCROLL_AMOUNT = 320;

const CoContexto = () => {
	const { t } = useTranslation();
	const contextDataRef = useRef<HTMLDivElement>(null);

	const scrollContextData = (direction: 1 | -1) => {
		contextDataRef.current?.scrollBy({ left: direction * SCROLL_AMOUNT, behavior: "smooth" });
	};

	// `ref` apunta a los ids de las propias secciones de MoviLidad (estos son
	// los ids "originales" que GLUE y HUBBUB copiaron por error para sus
	// propios bullets de contexto).
	const bulletRefs = [
		`#${t("movilidad.anchors.invest.id")}`,
		`#${t("movilidad.anchors.ambNoti.id")}`,
		`#${t("movilidad.anchors.flow.id")}`,
	];
	const bullets = t("movilidad.context.bullets", { returnObjects: true }) as ContextBullets;
	const bulletList = [bullets.research, bullets.notifications, bullets.transactionFlow].map(
		(bullet, index) => ({ ...bullet, ref: bulletRefs[index] })
	);

	return (
		<div id={t("movilidad.anchors.context.id")} className="container-fluid grey">
			<CoTitle titles={t("movilidad.context.title")} />
			<span className="text-normal">{t("movilidad.context.intro")}</span>
			<div className="context-data" ref={contextDataRef}>
				<div className="context-data__uno">
					<img loading="lazy" src={map} alt="" />
					<div className="context-data__uno-mapa">
						<CoKPI
							title={""}
							dato={t("movilidad.context.kpis.stations.value")}
							desc={t("movilidad.context.kpis.stations.desc")}
							imgs={[""]}
							imgSize="2.4rem"
							pos="left"
							color="#4D4D4D"
						/>
						<CoKPI
							title={""}
							dato={t("movilidad.context.kpis.chargers.value")}
							desc={t("movilidad.context.kpis.chargers.desc")}
							imgs={[""]}
							imgSize="2.4rem"
							pos="left"
							color="#4D4D4D"
						/>
					</div>
				</div>
				<div className="context-data__dos">
					<div className="context-data__dos-pistolas">
						{[pistola1, pistola2, pistola3, pistola4, pistola5, pistola6].map(
							(pistolaImg, i) => (
								<img
									loading="lazy"
									src={pistolaImg}
									alt={t("movilidad.context.chargerTypeAlt", { number: i + 1 })}
									key={i + 1}
								/>
							)
						)}
					</div>
					<span className="text-normal">
						<center>{t("movilidad.context.chargerTypesLabel")}</center>
					</span>
				</div>
				<div className="context-data__dos">
					<img loading="lazy" id="brandColab" src={brandColab} alt="" />
					<span className="text-normal">
						<center>{t("movilidad.context.collabLabel")}</center>
					</span>
				</div>
			</div>
			<div className="context-data-nav">
				<CoBtn
					type="secondary"
					icon="block"
					onClick={() => scrollContextData(-1)}
					ariaLabel={t("caseStudy.carousel.prev")}
					style={{ transform: "scale(0.5) rotate(180deg)" }}
				/>
				<CoBtn
					type="secondary"
					icon="block"
					onClick={() => scrollContextData(1)}
					ariaLabel={t("caseStudy.carousel.next")}
					style={{ transform: "scale(0.5)" }}
				/>
			</div>
			<div>
				<span className="text-normal">{t("movilidad.context.topicsIntro")}</span>
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
									alt={t("movilidad.context.goToAlt", { title: bullet.title })}
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
