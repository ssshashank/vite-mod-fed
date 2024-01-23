import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		federation({
			name: "remoteApp",
			filename: "remoteEntry.js",
			// Modules to expose
			exposes: {
				"./Button": "./src/components/button.jsx",
				"./Header": "./src/components/header/header.jsx",
				"./store": "./src/store/store.js",
			},
			shared: ["react", "react-dom", "jotai"],
		}),
	],
	build: {
		modulePreload: false,
		target: "esnext",
		minify: false,
		cssCodeSplit: false,
	},
});
