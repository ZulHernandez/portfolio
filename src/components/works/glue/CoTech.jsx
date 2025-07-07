import { useContext } from "react";
import { MyContext } from "../../context/MyContext.js";

import CoTitle from "../../../components/general/CoTitle.jsx";
import CoKPI from "../../general/CoKPI.jsx";

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
	const { language } = useContext(MyContext);

	return (
		<div
			id={language === "ES" ? "tecnologias-adoptadas" : "technologies-used"}
			className="container-fluid"
		>
			<CoTitle
				titles={
					language === "ES" ? "Tecnologías adoptadas" : "Technologies Used"
				}
			/>
			<span className="text-normal">
				{language === "ES"
					? "Como parte de las actualizaciones que se vivieron en Figma, fue la integración de las Variables, lo que supuso un cambio en la forma de generar componentes y tokens dentro de sistema de diseño. Este proceso se llevo a cabo en dos fases, la beta y el primer release de la feature."
					: "As part of the updates in Figma, the integration of Variables was introduced, which represented a change in how components and tokens are generated within the design system. This process was carried out in two phases: the beta phase and the first release of the feature."}
			</span>
			<div className="tokens-list">
				<div className="tokens-list__card" id="beta">
					<div className="tokens-list__card-header">
						<div className="tokens-list__card-header-title">
							<img loading="lazy" src={beta} alt="beta" />
							<span className="text-normal">BETA</span>
						</div>
						<span>
							{language === "ES"
								? "jun 2023 - feb 2025"
								: "jun 2023 - feb 2025"}
						</span>
					</div>
					<CoKPI
						title={language === "ES" ? "Marcas agregadas" : "Brands added"}
						dato={language === "ES" ? "3 marcas" : "3 brands"}
						desc={
							language === "ES"
								? "(Representando las 3 principales variaciones de marca: Liverpool, Suburbia y El Puerto de Liverpool)"
								: "(Representing the 3 main brand variations: Liverpool, Suburbia, and El Puerto de Liverpool)"
						}
						imgs={[circLiverpool, circSuburbia, circPuerto]}
						imgSize="2.4rem"
						pos="left"
						color="#4D4D4D"
					/>
					<CoKPI
						title={
							language === "ES" ? "Colores tokenizados" : "Tokenized colors"
						}
						dato={language === "ES" ? "139 colores" : "139 colours"}
						desc={
							language === "ES"
								? "(Normalizados al estándar de MD3 sustituyendo 3 UIKit a 3 modos organizados de variables)"
								: "(Normalized to the MD3 standard replacing 3 UIKit with 3 organized variable modes)"
						}
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
						<span>
							{language === "ES"
								? "feb 2025 - actualidad"
								: "feb 2025 - present"}
						</span>
					</div>
					<div className="tokens-list__card-kpis">
						<div className="tokens-list__card-kpis__column">
							<CoKPI
								title={language === "ES" ? "Marcas agregadas" : "Brands added"}
								dato={language === "ES" ? "+13 marcas" : "+13 brands"}
								desc={
									language === "ES"
										? "(Se agregaron 13 modos nuevos evitando así la creación de 8 UiKits)"
										: "(13 new modes were added, thus avoiding the creation of 8 UiKits)"
								}
								imgs={[
									circGAP,
									circPottery,
									circWest,
									circWilliam,
									circBanana,
									circToys,
									circPlus,
								]}
								imgSize="2.4rem"
								pos="left"
								color="#4D4D4D"
							/>
							<CoKPI
								title={
									language === "ES"
										? "Colores tokenizados"
										: "Tokenized colours"
								}
								dato={language === "ES" ? "+275  colores" : "+275 colours"}
								desc={
									language === "ES"
										? "(Se agregaron 275 colores más agregando modificadores a colores auxiliares)"
										: "(275 new colours were added by adding modifiers to auxiliary colours)"
								}
								imgs={[colourToken2]}
								imgSize="10rem"
								pos="left"
								color="#4D4D4D"
							/>
						</div>
						<div className="tokens-list__card-kpis__column">
							<CoKPI
								title={
									language === "ES" ? "Tipografías agregadas" : "Fonts added"
								}
								dato={language === "ES" ? "20 familias" : "20 families"}
								desc={
									language === "ES"
										? "(Agregadas y asociadas a las marcas)"
										: "(Added and associated with the brands)"
								}
								imgs={[null]}
								imgSize="2.4rem"
								pos="left"
								color="#4D4D4D"
							/>
							<CoKPI
								title={
									language === "ES"
										? "Decoraciones de texto"
										: "Text decorations"
								}
								dato={language === "ES" ? "8 estilos" : "8 styles"}
								desc={
									language === "ES"
										? "(Como base para la aplicación de modos y variables a textos en figma)"
										: "(As a basis for applying modes and variables to text in Figma)"
								}
								imgs={[null]}
								imgSize="2.4rem"
								pos="left"
								color="#4D4D4D"
							/>
							<CoKPI
								title={language === "ES" ? "Tamaños de texto" : "Text sizes"}
								dato={language === "ES" ? "18 tamaños" : "18 sizes"}
								desc={
									language === "ES"
										? "(Basados en rem y normalizados para alta legibilidad)"
										: "(Based on rem and normalized for high readability)"
								}
								imgs={[null]}
								imgSize="2.4rem"
								pos="left"
								color="#4D4D4D"
							/>
						</div>
					</div>
				</div>
			</div>
			<span className="text-normal">
				{language === "ES"
					? "Desde el momento de implementación hasta el día hoy se pudieron medir las siguientes mejoras:"
					: "Since the implementation, the following improvements have been measured:"}
			</span>
			<div className="kpis-list">
				<div className="kpis-list__card">
					<div className="kpis-list__card-header">
						<img loading="lazy" src={styleLib} alt="" />
						<span>
							{language === "ES"
								? "Libreria basada en estilos"
								: "Style-based library"}
						</span>
					</div>
					<div className="kpis-list__card-body">
						<CoKPI
							title={
								language === "ES"
									? "Átomos de diseño"
									: "Design atoms"
							}
							dato="10 kits"
							desc={
								language === "ES"
									? "(Se tenían uno por marca)"
									: "(One was created for each brand)"
							}
							imgs={[null]}
							imgSize="10rem"
							pos="center"
							color="#4D4D4D"
						/>
						<CoKPI
							title={
								language === "ES"
									? "Registro de marca"
									: "Brand registry"
							}
							dato="2 hrs"
							desc={
								language === "ES"
									? "(En generar los átomos de una nueva marca)"
									: "(For generating the atoms of a new brand)"
							}
							imgs={[null]}
							imgSize="10rem"
							pos="center"
							color="#4D4D4D"
						/>
						<CoKPI
							title={
								language === "ES"
									? "Maquetado"
									: "Layouting"
							}
							dato={
								language === "ES"
									? "6 semanas"
									: "6 weeks"
							}
							desc={
								language === "ES"
									? "(En crear un nuevo multisitio)"
									: "(For creating a new multisite)"
							}
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
						<span style={{ color: "#FF2079" }}>
							{language === "ES"
								? "Libreria basada en variables"
								: "Variable-based library"}
						</span>
					</div>
					<div className="kpis-list__card-body">
						<CoKPI
							title={
								language === "ES"
									? "Átomos de diseño"
									: "Design atoms"
							}
							dato="2 kits"
							desc={
								language === "ES"
									? "(Reduce la complejidad de mantenimiento en un " + (100-(2*100/10)) + "%)"
									: "(Reduces maintenance complexity by " + (100-(2*100/10)) + "%)"
							}
							imgs={[null]}
							imgSize="10rem"
							pos="center"
							color="#FF3C8A"
						/>
						<CoKPI
							title={
								language === "ES"
									? "Registro de marca"
									: "Brand registry"
							}
							dato="30 min"
							desc={
								language === "ES"
									? "(Se reduce el tiempo en un " + (100-(30*100/120)) + "%)"
									: "(Se reduce el tiempo en un " + (100-(30*100/120)) + "%)"
							}
							imgs={[null]}
							imgSize="10rem"
							pos="center"
							color="#FF3C8A"
						/>
						<CoKPI
							title={
								language === "ES"
									? "Maquetado"
									: "Layouting"
							}
							dato={
								language === "ES"
									? "2 semanas"
									: "2 weeks"
							}
							desc={
								language === "ES"
									? "(Se reduce el tiempo en un " + (Math.round(100-(2*100/6))) + "%)"
									: "(Se reduce el tiempo en un " + (Math.round(100-(2*100/6))) + "%)"
							}
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
