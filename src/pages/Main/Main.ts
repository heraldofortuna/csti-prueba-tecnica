import { defineComponent, onMounted, ref } from "vue";

import Header from "../../components/Header.vue";
import Card from "../../components/Card.vue";

import router from "../../router.ts";

import getVirtualBalanceService from "../../services/getVirtualBalanceService";

import { StatusPageType } from "../../types/types.ts";

export default defineComponent({
    name: "Main",
    components: {
        Header,
        Card,
    },
    setup: () => {
        const token = ref<string | null>(null);
        const status = ref<StatusPageType>("loading");
        const virtualBalance = ref<string>("");

        const getVirtualBalanceData = async () => {
            if (token.value) {
                try {
                    // Esperamos a que se recupere el saldo virtual antes de asignarlo al ref.
                    const retrievedVirtualBalance =
                        await getVirtualBalanceService(token.value);

                    if (retrievedVirtualBalance) {
                        virtualBalance.value = retrievedVirtualBalance;
                        status.value = "success";
                    } else {
                        navigateToError();
                    }
                } catch (error) {
                    console.error(
                        "Error al recuperar el saldo virtual:",
                        error
                    );

                    navigateToError();
                }
            } else {
                navigateToError();
            }
        };

        const navigateToRecharges = () => {
            router.push("/recharges");
        };

        const navigateToError = () => {
            status.value = "error";
            router.push("/error");
        };

        const reloadGetVirtualBalanceData = async () => {
            status.value = "loading";

            await getVirtualBalanceData();
        };

        onMounted(() => {
            const currentToken = localStorage.getItem("token");

            token.value = currentToken;

            // Llamamos a la función de carga de datos cuando el componente se monta
            getVirtualBalanceData();
        });

        return {
            //! Properties
            status,
            virtualBalance,

            //! Methods
            navigateToRecharges,
            reloadGetVirtualBalanceData,
        };
    },
});
