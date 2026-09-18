import { useState } from "react";
import type { ReactElement } from "react";
import { useTranslation } from "react-i18next";

// Antes esta sección era una sola imagen (schemaEN.svg / schemaES.svg) con
// ~20 pantallas y sus conexiones. Igual que el hand-off de GLUE y los
// íconos de prioridad, el texto de cada pantalla venía quemado como paths
// vectoriales (0 elementos <text> en el SVG original), así que además de
// ilegible a este tamaño, no era texto real ni traducible. Aquí el
// "diagrama" es DOM real: íconos dibujados a mano + texto vía i18n, y las
// conexiones son un overlay SVG (solo las líneas, sin texto) posicionado
// sobre una cuadrícula fija. Los colores (#ff2079 flujo principal, #440bd4
// acciones secundarias, #f7b1fe flujo deprecado) se tomaron directo de los
// paths del SVG original para mantener la paleta real del diseño.
//
// Interacción nueva: al pasar el cursor (o el foco, para teclado) sobre un
// ítem de la leyenda, se resalta ese flujo — las conexiones y nodos que no
// pertenecen a él se atenúan — igual que pidió el usuario.

type FlowCategory = "main" | "secondary" | "deprecated";
type SequenceType = "direct" | "alternate";
type FlowFilter = FlowCategory | "external" | SequenceType;

const CATEGORY_COLOR: Record<FlowCategory, string> = {
	main: "#ff2079",
	secondary: "#440bd4",
	deprecated: "#f7b1fe",
};

interface IconProps {
	className?: string;
}

const iconProps = {
	width: 22,
	height: 22,
	viewBox: "0 0 24 24",
	fill: "none" as const,
	stroke: "currentColor",
	strokeWidth: 1.6,
	strokeLinecap: "round" as const,
	strokeLinejoin: "round" as const,
};

