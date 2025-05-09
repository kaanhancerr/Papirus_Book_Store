import axiosInstance from "../../utils/axios";

//kullanıcıdan alınan veriler (credentials) backend'in beklediği formatta (payload) dönüştürülür. Son olarak, backend'e POST isteği gönderilir ve yanıt alınır.
const UserRegisterService = async (credentials) => {
    const payload = {
        username: credentials.username,
        password: credentials.password,
        person: {
            firstName: credentials.name,
            lastName: credentials.surname,
            email: credentials.email,
            phone: credentials.phone
        }
    };

    const response = await axiosInstance.post('/register', payload);
    return response.data;
}
export default UserRegisterService