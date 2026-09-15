import { Link } from "react-router-dom";
import type { CSSProperties, MouseEventHandler } from "react";

interface CoBtnProps {
	type?: string;
	text?: string;
	link?: string;
	/** Valor crudo de CSS `display` para el ícono (p. ej. "none" para
	 * ocultarlo) — pese a que el PropTypes original decía `bool`, el único
	 * call site real (RoResume) le pasa el string "none" directamente. */
	icon?: CSSProperties["display"];
	onClick?: MouseEventHandler;
	style?: CSSProperties;
	/** Nombre accesible para botones sin texto visible (flechas de ícono,
	 * carrusel, paginación) — sin esto, un lector de pantalla no anuncia
	 * nada útil para estos controles. */
	ariaLabel?: string;
}

// Antes CoBtn siempre se envolvía en <Link to={link}>, incluso para botones
// puramente de acción (flechas de carrusel, "Descargar CV", paginación) que
// no navegan a ningún lado. Eso obligaba a los usos no-navegables a pasar
// link={null}/link={""} y quedaban como <Link to={undefined}>, lo cual
// confunde a lectores de pantalla (se anuncia como enlace, no como botón).
//
// Ahora: si hay un `link` real, se renderiza como <Link> (navegación). Si en
// cambio se pasa `onClick` (o no hay link), se renderiza como <button> real.
const CoBtn = ({ type, text, link, icon, onClick, style, ariaLabel }: CoBtnProps) => {
	const content = (
		<div
			style={{
				padding: text ? "1rem 2rem" : "1rem 1rem",
				borderRadius: text ? "2.5rem" : "50%",
			}}
			className={`btn ${type}`}
		>
			<span style={{ display: text ? "block" : "none" }}>{text}</span>
			<svg
				style={{
					display: icon,
				}}
				width="25"
				height="25"
				viewBox="0 0 25 25"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<mask
					id="mask0_1883_2208"
					style={{ maskType: "alpha" }}
					maskUnits="userSpaceOnUse"
					x="0"
					y="0"
					width="25"
					height="25"
				>
					<rect
						x="0.227295"
						y="0.267334"
						width="24.5455"
						height="24.5455"
						fill="#D9D9D9"
					/>
				</mask>
				<g mask="url(#mask0_1883_2208)">
					<path
						id="chevron"
						d="M8.4346 22.7673L6.61926 20.9519L15.0312 12.54L6.61926 4.12809L8.4346 2.31274L18.6619 12.54L8.4346 22.7673Z"
						fill="#333333"
					/>
				</g>
			</svg>
		</div>
	);

	if (link) {
		return (
			<Link to={link} onClick={onClick} style={style} aria-label={ariaLabel}>
				{content}
			</Link>
		);
	}

	return (
		<button
			type="button"
			onClick={onClick}
			aria-label={ariaLabel}
			style={{
				background: "none",
				border: "none",
				padding: 0,
				font: "inherit",
				cursor: "pointer",
				display: "inline-block",
				...style,
			}}
		>
			{content}
		</button>
	);
};

export default CoBtn;
