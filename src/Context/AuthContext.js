import React, { useContext, useState, useEffect } from "react";
import { auth } from "../Components/firebase";
import { useHistory, useLocation } from "react-router-dom";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}
export function AuthProvider({ children }) {
  const history = useHistory();
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState();
  const [hasFirebaseInitialized, setFirebaseInitialized] = useState(false);

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }
  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }
  function logout() {
    return auth.signOut();
  }

  useEffect(() => {
    const unSuscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("User", user);
        setCurrentUser(() => {
          return user;
        });

        if (location.pathname === "/login") {
          history.push("/content");
        }
      } else {
        setCurrentUser(user);
        console.log("user is not authenticated");
      }
      setFirebaseInitialized(() => {
        return true;
      });
    });
    return unSuscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    setCurrentUser,
    hasFirebaseInitialized,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
