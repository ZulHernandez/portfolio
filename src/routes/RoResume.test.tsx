import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "../i18n";
import RoResume from "./RoResume";

describe("RoResume", () => {
	it("renders the résumé content and offers a download button both above and below the sheet", async () => {
		const user = userEvent.setup();
		const printSpy = vi.spyOn(window, "print").mockImplementation(() => {});

		render(
			<HelmetProvider>
				<MemoryRouter>
					<RoResume />
				</MemoryRouter>
			</HelmetProvider>
		);

		// RoResume pide su data por fetch (ver useExperienceData.ts); el cuerpo
		// del currículo no existe hasta que resuelve. Esperar a que aparezca al
		// menos una tarjeta de experiencia evita una falsa negativa por leer
		// antes de tiempo.
		await screen.findAllByRole("heading", { level: 4 });

		expect(screen.getAllByText("Contact").length).toBeGreaterThan(0);

		// Se quitaron los tabs de categoría (ver comentario en RoResume.tsx):
		// no aportaban lo suficiente para justificar mantener 4 variantes de
		// Resumen/Skills. En su lugar hay un botón de descarga arriba de la
		// hoja además del que ya existía abajo.
		const downloadButtons = screen.getAllByRole("button", { name: "Download Resume" });
		expect(downloadButtons.length).toBe(2);

		await user.click(downloadButtons[0]);
		expect(printSpy).toHaveBeenCalledTimes(1);

		printSpy.mockRestore();
	});
});
