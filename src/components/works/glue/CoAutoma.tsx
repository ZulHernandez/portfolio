import { useTranslation } from "react-i18next";
import { useRef } from "react";

import CoTitle from "../../../components/general/CoTitle";
import CoKPI from "../../general/CoKPI";
import CoBtn from "../../general/CoBtn";

import projectSetter from "../../../assets/imgs/works/glue/projectSetter.svg";
import plpFiller from "../../../assets/imgs/works/glue/plpFiller.svg";
import frameReferencer from "../../../assets/imgs/works/glue/frameReferencer.svg";
import arrow from "../../../assets/imgs/works/glue/arrow_back.svg";

import credential from "../../../assets/imgs/works/glue/credential.svg";
import crawler from "../../../assets/imgs/works/glue/crawler.svg";

import node from "../../../assets/imgs/works/glue/node.svg";
import express from "../../../assets/imgs/works/glue/express.svg";
import puppeteer from "../../../assets/imgs/works/glue/puppeteer.svg";
import js from "../../../assets/imgs/works/glue/js.svg";
import render from "../../../assets/imgs/works/glue/render.svg";
import insomnia from "../../../assets/imgs/works/glue/Insomnia.svg";
import cron from "../../../assets/imgs/works/glue/cron.svg";

interface KPIData {
	dato: string;
	desc: string;
}

interface CapacidadItem {
	nivel: number;
	text: string;
}

interface CoCardPluginProps {
	icon: string;
	title: string[];
	description: string;
	kpi: KPIData[];
	color: string;
	capacidades: CapacidadItem[];
}

const CoCardPlugin = ({ icon, title, description, kpi, color, capacidades }: CoCardPluginProps) => {
	const { t } = useTranslation();

	return (
		<div className="plugins-carrousel__card">
			<div className="plugins-carrousel__card-header">
				<img loading="lazy" src={icon} alt={title.join(" ")} />
				<div className="plugins-carrousel__card-header-title">
					<span className="text-normal" style={{ color: color }}>
						{title[0]}
					</span>
					<span className="text-normal" style={{ color: color }}>
						{title[1]}
					</span>
				</div>
			</div>
			<span className="text-normal">{description}</span>
			<hr
				style={{
					width: "100%",
					borderColor: "#cccccc",
					backgroundColor: "#cccccc",
					borderWidth: "0.15rem",
					borderStyle: "solid",
					borderRadius: "0.5rem",
				}}
			/>
			<div className="plugins-carrousel__card-kpi-list">
				{kpi.length === 1 ? (
					<CoKPI title="" dato={kpi[0].dato} desc={kpi[0].desc} imgs={[null]} color={color} pos="center" />
				) : kpi.length === 2 ? (
					<>
						<CoKPI title="" dato={kpi[0].dato} desc={kpi[0].desc} imgs={[null]} color="#4D4D4D" pos="center" />
						<img loading="lazy" src={arrow} alt="" />
						<CoKPI title="" dato={kpi[1].dato} desc={kpi[1].desc} imgs={[null]} color={color} pos="center" />
					</>
				) : null}
			</div>
			<span className="subtitle">{t("glue.automa.capabilitiesLabel")}</span>
			<div style={{ paddingLeft: "2rem" }}>
				{capacidades.map((capacidad, index) => (
					<li
						className="text-normal"
						key={index}
						style={{ marginLeft: capacidad.nivel * 2 + "rem" }}
					>
						{capacidad.text}
					</li>
				))}
			</div>
		</div>
	);
};

interface CoCardServerProps {
	icon: string;
	title: string[];
	description: string;
	tech: string[];
}

const CoCardServer = ({ icon, title, description, tech }: CoCardServerProps) => {
	return (
		<div id="server-card" className="plugins-carrousel__card">
			<div className="plugins-carrousel__card-header">
				<img loading="lazy" src={icon} alt={title.join(" ")} />
				<div className="plugins-carrousel__card-header-title">
					<span className="text-normal" style={{ color: "#4D4D4D" }}>
						{title[0]}
					</span>
					<span className="text-normal" style={{ color: "#4D4D4D" }}>
						{title[1]}
					</span>
				</div>
				<div className="plugins-carrousel__card-header-tech">
					{tech.map((item, index) => (
						<img
							loading="lazy"
							key={index}
							src={item}
							style={{ width: "2rem", height: "2rem", margin: "0 0.5rem" }}
						/>
					))}
				</div>
			</div>
			<hr
				style={{
					width: "100%",
					borderColor: "#cccccc",
					backgroundColor: "#cccccc",
					borderWidth: "0.15rem",
					borderStyle: "solid",
					borderRadius: "0.5rem",
				}}
			/>
			<span className="text-normal">{description}</span>
		</div>
	);
};

// Cuánto desplaza cada click de flecha (ver .carrousel-nav en _glue.scss) —
// mismo valor que .colab-nav en Home y .music-nav en About. Solo aplica al
// carrusel de plugins: el de servers no scrollea en desktop (ver #server en
// _glue.scss), así que no lleva flechas.
const SCROLL_AMOUNT = 320;

