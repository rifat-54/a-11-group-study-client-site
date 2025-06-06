import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();

  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const updateUser = (name, photo) => {
    setLoading(true);
    try {
       updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
      setLoading(false)
    } catch (error) {
      throw error;
    }
    
  };

  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async(currentUser) => {
      setUser(currentUser);
      
      if(currentUser?.email){
        const email={email:currentUser.email}
     
       const {data}=await axios.post(`${import.meta.env.VITE_API_URL}/jwt`,email,{withCredentials:true})
     

      }else{
       await axios.get(`${import.meta.env.VITE_API_URL}/logout`,{withCredentials:true})
      }
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

 

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    loading,
    registerUser,
    loginUser,
    logoutUser,
    googleLogin,
    updateUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
