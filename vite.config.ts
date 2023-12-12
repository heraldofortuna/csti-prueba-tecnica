import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
    plugins: [
        Vue(),
        VitePWA({
            manifest: {
                name: "Culqi PWA Test",
                short_name: "Culqi",
                description:
                    "Una aplicación web progresiva construida con Vite y Vue para Culqi",
                start_url: "/",
                display: "standalone",
                background_color: "#ffffff",
                theme_color: "#000000",
                icons: [
                    {
                        src: "/icon.png",
                        sizes: "48x48 72x72 96x96 144x144 192x192 256x256 384x384 512x512",
                        type: "image/png",
                        purpose: "any",
                    },
                ],
            },
        }),
    ],
});
