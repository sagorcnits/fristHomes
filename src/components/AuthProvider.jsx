import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import auth from "../firebase/firebase_config.js";
import router from "../routes/Routes.jsx";
export const AuthContext = createContext(null);
const AuthProvider = () => {
const [user,setUser ] = useState([]);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password)
  }

  const logOutUser = () => {
    signOut(auth)
    .then()
    .catch();
  }


  useEffect(()=>{
    const onAuth = onAuthStateChanged(auth, (user) => {
        //  console.log(user);
         setUser(user);
    } )
    return () => {
         onAuth();
    }
  },[])


  const authInfor = { user,createUser,signInUser ,logOutUser};

  return (
    <AuthContext.Provider value={authInfor}>
      <RouterProvider router={router}></RouterProvider>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
