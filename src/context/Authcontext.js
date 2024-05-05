import React, { Children, useEffect } from "react";
import { useState, useContext } from "react";
import auth from "../Firebase";

const AuthContext = React.createContext();
export function useAuth(){
  return useContext(AuthContext)
}

export function AuthProvider({children}) {
  const [currentUser, setCurrentUser] = useState(null);

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChange((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,

  };
  return (<AuthContext.Provider value={value}>{childrenhildren}</AuthContext.Provider>)
}
