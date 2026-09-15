import { describe, it, expect } from "vitest";
import { ACCENT_COLORS } from "./accentColors";

describe("accentColors", () => {
	it("defines every accent color as a valid hex string", () => {
		const hexPattern = /^#[0-9a-fA-F]{6}$/;
		Object.values(ACCENT_COLORS).forEach((value) => {
			expect(value).toMatch(hexPattern);
		});
	});

	it("has no duplicate colors across keys", () => {
		const values = Object.values(ACCENT_COLORS);
		expect(new Set(values).size).toBe(values.length);
	});
});
