import { useTranslation } from "react-i18next";

import CoTitle from "../../../components/general/CoTitle";
import CoKPI from "../../general/CoKPI";

import beta from "../../../assets/imgs/works/glue/beta.webp";
import release from "../../../assets/imgs/works/glue/release.webp";

import circLiverpool from "../../../assets/imgs/works/glue/circLiverpool.svg";
import circSuburbia from "../../../assets/imgs/works/glue/circSuburbia.svg";
import circPuerto from "../../../assets/imgs/works/glue/circPuerto.svg";
import colourToken1 from "../../../assets/imgs/works/glue/colourToken1.svg";
import circGAP from "../../../assets/imgs/works/glue/circGAP.svg";
import circPottery from "../../../assets/imgs/works/glue/circPottery.svg";
import circWest from "../../../assets/imgs/works/glue/circWest.svg";
import circWilliam from "../../../assets/imgs/works/glue/circWilliam.svg";
import circBanana from "../../../assets/imgs/works/glue/circBanana.svg";
import circToys from "../../../assets/imgs/works/glue/circToys.svg";
import circPlus from "../../../assets/imgs/works/glue/circPlus.svg";
import colourToken2 from "../../../assets/imgs/works/glue/colourToken2.svg";
import styleLib from "../../../assets/imgs/works/glue/styleLib.svg";
import arrow from "../../../assets/imgs/works/glue/arrow_back.svg";
import varLib from "../../../assets/imgs/works/glue/varLib.webp";

