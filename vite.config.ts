/// <reference types="vitest/config" />
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

const ASSET_EXTENSIONS = /\.(svg|png|jpe?g|gif|webp|mp4|ico)$/;
const FILE_MOCK_PATH = path.resolve(__dirname, "src/test/fileMock.ts");

// Los componentes importan decenas de imágenes/videos reales
// (src/assets/imgs/...); las pruebas no necesitan esos binarios. Vite's
// `resolve.alias` with a RegExp `find` didn't reliably survive Vitest's
// config handling here, so this redirects any such import to a single
// harmless stub via a plugin hook instead — active only under `vitest`
// (process.env.VITEST is unset in real dev/build).
const mockStaticAssetsForTests = (): Plugin => ({
	name: "mock-static-assets-for-tests",
	enforce: "pre",
	resolveId(source) {
		if (ASSET_EXTENSIONS.test(source)) {
			return FILE_MOCK_PATH;
		}
		return null;
	},
});

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), ...(process.env.VITEST ? [mockStaticAssetsForTests()] : [])],
	server: {
		host: "0.0.0.0", // Allows access from other devices
	},
	build: {
		sourcemap: true, // 📍 Habilita el mapa de fuentes para el análisis
	},
	test: {
		environment: "jsdom",
		globals: true,
		setupFiles: ["./src/test/setup.ts"],
		css: false,
	},
});
