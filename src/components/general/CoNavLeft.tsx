interface Ancla {
	id: string;
	text: string;
}

interface CoNavLeftProps {
	anclas: Ancla[];
}

const CoNavLeft = ({ anclas }: CoNavLeftProps) => {
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
								?.scrollIntoView({ behavior: "smooth" });
						}}
					>
						<span className="text-normal" style={{ fontSize: "1.4rem" }}>{ancla.text}</span>
					</a>
				);
			})}
		</div>
	);
};

export default CoNavLeft;
