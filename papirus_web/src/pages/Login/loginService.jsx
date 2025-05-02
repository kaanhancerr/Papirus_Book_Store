import axiosInstance from "../../utils/axios";

const LoginUserService = async (credentials) => {
    const response = await axiosInstance.post('/login', credentials);
    return response.data;
}
export default LoginUserService