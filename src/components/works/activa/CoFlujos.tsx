import { Fragment } from "react";
import { useTranslation } from "react-i18next";

import CoTitle from "../../general/CoTitle";
import CoKPI from "../../general/CoKPI";

import n2CreditCard from "../../../assets/imgs/works/activa/icons/n2-credit-card.svg";
import n2ShieldToggle from "../../../assets/imgs/works/activa/icons/n2-shield-toggle.svg";
import n2CheckBox from "../../../assets/imgs/works/activa/icons/n2-check-box.svg";
import n2Call from "../../../assets/imgs/works/activa/icons/n2-call.svg";
import n2MarkEmailRead from "../../../assets/imgs/works/activa/icons/n2-mark-email-read.svg";
import n2Badge from "../../../assets/imgs/works/activa/icons/n2-badge.svg";
import n2ArOnYou from "../../../assets/imgs/works/activa/icons/n2-ar-on-you.svg";
import n2RecentActors from "../../../assets/imgs/works/activa/icons/n2-recent-actors.svg";
import n2Home from "../../../assets/imgs/works/activa/icons/n2-home.svg";
import n2Enterprise from "../../../assets/imgs/works/activa/icons/n2-enterprise.svg";
import n2ContractEdit from "../../../assets/imgs/works/activa/icons/n2-contract-edit.svg";
import n2Key from "../../../assets/imgs/works/activa/icons/n2-key.svg";

import n4AddCard from "../../../assets/imgs/works/activa/icons/n4-add-card.svg";
import n4ChatInfo from "../../../assets/imgs/works/activa/icons/n4-chat-info.svg";
import n4EditLine from "../../../assets/imgs/works/activa/icons/n4-edit-line.svg";
import n4AccountCircle from "../../../assets/imgs/works/activa/icons/n4-account-circle.svg";
import n4Mintmark from "../../../assets/imgs/works/activa/icons/n4-mintmark.svg";
import n4MarkEmailRead from "../../../assets/imgs/works/activa/icons/n4-mark-email-read.svg";
import n4ArOnYou from "../../../assets/imgs/works/activa/icons/n4-ar-on-you.svg";
import n4Badge from "../../../assets/imgs/works/activa/icons/n4-badge.svg";
import n4Home from "../../../assets/imgs/works/activa/icons/n4-home.svg";
import n4AccountChildInvert from "../../../assets/imgs/works/activa/icons/n4-account-child-invert.svg";
import n4ArticlePerson from "../../../assets/imgs/works/activa/icons/n4-article-person.svg";
import n4ContractEdit from "../../../assets/imgs/works/activa/icons/n4-contract-edit.svg";

interface StatText {
	value: string;
	desc: string;
}

interface AccountCard {
	title: string;
	icon: string;
	color: string;
	stat1: StatText;
	stat2: StatText;
	stat3: StatText;
	note: string;
}

interface FlowStep {
	icon: string;
	label: string;
	branch?: { icon: string; label: string };
}

const N2_STEPS: Omit<FlowStep, "label">[] = [
	{ icon: n2ShieldToggle },
	{ icon: n2CheckBox },
	{ icon: n2Call },
	{ icon: n2MarkEmailRead },
	{ icon: n2Badge },
	{ icon: n2ArOnYou },
	{ icon: n2RecentActors },
	{ icon: n2Home },
	{ icon: n2Enterprise },
	{ icon: n2ContractEdit },
	{ icon: n2Key },
];

const N4_STEPS: (Omit<FlowStep, "label"> & { branchIcon?: string })[] = [
	{ icon: n4ChatInfo },
	{ icon: n4EditLine },
	{ icon: n4AccountCircle, branchIcon: n4Mintmark },
	{ icon: n4MarkEmailRead },
	{ icon: n4ArOnYou },
	{ icon: n4Badge },
	{ icon: n4Home, branchIcon: n4AccountChildInvert },
	{ icon: n4ArticlePerson },
	{ icon: n4ContractEdit },
];

