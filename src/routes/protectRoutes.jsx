import { Navigate } from "react-router-dom";




 const ProtectRoutes = ({children, login})  => {
    if(login){
        return children; 
    } else { return  <Navigate to='/'/>
    }
};

export default ProtectRoutes;