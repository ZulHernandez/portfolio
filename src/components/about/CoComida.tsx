import { useTranslation } from "react-i18next";

import apio from "../../assets/imgs/about/food/apio.svg";
import tomate from "../../assets/imgs/about/food/tomate.svg";
import hierbabuena from "../../assets/imgs/about/food/hierbabuena.svg";
import chile from "../../assets/imgs/about/food/chile.svg";
import naranja from "../../assets/imgs/about/food/naranja.svg";
import limon from "../../assets/imgs/about/food/limon.svg";
import sal from "../../assets/imgs/about/food/sal.svg";

// Las cantidades no se traducen (son las mismas en cualquier idioma); solo el
// texto de cada renglón viene de la traducción, alineado por índice con
// about.food.recipeIngredients / about.food.recipeSteps en el JSON.
const ingredienteCantidades = ["1", "2", "3", "1", "1", "1", "-", "-", "-"];
const stepCantidades = ["1", "2", "3", "4", "5"];

const CoComida = () => {
	const { t } = useTranslation();

	const ingredientes = [
		{ icon: apio, text: t("about.food.ingredients.celery") },
		{ icon: tomate, text: t("about.food.ingredients.tomato") },
		{ icon: hierbabuena, text: t("about.food.ingredients.mint") },
		{ icon: chile, text: t("about.food.ingredients.serranoPepper") },
		{ icon: naranja, text: t("about.food.ingredients.orange") },
		{ icon: limon, text: t("about.food.ingredients.lemon") },
		{ icon: sal, text: t("about.food.ingredients.salt") },
	];

	const recipeIngredients = t("about.food.recipeIngredients", { returnObjects: true }) as string[];
	const recipeSteps = t("about.food.recipeSteps", { returnObjects: true }) as string[];

	return (
		<div className="tab-body">
			<div className="tab-content">
				<div className="tab-content__info">
					<div className="tab-content__info-text">
						<h2>{t("about.food.title")}</h2>
						<span className="text-normal">{t("about.food.p1")}</span>
						<div className="tab-content__info-text__list">
							{ingredientes.map((ingrediente, index) => (
								<div key={index} className="tab-content__info-text__list-item">
									<img loading="lazy" src={ingrediente.icon} alt={ingrediente.text} />
								</div>
							))}
						</div>
						<br />
						<br />
						<center>
							<div className="receipe">
								<div className="receipe__ingredients">
									<h3>{t("about.food.ingredientsHeading")}</h3>
									<div className="receipe__ingredients-list">
										{recipeIngredients.map((text, index) => (
											<div className="receipe__ingredients-list-item" key={index}>
												<span className="text-normal" style={{ width: "min-content" }}>
													{ingredienteCantidades[index]}
												</span>
												<span className="text-normal" style={{ paddingLeft: "2rem" }}>
													{text}
												</span>
											</div>
										))}
									</div>
								</div>
								<div className="receipe__instructions">
									<h3>{t("about.food.instructionsHeading")}</h3>
									<div className="receipe__instructions-list">
										{recipeSteps.map((text, index) => (
											<div className="receipe__instructions-list-item" key={index}>
												<span className="text-normal" style={{ width: "min-content" }}>
													{stepCantidades[index]}
												</span>
												<span className="text-normal" style={{ paddingLeft: "2rem" }}>
													{text}
												</span>
											</div>
										))}
									</div>
								</div>
							</div>
						</center>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CoComida;
