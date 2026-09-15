import { useTranslation } from "react-i18next";

import CoTitle from "../../../components/general/CoTitle";
import CoIcon from "../../general/CoIcon";
import CoFile from "../../general/CoFile";

import drive from "../../../assets/imgs/works/glue/drive.svg";
import folder from "../../../assets/imgs/vectores/folder.svg";
import script from "../../../assets/imgs/vectores/script.svg";

// Niveles/iconos no se traducen; los textos (mismo orden) sí, y viven en
// glue.insumos.fonts.files / glue.insumos.structure.projects.<slug>.bullets.
const fileMeta = [
	{ level: 0, icon: folder },
	{ level: 1, icon: folder },
	{ level: 2, icon: script },
];

type ProjectSlug = "ux" | "internal" | "research";

const projectBulletMeta: Record<ProjectSlug, { level: number; icon: string | null }[]> = {
	ux: [0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((level) => ({ level, icon: null })),
	internal: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0].map((level) => ({ level, icon: null })),
	research: [0, 0, 0, 0, 0, 0, 0, 0].map((level) => ({ level, icon: null })),
};

const CoInsumos = () => {
	const { t } = useTranslation();

	const fileTexts = t("glue.insumos.fonts.files", { returnObjects: true }) as string[];
	const files = fileMeta.map((meta, index) => ({ ...meta, text: fileTexts[index] }));

	const projectSlugs: ProjectSlug[] = ["ux", "internal", "research"];
	const projects = projectSlugs.map((slug) => {
		const base = `glue.insumos.structure.projects.${slug}`;
		const texts = t(`${base}.bullets`, { returnObjects: true }) as string[];
		return {
			title: t(`${base}.title`),
			bullets: projectBulletMeta[slug].map((meta, index) => ({
				...meta,
				text: texts[index],
			})),
		};
	});

	const points = t("glue.insumos.structure.points", { returnObjects: true }) as string[];

	return (
		<div id={t("glue.anchors.insumos.id")} className="container-fluid">
			<CoTitle titles={t("glue.insumos.title")} />
			<span className="text-normal">{t("glue.insumos.intro")}</span>
			<div className="bullet">
				<span className="subtitle">{t("glue.insumos.fonts.subtitle")}</span>
				<div className="bullet__body">
					<span className="text-normal">{t("glue.insumos.fonts.intro")}</span>
					<div className="bullet__body__card">
						<CoIcon icon={drive} text={t("glue.insumos.fonts.driveLabel")} />
						<div className="bullet__body__card-schema">
							{files.map((file, index) => (
								<CoFile key={index} level={file.level} icon={file.icon} text={file.text} />
							))}
						</div>
					</div>
				</div>
			</div>
			<div className="bullet">
				<span className="subtitle">{t("glue.insumos.structure.subtitle")}</span>
				<div className="bullet__body">
					<div>
						<span className="text-normal">{t("glue.insumos.structure.intro")}</span>
						<ul>
							{points.map((point, index) => (
								<li className="text-normal" key={index}>
									{point}
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="bullet__carrousel">
					{projects.map((project, index) => (
						<div className="bullet__body__card" key={index}>
							<div id="schema" className="bullet__body__card-schema">
								<span className="bullet__body__card-title">{project.title}</span>
								{project.bullets.map((bullet, bulletIndex) => (
									<CoFile
										key={bulletIndex}
										level={bullet.level}
										icon={bullet.icon}
										text={bullet.text}
									/>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default CoInsumos;
