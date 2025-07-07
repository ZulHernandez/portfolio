import { useContext, useState } from "react";
import { MyContext } from "../context/MyContext";

import CoTitle from "../general/CoTitle";
import CoBtn from "../general/CoBtn";

import close from "../../assets/imgs/vectores/close.svg";

import useScreenSize from "../context/useScreenSize";
import varTrabajos from "../context/varTrabajos";

const CoTrabajos = () => {
	const { language } = useContext(MyContext);
	const { width } = useScreenSize();
	const { trabajos } = varTrabajos();

	let tags = trabajos.map((trabajo) => trabajo.tags[language == "ES" ? 0 : 1]);
	let tagsUnicos = [...new Set(tags.flat())];
	tagsUnicos = tagsUnicos.sort();

	const [filtro, setFiltro] = useState("");

	//console.log(filtro);

	const [destacados, setDestacados] = useState(() => {
		if (filtro === "") {
			return trabajos;
		} else {
			return trabajos.filter((trabajo) =>
				trabajo.tags[language == "ES" ? 0 : 1].includes(filtro)
			);
		}
	});

	//console.table(destacados);

	return (
		<div
			id={language == "ES" ? "mis-trabajos" : "my-works"}
			className="container-fluid"
		>
			<CoTitle titles={language == "ES" ? "Mis trabajos" : "My works"} />
			<span className="text-normal">
				{language == "ES"
					? "Elige aquello que te llame mas la atencion:"
					: "Choose what catches your attention:"}
			</span>
			<div className="tags-list">
				{tagsUnicos.map((tag, index) => (
					<div
						onClick={() => {
							setFiltro(filtro == tag ? "" : tag);
							console.log(filtro);
							setDestacados(
								filtro == tag
									? trabajos
									: trabajos.filter((trabajo) =>
											trabajo.tags[language == "ES" ? 0 : 1].includes(tag)
									  )
							);
						}}
						className={
							tag == filtro ? "tags-list__tag active" : "tags-list__tag"
						}
						key={index}
					>
						<span>{tag}</span>
						<img src={close} alt="Cerrar" />
					</div>
				))}
			</div>
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
										: "calc(50% - 7.5rem)",
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
							<video
								className="gif-cover"
								src={destacado.covergif}
								autoPlay
								loop
								muted
								playsInline
								controls={false}
								disablePictureInPicture
								disableRemotePlayback
								controlsList="nodownload"
								poster={destacado.cover}
								alt={language == "ES" ? destacado.title[0] : destacado.title[1]}
								style={{
									width:
										width <= 800 ? "100%" : index % 3 == 0 ? "40%" : "100%",
									borderRadius: "8px",
									objectFit: "cover",
								}}
							/>
							<div className="work-card__body">
								<div className="work-card__body-info">
									<div className="work-card__body-info-tags">
										{destacado.tags[language == "ES" ? 0 : 1].map(
											(tag, tagIndex) => (
												<span
													style={{
														backgroundColor:
															tag == filtro ? "#ff2079" : "#333333",
													}}
													key={tagIndex}
												>
													{tag}
												</span>
											)
										)}
									</div>
									<div className="work-card__body-info-head">
										<br />
										<h3>{destacado.title[language == "ES" ? 0 : 1]}</h3>
										<span className="text-normal">
											{destacado.des[language == "ES" ? 0 : 1]}
										</span>
									</div>
								</div>
								<div className="work-card__body-foot">
									<div className="info">
										<span>{destacado.date[language == "ES" ? 0 : 1]}</span>
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
											<span className="text-normal">
												{destacado.comp[language == "ES" ? 0 : 1]}
											</span>
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
					//) : null
				)}
			</div>
		</div>
	);
};

export default CoTrabajos;
