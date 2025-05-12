import axios from '../../../utils/axios';

const getAllBooks = async (page, limit) => {
    const response = await axios.get(`/books?page=${page}&limit=${limit}`)
    return response.data;

}
export default getAllBooks