import { useMutation, useQuery } from "@tanstack/react-query";
import { getAccessToken, getAuthenticationUrl } from "../api/auth";

export const useAuthenticationUrl = () => useQuery({
    queryKey: ['authUrl'],
    queryFn: getAuthenticationUrl
});

export const useAccessToken = () => {
    return useMutation({
        mutationFn: async (code: string) => {
            console.log('adfsadf')
            const { access_token, id_token } = await getAccessToken(code);
            console.log('12312312313')
            sessionStorage.setItem('access_token', access_token);
            sessionStorage.setItem('id_token', id_token);
            return { access_token, id_token };
        },
    });
}