const CoAutoma = () => {
	const { t } = useTranslation();
	const pluginsRef = useRef<HTMLDivElement>(null);

	const scrollPlugins = (direction: 1 | -1) => {
		pluginsRef.current?.scrollBy({ left: direction * SCROLL_AMOUNT, behavior: "smooth" });
	};

	// Los niveles de indentación de "capacidades" no se traducen; el texto sí
	// (glue.automa.plugins.<slug>.capabilities, mismo orden).
	const capNiveles: Record<string, number[]> = {
		projectSetter: [0, 0, 0, 1, 1, 1, 1, 0],
		plpFiller: [0, 0, 0],
		frameReferencer: [0, 0, 1, 1, 1, 0],
	};

	const buildCapacidades = (slug: string): CapacidadItem[] => {
		const texts = t(`glue.automa.plugins.${slug}.capabilities`, { returnObjects: true }) as string[];
		return capNiveles[slug].map((nivel, index) => ({ nivel, text: texts[index] }));
	};

	const percentSetter = Math.round(100 - (30 * 100) / 1800);
	const percentFiller = Math.round(100 - (30 * 100) / 3600);

	const plugins = [
		{
			icon: projectSetter,
			title: t("glue.automa.plugins.projectSetter.title", { returnObjects: true }) as string[],
			description: t("glue.automa.plugins.projectSetter.description"),
			kpi: [
				{ dato: t("glue.automa.plugins.projectSetter.kpi1Value"), desc: t("glue.automa.plugins.projectSetter.kpi1Desc") },
				{
					dato: t("glue.automa.plugins.projectSetter.kpi2Value"),
					desc: t("glue.automa.plugins.projectSetter.kpi2DescTemplate", { percent: percentSetter }),
				},
			],
			color: "#FF3C8A",
			capacidades: buildCapacidades("projectSetter"),
		},
		{
			icon: plpFiller,
			title: t("glue.automa.plugins.plpFiller.title", { returnObjects: true }) as string[],
			description: t("glue.automa.plugins.plpFiller.description"),
			kpi: [
				{ dato: t("glue.automa.plugins.plpFiller.kpi1Value"), desc: t("glue.automa.plugins.plpFiller.kpi1Desc") },
				{
					dato: t("glue.automa.plugins.plpFiller.kpi2Value"),
					desc: t("glue.automa.plugins.plpFiller.kpi2DescTemplate", { percent: percentFiller }),
				},
			],
			color: "#5010F3",
			capacidades: buildCapacidades("plpFiller"),
		},
		{
			icon: frameReferencer,
			title: t("glue.automa.plugins.frameReferencer.title", { returnObjects: true }) as string[],
			description: t("glue.automa.plugins.frameReferencer.description"),
			kpi: [
				{ dato: t("glue.automa.plugins.frameReferencer.kpi1Value"), desc: t("glue.automa.plugins.frameReferencer.kpi1Desc") },
			],
			color: "#EC48FC",
			capacidades: buildCapacidades("frameReferencer"),
		},
	];

	const servers = [
		{
			icon: credential,
			title: t("glue.automa.servers.credential.title", { returnObjects: true }) as string[],
			description: t("glue.automa.servers.credential.description"),
			tech: [node, express, js, render, insomnia, cron],
		},
		{
			icon: crawler,
			title: t("glue.automa.servers.crawler.title", { returnObjects: true }) as string[],
			description: t("glue.automa.servers.crawler.description"),
			tech: [node, express, puppeteer, js, render, insomnia, cron],
		},
	];

	return (
		<div id={t("glue.anchors.automa.id")} className="container-fluid">
			<CoTitle titles={t("glue.automa.title")} />
			<span className="text-normal">{t("glue.automa.intro")}</span>
			<div className="plugins">
				<span className="subtitle">{t("glue.automa.pluginsLabel")}</span>
				<div className="plugins-carrousel" ref={pluginsRef}>
					{plugins.map((plugin, index) => (
						<CoCardPlugin
							key={index}
							icon={plugin.icon}
							title={plugin.title}
							description={plugin.description}
							kpi={plugin.kpi}
							color={plugin.color}
							capacidades={plugin.capacidades}
						/>
					))}
				</div>
				<div className="carrousel-nav">
					<CoBtn
						type="secondary"
						icon="block"
						onClick={() => scrollPlugins(-1)}
						ariaLabel={t("caseStudy.carousel.prev")}
						style={{ transform: "scale(0.5) rotate(180deg)" }}
					/>
					<CoBtn
						type="secondary"
						icon="block"
						onClick={() => scrollPlugins(1)}
						ariaLabel={t("caseStudy.carousel.next")}
						style={{ transform: "scale(0.5)" }}
					/>
				</div>
			</div>
			<div className="plugins">
				<span className="subtitle">{t("glue.automa.serversLabel")}</span>
				<div id="server" className="plugins-carrousel">
					{servers.map((server, index) => (
						<CoCardServer
							key={index}
							icon={server.icon}
							title={server.title}
							description={server.description}
							tech={server.tech}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default CoAutoma;
