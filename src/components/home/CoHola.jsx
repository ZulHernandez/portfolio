import { useContext } from "react";
import { MyContext } from "../../components/context/MyContext";
import dayjs from "dayjs";

import perfil from "../../assets/imgs/home/perfil.webp";

const CoHola = () => {
	const { language } = useContext(MyContext);

	let startDate = dayjs("2016-04-01");
	let currentDate = dayjs();
	let diff = currentDate.diff(startDate, "year");
	return (
		<div id={language == "ES" ? "hola" : "hello"} className="container-fluid">
			<div id="hola-head">
				<img loading="lazy" src={perfil} alt="Saúl Ulises Hernández Cruz" />
				<div id="hola-head__text">
					<h2>{language == "ES" ? "Hola, yo soy" : "Hello, I'm"}</h2>
					<h1>Saúl Hernández</h1>
					<div id="pd" style={{ width: "100%" }}>
						Product Design Chapter Lead
					</div>
					{/* <div id="hola-head__text__pointer">
						<div id="pd">Product Design Chapter Lead</div>
						<div id="point">•</div>
						<div id="sd">
							{language == "ES"
								? "Desarrollador de Software"
								: "Software Developer"}
						</div>
					</div> */}
				</div>
			</div>
			<div id="hola-text">
				{language == "ES" ? (
					<>
						<p>
							Product Design Chapter Lead con <b>{diff} años de experiencia</b>.
						</p>
						<br />
						<p>
							Me especializo en el desarrollo de <b>sistemas de diseño escalables</b> y
							la automatización de flujos de trabajo para equipos de producto.
							He trabajado en <b>sectores de e-commerce y fintech</b>, enfocándome en
							la intersección entre diseño, metodologías ágiles y eficiencia
							técnica.
						</p>
						<br />
						<p>
							Mi enfoque actual se centra en estructurar <b>sistemas desacoplados</b> y
							<b> soluciones personalizadas</b> que optimizan la <b>producción visual</b> y
							<b> funcional</b>.
						</p>
					</>
				) : (
					<>
						<p>
							Product Design Chapter Lead with <b>{diff} years of experience</b>.
						</p>
						<br />
						<p>
							I specialize in developing <b>scalable design systems</b> and automating
							<b> workflows</b> for product teams. I've worked in <b>e-commerce and fintech
							sectors</b>, focusing on the intersection of design, agile methodologies,
							and technical efficiency.
						</p>
						<br />
						<p>
							My current focus is on structuring <b>decoupled systems</b> and
							<b> customized solutions</b> that optimize <b>visual</b> and <b>functional production</b>.
						</p>
					</>
				)}
			</div>
		</div>
	);
};

export default CoHola;