const CoFlujos = () => {
	const { t } = useTranslation();

	const n2 = {
		title: t("activa.flujos.n2.title"),
		icon: n2CreditCard,
		color: "#333333",
		stat1: t("activa.flujos.n2.permissions", {
			returnObjects: true,
		}) as StatText,
		stat2: t("activa.flujos.n2.time", { returnObjects: true }) as StatText,
		stat3: t("activa.flujos.n2.steps", { returnObjects: true }) as StatText,
		note: t("activa.flujos.n2.note"),
	} as AccountCard;

	const n4 = {
		title: t("activa.flujos.n4.title"),
		icon: n4AddCard,
		color: "#FF2079",
		stat1: t("activa.flujos.n4.phases", { returnObjects: true }) as StatText,
		stat2: t("activa.flujos.n4.time", { returnObjects: true }) as StatText,
		stat3: t("activa.flujos.n4.steps", { returnObjects: true }) as StatText,
		note: t("activa.flujos.n4.note"),
	} as AccountCard;

	const n2Labels = t("activa.flujos.n2Steps", {
		returnObjects: true,
	}) as string[];
	const n4Labels = t("activa.flujos.n4Steps", {
		returnObjects: true,
	}) as string[];
	const n4OptionalLabels = t("activa.flujos.n4OptionalSteps", {
		returnObjects: true,
	}) as string[];

	const n2Steps: FlowStep[] = N2_STEPS.map((step, index) => ({
		icon: step.icon,
		label: n2Labels[index],
	}));
	let branchIndex = 0;
	const n4Steps: FlowStep[] = N4_STEPS.map((step, index) => {
		const base: FlowStep = { icon: step.icon, label: n4Labels[index] };
		if (step.branchIcon) {
			base.branch = {
				icon: step.branchIcon,
				label: n4OptionalLabels[branchIndex],
			};
			branchIndex += 1;
		}
		return base;
	});

	return (
		<div id={t("activa.anchors.flujos.id")} className="container-fluid">
			<CoTitle titles={t("activa.flujos.title")} />
			<span className="subtitle">{t("activa.flujos.subtitle")}</span>
			<span className="text-normal">{t("activa.flujos.intro")}</span>
			<div className="activa-accounts-row">
				{[n2, n4].map((account, index) => (
					<div key={index} className="activa-account-card" style={{ color: "" + account.color }}>
						<div className="kpis-list__card-header">
							<img loading="lazy" src={account.icon} alt="" />
							<span style={{ color: "" + account.color }}>{account.title}</span>
						</div>
						<br />
						<div className="activa-account-card__stats">
							<CoKPI
								dato={account.stat1.value}
								desc={account.stat1.desc}
								imgs={[]}
								pos="center"
								color={account.color}
							/>
							<CoKPI
								dato={account.stat2.value}
								desc={account.stat2.desc}
								imgs={[]}
								pos="center"
								color={account.color}
							/>
							<CoKPI
								dato={account.stat3.value}
								desc={account.stat3.desc}
								imgs={[]}
								pos="center"
								color={account.color}
							/>
						</div>

						<span className="text-normal">{account.note}</span>
					</div>
				))}
			</div>

			<span className="text-normal">{t("activa.flujos.comparisonIntro")}</span>

			<div className="activa-flow-block">
				<div className="activa-flow-block__header">
					<img loading="lazy" src={n2CreditCard} alt="" />
					<h5>{t("activa.flujos.n2FlowLabel")}</h5>
				</div>
				<div className="flow-schema is-n2">
					{n2Steps.map((step, index) => (
						<Fragment key={index}>
							{index !== 0 && <div className="flow-connector" />}
							<div className="flow-schema-item">
								<img loading="lazy" src={step.icon} alt="" />
								<span>{step.label}</span>
							</div>
						</Fragment>
					))}
				</div>
			</div>

			<div className="activa-flow-block">
				<div className="activa-flow-block__header">
					<img loading="lazy" src={n4AddCard} alt="" />
					<h5 className="is-n4">{t("activa.flujos.n4FlowLabel")}</h5>
				</div>
				<div className="flow-schema is-n4">
					{n4Steps.map((step, index) => (
						<Fragment key={index}>
							{index !== 0 && <div className="flow-connector" />}
							<div className="activa-flow-schema-column">
								<div className="flow-schema-item">
									<img loading="lazy" src={step.icon} alt="" />
									<span>{step.label}</span>
								</div>
								{step.branch && (
									<div className="activa-flow-branch">
										<img loading="lazy" src={step.branch.icon} alt="" />
										<span>{step.branch.label}</span>
									</div>
								)}
							</div>
						</Fragment>
					))}
				</div>
			</div>
		</div>
	);
};

export default CoFlujos;
