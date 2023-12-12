import axios from "axios";

const getProvidersService = async () => {
    const token =
        "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Indpbmdlcmxpb24uY3VscWkiLCJleHAiOjE3MDY5NDIxNjR9.j7_UICJFBvPiHv_bhnoRNprVU_DaML41Vjmd51jcRDI";

    const baseUrl = "https://aspexpressapi-production.up.railway.app";

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
