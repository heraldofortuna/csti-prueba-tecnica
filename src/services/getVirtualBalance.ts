import axios from "axios";

const baseUrl = import.meta.env.BASE_SERVICE_URL;

const getVirtualBalance = async () => {
    const response = await axios.get(`${baseUrl}/getActualBalance`);

    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error(response.statusText);
    }
};

export default getVirtualBalance;