const IconScreen = () => (
	<svg {...iconProps}>
		<rect x="4" y="3" width="16" height="18" rx="2" />
		<path d="M9 7h6M9 11h6M9 15h3" />
	</svg>
);
const IconTab = () => (
	<svg {...iconProps}>
		<rect x="3" y="4" width="18" height="16" rx="2" />
		<path d="M3 9h18M8 9v11" />
	</svg>
);
const IconMap = () => (
	<svg {...iconProps}>
		<path d="M9 4 4 6v14l5-2 6 2 5-2V4l-5 2-6-2Z" />
		<path d="M9 4v14M15 6v14" />
	</svg>
);
const IconInfo = () => (
	<svg {...iconProps}>
		<circle cx="12" cy="12" r="9" />
		<path d="M12 11v5.5M12 7.5v.01" />
	</svg>
);
const IconSearch = () => (
	<svg {...iconProps}>
		<circle cx="10.5" cy="10.5" r="6.5" />
		<path d="m20 20-4.35-4.35" />
	</svg>
);
const IconFilters = () => (
	<svg {...iconProps}>
		<path d="M4 6h16M7 12h10M10 18h4" />
	</svg>
);
const IconLayers = () => (
	<svg {...iconProps}>
		<path d="m12 3 8 4.5-8 4.5-8-4.5Z" />
		<path d="m4 12 8 4.5 8-4.5M4 16.5 12 21l8-4.5" />
	</svg>
);
const IconStation = () => (
	<svg {...iconProps}>
		<rect x="4" y="4" width="12" height="16" rx="1.5" />
		<path d="M8 4v16M4 9h12M4 14h12" />
		<path d="M17 15h3.5M19 13v4" />
	</svg>
);
const IconTarget = () => (
	<svg {...iconProps}>
		<circle cx="12" cy="12" r="8" />
		<circle cx="12" cy="12" r="3.2" />
	</svg>
);
const IconQr = () => (
	<svg {...iconProps}>
		<rect x="3.5" y="3.5" width="6" height="6" rx="1" />
		<rect x="14.5" y="3.5" width="6" height="6" rx="1" />
		<rect x="3.5" y="14.5" width="6" height="6" rx="1" />
		<path d="M15 15h2v2h-2zM19 15h1.5M15 19h1.5M19 19h1.5" />
	</svg>
);
const IconGear = () => (
	<svg {...iconProps}>
		<circle cx="12" cy="12" r="3.2" />
		<path d="M12 3.5v2.4M12 18.1v2.4M20.5 12h-2.4M5.9 12H3.5M17.8 6.2l-1.7 1.7M7.9 16.1l-1.7 1.7M17.8 17.8l-1.7-1.7M7.9 7.9 6.2 6.2" />
	</svg>
);
const IconBoltBattery = () => (
	<svg {...iconProps}>
		<rect x="3" y="7" width="16" height="10" rx="2" />
		<path d="M21 10v4" />
		<path d="m12.5 9-4 4.5h3l-1 3.5 4-4.5h-3z" fill="currentColor" stroke="none" />
	</svg>
);
const IconBatteryFull = () => (
	<svg {...iconProps}>
		<rect x="3" y="7" width="16" height="10" rx="2" />
		<path d="M21 10v4" />
		<path d="M6 10v4h10v-4z" fill="currentColor" stroke="none" />
	</svg>
);
const IconBatterySlash = () => (
	<svg {...iconProps}>
		<rect x="3" y="7" width="16" height="10" rx="2" />
		<path d="M21 10v4M4 4l16 16" />
	</svg>
);
const IconWarning = () => (
	<svg {...iconProps}>
		<path d="M12 3.5 2.5 20h19Z" />
		<path d="M12 9.5V14M12 17v.01" />
	</svg>
);
const IconReceipt = () => (
	<svg {...iconProps}>
		<path d="M6 3h12v18l-3-2-3 2-3-2-3 2Z" />
		<path d="M9 8h6M9 12h6" />
	</svg>
);
const IconHistory = () => (
	<svg {...iconProps}>
		<circle cx="12" cy="13" r="8" />
		<path d="M12 9v4l3 2" />
		<path d="M4.5 6.5 3.5 3l3.5 1" />
	</svg>
);
const IconBoltSlash = () => (
	<svg {...iconProps}>
		<path d="m13 3-7 9h4l-1 9 7-9h-4z" />
		<path d="M4 4l16 16" />
	</svg>
);
const IconHelp = () => (
	<svg {...iconProps}>
		<circle cx="12" cy="12" r="9" />
		<path d="M9.5 9.3a2.5 2.5 0 1 1 3.7 2.2c-.9.5-1.2 1-1.2 2" />
		<path d="M12 17v.01" />
	</svg>
);
const IconWallet = () => (
	<svg {...iconProps}>
		<rect x="3" y="6" width="18" height="13" rx="2" />
		<path d="M3 10h18" />
		<circle cx="16.5" cy="14" r="1.2" fill="currentColor" stroke="none" />
	</svg>
);
const IconWalletAdd = () => (
	<svg {...iconProps}>
		<rect x="3" y="6" width="18" height="13" rx="2" />
		<path d="M3 10h18" />
		<path d="M16.5 12.5v3M15 14h3" />
	</svg>
);
const IconWalletManage = () => (
	<svg {...iconProps}>
		<rect x="3" y="6" width="18" height="13" rx="2" />
		<path d="M3 10h18" />
		<circle cx="16.5" cy="14" r="1.6" />
		<path d="M16.5 12.3v.5M16.5 14.8v.5M15.1 13.1l.4.3M17.5 14.6l.4.3M17.9 13.1l-.4.3M15.5 14.6l-.4.3" />
	</svg>
);

interface FlowNodeDef {
	id: string;
	col: number;
	row: number;
	labelKey: string;
	Icon: (props: IconProps) => ReactElement;
	external?: boolean;
	// Los nodos del flujo principal se pintan en el mismo rosa que sus
	// conectores (igual que en el SVG original), para reforzar la categoría
	// también en el ícono, no solo en la línea.
	main?: boolean;
}

