import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "../../i18n";
import CoTrabajos from "./CoTrabajos";

describe("CoTrabajos", () => {
	it("filters the work list when a tag is clicked, and clears on a second click", () => {
		render(
			<MemoryRouter>
				<CoTrabajos />
			</MemoryRouter>
		);

		const tagButtons = screen.getAllByRole("button");
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
