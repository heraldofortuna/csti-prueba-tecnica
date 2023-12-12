import axios from "axios";

const getProvidersService = async (token: string) => {
    const baseUrl = import.meta.env.VITE_API_URL_BASE_SERVICE;

    const response = await axios
        .get(`${baseUrl}/getProviders`, {
            headers: {
                Accept: "*/*",
                Authorization: `Bearer ${token}`,
            },
        })
        .then((response: any) => {
            const { status } = response.data;

            if (status === "200") {
                return response.data.data.companies;
            }

            if (status === "401") {
                return null;
            }
        })
        .catch((error: any) => {
            console.error("Get Providers Service Error:", error);

            return null;
        });

    return response;
};

export default getProvidersService;
