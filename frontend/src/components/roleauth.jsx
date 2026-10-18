import { useEffect, useState } from 'react';
import {Navigate,Outlet} from 'react-router-dom'

const RoleAuth = ({assignedRole}) => {



    if(JSON.parse(localStorage.getItem("isLogedIn")) && localStorage.getItem("Role")==assignedRole){
        return  < Outlet />
    }
    else{
        
        return <Navigate to='/'/>
    }
}
export default RoleAuth;