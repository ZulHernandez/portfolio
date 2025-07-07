import { useContext } from "react";
import PropTypes from "prop-types";
import { MyContext } from "../context/MyContext.js";

const CoSumario = ({ foto, title, date, description, role, sector, team }) => {
	const { language } = useContext(MyContext);
	return (
		<div
			id={language === "ES" ? "sumario" : "summary"}
			className="container-fluid"
		>
			<div className="sumario-card">
				<video
					className="sumario-card__photo"
					src={foto}
					autoPlay
					loop
					muted
					playsInline
					controls={false}
					disablePictureInPicture
					disableRemotePlayback
					controlsList="nodownload"
					alt={title}
					style={{ borderRadius: "8px", objectFit: "cover"}}
				/>
				<div className="sumario-card__body">
					<div className="sumario-card__body-text">
						<div className="sumario-card__body-text-upper">
							<div className="sumario-card__body-text-upper-head">
								<h2>{title}</h2>
								<span>{date}</span>
							</div>
							<span className="text-normal">{description}</span>
						</div>
						<div className="sumario-card__body-text-lower">
							<div className="sumario-card__body-text-lower-bullets">
								<h3>{language === "ES" ? "Rol" : "Role"}</h3>
								<span id="principal">{role[0]}</span>
								<span className="text-normal">{role[1]}</span>
							</div>
							<div className="sumario-card__body-text-lower-bullets">
								<h3>{language === "ES" ? "Sector" : "Sector"}</h3>
								<span className="text-normal">{sector}</span>
							</div>
							<div className="sumario-card__body-text-lower-bullets">
								<h3>{language === "ES" ? "Equipo" : "Team"}</h3>
								<span className="text-normal">{team}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
CoSumario.propTypes = {
	foto: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	role: PropTypes.arrayOf(PropTypes.string).isRequired,
	sector: PropTypes.string.isRequired,
	team: PropTypes.string.isRequired,
};

export default CoSumario;
