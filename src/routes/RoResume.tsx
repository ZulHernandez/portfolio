import { useContext, useState, useEffect } from "react";
import { NavigationContext } from "../components/context/NavigationContext";
import { useTranslation } from "react-i18next";

import { useLocation } from "react-router-dom";
import useScreenSize from "../components/context/useScreenSize";

import CoBtn from "../components/general/CoBtn";
import CoSeo from "../components/general/CoSeo";
import { ACCENT_COLORS } from "../utils/accentColors";
import { formatDateRange, resolveLang, type Lang } from "../utils/experienceData";
import useExperienceData from "../components/context/useExperienceData";
import type { ExperienceJob } from "../types";

// Antes cada uno de los 4 puntos donde se pinta la categoría activa repetía
// la misma cadena de ternarios con los hex a mano (4 veces en este archivo).
const RESUME_CATEGORY_COLORS = [
	ACCENT_COLORS.pink,
	ACCENT_COLORS.blue,
	ACCENT_COLORS.purple,
	ACCENT_COLORS.orange,
];

// El puesto/proyecto (empresa, rol, fechas, bullets) ahora vive en
// public/data/experience.json (jobs con presence.resume === "experience" o
// "projects"), no aquí — ver ese archivo para dar de alta o editar uno.
//
// Antes cada empresa tenía 4 variantes de bullets (una por categoría del
// filtro de arriba); se simplificó a una sola lista por puesto porque en la
// práctica la mayoría de las variantes eran copias idénticas entre sí. El
// filtro de categorías sigue afectando el Resumen y las Habilidades (ver
// `resumenes`/`habilidades` abajo, que sí siguen viniendo de i18n).

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
	bullets: string[];
	location: string;
}

interface CoCardResumeProps {
	experiencia: ResumeItem;
}

const CoCardResume = ({ experiencia }: CoCardResumeProps) => {
	return (
		<div className="resume__sheet-content__body-card-experiencia">
			<h4>
				{experiencia.empresa} - {experiencia.rol}
			</h4>
			<span className="resume__sheet-content__body-card-experiencia__ubicacion">
				{experiencia.location} | {experiencia.fecha}
			</span>
			<ul>
				{experiencia.bullets.map((bullet, index) => (
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

// Convierte un ExperienceJob (la forma cruda de experience.json) en el
// ResumeItem que espera CoCardResume, resolviendo idioma y formateando la
// fecha una sola vez.
const toResumeItem = (job: ExperienceJob, lang: Lang, location: string): ResumeItem => ({
	empresa: job.company,
	rol: job.role[lang],
	fecha: formatDateRange(job.startDate, job.endDate, lang),
	bullets: job.bullets?.resume?.[lang] ?? [],
	location,
});

// El currículo necesita existir dos veces en el DOM al mismo tiempo: una copia
// oculta en pantalla (.printable) que solo se muestra vía @media print a
// tamaño A4 real, y una copia visible en pantalla escalada con `zoom` para
// caber en cualquier viewport (ver style.scss ~L2499-2533). Antes ambas
// copias eran ~200 líneas de JSX copiadas a mano; ahora es un solo componente
// que se renderiza dos veces con distinto wrapper.
interface ResumeSheetProps {
	filtroResumen: number;
	experiencias: ResumeItem[];
	proyectos: ResumeItem[];
}

const ResumeSheet = ({ filtroResumen, experiencias, proyectos }: ResumeSheetProps) => {
	const { t } = useTranslation();

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
								<CoCardResume experiencia={experiencia} />
							</div>
						))}
					</div>
					<div className="resume__sheet-content__body-card">
						<h3>{t("resume.labels.projects")}</h3>
						{proyectos.map((proyecto, index) => (
							<div key={index}>
								<CoCardResume experiencia={proyecto} />
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

const byStartDateDesc = (a: ExperienceJob, b: ExperienceJob) =>
	a.startDate < b.startDate ? 1 : -1;

const RoResume = () => {
	const { t, i18n } = useTranslation();
	const lang = resolveLang(i18n.language);
	const { setRuta, setAmplio } = useContext(NavigationContext);
	// filtroResumen solo se usa dentro de esta página (y sus hijos ResumeSheet/
	// CoCardResume, vía props), así que ya no necesita vivir en un contexto
	// global: antes, cambiar de categoría de currículo re-renderizaba cualquier
	// otro consumidor de MyContext en toda la app.
	const [filtroResumen, setFiltroResumen] = useState(0);
	const location = useLocation();
	const { width } = useScreenSize();
	const { data } = useExperienceData();

	const tipos = t("resume.categories", { returnObjects: true }) as string[];

	useEffect(() => {
		setRuta("/resume"); // Se ejecuta después del renderizado inicial
	}, [setRuta]);

	useEffect(() => {
		setAmplio(false); // Reset amplio on route change
	}, [location.pathname, setAmplio]);

	const resumeLocation = data?.location[lang] ?? "";
	const experiencias = (data?.jobs ?? [])
		.filter((job) => job.presence.resume === "experience")
		.sort(byStartDateDesc)
		.map((job) => toResumeItem(job, lang, resumeLocation));
	const proyectos = (data?.jobs ?? [])
		.filter((job) => job.presence.resume === "projects")
		.sort(byStartDateDesc)
		.map((job) => toResumeItem(job, lang, resumeLocation));

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
			{experiencias.length > 0 && (
				<>
					<div className="resume__sheet printable">
						<ResumeSheet
							filtroResumen={filtroResumen}
							experiencias={experiencias}
							proyectos={proyectos}
						/>
					</div>
					<div className="resume__sheet" style={{ zoom: width / 1200 }}>
						<ResumeSheet
							filtroResumen={filtroResumen}
							experiencias={experiencias}
							proyectos={proyectos}
						/>
					</div>
				</>
			)}
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
