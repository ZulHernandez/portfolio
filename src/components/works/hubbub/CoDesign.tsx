import { useTranslation } from "react-i18next";

import CoTitle from "../../general/CoTitle";

import step2 from "../../../assets/imgs/works/hubbub/step2.svg";
import step2Mov from "../../../assets/imgs/works/hubbub/step2-mov.svg";

import hubbub1 from "../../../assets/imgs/works/hubbub/HUBBUB1.webp";
import hubbub2 from "../../../assets/imgs/works/hubbub/HUBBUB2.webp";
import hubbub3 from "../../../assets/imgs/works/hubbub/HUBBUB3.webp";
import hubbub4 from "../../../assets/imgs/works/hubbub/HUBBUB4.webp";
import hubbub5 from "../../../assets/imgs/works/hubbub/HUBBUB5.webp";

import face1 from "../../../assets/imgs/works/hubbub/face1.svg";
import face2 from "../../../assets/imgs/works/hubbub/face2.svg";
import face3 from "../../../assets/imgs/works/hubbub/face3.svg";

import i1 from "../../../assets/imgs/works/hubbub/i1.svg";
import i2 from "../../../assets/imgs/works/hubbub/i2.svg";
import i3 from "../../../assets/imgs/works/hubbub/i3.svg";
import i4 from "../../../assets/imgs/works/hubbub/i4.svg";
import i5 from "../../../assets/imgs/works/hubbub/i5.svg";
import i6 from "../../../assets/imgs/works/hubbub/i6.svg";
import i7 from "../../../assets/imgs/works/hubbub/i7.svg";
import i8 from "../../../assets/imgs/works/hubbub/i8.svg";
import i9 from "../../../assets/imgs/works/hubbub/i9.svg";
import i10 from "../../../assets/imgs/works/hubbub/i10.svg";
import i11 from "../../../assets/imgs/works/hubbub/i11.svg";

const icons = [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11];

import s1 from "../../../assets/imgs/works/hubbub/sketch/sketch1.webp";
import s2 from "../../../assets/imgs/works/hubbub/sketch/sketch2.webp";
import s3 from "../../../assets/imgs/works/hubbub/sketch/sketch3.webp";
import s4 from "../../../assets/imgs/works/hubbub/sketch/sketch4.webp";
import s5 from "../../../assets/imgs/works/hubbub/sketch/sketch5.webp";
import s6 from "../../../assets/imgs/works/hubbub/sketch/sketch6.webp";
import s7 from "../../../assets/imgs/works/hubbub/sketch/sketch7.webp";
import s8 from "../../../assets/imgs/works/hubbub/sketch/sketch8.webp";

import hus from "../../../assets/imgs/works/hubbub/hus.svg";

interface StepText {
	title: string;
	text: string;
}

interface DesignSteps {
	understanding: StepText;
	sketching: StepText;
	mockup: StepText;
}

const CoDesign = () => {
	const { t } = useTranslation();

	const steps = t("hubbub.design.steps", { returnObjects: true }) as DesignSteps;
	const stepColumns = [steps.understanding, steps.sketching, steps.mockup];

	return (
		<div id={t("hubbub.anchors.design.id")} className="container-fluid">
			<CoTitle titles={t("hubbub.design.title")} />
			<span className="text-normal">{t("hubbub.design.intro")}</span>
			<center style={{ width: "100%" }}>
				<img className="step-image" loading="lazy" src={step2} alt="step 2" />
				<img
					className="step-image-mov"
					loading="lazy"
					src={step2Mov}
					alt="step 2 mov"
				/>
			</center>
			<div className="step-columns">
				{stepColumns.map((col, index) => (
					<div key={index} className="step-column three-columns">
						<h3 className="subtitle">{col.title}</h3>
						<br />
						<span className="text-normal">{col.text}</span>
					</div>
				))}
			</div>
			<div style={{ width: "100%" }}>
				<h3 className="subtitle">{t("hubbub.design.understandingSection.heading")}</h3>
				<br />
				<span className="text-normal">{t("hubbub.design.understandingSection.intro1")}</span>
			</div>
			<div className="screens">
				{[hubbub1, hubbub2, hubbub3, hubbub4, hubbub5].map((image, index) => (
					<img
						loading="lazy"
						id={`hubbub-${index + 1}`}
						key={index}
						src={image}
						alt={`HUBBUB ${index + 1}`}
					/>
				))}
			</div>
			<span className="text-normal">{t("hubbub.design.understandingSection.intro2")}</span>
			<div className="design-space">
				<div className="first-column">
					<img loading="lazy" src={face1} alt="face 1" />
					<img loading="lazy" src={face2} alt="face 2" />
					<img loading="lazy" src={face3} alt="face 3" />
				</div>
				<div className="second-column">
					<span className="title">MONTSERRAT</span>
					<span className="typo">
						Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww
						Xx Yy Zz 1 2 3 4 5 6 7 8 9 0
					</span>
					<div className="icons">
						{icons.map((icon, index) => (
							<img loading="lazy" key={index} src={icon} alt={`icon ${index + 1}`} />
						))}
					</div>
					<div className="colours">
						{["#FFF200", "#0075FF", "#EF5DA8", "#333333"].map(
							(color, index) => (
								<div
									key={index}
									className="colour"
									style={{
										backgroundColor: color,
										borderRadius:
											index === 0
												? "1rem 0rem 0rem 1rem"
												: index === 3
													? "0rem 1rem 1rem 0rem"
													: "0rem",
									}}
								>
									<span
										style={{
											color: index === 3 ? "#ffffff" : "#333333",
											mixBlendMode: index === 3 ? "difference" : "normal",
										}}
									>
										{color}
									</span>
								</div>
							),
						)}
					</div>
				</div>
			</div>
			<div style={{ width: "100%" }}>
				<h3 className="subtitle">{t("hubbub.design.sketchingSection.heading")}</h3>
				<br />
				<span className="text-normal">{t("hubbub.design.sketchingSection.intro")}</span>
			</div>
			<div id="sketches" className="sketches">
				<div className="sketch-row1">
					{[s1, s2, s3].map((sketch, index) => (
						<img loading="lazy" key={index} src={sketch} alt={`sketch ${index + 1}`} />
					))}
				</div>
				<div className="sketch-row2">
					{[s4, s5, s6, s7, s8].map((sketch, index) => (
						<img loading="lazy" key={index} src={sketch} alt={`sketch ${index + 5}`} />
					))}
				</div>
			</div>
			<div id="sketches-mov" className="sketches">
				{[s1, s2, s3, s4, s5, s6, s7, s8].map((sketch, index) => (
					<img loading="lazy" key={index} src={sketch} alt={`sketch ${index + 1}`} />
				))}
			</div>
			<div style={{ width: "100%" }}>
				<h3 className="subtitle">{t("hubbub.design.mockupSection.heading")}</h3>
				<br />
				<span className="text-normal">{t("hubbub.design.mockupSection.intro1")}</span>
			</div>
			<iframe
				title="HUBBUB Figma mockup"
				width="800"
				height="450"
				src="https://embed.figma.com/design/DCKDjbG9VOColuADoF4xsS/HUBBUB?node-id=0-1&embed-host=share"
				allowFullScreen
			></iframe>
			<span className="text-normal">{t("hubbub.design.mockupSection.intro2")}</span>
			<div id="hus">
				<img loading="lazy" src={hus} alt="User Stories Document" />
			</div>
		</div>
	);
};

export default CoDesign;
