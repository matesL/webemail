import { useRoutes } from 'react-router-dom'

import Login from '../page/Login'

const routers = [
    {
        path:'/', 
        element:< Login />
    },  
]


 const NewRouter = () => {
    const useRouters = useRoutes(routers)
    return useRouters
}

export default NewRouter