import Login from '../../src/views/login/Login'
import Home from '../../src/views/home/Home'
const router = [
    {
        path:'/home',
        com:Home,
        auth:true,
        title:'home'
    },
    {
        path:'/',
        com:Login,
        title:'login'
    }
]
export default router