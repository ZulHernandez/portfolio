import { useContext } from "react";
import { MyContext } from "../context/MyContext.js";

const CoNavLeft = ({anclas}) => {
	const { language } = useContext(MyContext);

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
						<span>{ancla.text}</span>
					</a>
				);
			})}
		</div>
	);
};

export default CoNavLeft;
