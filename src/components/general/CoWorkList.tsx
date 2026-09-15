import CoWorkCard from "./CoWorkCard";
import { MOBILE_BREAKPOINT } from "../../utils/breakpoints";
import type { TrabajoItem } from "../../types";

interface CoWorkListProps {
	trabajos: TrabajoItem[];
	width: number;
	activeTag?: string;
	widthOffsetRem?: number;
}

// Envoltura responsive + listado de CoWorkCard. Compartida entre Home y Works
// (antes cada página tenía su propia copia del wrapper "work-list").
const CoWorkList = ({ trabajos, width, activeTag, widthOffsetRem }: CoWorkListProps) => {
	return (
		<div
			className="work-list"
			style={{
				flexDirection: width <= MOBILE_BREAKPOINT ? "column" : "row",
				flexWrap: width <= MOBILE_BREAKPOINT ? "nowrap" : "wrap",
			}}
		>
			{trabajos.map((trabajo, index) => (
				<CoWorkCard
					key={index}
					trabajo={trabajo}
					width={width}
					index={index}
					activeTag={activeTag}
					widthOffsetRem={widthOffsetRem}
				/>
			))}
		</div>
	);
};

export default CoWorkList;
