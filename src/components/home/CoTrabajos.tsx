import CoTitle from "../general/CoTitle";
import CoBtn from "../general/CoBtn";
import CoWorkList from "../general/CoWorkList";
import useScreenSize from "../context/useScreenSize";
import useWorksData from "../context/useWorksData";
import { toTrabajoItem } from "../../utils/worksData";
import { resolveLang } from "../../utils/experienceData";
import { useTranslation } from "react-i18next";

const CoTrabajos = () => {
	const { t, i18n } = useTranslation();
	const { width } = useScreenSize();
	const { data } = useWorksData();
	const lang = resolveLang(i18n.language);
	// Antes eran los primeros 4 de works.json (.slice(0,4)) — con el campo
	// `featured` en cada work, cuáles se destacan en Home se controla editando
	// ese JSON, sin tocar este componente.
	const destacados = (data?.works ?? []).filter((work) => work.featured).map((work) => toTrabajoItem(work, lang));

	return (
		<div id={t("home.anchors.trabajos.id")} className="container-fluid">
			<CoTitle titles={t("homeWorks.title")} />
			{destacados.length > 0 && (
				<CoWorkList trabajos={destacados} width={width} widthOffsetRem={6.5} />
			)}
			<div className="work__cta">
				<CoBtn type="secondary" text={t("homeWorks.cta")} link="/works" />
			</div>
		</div>
	);
};

export default CoTrabajos;
