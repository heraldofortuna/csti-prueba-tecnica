import axios from "axios";

const getVirtualBalanceService = async (token: string | null) => {
    const baseUrl = import.meta.env.VITE_API_URL_BASE_SERVICE;

    const response = await axios
        .get(`${baseUrl}/getActualBalance`, {
            headers: {
                Accept: "*/*",
                Authorization: `Bearer ${token}`,
            },
        })
        .then((response: any) => {
            const { status } = response.data;

            if (status === "200") {
                return response.data.data.balanceCommerce;
            }

            if (status === "401") {
                return null;
            }
        })
        .catch((error: any) => {
            console.error("Get Virtual Balance Service Error:", error);

            return null;
        });

    return response;
};

export default getVirtualBalanceService;
