import { useContext, useState, useEffect } from "react";
import { NavigationContext } from "../components/context/NavigationContext";
import { useTranslation } from "react-i18next";

import { useLocation } from "react-router-dom";
import useScreenSize from "../components/context/useScreenSize";

import CoBtn from "../components/general/CoBtn";
import CoSeo from "../components/general/CoSeo";
import { ACCENT_COLORS } from "../utils/accentColors";

// Antes cada uno de los 4 puntos donde se pinta la categoría activa repetía
// la misma cadena de ternarios con los hex a mano (4 veces en este archivo).
const RESUME_CATEGORY_COLORS = [
	ACCENT_COLORS.pink,
	ACCENT_COLORS.blue,
	ACCENT_COLORS.purple,
	ACCENT_COLORS.orange,
];

// Nombres propios (empresas/instituciones) no se traducen; viven aquí y se
// cruzan con el texto traducido de resume.experience.items / resume.projects.items
// / resume.infos.education (mismo orden = mismo índice/slug).
const EXPERIENCE_SLUGS = ["galileo", "liverpool", "grupoPm", "marsoft"] as const;
const EXPERIENCE_COMPANIES: Record<(typeof EXPERIENCE_SLUGS)[number], string> = {
	galileo: "Galileo | Ben&Frank - Bombavista",
	liverpool: "El Puerto de Liverpool",
	grupoPm: "Grupo People Media",
	marsoft: "Marsoft",
};

const PROJECT_SLUGS = ["paramo", "uamAzcapotzalco", "hultzPrice"] as const;
const PROJECT_COMPANIES: Record<(typeof PROJECT_SLUGS)[number], string> = {
	paramo: "El Páramo de las bestias",
	uamAzcapotzalco: "UAM Azcapotzalco",
	hultzPrice: "Hultz Price at UAM",
};

// Instituciones educativas, mismo orden que resume.infos.education.bullets.
const EDUCATION_SUBTEXTS = [
	"Universidad Autónoma Metropolitana",
	"Instituto Politécnico Nacional",
];

const INFO_SLUGS = ["portfolios", "contact", "education", "languages"] as const;

/* const generatePDF = (language) => {
	const printableElement = document.querySelector(".printable");
	printableElement.style.display = "block"; // A4 width

	if (!printableElement) {
		console.error("No se encontró el elemento con la clase 'printable'.");
		return;
	}

	html2canvas(printableElement, {
		scale: 2,
		windowWidth: printableElement.scrollWidth,
		windowHeight: printableElement.scrollHeight,
	}).then((canvas) => {
		const imgData = canvas.toDataURL("image/png");
		const pdf = new jsPDF("p", "mm", "a4");

		const pdfWidth = pdf.internal.pageSize.getWidth();
		const imgWidth = pdfWidth;
		const imgHeight = (canvas.height * imgWidth) / canvas.width;

		pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
		pdf.save(language == "ES" ? "CV-SaulHdz.pdf" : "Resume-SaulHdz.pdf");
	});

	printableElement.style.display = "none"; // A4 width
}; */

interface ResumeItem {
	empresa: string;
	rol: string;
	fecha: string;
	bullets: string[][];
	location: string;
}

interface CoCardResumeProps {
	experiencia: ResumeItem;
	filtroResumen: number;
}

const CoCardResume = ({ experiencia, filtroResumen }: CoCardResumeProps) => {
	return (
		<div className="resume__sheet-content__body-card-experiencia">
			<h4>
				{experiencia.empresa} - {experiencia.rol}
			</h4>
			<span className="resume__sheet-content__body-card-experiencia__ubicacion">
				{experiencia.location} | {experiencia.fecha}
			</span>
			<ul>
				{experiencia.bullets[filtroResumen].map((bullet, index) => (
					<li key={index}>{bullet}</li>
				))}
			</ul>
		</div>
	);
};

interface InfoBullet {
	link: string;
	text: string;
	subtext?: string;
}

interface InfoData {
	title: string;
	bullets: InfoBullet[];
}

interface ExperienceItemData {
	rol: string;
	fecha: string;
	bullets: string[][];
}

