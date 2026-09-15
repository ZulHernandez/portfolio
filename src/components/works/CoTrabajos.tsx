import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import CoTitle from "../general/CoTitle";
import CoWorkList from "../general/CoWorkList";

import close from "../../assets/imgs/vectores/close.svg";

import useScreenSize from "../context/useScreenSize";
import varTrabajos from "../context/varTrabajos";

const CoTrabajos = () => {
	const { t, i18n } = useTranslation();
	const { width } = useScreenSize();
	const { trabajos } = varTrabajos();

	const tags = trabajos.map(
		(trabajo) =>
			t(`works.items.${trabajo.slug}.tags`, { returnObjects: true }) as string[]
	);
	const tagsUnicos = [...new Set(tags.flat())].sort();

	const [filtro, setFiltro] = useState("");

	// Antes esto era un segundo useState ("destacados") actualizado a mano en
	// cada click, lo que lo dejaba desincronizado del idioma (cambiar de EN a
	// ES con un filtro activo mostraba resultados del idioma anterior).
	// Al derivarlo con useMemo siempre queda consistente con filtro + idioma.
	// Depende de `i18n.language` (no de `t`, que es una función nueva cada
	// render) para recalcular solo cuando el idioma realmente cambia.
	const destacados = useMemo(() => {
		if (filtro === "") return trabajos;
		return trabajos.filter((trabajo) =>
			(t(`works.items.${trabajo.slug}.tags`, { returnObjects: true }) as string[]).includes(filtro)
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [filtro, trabajos, i18n.language]);

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
