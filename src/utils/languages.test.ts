import { describe, it, expect } from "vitest";
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from "./languages";

describe("languages", () => {
	it("lists at least one supported language with a code and label", () => {
		expect(SUPPORTED_LANGUAGES.length).toBeGreaterThan(0);
		SUPPORTED_LANGUAGES.forEach((lang) => {
			expect(lang.code).toBeTruthy();
			expect(lang.label).toBeTruthy();
		});
	});

	it("has a default language that is itself a supported language", () => {
		expect(SUPPORTED_LANGUAGES.map((lang) => lang.code)).toContain(DEFAULT_LANGUAGE);
	});
});
