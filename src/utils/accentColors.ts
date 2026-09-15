// Paleta de acento usada para las categorías del currículo (RoResume) y los
// tipos de trabajo de la línea del tiempo (CoTimeline). Antes cada archivo
// repetía estos mismos 5 hex a mano en varias ramas de ternarios; si el color
// de marca cambiaba había que encontrarlos todos.
//
// "pink" y "dark" coinciden con $red-800 y $shade-800 en style.scss; "blue",
// "purple" y "orange" no tienen aún una variable SCSS equivalente (viven acá
// como la única fuente de verdad del lado de JS).
export const ACCENT_COLORS = {
	pink: "#ff2079",
	blue: "#2088FF",
	purple: "#7220FF",
	orange: "#FF904B",
	dark: "#333333",
} as const;

export type AccentColorKey = keyof typeof ACCENT_COLORS;
