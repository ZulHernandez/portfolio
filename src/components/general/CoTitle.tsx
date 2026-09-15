import type { ReactNode } from "react";

interface CoTitleProps {
	titles: ReactNode;
}

const CoTitle = ({ titles }: CoTitleProps) => {
	return (
		<div className="div-title">
			<h2>{titles}</h2>
		</div>
	);
};

export default CoTitle;
