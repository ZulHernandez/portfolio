import PropTypes from 'prop-types';

const CoTitle = ({ titles }) => {
	return (
		<div className="div-title">
			<h2>{titles}</h2>
		</div>
	);
};

CoTitle.propTypes = {
	titles: PropTypes.node.isRequired,
};

export default CoTitle;
