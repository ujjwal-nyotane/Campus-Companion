import { Navigate, Outlet} from 'react-router-dom'
import Index from './Index.jsx'
import { useEffect, useState } from 'react';
import students from '../data/data.js';

const ProtectedRoute = () => {
    console.log("hi");
    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(students))
    },[])
    const [isLogedIn,SetIsLogedIn] = useState(localStorage.getItem("isLogedIn"));
    useEffect(()=>{
        SetIsLogedIn(localStorage.getItem("isLogedIn"));
    })
    

    return <>
     {JSON.parse(isLogedIn) ? <Outlet />
     :
            <Navigate to="/" replace />}
    </>
}
export default ProtectedRoute