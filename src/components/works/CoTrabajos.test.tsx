import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "../../i18n";
import CoTrabajos from "./CoTrabajos";

describe("CoTrabajos", () => {
	it("filters the work list when a tag is clicked, and clears on a second click", async () => {
		render(
			<MemoryRouter>
				<CoTrabajos />
			</MemoryRouter>
		);

		// Los tags salen de /data/works.json, que ahora se pide en runtime
		// (useWorksData) en vez de venir ya en el bundle — hay que esperar a
		// que resuelva el fetch antes de que existan los botones.
		const tagButtons = await screen.findAllByRole("button");
		expect(tagButtons.length).toBeGreaterThan(0);

		const firstTag = tagButtons[0];
		const tagLabel = firstTag.textContent;

		fireEvent.click(firstTag);
		expect(firstTag.className).toContain("active");

		// Clicking the same tag again clears the filter.
		fireEvent.click(firstTag);
		expect(firstTag.className).not.toContain("active");
		expect(tagLabel).toBeTruthy();
	});
});
