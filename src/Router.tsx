import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import App from './App'
import { Practice } from './components/PracticeCSSGrid'


const Router = () : React.ReactElement => {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Navigate to='/ip-geo-app' />
        },
        {
            path: '/ip-geo-app',
            element: <Practice />
        }
    ])

    return <RouterProvider router={router} />
}

export default Router;