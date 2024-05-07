import React, { useState, useContext,useEffect } from 'react'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword , onAuthStateChanged } from 'firebase/auth'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  async function signup(email, password) {
    console.log("done");
    return ( createUserWithEmailAndPassword(auth, email, password)
      .then((usercredentials) => {
        const user = usercredentials.user
        console.log("done")
      })
      .catch((error)=>{
        console.log("error");
      })
    )
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  const contextValue = {
    currentUser,
    signup
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}