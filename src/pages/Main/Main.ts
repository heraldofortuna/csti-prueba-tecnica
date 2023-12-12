import { defineComponent, onMounted, ref } from "vue";

import Card from "../../components/Card.vue";

import router from "../../router.ts";

import getVirtualBalanceService from "../../services/getVirtualBalanceService";

import { StatusPageType } from "../../types/types.ts";

export default defineComponent({
    name: "Main",
    components: {
        Card,
    },
    setup: () => {
        const status = ref<StatusPageType>("loading");
        const virtualBalance = ref<string>("");

        const fetchVirtualBalanceData = async () => {
            try {
                // Esperamos a que se recupere el saldo virtual antes de asignarlo al ref.
                const retrievedVirtualBalance =
                    await getVirtualBalanceService();

                if (retrievedVirtualBalance) {
                    virtualBalance.value = retrievedVirtualBalance;
                    status.value = "success";
                } else {
                    status.value = "error";
                    router.push("/error");
                }
            } catch (error) {
                console.error("Error al recuperar el saldo virtual:", error);

                status.value = "error";
                router.push("/error");
            }
        };

        const navigateToRecharges = () => {
            router.push("/recharges");
        };

        onMounted(() => {
            // Llamamos a la función de carga de datos cuando el componente se monta
            fetchVirtualBalanceData();
        });

        return {
            //! Properties
            status,
            virtualBalance,

            //! Methods
            navigateToRecharges,
        };
    },
});
