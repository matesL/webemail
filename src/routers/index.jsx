import { useRoutes } from 'react-router-dom'

import Login from '../page/Login'

const routers = [
    {
        path:'/', 
        element:< Login />
    },  
    // {
    //     path:'/',
    //     element:""
    // },
    // {
    //     path: '/',
    //     element:"<PDFview />"
        
    // },
]


 const NewRouter = () => {
    const useRouters = useRoutes(routers)
    return useRouters
}

export default NewRouter