import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";

import { RESUME_CATEGORY_COLORS, EDUCATION_SUBTEXTS, type ResumeItem } from "./resumeSheetData";

// Extraído de RoResume.tsx para que tanto la página /resume (copia en
// pantalla, con zoom) como CoPrintableResume (copia oculta .printable,
// montada siempre en App.tsx para que "Download CV" funcione desde
// cualquier página) usen la misma hoja sin duplicar ~150 líneas de JSX.

const INFO_SLUGS = ["portfolios", "contact", "education", "languages"] as const;

const BOLD_PATTERN = /\*\*(.+?)\*\*/g;

// Las bullets en experience.json pueden traer **texto** para resaltar
// cifras o puntos importantes. Se parsea a mano (en vez de
// dangerouslySetInnerHTML) para no abrir la puerta a HTML arbitrario en un
// JSON editable. <strong> no cambia el texto que extrae un parser de
// ATS/IA — solo el peso visual — así que no afecta la lectura lineal que ya
// se validó para la copia impresa.
const renderBullet = (text: string): ReactNode[] => {
	const parts: ReactNode[] = [];
	let lastIndex = 0;
	let key = 0;
	BOLD_PATTERN.lastIndex = 0;
	let match: RegExpExecArray | null;
	while ((match = BOLD_PATTERN.exec(text)) !== null) {
		if (match.index > lastIndex) {
			parts.push(text.slice(lastIndex, match.index));
		}
		parts.push(<strong key={key++}>{match[1]}</strong>);
		lastIndex = match.index + match[0].length;
	}
	if (lastIndex < text.length) {
		parts.push(text.slice(lastIndex));
	}
	return parts;
};

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
					<li key={index}>{renderBullet(bullet)}</li>
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

// Sacado del cuerpo de ResumeSheet: definir un componente dentro de otro
// componente hace que React lo desmonte/remonte en cada render.
const InfoCard = ({ info }: { info: InfoData }) => (
	<div className="resume__sheet-content__info-card">
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
);

// El currículo necesita existir dos veces en el DOM al mismo tiempo: una copia
// oculta en pantalla (.printable) que solo se muestra vía @media print a
// tamaño carta (Letter, el estándar en México — no A4), y una copia visible
// en pantalla escalada con `zoom` para caber en cualquier viewport (ver
// style.scss ~L2499-2533). Antes ambas
// copias eran ~200 líneas de JSX copiadas a mano; ahora es un solo componente
// que se renderiza dos veces con distinto wrapper.
interface ResumeSheetProps {
	filtroResumen: number;
	experiencias: ResumeItem[];
	proyectos: ResumeItem[];
	// "print" es la copia real que se convierte en PDF/impreso: se queda en
	// una sola columna, con las tarjetas en orden de lectura lineal, porque
	// un CV a dos columnas es un riesgo documentado para los parsers de
	// ATS/IA de reclutamiento (al reconstruir el texto por posición visual
	// pueden entrelazar el contenido de ambas columnas línea por línea —
	// comprobado exportando el PDF real y extrayendo su texto de las dos
	// formas). "screen" es la copia que solo lee una persona en /resume: ahí
	// sí se acomoda a dos columnas de verdad (dos flex independientes, no
	// CSS Grid) para aprovechar mejor el ancho y que se vea menos "hoja de
	// papel". Nótese que no basta con darle una clase distinta al mismo
	// árbol de nodos: con CSS Grid ambas columnas comparten el alto de fila,
	// así que una columna angosta (Contacto/Skills) termina empujada hasta
	// abajo por lo alta que es Experiencia. Por eso "screen" arma dos
	// contenedores flex de verdad, cada uno con su propio flujo vertical.
	variant: "screen" | "print";
}

const ResumeSheet = ({ filtroResumen, experiencias, proyectos, variant }: ResumeSheetProps) => {
	const { t } = useTranslation();

	const infoBySlug = Object.fromEntries(
		INFO_SLUGS.map((slug) => {
			const data = t(`resume.infos.${slug}`, { returnObjects: true }) as InfoData;
			const bullets =
				slug === "education"
					? data.bullets.map((bullet, index) => ({
							...bullet,
							subtext: EDUCATION_SUBTEXTS[index],
						}))
					: data.bullets;
			return [slug, { title: data.title, bullets }];
		})
	) as Record<(typeof INFO_SLUGS)[number], InfoData>;

	const habilidades = t("resume.skills.categories", { returnObjects: true }) as string[][];
	const resumenes = t("resume.summaries.categories", { returnObjects: true }) as string[][];

	// Cada tarjeta se arma una sola vez; lo que cambia entre variantes es
	// nada más cómo se agrupan (ver el prop `variant` arriba).
	const contactCard = <InfoCard info={infoBySlug.contact} />;
	const portfoliosCard = <InfoCard info={infoBySlug.portfolios} />;
	const summaryCard = (
		<div className="resume__sheet-content__body-card">
			<h3>{t("resume.labels.summary")}</h3>
			<p className="resume__sheet-content__body-card-summary">{resumenes[filtroResumen][0]}</p>
		</div>
	);
	const skillsCard = (
		<div className="resume__sheet-content__info-card">
			<h3>{t("resume.labels.skills")}</h3>
			<p className="resume__sheet-content__info-card__inline-list">
				{habilidades[filtroResumen].join(", ")}
			</p>
		</div>
	);
	const experienceCard = (
		<div className="resume__sheet-content__body-card">
			<h3>{t("resume.labels.experience")}</h3>
			{experiencias.map((experiencia, index) => (
				<div key={index}>
					<CoCardResume experiencia={experiencia} />
				</div>
			))}
		</div>
	);
	const projectsCard = (
		<div className="resume__sheet-content__body-card">
			<h3>{t("resume.labels.projects")}</h3>
			{proyectos.map((proyecto, index) => (
				<div key={index}>
					<CoCardResume experiencia={proyecto} />
				</div>
			))}
		</div>
	);
	const educationCard = <InfoCard info={infoBySlug.education} />;
	const languagesCard = (
		<div className="resume__sheet-content__info-card">
			<h3>{infoBySlug.languages.title}</h3>
			<p className="resume__sheet-content__info-card__inline-list">
				{infoBySlug.languages.bullets.map((bullet) => bullet.text).join(", ")}
			</p>
		</div>
	);

	return (
		<div className="resume__sheet-body">
			<div className="resume__sheet-header">
				<h1 className="resume__sheet-header__title">
					<span
						className="resume__sheet-header__name"
						style={{ color: RESUME_CATEGORY_COLORS[filtroResumen] }}
					>
						Saúl Hernández
					</span>
					<span className="resume__sheet-header__separator">|</span>
					<span className="resume__sheet-header__tagline">
						{t("resume.header.tagline", {
							role: experiencias[0].rol,
							company: experiencias[0].empresa,
						})}
					</span>
				</h1>
				<hr />
			</div>
			{variant === "screen" ? (
				<div className="resume__sheet-content resume__sheet-content--columns">
					<div className="resume__sheet-content__info">
						{contactCard}
						{portfoliosCard}
						{skillsCard}
						{educationCard}
						{languagesCard}
					</div>
					<div className="resume__sheet-content__body">
						{summaryCard}
						{experienceCard}
						{projectsCard}
					</div>
				</div>
			) : (
				<div className="resume__sheet-content">
					{contactCard}
					{portfoliosCard}
					{summaryCard}
					{skillsCard}
					{experienceCard}
					{projectsCard}
					{educationCard}
					{languagesCard}
				</div>
			)}
		</div>
	);
};

export default ResumeSheet;
