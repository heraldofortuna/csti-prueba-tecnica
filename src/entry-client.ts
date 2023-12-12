import { createApp } from "./main.js";

/**
 * initiate the Vue App for a client-side application
 */
const { app } = createApp();
app.mount("#app");

const token = import.meta.env.VITE_API_AUTH_TOKEN;
localStorage.setItem("token", token);
