import { defineComponent, onMounted, ref } from "vue";

import Header from "../../components/Header.vue";
import InputField from "../../components/InputField.vue";
import FilterOption from "../../components/FilterOption.vue";
import ProviderCard from "../../components/ProviderCard.vue";

import getProvidersService from "../../services/getProvidersService";

import { IProviderData } from "../../types/interfaces.ts";
import { FilterValueType, StatusPageType } from "../../types/types.ts";

import firstStringHasSecondString from "../../utils/firstStringHasSecondString.ts";
import { InitialProvidersData } from "../../utils/initialValues.ts";

export default defineComponent({
    name: "Recharges",
    components: {
        Header,
        InputField,
        FilterOption,
        ProviderCard,
    },
    setup: () => {
        const status = ref<StatusPageType>("loading");
        const providers = ref<IProviderData[]>(InitialProvidersData);
        const currentProviders = ref<IProviderData[]>(InitialProvidersData);
        const inputValue = ref<string>("");
        const filterValue = ref<FilterValueType>("all");

        // Esperamos a que se recupere el saldo virtual antes de asignarlo al ref.
        const fetchProvidersData = async () => {
            try {
                // Llamada asincrónica a getProvidersService
                const retrievedProviders = await getProvidersService();

                if (retrievedProviders) {
                    const newProviders = retrievedProviders?.map(
                        (provider: IProviderData) => {
                            return {
                                ...provider,
                                isFavorite: false,
                            };
                        }
                    );

                    providers.value = newProviders;
                    currentProviders.value = newProviders;

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

            setFilteredProviders(providers.value, newValue);
        };

        const handleMakeFavoriteProviders = (currentProvider: string) => {
            if (typeof currentProvider !== "string") return;

            const newCurrentProviders = providers.value?.map(
                (provider: IProviderData) => {
                    if (provider?.company === currentProvider) {
                        return {
                            ...provider,
                            isFavorite: !provider?.isFavorite,
                        };
                    } else {
                        return provider;
                    }
                }
            );

            providers.value = newCurrentProviders;

            setFilteredProviders(newCurrentProviders, filterValue.value);
        };

        const handleFilterProvidersByType = (currentType: FilterValueType) => {
            if (typeof currentType !== "string") return;

            filterValue.value = currentType;

            setFilteredProviders(providers.value, currentType);
        };

        const setFilteredProviders = (
            providers: IProviderData[],
            filterValue: string
        ) => {
            let filteredProviders: IProviderData[] = providers;

            if (filterValue === "favorites") {
                filteredProviders = filteredProviders?.filter(
                    (provider: IProviderData) => provider?.isFavorite
                );
            }

            filteredProviders = filteredProviders?.filter(
                (currentProvider: IProviderData) => {
                    return firstStringHasSecondString(
                        currentProvider?.company,
                        inputValue.value
                    );
                }
            );

            currentProviders.value = filteredProviders;
        };

        onMounted(() => {
            // Llamamos a la función de carga de datos cuando el componente se monta
            fetchProvidersData();
        });

        return {
            //! Properties
            status,
            providers,
            currentProviders,
            inputValue,
            filterValue,

            //! Methods
            handleInputValue,
            handleFilterProvidersByType,
            handleMakeFavoriteProviders,
        };
    },
});
