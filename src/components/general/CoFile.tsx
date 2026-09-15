import enter from "../../assets/imgs/vectores/enter.svg";

interface CoFileProps {
	level: number;
	icon?: string | null;
	text: string;
}

const CoFile = ({ level, icon, text }: CoFileProps) => {
	return (
		<div className="co-file" style={{ paddingLeft: `${level * 2}rem` }}>
			<img loading="lazy" style={{ display: level > 0 ? "block" : "none" }} src={enter} alt="Enter" />
			{icon == null ? <></> : <img loading="lazy" src={icon} alt={text} />}
			<span className="co-file__text text-normal">{text}</span>
		</div>
	);
};

export default CoFile;
