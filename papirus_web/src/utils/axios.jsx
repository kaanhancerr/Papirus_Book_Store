import axios from 'axios'

// axios.defaults.headers.common = {
//     'ngrok-skip-browser-warning': true
// }

const axiosInstance = axios.create({
    baseURL: 'https://bookstore-backend-8bbr.onrender.com',
    // baseURL: 'https://9f8e-178-250-91-6.ngrok-free.app'
})

export default axiosInstance