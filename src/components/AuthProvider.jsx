import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import auth from "../firebase/firebase_config.js";
import router from "../routes/Routes.jsx";
export const AuthContext = createContext(null);
const AuthProvider = () => {
  const [user, setUser] = useState([]);
  // crateUser
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // signUser
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // logout user
  const logOutUser = () => {
  return  signOut(auth);
  };
  // google login user
  const googleUser = () => {
    return signInWithPopup(auth, new GoogleAuthProvider());
  };
  // github login user
  const githubUser = () => {
    return signInWithPopup(auth, new GithubAuthProvider);
  };

  useEffect(() => {
    const onAuth = onAuthStateChanged(auth, (user) => {
      //  console.log(user);
      setUser(user);
    });
    return () => {
      onAuth();
    };
  }, []);

  const authInfor = { user, createUser, signInUser, logOutUser, googleUser, githubUser };

  return (
    <AuthContext.Provider value={authInfor}>
      <RouterProvider router={router}></RouterProvider>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