// El currículo necesita existir dos veces en el DOM al mismo tiempo: una copia
// oculta en pantalla (.printable) que solo se muestra vía @media print a
// tamaño A4 real, y una copia visible en pantalla escalada con `zoom` para
// caber en cualquier viewport (ver style.scss ~L2499-2533). Antes ambas
// copias eran ~200 líneas de JSX copiadas a mano; ahora es un solo componente
// que se renderiza dos veces con distinto wrapper.
const ResumeSheet = ({ filtroResumen }: { filtroResumen: number }) => {
	const { t } = useTranslation();

	const location = t("resume.labels.location");

	const infos = INFO_SLUGS.map((slug) => {
		const data = t(`resume.infos.${slug}`, { returnObjects: true }) as InfoData;
		const bullets =
			slug === "education"
				? data.bullets.map((bullet, index) => ({
						...bullet,
						subtext: EDUCATION_SUBTEXTS[index],
					}))
				: data.bullets;
		return { title: data.title, bullets };
	});

	const habilidades = t("resume.skills.categories", { returnObjects: true }) as string[][];
	const resumenes = t("resume.summaries.categories", { returnObjects: true }) as string[][];

	const experiencias: ResumeItem[] = EXPERIENCE_SLUGS.map((slug) => {
		const data = t(`resume.experience.items.${slug}`, { returnObjects: true }) as ExperienceItemData;
		return {
			empresa: EXPERIENCE_COMPANIES[slug],
			rol: data.rol,
			fecha: data.fecha,
			bullets: data.bullets,
			location,
		};
	});

	const proyectos: ResumeItem[] = PROJECT_SLUGS.map((slug) => {
		const data = t(`resume.projects.items.${slug}`, { returnObjects: true }) as ExperienceItemData;
		return {
			empresa: PROJECT_COMPANIES[slug],
			rol: data.rol,
			fecha: data.fecha,
			bullets: data.bullets,
			location,
		};
	});

	return (
		<div className="resume__sheet-body">
			<div className="resume__sheet-header">
				<h1 style={{ color: RESUME_CATEGORY_COLORS[filtroResumen] }}>
					Saúl Hernández
				</h1>
				<h2>
					{t("resume.header.tagline", {
						role: experiencias[0].rol,
						company: experiencias[0].empresa,
					})}
				</h2>
				<hr />
			</div>
			<div className="resume__sheet-content">
				<div className="resume__sheet-content__info">
					{infos.map((info, index) => (
						<div key={index} className="resume__sheet-content__info-card">
							<h3>{info.title}</h3>
							<div className="resume__sheet-content__info-card__bullets">
								{info.bullets.map((bullet, index) => (
									<div key={index}>
										<p>
											{bullet.subtext && <span>{bullet.subtext}</span>}
											{bullet.subtext && <br />}
										</p>
										<a href={bullet.link} target="_blank" rel="noopener noreferrer">
											<p>{bullet.text}</p>
										</a>
									</div>
								))}
							</div>
						</div>
					))}
					<div className="resume__sheet-content__info-card">
						<h3>{t("resume.labels.skills")}</h3>
						<div className="resume__sheet-content__info-card__bullets">
							{habilidades[filtroResumen].map((habilidad, index) => (
								<div key={index}>
									<p>{habilidad}</p>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="resume__sheet-content__body">
					<div className="resume__sheet-content__body-card">
						<h3>{t("resume.labels.summary")}</h3>
						<div className="resume__sheet-content__body-card-summary">
							<ul>
								{resumenes[filtroResumen].map((resumen, index) => (
									<li key={index}>{resumen}</li>
								))}
							</ul>
						</div>
					</div>
					<div className="resume__sheet-content__body-card">
						<h3>{t("resume.labels.experience")}</h3>
						{experiencias.map((experiencia, index) => (
							<div key={index}>
								<CoCardResume experiencia={experiencia} filtroResumen={filtroResumen} />
							</div>
						))}
					</div>
					<div className="resume__sheet-content__body-card">
						<h3>{t("resume.labels.projects")}</h3>
						{proyectos.map((proyecto, index) => (
							<div key={index}>
								<CoCardResume experiencia={proyecto} filtroResumen={filtroResumen} />
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

const RoResume = () => {
	const { t } = useTranslation();
	const { setRuta, setAmplio } = useContext(NavigationContext);
	// filtroResumen solo se usa dentro de esta página (y sus hijos ResumeSheet/
	// CoCardResume, vía props), así que ya no necesita vivir en un contexto
	// global: antes, cambiar de categoría de currículo re-renderizaba cualquier
	// otro consumidor de MyContext en toda la app.
	const [filtroResumen, setFiltroResumen] = useState(0);
	const location = useLocation();
	const { width } = useScreenSize();

	const tipos = t("resume.categories", { returnObjects: true }) as string[];

	useEffect(() => {
		setRuta("/resume"); // Se ejecuta después del renderizado inicial
	}, [setRuta]);

	useEffect(() => {
		setAmplio(false); // Reset amplio on route change
	}, [location.pathname, setAmplio]);

	return (
		<div id="resume" className="container-fluid">
			<CoSeo routeKey="resume" path="/resume" />
			<div className="tags-list">
				{tipos.map((tipo, index) => (
					<button
						type="button"
						key={index}
						aria-pressed={index == filtroResumen}
						className={
							index == filtroResumen
								? "tags-list__tag active"
								: "tags-list__tag"
						}
						onClick={() => {
							setFiltroResumen(index);
						}}
						style={{
							backgroundColor:
								index === filtroResumen
									? RESUME_CATEGORY_COLORS[index]
									: "transparent",
							borderColor: RESUME_CATEGORY_COLORS[index],
						}}
					>
						<span
							style={{
								color:
									index === filtroResumen
										? "#fff"
										: RESUME_CATEGORY_COLORS[index],
							}}
						>
							{tipo}
						</span>
					</button>
				))}
			</div>
			<div className="resume__sheet printable">
				<ResumeSheet filtroResumen={filtroResumen} />
			</div>
			<div className="resume__sheet" style={{ zoom: width / 1200 }}>
				<ResumeSheet filtroResumen={filtroResumen} />
			</div>
			<CoBtn
				type={"secondary"}
				text={t("resume.labels.download")}
				onClick={() => window.print()}
				icon={"none"}
			/>
		</div>
	);
};

export default RoResume;
