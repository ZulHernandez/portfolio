import sign from "/sign.svg";

import { useContext, useEffect } from "react";
import { NavigationContext } from "../components/context/NavigationContext";

import { useLocation } from "react-router-dom";

const RoCarga = () => {
	const { setAmplio } = useContext(NavigationContext);
	const location = useLocation();

	useEffect(() => {
		setAmplio(false); // Reset amplio on route change
	}, [location.pathname, setAmplio]);

	return (
		<div className="div-error">
			<img loading="lazy" src={sign} />
		</div>
	);
};

export default RoCarga;
