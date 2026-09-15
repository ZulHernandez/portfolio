import type { ReactNode, CSSProperties } from "react";

interface CoKPIProps {
	title?: ReactNode;
	dato: string | number;
	desc?: ReactNode;
	imgs: (string | null)[];
	imgSize?: string | number;
	pos?: string;
	color?: string;
}

const CoKPI = ({ title, dato, desc, imgs, imgSize, pos, color }: CoKPIProps) => {
	return (
		<div className="card-kpi" style={{ alignItems: pos }}>
			<div
				className="card-kpi__header"
				style={{ alignItems: pos, textAlign: pos as CSSProperties["textAlign"] }}
			>
				<h4 style={{ color: color }}>{title}</h4>
				<h5 style={{ color: color }}>{dato}</h5>
				<span className="desc">{desc}</span>
			</div>
			<div className="card-kpi__img" style={{ justifyContent: pos }}>
				{imgs.map((img, index) => (
					<img loading="lazy" key={index} src={img ?? undefined} alt={typeof title === "string" ? title : undefined} style={{ height: imgSize, display: img ? "block" : "none" }} />
				))}
			</div>
		</div>
	);
};

export default CoKPI;
