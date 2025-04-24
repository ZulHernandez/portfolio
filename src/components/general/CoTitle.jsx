import line from "../../assets/imgs/vectores/line.svg";

const CoTitle = ({ titles }) => {
	return (
		<div className="div-title">
			<h2>{titles}</h2>
			<img src={line} alt="" />
		</div>
	);
};

export default CoTitle;
