import axios from 'axios'
import {API_INFO} from './DEV_API'


const instance = axios.create({
    baseURL: 'https://www.fastmock.site/mock/dc72a0bdebc6a1586bd338cb0fa86a08/_base000',
    timeout: 5000,
});

instance.interceptors.request.use(config => {
    console.log(config)
    return config
  })
instance.interceptors.response.use(response => {
    console.log(response)
    return response
})
export function getUserLogin(data){
    return instance({
        url:API_INFO.HOME_LOGIN,
        method:'post',
        params:{
            username:data.username,
            password:data.password
        }
    })
}