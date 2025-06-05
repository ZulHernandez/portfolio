import { useContext } from "react";
import { MyContext } from "../context/MyContext";

import CoTitle from "../general/CoTitle";
import CoBtn from "../general/CoBtn";
import useScreenSize from "../context/useScreenSize";
import varTrabajos from "../context/varTrabajos";

const CoTrabajos = () => {
	const { language } = useContext(MyContext);
	const { width } = useScreenSize();
	const { trabajos } = varTrabajos();
	let destacados = trabajos.splice(0, 4);

	return (
		<div
			id={language == "ES" ? "trabajos" : "works"}
			className="container-fluid"
		>
			<CoTitle
				titles={
					language == "ES" ? "Mis trabajos destacados" : "My featured works"
				}
			/>
			<div
				className="work-list"
				style={{
					flexDirection: width <= 800 ? "column" : "row",
					flexWrap: width <= 800 ? "nowrap" : "wrap",
				}}
			>
				{destacados.map(
					(destacado, index) => (
						//index % 3 === 0 ? (
						<div
							className="work-card"
							key={index}
							style={{
								flexDirection:
									width <= 800 ? "column" : index % 3 == 0 ? "row" : "column",
								width:
									width <= 800
										? "calc(100% - 5rem)"
										: index % 3 === 0
										? "100%"
										: "calc(50% - 5.5rem)",
							}}
						>
							<img
								className="img-cover"
								src={destacado.cover}
								alt={language == "ES" ? destacado.title[0] : destacado.title[1]}
								style={{
									width:
										width <= 800 ? "100%" : index % 3 == 0 ? "40%" : "100%",
								}}
							/>
							<img
								className="gif-cover"
								src={destacado.covergif}
								alt={language == "ES" ? destacado.title[0] : destacado.title[1]}
								style={{
									width:
										width <= 800 ? "100%" : index % 3 == 0 ? "40%" : "100%",
								}}
							/>
							<div className="work-card__body">
								<div className="work-card__body-info">
									<div className="work-card__body-info-tags">
										{destacado.tags[language == "ES" ? 0 : 1].map(
											(tag, tagIndex) => (
												<span key={tagIndex}>{tag}</span>
											)
										)}
									</div>
									<div className="work-card__body-info-head">
										<h3>{destacado.title[language == "ES" ? 0 : 1]}</h3>
										<span className="text-normal">{destacado.des[language == "ES" ? 0 : 1]}</span>
									</div>
								</div>
								<div className="work-card__body-foot">
									<div className="info">
										<span className="info-date">{destacado.date[language == "ES" ? 0 : 1]}</span>
										<div className="info__comp">
											<div className="info__comp-imgs">
												{destacado.logo.map((logo, logoIndex) => (
													<img
														key={logoIndex}
														src={logo}
														alt={destacado.comp[language == "ES" ? 0 : 1]}
													/>
												))}
											</div>
											<span className="text-normal">{destacado.comp[language == "ES" ? 0 : 1]}</span>
										</div>
									</div>
									{destacado.link ? (
										<CoBtn
											type="primary"
											text={null}
											link={`/works/${destacado.link}`}
										/>
									) : null}
								</div>
							</div>
						</div>
					)
				)}
			</div>
			<div className="work__cta">
				<CoBtn
					type="secondary"
					text={language == "ES" ? "Conoce más trabajos" : "See my other works"}
					link="/works"
				/>
			</div>
		</div>
	);
};

export default CoTrabajos;
