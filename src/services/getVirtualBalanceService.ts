import axios from "axios";

const getVirtualBalanceService = async () => {
    const token =
        "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Indpbmdlcmxpb24uY3VscWkiLCJleHAiOjE3MDY5NDIxNjR9.j7_UICJFBvPiHv_bhnoRNprVU_DaML41Vjmd51jcRDI";

    const baseUrl =
        "http://bun-burn-env.eba-ftyx2m3h.us-east-1.elasticbeanstalk.com";

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
