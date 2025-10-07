import { useNavigate, useSearchParams } from "react-router-dom";
import { useAccessToken } from "../hooks/useAuth";
import { useEffect } from "react";

export default function Callback() {
    const [searchParams] = useSearchParams();
    const code = searchParams.get('code');
    const navigate = useNavigate();
    const { mutate } = useAccessToken();

    useEffect(() => {
        if (code) {
            console.log(code)
            mutate(code, {
                onSuccess: () => {
                    console.log('succ')
                    navigate('/');
                },
                onError: (error) => {
                    console.log('Error occured in getAccess: ', error);
                }
            })
        }
    }, [code])

    return(
        <h2>that's callback page</h2>
    )
}