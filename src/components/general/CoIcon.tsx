import type { ReactNode } from "react";

interface CoIconProps {
	icon: string;
	text?: ReactNode;
}

const CoIcon = ({ icon, text }: CoIconProps) => {
	return (
		<div className="co-icon">
			<img loading="lazy" src={icon} alt="Icon" />
			<span className="co-icon__text text-normal">{text}</span>
		</div>
	);
};

export default CoIcon;
