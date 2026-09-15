import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGUAGES } from "../../utils/languages";

// Antes este mismo bloque (EN | ES a mano) estaba pegado 3 veces (dos en
// CoNav — versión de escritorio y móvil — y una en CoFooter). Agregar un
// idioma significaba copiar el bloque otra vez en los 3 lugares. Ahora es un
// solo componente que recorre SUPPORTED_LANGUAGES.
const CoLanguageSwitch = () => {
	const { i18n } = useTranslation();

	return (
		<div className="nav-header__options">
			{SUPPORTED_LANGUAGES.map((lang, index) => (
				<Fragment key={lang.code}>
					{index > 0 && <span style={{ textDecoration: "none" }}>&nbsp;|&nbsp;</span>}
					<button
						type="button"
						className={i18n.language === lang.code ? "active" : ""}
						aria-pressed={i18n.language === lang.code}
						onClick={() => i18n.changeLanguage(lang.code)}
						style={{
							background: "none",
							border: "none",
							padding: 0,
							cursor: "pointer",
						}}
					>
						{lang.label}
					</button>
				</Fragment>
			))}
		</div>
	);
};

export default CoLanguageSwitch;
