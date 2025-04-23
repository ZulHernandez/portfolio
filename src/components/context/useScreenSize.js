import { useState, useEffect } from "react";

const useScreenSize = () => {
	const [width, setWidth] = useState(() => (typeof window !== "undefined" ? window.innerWidth : 0));
    const [height, setHeight] = useState(() => (typeof window !== "undefined" ? window.innerHeight : 0));

	useEffect(() => {
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const handleResize = () => {
		setWidth(window.innerWidth);
		setHeight(window.innerHeight);
	};  

	return { width, height };
};

export default useScreenSize;
