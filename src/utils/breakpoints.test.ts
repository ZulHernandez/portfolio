import { describe, it, expect } from "vitest";
import { MOBILE_BREAKPOINT } from "./breakpoints";

describe("breakpoints", () => {
	it("exposes a numeric mobile breakpoint", () => {
		expect(typeof MOBILE_BREAKPOINT).toBe("number");
		expect(MOBILE_BREAKPOINT).toBeGreaterThan(0);
	});
});
