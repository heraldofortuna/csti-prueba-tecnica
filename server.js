import fs from "fs";
import path from "path";
import express from "express";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function createServer() {
    const app = express();

    // 1. Manejar solicitudes estáticas
    app.use(express.static(path.resolve(__dirname, "dist/client")));

    // 2. Obtener instancia de Vite
    const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: "custom",
    });

    // 3. Utilizar el middleware de Vite
    app.use(vite.middlewares);

    // 4. Manejar solicitudes de la aplicación
    app.use("*", async (req, res, next) => {
        const url = req.originalUrl;

        try {
            // 5. Leer index.html
            let template = fs.readFileSync(
                path.resolve(__dirname, "index.html"),
                "utf-8"
            );

            // 6. Aplicar transformaciones HTML de Vite
            template = await vite.transformIndexHtml(url, template);

            // 7. Cargar la entrada del servidor
            const { render } = await vite.ssrLoadModule("/src/entry-server.ts");

            // 8. Renderizar la aplicación HTML
            const appHtml = await render(url);

            // 9. Inyectar el HTML renderizado de la aplicación en la plantilla
            const html = template.replace(`<!--ssr-outlet-->`, appHtml);

            // 10. Enviar el HTML renderizado
            res.status(200).set({ "Content-Type": "text/html" }).end(html);
        } catch (e) {
            // 11. Manejar errores
            vite.ssrFixStacktrace(e);
            next(e);
        }
    });

    // 12. Manejar otras rutas aquí según tus necesidades
    app.get("/recharges", (req, res) => {
        res.send("Hola desde /recharges!");
    });

    // 13. Manejar errores
    app.use((err, req, res, next) => {
        console.error(err.stack);

        res.status(500).send("Something went wrong!");
    });

    // 14. Iniciar el servidor
    app.listen(3000);
}

createServer();
