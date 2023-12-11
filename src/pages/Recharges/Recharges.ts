import { defineComponent, ref } from "vue";

import router from "../../router.ts";

import getProvidersService from "../../services/getProvidersService";

import { IProviderData } from "../../types/interfaces.ts";

export default defineComponent({
    name: "Recharges",
    components: {},
    setup: async () => {
        const providers = ref<IProviderData[]>([]);

        // Esperamos a que se recupere el saldo virtual antes de asignarlo al ref.
        const retrieveProviders = await getProvidersService();
        providers.value = retrieveProviders;

        const returnToMain = () => {
            router.push("/");
        };

        return {
            //! Properties
            providers,

            //! Methods
            returnToMain,
        };
    },
});
