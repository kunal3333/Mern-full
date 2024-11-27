import { createBrowserRouter} from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import Login from '../pages/login/Login'
import Forgotpassword from '../pages/forgotpass/Forgotpassword'
import Signup from '../pages/signup/Signup'

const router =  createBrowserRouter([
        {
            path:"/",
            element:<App/>,
            children:[
                {
                    path:"",
                    element: <Home/>
                },
                {
                    path:'login',
                    element:<Login/>
                },
             {
                path: "forgot-password" ,
                element:<Forgotpassword/>
             },
             {
                path:"sign-up",
                element:<Signup/>
             }
            ]
        }
])

export default router