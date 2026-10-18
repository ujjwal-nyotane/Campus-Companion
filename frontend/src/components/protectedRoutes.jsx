import { Navigate, Outlet} from 'react-router-dom'

import { useEffect, useState } from 'react';


const ProtectedRoute = () => {
    const [isLogedIn,SetIsLogedIn] = useState(localStorage.getItem("isLogedIn"));
    useEffect(()=>{
        SetIsLogedIn(localStorage.getItem("isLogedIn"));
    })
    
    
    return <>
     {JSON.parse(isLogedIn) ? <Outlet />
     :  
     
            <Navigate to="/"/>}
    </>
}
export default ProtectedRoute