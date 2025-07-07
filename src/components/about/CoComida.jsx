import { useContext} from "react";
import { MyContext } from "../context/MyContext";

import apio from "../../assets/imgs/about/food/apio.svg";
import tomate from "../../assets/imgs/about/food/tomate.svg";
import hierbabuena from "../../assets/imgs/about/food/hierbabuena.svg";
import chile from "../../assets/imgs/about/food/chile.svg";
import naranja from "../../assets/imgs/about/food/naranja.svg";
import limon from "../../assets/imgs/about/food/limon.svg";
import sal from "../../assets/imgs/about/food/sal.svg";

const CoComida = () => {
	const { language } = useContext(MyContext);

	const ingredientes = [
		{
			icon: apio,
			text: language == "ES" ? "Apio" : "Celery",
		},
		{
			icon: tomate,
			text: language == "ES" ? "Tomate" : "Tomato",
		},
		{
			icon: hierbabuena,
			text: language == "ES" ? "Hierbabuena" : "Mint",
		},
		{
			icon: chile,
			text: language == "ES" ? "Chile serrano" : "Serrano pepper",
		},
		{
			icon: naranja,
			text: language == "ES" ? "Naranja" : "Orange",
		},
		{
			icon: limon,
			text: language == "ES" ? "Limón" : "Lemon",
		},
		{
			icon: sal,
			text: language == "ES" ? "Sal" : "Salt",
		},
	];

	const ingredienteItems = [
		{
			cantidad: "1",
			text: language == "ES" ? "Rama de apio" : "Celery stalk",
		},
		{
			cantidad: "2",
			text:
				language == "ES"
					? "Tomates (Jitomate verde)"
					: "Tomatoes (Green tomato)",
		},
		{
			cantidad: "3",
			text: language == "ES" ? "Hojas de hierbabuena" : "Mint leaves",
		},
		{
			cantidad: "1",
			text: language == "ES" ? "Chile serrano" : "Serrano peppers",
		},
		{
			cantidad: "1",
			text: language == "ES" ? "Naranja" : "Orange",
		},
		{
			cantidad: "1",
			text:
				language == "ES" ? "Limón verde sin semilla" : "Seedless green lemon",
		},
		{
			cantidad: "-",
			text: language == "ES" ? "Sal" : "Salt",
		},
		{
			cantidad: "-",
			text: language == "ES" ? "Oregano" : "Oregano",
		},
		{
			cantidad: "-",
			text: language == "ES" ? "Agua" : "Water",
		},
	];

	const steps = [
		{
			cantidad: "1",
			text:
				language == "ES"
					? "Picamos la rama de apio, los tomates, las hojas de hierbabuena y el chile serrano."
					: "Chop the celery stalk, tomatoes, mint leaves, and serrano pepper.",
		},
		{
			cantidad: "2",
			text:
				language == "ES"
					? "Exprimimos el jugo del limón y el de naranja, reservamos."
					: "Juice the lemon and orange, set aside.",
		},
		{
			cantidad: "3",
			text:
				language == "ES"
					? "Molcajeteamos o procesamos con la licuadora y agregamos la sal y el orégano al gusto."
					: "Grind in a mortar or blender and add salt and oregano to taste.",
		},
		{
			cantidad: "4",
			text:
				language == "ES"
					? "Si lo requiere la licuadora o tu en el molcajete puedes agregar agua poco a poco hasta lograr la consistencia que más te guste, yo la prefiero un poco más pastosa."
					: "If the blender requires it or you in the mortar, you can add water little by little until you achieve the consistency you like best; I prefer it a little thicker.",
		},
		{
			cantidad: "5",
			text:
				language == "ES"
					? "Acompaña con totopos o para unos taquitos."
					: "Serve with tortilla chips or tacos.",
		},
	];

	return (
		<div className="tab-body">
			<div className="tab-content">
				<div className="tab-content__info">
					<div className="tab-content__info-text">
						<h2>
							{language == "ES"
								? "Comida asiática, cocinar y una receta "
								: "Asian food, cooking, and a recipe"}
						</h2>
						<span className="text-normal">
							{language == "ES"
								? "Me encanta comer pero también amo cocinar, de las cosas que mas suelo cocinar son comida asiática desde platillos salados como ramen, giozas u onigiris como también platillos dulces como el helado de matcha. La comida mexicana obviamente me encanta, hago una birria espectacular y justo les dejare una reseta de salsa verde cruda para que puedan comer con su familia."
								: "I love eating but I also love cooking. Some of the things I cook the most are Asian food, from savory dishes like ramen, gyozas, or onigiris to sweet dishes like matcha ice cream. I obviously love Mexican food; I make a spectacular birria, and I will leave you a recipe for raw green salsa so you can enjoy it with your family."}
						</span>
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
									<h3>{language == "ES" ? "Ingredientes" : "Ingredients"}</h3>
									<div className="receipe__ingredients-list">
										{ingredienteItems.map((item, index) => (
											<div
												className="receipe__ingredients-list-item"
												key={index}
											>
												<span
													className="text-normal"
													style={{ width: "min-content" }}
												>
													{item.cantidad}
												</span>
												<span
													className="text-normal"
													style={{ paddingLeft: "2rem" }}
												>
													{item.text}
												</span>
											</div>
										))}
									</div>
								</div>
								<div className="receipe__instructions">
									<h3>{language == "ES" ? "Instrucciones" : "Instructions"}</h3>
									<div className="receipe__instructions-list">
										{steps.map((item, index) => (
											<div
												className="receipe__instructions-list-item"
												key={index}
											>
												<span
													className="text-normal"
													style={{ width: "min-content" }}
												>
													{item.cantidad}
												</span>
												<span
													className="text-normal"
													style={{ paddingLeft: "2rem" }}
												>
													{item.text}
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