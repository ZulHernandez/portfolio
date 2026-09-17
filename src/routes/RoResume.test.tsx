import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "../i18n";
import RoResume from "./RoResume";

describe("RoResume", () => {
	it("switches the displayed skills when a different category tag is selected", async () => {
		const user = userEvent.setup();
		render(
			<HelmetProvider>
				<MemoryRouter>
					<RoResume />
				</MemoryRouter>
			</HelmetProvider>
		);

		// RoResume pide su data por fetch (ver useExperienceData.ts); el cuerpo
		// del currículo (donde vive "Automation") no existe hasta que resuelve.
		// Esperar a que aparezca al menos una tarjeta de experiencia evita una
		// falsa negativa por leer antes de tiempo.
		await screen.findAllByRole("heading", { level: 4 });

		const generalTag = screen.getByRole("button", { name: "General" });
		const designSystemTag = screen.getByRole("button", { name: "Design system" });

		expect(generalTag).toHaveAttribute("aria-pressed", "true");
		expect(designSystemTag).toHaveAttribute("aria-pressed", "false");

		// "Automation" only shows up under the "Design system" skills category.
		expect(screen.queryByText("Automation")).not.toBeInTheDocument();

		await user.click(designSystemTag);

		expect(generalTag).toHaveAttribute("aria-pressed", "false");
		expect(designSystemTag).toHaveAttribute("aria-pressed", "true");
		// The résumé sheet renders twice (print + scaled screen copy).
		expect(screen.getAllByText("Automation").length).toBeGreaterThan(0);
	});
});
