import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import devServer from "@hono/vite-dev-server";
import build from "@hono/vite-build/bun";
import adapter from "@hono/vite-dev-server/bun";
import packageJson from "./package.json";

const external = Object.keys(packageJson.dependencies);

export default defineConfig({
	plugins: [
		devServer({
			entry: "src/index.ts",
			adapter,
		}),
		build({
			entry: "src/index.ts",
			outputDir: "build",
			emptyOutDir: true,
			external,
		}),
	],
	server: {
		port: 3000,
	},
	resolve: {
		alias: {
			api: fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
});
