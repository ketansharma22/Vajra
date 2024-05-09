import React from "react"
import { Route, Navigate } from "react-router-dom"
import { useAuth } from "../context/Authcontext.jsx"
import Home from "../pages/Home.jsx"

export default function PrivateRoute() {
  const { currentUser } = useAuth()

  return (
    
    currentUser ? <Home /> : <Navigate to='/login' replace />
  )
}