const CoTech = () => {
	const { t } = useTranslation();

	const designAtomsPercent = 100 - (2 * 100) / 10;
	const brandRegistryPercent = 100 - (30 * 100) / 120;
	const layoutingPercent = Math.round(100 - (2 * 100) / 6);

	return (
		<div id={t("glue.anchors.tech.id")} className="container-fluid">
			<CoTitle titles={t("glue.tech.title")} />
			<span className="text-normal">{t("glue.tech.intro")}</span>
			<div className="tokens-list">
				<div className="tokens-list__card" id="beta">
					<div className="tokens-list__card-header">
						<div className="tokens-list__card-header-title">
							<img loading="lazy" src={beta} alt="beta" />
							<span className="text-normal">BETA</span>
						</div>
						<span>{t("glue.tech.beta.dateRange")}</span>
					</div>
					<CoKPI
						title={t("glue.tech.beta.brandsAdded.title")}
						dato={t("glue.tech.beta.brandsAdded.value")}
						desc={t("glue.tech.beta.brandsAdded.desc")}
						imgs={[circLiverpool, circSuburbia, circPuerto]}
						imgSize="2.4rem"
						pos="left"
						color="#4D4D4D"
					/>
					<CoKPI
						title={t("glue.tech.beta.tokenizedColors.title")}
						dato={t("glue.tech.beta.tokenizedColors.value")}
						desc={t("glue.tech.beta.tokenizedColors.desc")}
						imgs={[colourToken1]}
						imgSize="10rem"
						pos="left"
						color="#4D4D4D"
					/>
				</div>
				<div className="tokens-list__card" id="release">
					<div className="tokens-list__card-header">
						<div className="tokens-list__card-header-title">
							<img loading="lazy" src={release} alt="release" />
							<span>Release</span>
						</div>
						<span>{t("glue.tech.release.dateRange")}</span>
					</div>
					<div className="tokens-list__card-kpis">
						<div className="tokens-list__card-kpis__column">
							<CoKPI
								title={t("glue.tech.release.brandsAdded.title")}
								dato={t("glue.tech.release.brandsAdded.value")}
								desc={t("glue.tech.release.brandsAdded.desc")}
								imgs={[circGAP, circPottery, circWest, circWilliam, circBanana, circToys, circPlus]}
								imgSize="2.4rem"
								pos="left"
								color="#4D4D4D"
							/>
							<CoKPI
								title={t("glue.tech.release.tokenizedColors.title")}
								dato={t("glue.tech.release.tokenizedColors.value")}
								desc={t("glue.tech.release.tokenizedColors.desc")}
								imgs={[colourToken2]}
								imgSize="10rem"
								pos="left"
								color="#4D4D4D"
							/>
						</div>
						<div className="tokens-list__card-kpis__column">
							<CoKPI
								title={t("glue.tech.release.fontsAdded.title")}
								dato={t("glue.tech.release.fontsAdded.value")}
								desc={t("glue.tech.release.fontsAdded.desc")}
								imgs={[null]}
								imgSize="2.4rem"
								pos="left"
								color="#4D4D4D"
							/>
							<CoKPI
								title={t("glue.tech.release.textDecorations.title")}
								dato={t("glue.tech.release.textDecorations.value")}
								desc={t("glue.tech.release.textDecorations.desc")}
								imgs={[null]}
								imgSize="2.4rem"
								pos="left"
								color="#4D4D4D"
							/>
							<CoKPI
								title={t("glue.tech.release.textSizes.title")}
								dato={t("glue.tech.release.textSizes.value")}
								desc={t("glue.tech.release.textSizes.desc")}
								imgs={[null]}
								imgSize="2.4rem"
								pos="left"
								color="#4D4D4D"
							/>
						</div>
					</div>
				</div>
			</div>
			<span className="text-normal">{t("glue.tech.improvementsIntro")}</span>
			<div className="kpis-list">
				<div className="kpis-list__card">
					<div className="kpis-list__card-header">
						<img loading="lazy" src={styleLib} alt="" />
						<span>{t("glue.tech.styleLib.label")}</span>
					</div>
					<div className="kpis-list__card-body">
						<CoKPI
							title={t("glue.tech.styleLib.designAtoms.title")}
							dato={t("glue.tech.styleLib.designAtoms.value")}
							desc={t("glue.tech.styleLib.designAtoms.desc")}
							imgs={[null]}
							imgSize="10rem"
							pos="center"
							color="#4D4D4D"
						/>
						<CoKPI
							title={t("glue.tech.styleLib.brandRegistry.title")}
							dato={t("glue.tech.styleLib.brandRegistry.value")}
							desc={t("glue.tech.styleLib.brandRegistry.desc")}
							imgs={[null]}
							imgSize="10rem"
							pos="center"
							color="#4D4D4D"
						/>
						<CoKPI
							title={t("glue.tech.styleLib.layouting.title")}
							dato={t("glue.tech.styleLib.layouting.value")}
							desc={t("glue.tech.styleLib.layouting.desc")}
							imgs={[null]}
							imgSize="10rem"
							pos="center"
							color="#4D4D4D"
						/>
					</div>
				</div>
				<img loading="lazy" src={arrow} alt="" />
				<div className="kpis-list__card">
					<div className="kpis-list__card-header">
						<img loading="lazy" src={varLib} alt="" />
						<span style={{ color: "#FF2079" }}>{t("glue.tech.varLib.label")}</span>
					</div>
					<div className="kpis-list__card-body">
						<CoKPI
							title={t("glue.tech.varLib.designAtoms.title")}
							dato={t("glue.tech.varLib.designAtoms.value")}
							desc={t("glue.tech.varLib.designAtoms.descTemplate", {
								percent: designAtomsPercent,
							})}
							imgs={[null]}
							imgSize="10rem"
							pos="center"
							color="#FF3C8A"
						/>
						<CoKPI
							title={t("glue.tech.varLib.brandRegistry.title")}
							dato={t("glue.tech.varLib.brandRegistry.value")}
							desc={t("glue.tech.varLib.brandRegistry.descTemplate", {
								percent: brandRegistryPercent,
							})}
							imgs={[null]}
							imgSize="10rem"
							pos="center"
							color="#FF3C8A"
						/>
						<CoKPI
							title={t("glue.tech.varLib.layouting.title")}
							dato={t("glue.tech.varLib.layouting.value")}
							desc={t("glue.tech.varLib.layouting.descTemplate", {
								percent: layoutingPercent,
							})}
							imgs={[null]}
							imgSize="10rem"
							pos="center"
							color="#FF3C8A"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CoTech;