const NODES: FlowNodeDef[] = [
	{ id: "pocket", col: 0, row: 0, labelKey: "pocket", Icon: IconScreen },
	{ id: "servicesTab", col: 1, row: 0, labelKey: "servicesTab", Icon: IconTab },
	{ id: "map", col: 2, row: 0, labelKey: "map", Icon: IconMap, main: true },
	{ id: "legend", col: 3, row: 0, labelKey: "legend", Icon: IconInfo },
	{ id: "search", col: 4, row: 0, labelKey: "search", Icon: IconSearch },
	{ id: "filters", col: 5, row: 0, labelKey: "filters", Icon: IconFilters },
	{ id: "mapMode", col: 6, row: 0, labelKey: "mapMode", Icon: IconLayers },
	{ id: "stationDetail", col: 7, row: 0, labelKey: "stationDetail", Icon: IconStation },

	{ id: "operativeSystem", col: 0, row: 1, labelKey: "operativeSystem", Icon: IconTarget, external: true },
	{ id: "qrScanLegacy", col: 1, row: 1, labelKey: "qrScanLegacy", Icon: IconQr, external: true },
	{ id: "qrScan", col: 2, row: 1, labelKey: "qrScan", Icon: IconQr, main: true },
	{ id: "chargeConfig", col: 3, row: 1, labelKey: "chargeConfig", Icon: IconGear, main: true },
	{ id: "status1", col: 4, row: 1, labelKey: "status1", Icon: IconBoltBattery, main: true },
	{ id: "status2", col: 5, row: 1, labelKey: "status2", Icon: IconBatteryFull, main: true },
	{ id: "status3", col: 6, row: 1, labelKey: "status3", Icon: IconBatterySlash, main: true },
	{ id: "thankYouPage", col: 7, row: 1, labelKey: "thankYouPage", Icon: IconReceipt, main: true },

	{ id: "chargeHistoric", col: 2, row: 2, labelKey: "chargeHistoric", Icon: IconHistory },
	{ id: "outstandingBalance", col: 3, row: 2, labelKey: "outstandingBalance", Icon: IconBoltSlash },
	{ id: "statusX", col: 5, row: 2, labelKey: "statusX", Icon: IconWarning },

	{ id: "help", col: 2, row: 3, labelKey: "help", Icon: IconHelp },

	{ id: "mobilityWallet", col: 2, row: 4, labelKey: "mobilityWallet", Icon: IconWallet },
	{ id: "addWallet", col: 3, row: 4, labelKey: "addWallet", Icon: IconWalletAdd },
	{ id: "manageWallet", col: 4, row: 4, labelKey: "manageWallet", Icon: IconWalletManage },
];

interface FlowConnectionDef {
	id: string;
	from: string;
	to: string;
	d: string;
	category: FlowCategory;
	sequence: SequenceType;
}

// Cuadrícula fija (8 columnas x 5 filas) que reproduce la disposición del
// diagrama original; ver comentario arriba. CANVAS_W/H deben coincidir con
// el aspect-ratio de .flow-schema-diagram en _movilidad.scss.
// Nota: la cuadrícula original (columnas cada 125u en un lienzo de 1015)
// quedaba demasiado ancha/horizontal en pantalla y con una proporción más
// alargada que el diagrama original (900x712, ~1.26:1). Se comprimió todo
// el eje X por un factor 0.82 (columnas cada ~103u, lienzo de 860) para
// acercar la proporción a la original (860/660 ≈ 1.30:1) y reducir el
// scroll horizontal necesario. Las filas (eje Y) no cambiaron.
const CANVAS_W = 860;
const CANVAS_H = 660;

