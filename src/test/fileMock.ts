// Vitest alias target (see vite.config.ts `test.alias`) for every static
// asset extension the codebase imports (svg/png/webp/gif/mp4/...). Tests
// never need the real binary files on disk — every such import resolves to
// this one harmless string instead.
export default "test-file-stub";
