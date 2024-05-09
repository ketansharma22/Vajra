import React, { useState, useContext,useEffect } from 'react'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword , onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading,setLoading]=useState(true)

  async function signup(email, password) {
    console.log("done");
    return ( createUserWithEmailAndPassword(auth, email, password)
      .then((usercredentials) => {
        const user = usercredentials.user
        console.log("done")
      })
      .catch((error)=>{
        console.log("error"+ error.message);
      })
    )
  }
  async function login(email,password){
    console.log("login")
    return(
      signInWithEmailAndPassword(auth,email,password)
      .then((usercredentials)=>{
        const user= usercredentials.user
      })
      .catch((error)=>{
        
        console.log("error signing in");
      })
    )
  }
  async function logout(auth){
    console.log("aagya");
    return (
      
      signOut(auth).then(()=>{
        console.log("signed out")
      }).catch((error)=>{
        console.log("error signing out");
      })
    )
  }

  async function resetPassword(email){
    return (
    sendPasswordResetEmail(auth,email)
    .then(()=>{
      console.log("emailsent");
    })
    .catch((error)=>{
      console.log("error");
    }))
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false)
    });
    return unsubscribe;
  }, []);
  const contextValue = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {!loading && children}
    </AuthContext.Provider>
  );
}