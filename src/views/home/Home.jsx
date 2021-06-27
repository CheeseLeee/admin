import React from 'react'
import {useHistory,useLocation} from 'react-router-dom'
export default function Home() {
    let history = useHistory()
    let location = useLocation()
    console.log(location)
    return (
        <div>
            i am home            
            {location.state? location.state.user : '' }
        </div>
    )
}
