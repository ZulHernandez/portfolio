import sign from "/sign.svg";

import { useContext } from "react";
import { MyContext } from "../components/context/MyContext";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const RoCarga = () => {
	const { setAmplio } = useContext(MyContext);
	const location = useLocation();

	useEffect(() => {
		setAmplio(false); // Reset amplio on route change
	}, [location.pathname]);

	return (
		<div className="div-error">
			<img loading="lazy" src={sign} />
		</div>
	);
};

export default RoCarga;
