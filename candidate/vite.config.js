import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		federation({
			name: "candidateApp",
			filename: "remoteEntry.js",
			// Modules to expose
			exposes: {
				"./CandidateApp": "./src/App.jsx",
			},
			shared: ["react", "react-dom"],
		}),
	],

	build: {
		modulePreload: false,
		target: "esnext",
		minify: false,
		cssCodeSplit: false,
	},
});
