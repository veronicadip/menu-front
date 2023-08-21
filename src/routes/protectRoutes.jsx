import React from "react";
import { Navigate } from "react-router-dom";


export const ProtectRoutes = ({children, auth})  => {
    if(auth){
        return children; 
    } else { return  <Navigate to='/'/>
    }
}