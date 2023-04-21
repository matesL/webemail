import { useRoutes } from 'react-router-dom'

import Login from '../page/Login'
import Index from '../page/index'
import SignUp from '../page/SignUp'
import AddEmails from '../page/AddEmails'
import Sendemail from '../page/sendmail'
const routers = [
    {
        path:'/', 
        element:< Login />
    },  
    {
        path:'/index', 
        element:< Index />
    },  
    {
        path:'/singup', 
        element:< SignUp />
    },
    {
        path:'/add', 
        element:< AddEmails />
    }, 
    {
        path:'/sendemail', 
        element:< Sendemail />
    }, 
]


 const NewRouter = () => {
    const useRouters = useRoutes(routers)
    return useRouters
}

export default NewRouter