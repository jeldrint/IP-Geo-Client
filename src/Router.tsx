import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import App from './App'


const Router = () : React.ReactElement => {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Navigate to='/ip-geo-app' />
        },
        {
            path: '/ip-geo-app',
            element: <App />
        }
    ])

    return <RouterProvider router={router} />
}

export default Router;