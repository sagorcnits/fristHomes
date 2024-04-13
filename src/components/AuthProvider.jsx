import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import auth from "../firebase/firebase_config.js";
import router from "../routes/Routes.jsx";
export const AuthContext = createContext(null);
const AuthProvider = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true)
  const [reload,setReload] = useState(false)
  // crateUser
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // signUser
  const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  // logout user
  const logOutUser = () => {
    setLoading(true)
  return  signOut(auth);
  };
  // google login user
  const googleUser = () => {
    setLoading(true)
    return signInWithPopup(auth, new GoogleAuthProvider());
  };
  // github login user
  const githubUser = () => {
    setLoading(true)
    return signInWithPopup(auth, new GithubAuthProvider);
  };
// Update profile 
const updateProfileUser = (name,photoURL) => {
return updateProfile(auth.currentUser, {
    displayName: name,
    photoURL: photoURL,
  })
}


// observer
  useEffect(() => {
    const onAuth = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false)
    });
    return () => {
      onAuth();
     
    };
  }, [reload]);

  

  const authInfor = { user, createUser, signInUser, logOutUser, googleUser, githubUser ,updateProfileUser, loading, setReload, reload };

  return (
    <AuthContext.Provider value={authInfor}>
      <RouterProvider router={router}></RouterProvider>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
