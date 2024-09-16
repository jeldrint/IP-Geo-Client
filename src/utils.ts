import { UserLogin, UserLoginResponse } from "./types/types";

type userAuthProps= UserLogin;
type setErrorProps = React.Dispatch<React.SetStateAction<string | null>>;
type setLoadingProps = React.Dispatch<React.SetStateAction<boolean>>;
type setStatusProps = React.Dispatch<React.SetStateAction<UserLoginResponse>>

export const fetchLogin = (userAuth: userAuthProps, setError: setErrorProps, setLoading: setLoadingProps, setLoginStatus: setStatusProps) : void => {
    setLoading(true);

    console.log(userAuth)

    const fetchData = async () => {
        try{
            const data = await fetch('/api',{
                method: "POST",
                mode: 'cors',
                headers: { "Content-Type": "application/json" },

                body: JSON.stringify({
                    username: userAuth.username,
                    password: userAuth.password
                })
            })
            const response: UserLoginResponse = await data.json();
            console.log(response)
            setLoginStatus(response)

        }catch(error){
            const message =
                error instanceof Error ? error.message :  'There was an error somewhere...'
            setError(message)
        }finally{
            setLoading(false);
        }
    }
    fetchData();
}