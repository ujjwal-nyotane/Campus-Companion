import {Navigate} from 'react-router-dom'
import Index from './Index.jsx'
import { useEffect } from 'react';
import students from '../data/data.js';
import Dashboard from './dashboard.jsx'
const ProtectedRoute = () => {
    useEffect(()=>{
        localStorage.setItem("data",JSON.stringify(students))
    },[])
    const isLogedIn = localStorage.getItem("isLogedIn");

    return<> {JSON.parse(isLogedIn)?<Dashboard></Dashboard>:<Index></Index>}
    </>
}
export default ProtectedRoute