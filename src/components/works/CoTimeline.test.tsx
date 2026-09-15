import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "../../i18n";
import CoTimeline from "./CoTimeline";

const visibleNames = () =>
	screen.getAllByRole("heading", { level: 2 }).slice(1).map((el) => el.textContent);

describe("CoTimeline", () => {
	it("rotates the visible 3-card window forward and back to the original state", async () => {
		const user = userEvent.setup();
		render(<CoTimeline />);

		const initial = visibleNames();
		expect(initial).toHaveLength(3);

		// Select the rotate arrows by their accessible name rather than by
		// position — the timeline job-selector items also expose
		// role="button" (for a11y), so a positional getAllByRole("button")
		// destructure would silently grab the wrong elements.
		const prevButton = screen.getByRole("button", { name: "Show previous experience" });
		const nextButton = screen.getByRole("button", { name: "Show next experience" });

		await user.click(nextButton);
		const afterNext = visibleNames();
		expect(afterNext).not.toEqual(initial);

		await user.click(prevButton);
		const afterPrev = visibleNames();
		expect(afterPrev).toEqual(initial);
	});
});
