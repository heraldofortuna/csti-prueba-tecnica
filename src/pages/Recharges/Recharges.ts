import { defineComponent, onMounted, ref } from "vue";

import InputField from "../../components/InputField.vue";
import FilterOption from "../../components/FilterOption.vue";
import ProviderCard from "../../components/ProviderCard.vue";

import getProvidersService from "../../services/getProvidersService";

import { IProviderData } from "../../types/interfaces.ts";
import { StatusPageType } from "../../types/types.ts";

import firstStringHasSecondString from "../../utils/firstStringHasSecondString.ts";

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
        const filteredProviders = ref<IProviderData[]>([]);
        const inputValue = ref<string>("");

        // Esperamos a que se recupere el saldo virtual antes de asignarlo al ref.
        const fetchProvidersData = async () => {
            try {
                // Llamada asincrónica a getProvidersService
                const retrievedProviders = await getProvidersService();

                if (retrievedProviders) {
                    providers.value = retrievedProviders;
                    filteredProviders.value = retrievedProviders;

                    status.value = "success";
                } else {
                    status.value = "error";
                }
            } catch (error) {
                console.error("Error al recuperar el saldo virtual:", error);

                status.value = "error";
            }
        };

        const handleInputValue = (newValue: string) => {
            inputValue.value = newValue;

            handleFilterProviders(newValue);
        };

        const handleFilterProviders = (currentInputValue: string) => {
            filteredProviders.value = providers.value?.filter(
                (provider: IProviderData) =>
                    firstStringHasSecondString(
                        provider?.company,
                        currentInputValue
                    )
            );
        };

        onMounted(() => {
            // Llamamos a la función de carga de datos cuando el componente se monta
            fetchProvidersData();
        });

        return {
            //! Properties
            status,
            providers,
            filteredProviders,
            inputValue,

            //! Methods
            handleInputValue,
            handleFilterProviders,
        };
    },
});
