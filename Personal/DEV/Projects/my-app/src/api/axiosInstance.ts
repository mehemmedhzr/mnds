import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhosat:8000',
})

axiosInstance.interceptors.request.use((config) => {
    const token = sessionStorage.getItem('token');
    if (token) config.headers.Authorization = `${token}`;
    return config;
});

export default axiosInstance;