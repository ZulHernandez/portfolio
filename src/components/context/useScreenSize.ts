import { useState, useEffect, useRef } from "react";

// Antes el listener de "resize" llamaba setWidth/setHeight en cada evento sin
// debounce: arrastrar el borde de la ventana dispara decenas de eventos por
// segundo, y este hook se usa en CoNav, CoWorkCard/CoWorkList, CoTimeline y
// RoResume — cada uno re-renderizando en cada pixel de resize. Con un
// pequeño debounce se agrupan esos eventos y se corta la mayoría de esos
// re-renders innecesarios.
const RESIZE_DEBOUNCE_MS = 150;

interface ScreenSize {
	width: number;
	height: number;
}

const useScreenSize = (): ScreenSize => {
	const [width, setWidth] = useState<number>(() =>
		typeof window !== "undefined" ? window.innerWidth : 0
	);
	const [height, setHeight] = useState<number>(() =>
		typeof window !== "undefined" ? window.innerHeight : 0
	);
	const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	useEffect(() => {
		const handleResize = () => {
			if (timeoutRef.current) clearTimeout(timeoutRef.current);
			timeoutRef.current = setTimeout(() => {
				setWidth(window.innerWidth);
				setHeight(window.innerHeight);
			}, RESIZE_DEBOUNCE_MS);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
			if (timeoutRef.current) clearTimeout(timeoutRef.current);
		};
	}, []);

	return { width, height };
};

export default useScreenSize;
