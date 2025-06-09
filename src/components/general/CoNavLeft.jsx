import PropTypes from "prop-types";

const CoNavLeft = ({anclas}) => {
	return (
		<div className="nav-left">
			{anclas.map((ancla, index) => {
				return (
					<a
						key={index}
						href={`#${ancla.id}`}
						onClick={() => {
							document
								.getElementById(ancla.id)
								.scrollIntoView({ behavior: "smooth" });
						}}
					>
						<span className="text-normal">{ancla.text}</span>
					</a>
				);
			})}
		</div>
	);
};

CoNavLeft.propTypes = {
	anclas: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
		})
	).isRequired,
};

export default CoNavLeft;