const CONNECTIONS: FlowConnectionDef[] = [
	// Flujo principal (rosa, secuencia directa)
	{ id: "pocket-servicesTab", from: "pocket", to: "servicesTab", d: "M99,90 L144,90", category: "main", sequence: "direct" },
	{ id: "servicesTab-map", from: "servicesTab", to: "map", d: "M201,90 L246,90", category: "main", sequence: "direct" },
	{ id: "map-qrScan", from: "map", to: "qrScan", d: "M275,135 L275,170", category: "main", sequence: "direct" },
	{ id: "qrScan-chargeConfig", from: "qrScan", to: "chargeConfig", d: "M304,215 L349,215", category: "main", sequence: "direct" },
	{ id: "chargeConfig-status1", from: "chargeConfig", to: "status1", d: "M406,215 L451,215", category: "main", sequence: "direct" },
	{ id: "status1-status2", from: "status1", to: "status2", d: "M509,215 L554,215", category: "main", sequence: "direct" },
	{ id: "status2-status3", from: "status2", to: "status3", d: "M611,215 L656,215", category: "main", sequence: "direct" },
	{ id: "status3-thankYouPage", from: "status3", to: "thankYouPage", d: "M714,215 L759,215", category: "main", sequence: "direct" },
	// Flujo principal (rosa, secuencia alterna: interrupción)
	{ id: "status2-statusX", from: "status2", to: "statusX", d: "M583,260 L583,295", category: "main", sequence: "alternate" },
	{ id: "status3-statusX", from: "status3", to: "statusX", d: "M685,260 L685,340 L611,340", category: "main", sequence: "alternate" },
	// Acciones secundarias (morado, secuencia directa): abanico desde Map
	{ id: "map-legend", from: "map", to: "legend", d: "M275,45 L275,25 L378,25 L378,45", category: "secondary", sequence: "direct" },
	{ id: "map-search", from: "map", to: "search", d: "M275,45 L275,25 L480,25 L480,45", category: "secondary", sequence: "direct" },
	{ id: "map-filters", from: "map", to: "filters", d: "M275,45 L275,25 L583,25 L583,45", category: "secondary", sequence: "direct" },
	{ id: "map-mapMode", from: "map", to: "mapMode", d: "M275,45 L275,25 L685,25 L685,45", category: "secondary", sequence: "direct" },
	{ id: "map-stationDetail", from: "map", to: "stationDetail", d: "M275,45 L275,25 L788,25 L788,45", category: "secondary", sequence: "direct" },
	{ id: "map-chargeHistoric", from: "map", to: "chargeHistoric", d: "M259,135 L259,300", category: "secondary", sequence: "direct" },
	{ id: "map-help", from: "map", to: "help", d: "M267,135 L267,420", category: "secondary", sequence: "direct" },
	// Acciones secundarias (morado, secuencia alterna)
	{ id: "chargeConfig-outstandingBalance", from: "chargeConfig", to: "outstandingBalance", d: "M378,260 L378,295", category: "secondary", sequence: "alternate" },
	{ id: "statusX-thankYouPage", from: "statusX", to: "thankYouPage", d: "M583,385 L583,430 L788,430 L788,260", category: "secondary", sequence: "alternate" },
	// Flujo deprecado (rosa pálido)
	{ id: "map-operativeSystem", from: "map", to: "operativeSystem", d: "M259,120 L259,160 L70,160 L70,170", category: "deprecated", sequence: "alternate" },
	{ id: "operativeSystem-qrScanLegacy", from: "operativeSystem", to: "qrScanLegacy", d: "M99,215 L144,215", category: "deprecated", sequence: "direct" },
	{ id: "help-mobilityWallet", from: "help", to: "mobilityWallet", d: "M275,510 L275,545", category: "deprecated", sequence: "alternate" },
	{ id: "mobilityWallet-addWallet", from: "mobilityWallet", to: "addWallet", d: "M304,590 L349,590", category: "deprecated", sequence: "alternate" },
	{ id: "addWallet-manageWallet", from: "addWallet", to: "manageWallet", d: "M406,590 L451,590", category: "deprecated", sequence: "alternate" },
];

const COL_X = [70, 173, 275, 378, 480, 583, 685, 788];
const ROW_Y = [90, 215, 340, 465, 590];

interface LegendTexts {
	mainFlow: string;
	secondaryActions: string;
	deprecatedFlow: string;
	externalFlow: string;
	directSequence: string;
	alternateSequence: string;
}

const LEGEND_ITEMS: { key: FlowFilter; labelKey: keyof LegendTexts; color: string; dashed?: boolean; line?: boolean }[] = [
	{ key: "main", labelKey: "mainFlow", color: "#ff2079" },
	{ key: "secondary", labelKey: "secondaryActions", color: "#440bd4" },
	{ key: "deprecated", labelKey: "deprecatedFlow", color: "#f7b1fe" },
	{ key: "external", labelKey: "externalFlow", color: "#b3b3b3" },
	{ key: "direct", labelKey: "directSequence", color: "#666666", line: true },
	{ key: "alternate", labelKey: "alternateSequence", color: "#666666", line: true, dashed: true },
];

