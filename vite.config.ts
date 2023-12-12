import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

import manifest from "./manifest.json";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        Vue(),
        VitePWA({
            manifest: manifest,
        }),
    ],
});
