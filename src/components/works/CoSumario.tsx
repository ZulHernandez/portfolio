import { useTranslation } from "react-i18next";

interface CoSumarioProps {
	foto: string;
	company?: string;
	title: string;
	date: string;
	description: string;
	role: string[];
	sector: string;
	team: string;
}

const CoSumario = ({ foto, title, date, description, role, sector, team }: CoSumarioProps) => {
	const { t } = useTranslation();
	return (
		<div id={t("caseStudy.summary.id")} className="container-fluid">
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
					style={{ borderRadius: "8px", objectFit: "cover" }}
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
								<h3>{t("caseStudy.role")}</h3>
								<span id="principal">{role[0]}</span>
								<span className="text-normal">{role[1]}</span>
							</div>
							<div className="sumario-card__body-text-lower-bullets">
								<h3>{t("caseStudy.sector")}</h3>
								<span className="text-normal">{sector}</span>
							</div>
							<div className="sumario-card__body-text-lower-bullets">
								<h3>{t("caseStudy.team")}</h3>
								<span className="text-normal">{team}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CoSumario;