const CoFlowSchema = () => {
	const { t } = useTranslation();
	const legendTexts = t("movilidad.invest.legends", { returnObjects: true }) as LegendTexts;
	const [hoveredFlow, setHoveredFlow] = useState<FlowFilter | null>(null);

	const connectionMatches = (conn: FlowConnectionDef) => {
		if (!hoveredFlow) return true;
		if (hoveredFlow === "external") return false;
		if (hoveredFlow === "direct" || hoveredFlow === "alternate") return conn.sequence === hoveredFlow;
		return conn.category === hoveredFlow;
	};

	const highlightedNodeIds = new Set<string>();
	if (hoveredFlow === "external") {
		NODES.forEach((node) => {
			if (node.external) highlightedNodeIds.add(node.id);
		});
	} else if (hoveredFlow) {
		CONNECTIONS.forEach((conn) => {
			if (connectionMatches(conn)) {
				highlightedNodeIds.add(conn.from);
				highlightedNodeIds.add(conn.to);
			}
		});
	}
	const isNodeDimmed = (id: string) => hoveredFlow !== null && !highlightedNodeIds.has(id);

	return (
		<div className="schema">
			<div className="schema-row">
				<div className="schema-legenda">
					{LEGEND_ITEMS.map((item) => (
						<div
							key={item.key}
							className={`schema-legenda__item ${hoveredFlow === item.key ? "is-active" : ""}`}
							tabIndex={0}
							onMouseEnter={() => setHoveredFlow(item.key)}
							onMouseLeave={() => setHoveredFlow(null)}
							onFocus={() => setHoveredFlow(item.key)}
							onBlur={() => setHoveredFlow(null)}
						>
							{item.line ? (
								<span
									className={`schema-legenda__swatch schema-legenda__swatch--line ${item.dashed ? "is-dashed" : ""}`}
									style={{ borderColor: item.color }}
								/>
							) : (
								<span className="schema-legenda__swatch" style={{ backgroundColor: item.color }} />
							)}
							<span className="schema-legenda__label">{legendTexts[item.labelKey]}</span>
						</div>
					))}
				</div>
				<div className="flow-schema-diagram-wrap">
					<div className="flow-schema-diagram" role="img" aria-label={t("movilidad.invest.flowSchemaAlt")}>
						<svg
							className="flow-schema-diagram__connectors"
							viewBox={`0 0 ${CANVAS_W} ${CANVAS_H}`}
							preserveAspectRatio="none"
						>
							<defs>
								{(Object.keys(CATEGORY_COLOR) as FlowCategory[]).map((category) => (
									<marker
										key={category}
										id={`flow-arrow-${category}`}
										markerWidth="7"
										markerHeight="7"
										refX="5.5"
										refY="3.5"
										orient="auto"
										viewBox="0 0 7 7"
									>
										<path d="M0,0 L7,3.5 L0,7 Z" fill={CATEGORY_COLOR[category]} />
									</marker>
								))}
							</defs>
							{CONNECTIONS.map((conn) => (
								<path
									key={conn.id}
									d={conn.d}
									className={`flow-schema-diagram__connector flow-schema-diagram__connector--${conn.category} ${
										!connectionMatches(conn) ? "is-dimmed" : ""
									}`}
									strokeDasharray={conn.sequence === "alternate" ? "7 6" : undefined}
									markerEnd={`url(#flow-arrow-${conn.category})`}
								/>
							))}
						</svg>
						<div className="flow-schema-diagram__nodes">
							{NODES.map((node) => (
								<div
									key={node.id}
									className={`flow-schema-diagram__node ${node.external ? "is-external" : ""} ${
										node.main ? "is-main" : ""
									} ${isNodeDimmed(node.id) ? "is-dimmed" : ""}`}
									style={{
										left: `${(COL_X[node.col] / CANVAS_W) * 100}%`,
										top: `${(ROW_Y[node.row] / CANVAS_H) * 100}%`,
									}}
								>
									<node.Icon />
									<span>{t(`movilidad.invest.flowSchema.${node.labelKey}`)}</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<span className="text-normal flow-schema-diagram-hint">{t("movilidad.invest.flowSchemaHint")}</span>
		</div>
	);
};

export default CoFlowSchema;
