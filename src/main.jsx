import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Start from './pages/Start.jsx'
import Home from './pages/Home.jsx'

const router=createBrowserRouter([
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/signup",
    element:<Signup/>

  },
  {
    path:"/",
    element:<Start/>
  },
  {
    path:"/home",
    element:<Home/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
