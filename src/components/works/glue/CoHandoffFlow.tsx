import { useState } from "react";
import type { ReactElement, CSSProperties } from "react";
import { useTranslation } from "react-i18next";

// Reemplaza el diagrama anterior (EN-hand-off.svg / ES-hand-off.svg): esas
// imágenes traían el texto ya convertido a paths (sin <text> editable), lo
// que además dejó una etiqueta ("ingesta estilos") pegada en español dentro
// de la versión en inglés, imposible de corregir sin volver a exportar el
// archivo de diseño. Aquí el "diagrama" es DOM real — texto vía i18n,
// íconos dibujados a mano — así que es bilingüe de verdad y se puede seguir
// editando como cualquier otro texto del sitio.
//
// El pipeline real tiene dos historias distintas (ver conversación con el
// usuario): el día a día de "Distribution" (Figma → JSON → CLI → repo →
// consumo) y el flujo de "Extension" para dar de alta un nuevo sistema de
// diseño, que se injerta a la mitad del primero y vuelve a él. Se muestran
// como dos flujos seleccionables (mismo patrón que los "test flows" de
// MoviLidad en CoFlow.tsx) en vez de un solo diagrama con flechas cruzadas
// en todas direcciones.

const iconProps = {
	width: 28,
	height: 28,
	viewBox: "0 0 24 24",
	fill: "none" as const,
	stroke: "currentColor",
	strokeWidth: 1.6,
	strokeLinecap: "round" as const,
	strokeLinejoin: "round" as const,
};

const IconDesign = () => (
	<svg {...iconProps}>
		<rect x="3" y="3" width="7" height="7" rx="1.2" />
		<rect x="14" y="3" width="7" height="7" rx="1.2" />
		<rect x="3" y="14" width="7" height="7" rx="1.2" />
		<circle cx="17.5" cy="17.5" r="3.5" />
	</svg>
);

const IconJson = () => (
	<svg {...iconProps}>
		<path d="M8 4c-2 0-3 1-3 3v3c0 1-.5 2-2 2 1.5 0 2 1 2 2v3c0 2 1 3 3 3" />
		<path d="M16 4c2 0 3 1 3 3v3c0 1 .5 2 2 2-1.5 0-2 1-2 2v3c0 2-1 3-3 3" />
	</svg>
);

const IconTerminal = () => (
	<svg {...iconProps}>
		<rect x="2.5" y="4" width="19" height="16" rx="2" />
		<path d="M6.5 9l3.5 3-3.5 3" />
		<path d="M13 15h5" />
	</svg>
);

const IconRepo = () => (
	<svg {...iconProps}>
		<circle cx="6" cy="6" r="2.2" />
		<circle cx="6" cy="18" r="2.2" />
		<circle cx="18" cy="9" r="2.2" />
		<path d="M6 8.2V15.8" />
		<path d="M6 12c4 0 6-1 6-4.5" />
	</svg>
);

const IconApply = () => (
	<svg {...iconProps}>
		<circle cx="12" cy="12" r="9" />
		<path d="M8 12.5l2.5 2.5 5.5-6" />
	</svg>
);

const IconExtend = () => (
	<svg {...iconProps}>
		<path d="M12 3v7M12 14v7M3 12h7M14 12h7" />
		<circle cx="12" cy="12" r="2.6" />
	</svg>
);

const IconTranslate = () => (
	<svg {...iconProps}>
		<path d="M3.5 6h8M7.5 4v2M11 6c-.5 4.5-2.8 8-6.5 10" />
		<path d="M5.5 11c1 1.8 2.7 3.3 5 4.3" />
		<path d="M13.5 20l3.5-9 3.5 9" />
		<path d="M15 17.2h4" />
	</svg>
);

type FlowSlug = "distribution" | "extension";

interface FlowStepText {
	label: string;
	description: string;
}

const FLOW_ICONS: Record<FlowSlug, (() => ReactElement)[]> = {
	distribution: [IconDesign, IconJson, IconTerminal, IconRepo, IconApply],
	extension: [IconExtend, IconTranslate, IconTerminal, IconRepo],
};

const FLOW_COLORS: Record<FlowSlug, string> = {
	distribution: "#FF2079",
	extension: "#5010F3",
};

const CoHandoffFlow = () => {
	const { t } = useTranslation();
	const [flow, setFlow] = useState<FlowSlug>("distribution");
	const [activeStep, setActiveStep] = useState(0);

	const flowSlugs: FlowSlug[] = ["distribution", "extension"];

	const stepsBySlug = Object.fromEntries(
		flowSlugs.map((slug) => [
			slug,
			(t(`glue.future.handoffFlows.${slug}.steps`, { returnObjects: true }) as FlowStepText[]).map(
				(step, index) => ({ ...step, Icon: FLOW_ICONS[slug][index] })
			),
		])
	) as Record<FlowSlug, (FlowStepText & { Icon: () => ReactElement })[]>;

	const steps = stepsBySlug[flow];
	const color = FLOW_COLORS[flow];

	const selectFlow = (slug: FlowSlug) => {
		setFlow(slug);
		setActiveStep(0);
	};

	return (
		<div className="handoff-flow">
			<div className="handoff-flow__tabs">
				{flowSlugs.map((slug) => (
					<button
						key={slug}
						type="button"
						className={`handoff-flow__tab ${flow === slug ? "active" : ""}`}
						// El acento (rosa "Distribution", morado "Extension") ya no solo
						// pinta el fondo de la pestaña activa: ahora también define el
						// color de borde/texto en reposo, vía variable CSS, para que la
						// pestaña use el mismo lenguaje de botón con borde que el resto
						// del sitio (ver .btn en _base.scss) en vez del chip plano anterior.
						style={{ "--tab-accent": FLOW_COLORS[slug] } as CSSProperties}
						onClick={() => selectFlow(slug)}
						aria-pressed={flow === slug}
					>
						{t(`glue.future.handoffFlows.tabs.${slug}`)}
					</button>
				))}
			</div>
			<div className="handoff-flow__steps" style={{ color }}>
				{steps.map((step, index) => (
					<div key={index} className="handoff-flow__step-wrap">
						{index !== 0 && <div className="handoff-flow__connector" />}
						<button
							type="button"
							className="handoff-flow__node"
							style={{ color: activeStep === index ? color : undefined }}
							onClick={() => setActiveStep(index)}
							aria-pressed={activeStep === index}
						>
							<step.Icon />
							<span>{step.label}</span>
						</button>
					</div>
				))}
			</div>
			<div className="handoff-flow__description">
				<span className="text-normal">{steps[activeStep].description}</span>
			</div>
		</div>
	);
};

export default CoHandoffFlow;
