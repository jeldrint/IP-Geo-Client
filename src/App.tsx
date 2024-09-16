import { Link } from "react-router-dom"
import { UserLogin, UserLoginResponse } from "./types/types"
import { useState } from "react"
import { fetchLogin } from "./utils";


const App = (): React.ReactElement => {
    const [userAuth, setUserAuth] = useState<UserLogin>({username: '', password: ''});
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [loginStatus, setLoginStatus] = useState<UserLoginResponse>({status: ''});

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        switch(e.target.name){
            case 'username':
                setUserAuth({...userAuth, username: e.target.value})
                break;
            case 'password':
                setUserAuth({...userAuth, password: e.target.value})
                break;
        }
        e.preventDefault();
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        fetchLogin(userAuth, setError, setLoading, setLoginStatus)
        e.preventDefault();
    }

    if(error) {return <p>Login error. Please contact customer support. </p>}

    return (
        <div className='m-8'>
            <p className="font-myFont text-3xl">IP GEO APP. Please Log-in. </p>
            <br />
            <form onSubmit={handleSubmit}>
                <div className="display: inline-block mr-3">
                    <label htmlFor="username">Username: </label>
                    <input name="username" type="text" required onChange={handleChange} className="border border-black rounded-sm px-1 py-[2px]" />
                </div>
                <div className="display: inline-block mr-3">
                    <label htmlFor="password">Password: </label>
                    <input name="password" type="password" required onChange={handleChange} className="border border-black rounded-sm px-1 py-[2px]" />
                </div>
                <button type="submit" className="cursor-pointer text-sm rounded py-1 px-3  transition-colors bg-gray-700 hover:bg-gray-900 active:bg-gray-500 text-neutral-50">Log-in</button>
            </form>
            <br />
            { loading ?
                <p>Verifying user, please wait... </p> : 
                <p className={loginStatus.status ==='log in failed' ? "text-red-600" : "hidden"} >Your username or password is incorrect.</p>
            }
            <br />
            <p>No account yet? <Link to='/techy-blog/sign-up' className="underline font-bold transition duration-150 hover:text-sky-600 ">Sign-up!</Link></p>
            <br />
            <Link to='/' className="display-flex font-bold transition duration-150 hover:text-sky-600 ">
                {String.fromCharCode(171)} Return to Home
            </Link> 
        </div>
    )
}

export default App