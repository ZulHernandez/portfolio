import { useContext } from "react";
import { MyContext } from "../context/MyContext.js";

const CoSumario = ({
	foto,
	company,
	title,
	date,
	description,
	role,
	sector,
	team
}) => {
	const { language } = useContext(MyContext);
	return (
		<div
			id={language === "ES" ? "sumario" : "summary"}
			className="container-fluid"
		>
			<div className="sumario-card">
				<img className="sumario-card__photo" src={foto} alt={title} />
				<div className="sumario-card__body">
					<div className="sumario-card__body-text">
						<div className="sumario-card__body-text-upper">
							<div className="sumario-card__body-text-upper-head">
								<h2>{title}</h2>
								<span>{date}</span>
							</div>
							<span>{description}</span>
						</div>
						<div className="sumario-card__body-text-lower">
							<div className="sumario-card__body-text-lower-bullets">
								<h3>Role</h3>
								<span id="principal">{role[0]}</span>
								<span>{role[1]}</span>
							</div>
							<div className="sumario-card__body-text-lower-bullets">
								<h3>Sector</h3>
								<span>{sector}</span>
							</div>
							<div className="sumario-card__body-text-lower-bullets">
								<h3>Equipo</h3>
								<span>{team}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CoSumario;
