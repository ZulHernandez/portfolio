import enter from "../../assets/imgs/vectores/enter.svg";

const CoFile = ({ level, icon, text }) => {
	return (
		<div className="co-file" style={{ paddingLeft: `${level * 2}rem` }}>
			<img style={{ display: level > 0 ? "block" : "none" }} src={enter} alt="Enter" />
			{icon == null ? <></> : <img src={icon} alt={text} />}
			<span className="co-file__text">{text}</span>
		</div>
	);
};

export default CoFile;
