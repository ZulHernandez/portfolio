import { useContext } from "react";
import { MyContext } from "../../components/context/MyContext";

import perfil from "../../assets/imgs/home/perfil.png";

const CoHola = () => {
	const { language } = useContext(MyContext);

	var today = new Date();
	var year = today.getFullYear();
	var month = today.getMonth(); // Months are zero-based
	var diff = 0;

	if (month >= 10) {
		diff = year - 2016;
	} else {
		diff = year - 2017;
	}

	return (
		<div id={language == "ES" ? "hola" : "hello"} className="container-fluid">
			<div id="hola-head">
				<img src={perfil} alt="Saúl Ulises Hernández Cruz" />
				<div id="hola-head__text">
					<h2>{language == "ES" ? "Hola, yo soy" : "Hello, I'm"}</h2>
					<h1>Saúl Hernández</h1>
					<div id="hola-head__text__pointer">
						<div id="pd">Product Designer</div>
						<div id="point">•</div>
						<div id="sd">
							{language == "ES"
								? "Desarrollador de Software"
								: "Software Developer"}
						</div>
					</div>
				</div>
			</div>
			<div id="hola-text">
				{language == "ES" ? (
					<>
						<p>
							Soy un diseñador de experiencias e interfaces de usuario con{" "}
							<b>más de {diff} años de experiencia</b> transformando ideas en
							productos impactantes. He colaborado en proyectos innovadores
							dentro de <b>industrias como e-commerce y fintech</b>, adaptándome
							a distintos retos y enfoques.
						</p>
						<p>
							Me apasiona crear <b>sistemas de diseño</b> sólidos, optimizar{" "}
							<b>procesos complejos</b> y desarrollar{" "}
							<b>metodologías efectivas</b> que impulsen el éxito de los
							productos.
						</p>
						<p>
							También disfruto diseñando herramientas tecnológicas como{" "}
							<b>plug-ins</b> y soluciones personalizadas que potencian la
							productividad y el impacto del equipo.
						</p>
					</>
				) : (
					<>
						<p>
							An experience and user interface designer with{" "}
							<b>over {diff} years of experience</b> transforming ideas into
							impactful products. I have collaborated on innovative projects
							within <b>industries such as e-commerce and fintech</b>, adapting
							to different challenges and approaches.
						</p>
						<p>
							I am passionate about creating solid <b>design systems</b>,
							optimizing
							<b> complex processes</b>, and developing{" "}
							<b>effective methodologies</b> that drive product success.
						</p>
						<p>
							I also enjoy designing technological tools such as <b>plug-ins</b>{" "}
							and custom solutions that enhance team productivity and impact.
						</p>
					</>
				)}
			</div>
		</div>
	);
};

export default CoHola;
