import "@testing-library/jest-dom/vitest";

// jsdom doesn't implement scrollTo/scrollIntoView; a few components
// (e.g. CoTimeline) call them as a side effect of interactions under test.
if (!Element.prototype.scrollTo) {
	Element.prototype.scrollTo = () => {};
}
if (!Element.prototype.scrollIntoView) {
	Element.prototype.scrollIntoView = () => {};
}
