import CoBtn from "./CoBtn";
import { useTranslation } from "react-i18next";
import { MOBILE_BREAKPOINT } from "../../utils/breakpoints";
import type { TrabajoItem } from "../../types";

interface CoWorkCardProps {
	trabajo: TrabajoItem;
	width: number;
	index: number;
	activeTag?: string;
	widthOffsetRem?: number;
}

// Tarjeta de un trabajo destacado, compartida entre Home (CoTrabajos) y
// Works (CoTrabajos). Antes vivía duplicada casi al 100% en ambos archivos.
// El contenido bilingüe se busca por `trabajo.slug` en works.items.<slug> del
// JSON de traducciones (ver varTrabajos.ts).
const CoWorkCard = ({ trabajo, width, index, activeTag, widthOffsetRem = 6.5 }: CoWorkCardProps) => {
	const { t } = useTranslation();
	const base = `works.items.${trabajo.slug}`;
	const title = t(`${base}.title`);
	const tags = t(`${base}.tags`, { returnObjects: true }) as string[];
	const isFullRow = width > MOBILE_BREAKPOINT && index % 3 === 0;

	return (
		<div
			className="work-card"
			style={{
				flexDirection: width <= MOBILE_BREAKPOINT ? "column" : isFullRow ? "row" : "column",
				width:
					width <= MOBILE_BREAKPOINT
						? "calc(100% - 5rem)"
						: isFullRow
						? "100%"
						: `calc(50% - ${widthOffsetRem}rem)`,
			}}
		>
			<img
				loading="lazy"
				className="img-cover"
				src={trabajo.cover}
				alt={title}
				style={{
					width: width <= MOBILE_BREAKPOINT ? "100%" : isFullRow ? "40%" : "100%",
				}}
			/>
			<video
				className="gif-cover"
				src={trabajo.covergif}
				autoPlay
				loop
				muted
				playsInline
				controls={false}
				disablePictureInPicture
				disableRemotePlayback
				controlsList="nodownload"
				poster={trabajo.cover}
				style={{
					width: width <= MOBILE_BREAKPOINT ? "100%" : isFullRow ? "40%" : "100%",
					borderRadius: "8px",
					objectFit: "cover",
				}}
			/>
			<div className="work-card__body">
				<div className="work-card__body-info">
					<div className="work-card__body-info-tags">
						{tags.map((tag, tagIndex) => (
							<span
								key={tagIndex}
								style={
									activeTag
										? { backgroundColor: tag == activeTag ? "#ff2079" : "#333333" }
										: undefined
								}
							>
								{tag}
							</span>
						))}
					</div>
					<br />
					<div className="work-card__body-info-head">
						<h3>{title}</h3>
						<span className="text-normal">{t(`${base}.des`)}</span>
					</div>
				</div>
				<div className="work-card__body-foot">
					<div className="info">
						<span className="info-date">{t(`${base}.date`)}</span>
						<div className="info__comp">
							<div className="info__comp-imgs">
								{trabajo.logo.map((logo, logoIndex) => (
									<img loading="lazy" key={logoIndex} src={logo} alt={t(`${base}.comp`)} />
								))}
							</div>
							<span className="text-normal">{t(`${base}.comp`)}</span>
						</div>
					</div>
					{trabajo.link ? (
						<CoBtn
							type="primary"
							link={`/works/${trabajo.link}`}
							ariaLabel={t("works.viewCaseStudyAlt", { title })}
						/>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default CoWorkCard;
