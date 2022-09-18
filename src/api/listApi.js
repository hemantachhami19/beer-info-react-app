import axios from "axios";

const getItemsList = async (page, limit = 4) => {
    const response = await axios.get(
        `https://api.punkapi.com/v2/beers?page=${page}&per_page=${limit}`
    );
    return response && response.data || [];
}
export default getItemsList;