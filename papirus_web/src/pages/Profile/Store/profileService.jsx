import axios from '../../../utils/axios'

export const updateUserInfo = async (credentials) => {
    const response = await axios.post('/updateUserInfo', credentials);
    return response.data;
}

// Kullanici bilgilerini dondurur.
export const getLoggedUser = async (_id) => {
    const response = await axios.post('/getLoggedUser', { _id });
    return response.data;
}