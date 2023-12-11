import { createRouter, createMemoryHistory } from "vue-router";

import Main from "./pages/Main/Main.vue";
import Recharges from "./pages/Recharges/Recharges.vue";

const routes = [
    {
        path: "/",
        name: "Recargas y pagos",
        component: Main,
    },
    {
        path: "/recharges",
        name: "Recargas",
        component: Recharges,
    },
];

const router = createRouter({
    history: createMemoryHistory(),
    routes: routes,
});

router.beforeEach((to, _, next) => {
    document.title = to.name as any;

    next();
});

export default router;
