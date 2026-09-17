import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import CoTitle from "../general/CoTitle";
import CoWorkList from "../general/CoWorkList";

import close from "../../assets/imgs/vectores/close.svg";

import useScreenSize from "../context/useScreenSize";
import useWorksData from "../context/useWorksData";
import { toTrabajoItem } from "../../utils/worksData";
import { resolveLang } from "../../utils/experienceData";

const CoTrabajos = () => {
	const { t, i18n } = useTranslation();
	const { width } = useScreenSize();
	const { data } = useWorksData();
	const lang = resolveLang(i18n.language);

	// Ya resueltos al idioma activo — se recalcula solo cuando cambian los
	// datos o el idioma, no en cada render (toTrabajoItem crea objetos nuevos).
	const trabajos = useMemo(
		() => (data?.works ?? []).map((work) => toTrabajoItem(work, lang)),
		[data, lang]
	);

	const tagsUnicos = useMemo(
		() => [...new Set(trabajos.flatMap((trabajo) => trabajo.tags))].sort(),
		[trabajos]
	);

	const [filtro, setFiltro] = useState("");

	const destacados = useMemo(() => {
		if (filtro === "") return trabajos;
		return trabajos.filter((trabajo) => trabajo.tags.includes(filtro));
	}, [filtro, trabajos]);

	return (
		<div id={t("works.id")} className="container-fluid">
			<CoTitle titles={t("works.heading")} />
			<span className="text-normal">{t("works.chooseTag")}</span>
			<div className="tags-list">
				{tagsUnicos.map((tag, index) => (
					<button
						type="button"
						aria-pressed={tag == filtro}
						onClick={() => setFiltro(filtro === tag ? "" : tag)}
						className={
							tag == filtro ? "tags-list__tag active" : "tags-list__tag"
						}
						key={index}
						style={{ background: tag == filtro ? undefined : "none" }}
					>
						<span>{tag}</span>
						<img loading="lazy" src={close} alt={t("works.closeAlt")} />
					</button>
				))}
			</div>
			<CoWorkList
				trabajos={destacados}
				width={width}
				activeTag={filtro}
				widthOffsetRem={7.5}
			/>
		</div>
	);
};

export default CoTrabajos;
