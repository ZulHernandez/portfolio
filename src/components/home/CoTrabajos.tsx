import CoTitle from "../general/CoTitle";
import CoBtn from "../general/CoBtn";
import CoWorkList from "../general/CoWorkList";
import useScreenSize from "../context/useScreenSize";
import varTrabajos from "../context/varTrabajos";
import { useTranslation } from "react-i18next";

const CoTrabajos = () => {
	const { t } = useTranslation();
	const { width } = useScreenSize();
	const { trabajos } = varTrabajos();
	const destacados = trabajos.slice(0, 4);

	return (
		<div id={t("home.anchors.trabajos.id")} className="container-fluid">
			<CoTitle titles={t("homeWorks.title")} />
			<CoWorkList trabajos={destacados} width={width} widthOffsetRem={6.5} />
			<div className="work__cta">
				<CoBtn type="secondary" text={t("homeWorks.cta")} link="/works" />
			</div>
		</div>
	);
};

export default CoTrabajos;
