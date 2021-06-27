import React,{useState,useEffect}from 'react'
import {Route,Redirect} from 'react-router-dom'
import { message } from 'antd';
export default function PrivateRoute(props) {
    const [state,setState] = useState(false)
    useEffect(() => {
        var a = Boolean(sessionStorage.getItem('username'))
        console.log(a)
        if(state !== a){
            setState(a)
            console.log(1)
        }
    },[state])
    if(!state){    
        message.error('This is a success message');      
    }
    return ( 
        state ? 
        <Route path={props.path} component={props.component}></Route>     
        :         
        <Redirect to="/"></Redirect>             
    )
}
