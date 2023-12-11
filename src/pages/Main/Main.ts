import { defineComponent, ref } from "vue";

import router from "../../router.ts";

import getVirtualBalanceService from "../../services/getVirtualBalanceService";

export default defineComponent({
    name: "Main",
    components: {},
    setup: async () => {
        const virtualBalance = ref<string>("");

        // Esperamos a que se recupere el saldo virtual antes de asignarlo al ref.
        const retrievedVirtualBalance = await getVirtualBalanceService();
        virtualBalance.value = retrievedVirtualBalance;

        const navigateToRecharges = () => {
            router.push("/recharges");
        };

        return {
            //! Properties
            virtualBalance,

            //! Methods
            navigateToRecharges,
        };
    },
});
