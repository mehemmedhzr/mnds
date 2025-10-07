import axiosInstance from './axiosInstance';

export const getAuthenticationUrl = async () => {
    // const { data } = await axios.get('/getAuthenticationUrl');
    const {data} = {data: 'http://localhost:5173/callback?code=12'};
    return data;
};

export const getAccessToken = async (code: string) => {
    try {
        const { data } = await axiosInstance.post('/api/digital-login/get-access-token', {code});
        // const { data } = {data: {access_token: '111', id_token: '222'}};
        console.log(data)
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const getLoginSession = async (token: string) => {
    const { data } = await axiosInstance.post('/getLoginSession', {token});
    return data;
}