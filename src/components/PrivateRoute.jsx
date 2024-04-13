import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const PrivateRoute = ({children}) => {
const  {user, loading}  =  useContext(AuthContext)
const location = useLocation();

// console.log(location)

if(loading){
    return  <span className="loading loading-bars loading-lg"></span>;
}


if(user) {
    return children;
}


    return <Navigate  to='/login'></Navigate>
};

export default PrivateRoute;