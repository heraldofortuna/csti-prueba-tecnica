import { createSSRApp } from "vue";

import App from "./App.vue";

import router from "./router";

import "./style.css";

export const createApp = () => {
    /**
     * use createSSRApp to render the Vue App in the server
     * and send it to the user to do hydration process
     */
    const app = createSSRApp(App);

    app.use(router);

    return {
        app,
    };
};
