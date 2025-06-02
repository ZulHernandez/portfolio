const CoKPI = ({ title, dato, desc, imgs, imgSize, pos, color }) => {
	return (
		<div className="card-kpi" style={{ alignItems: pos }}>
			<div
				className="card-kpi__header"
				style={{ alignItems: pos, textAlign: pos }}
			>
				<h4 style={{ color: color}}>{title}</h4>
				<h5 style={{ color: color}}>{dato}</h5>
				<span className="desc">{desc}</span>
			</div>
			<div className="card-kpi__img" style={{ justifyContent: pos }}>
				{imgs.map((img, index) => (
					<img key={index} src={img} alt={title} style={{ height: imgSize, display: img ? "block" : "none" }} />
				))}
			</div>
		</div>
	);
};

export default CoKPI;
