import enter from "../../assets/imgs/vectores/enter.svg";
import PropTypes from "prop-types";

const CoFile = ({ level, icon, text }) => {
	return (
		<div className="co-file" style={{ paddingLeft: `${level * 2}rem` }}>
			<img style={{ display: level > 0 ? "block" : "none" }} src={enter} alt="Enter" />
			{icon == null ? <></> : <img src={icon} alt={text} />}
			<span className="co-file__text text-normal">{text}</span>
		</div>
	);
};

CoFile.propTypes = {
	level: PropTypes.number.isRequired,
	icon: PropTypes.string,
	text: PropTypes.string.isRequired,
};

export default CoFile;
