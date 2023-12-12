import { defineComponent, onMounted, ref } from "vue";

import InputField from "../../components/InputField.vue";
import FilterOption from "../../components/FilterOption.vue";
import ProviderCard from "../../components/ProviderCard.vue";

import getProvidersService from "../../services/getProvidersService";

import { IProviderData } from "../../types/interfaces.ts";
import { StatusPageType } from "../../types/types.ts";

export default defineComponent({
    name: "Recharges",
    components: {
        InputField,
        FilterOption,
        ProviderCard,
    },
    setup: () => {
        const status = ref<StatusPageType>("loading");
        const providers = ref<IProviderData[]>([]);

        // Esperamos a que se recupere el saldo virtual antes de asignarlo al ref.
        const fetchProvidersData = async () => {
            try {
                // Llamada asincrónica a getProvidersService
                const retrievedProviders = await getProvidersService();

                if (retrievedProviders) {
                    providers.value = retrievedProviders;
                    status.value = "success";
                } else {
                    status.value = "error";
                }
            } catch (error) {
                console.error("Error al recuperar el saldo virtual:", error);

                status.value = "error";
            }
        };

        onMounted(() => {
            // Llamamos a la función de carga de datos cuando el componente se monta
            fetchProvidersData();
        });

        return {
            //! Properties
            status,
            providers,

            //! Methods
        };
    },
});
