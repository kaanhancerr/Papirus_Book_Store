import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://bookstore-backend-8bbr.onrender.com',
})
export default axiosInstance