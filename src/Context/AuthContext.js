import React, { useContext, useState, useEffect } from "react";
import { auth } from "../Components/firebase";
const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}
export function AuthProvider({ children }) {
  const [currentUser, SetCurrentUser] = useState();

  function signup(email, password) {
    console.log(email, password);
    return auth.createUserWithEmailAndPassword(email, password);
  }
  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }
  useEffect(() => {
    const unSuscribe = auth.onAuthStateChanged((user) => {
      SetCurrentUser(user);
    });
    return unSuscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
