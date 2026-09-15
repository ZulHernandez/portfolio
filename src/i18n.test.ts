import { describe, it, expect, beforeEach } from "vitest";
import i18n from "./i18n";

describe("i18n / document.documentElement.lang sync", () => {
	beforeEach(async () => {
		await i18n.changeLanguage("en");
	});

	it("sets <html lang> to the initial language on load", () => {
		expect(document.documentElement.lang).toBe("en");
	});

	it("updates <html lang> whenever the active language changes", async () => {
		await i18n.changeLanguage("es");
		expect(document.documentElement.lang).toBe("es");

		await i18n.changeLanguage("en");
		expect(document.documentElement.lang).toBe("en");
	});
});
