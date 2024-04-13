import { useContext } from "react";
import Login from "../pages/login/Login";
import { AuthContext } from "./AuthProvider";


const PrivateRoute = ({children}) => {
const  {user, loading}  =  useContext(AuthContext)
if(loading){
    return  <span className="loading loading-bars loading-lg"></span>;
}


if(user) {
    return children;
}


    return <Login></Login>
};

export default PrivateRoute;