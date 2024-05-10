import React from 'react';
import './App.css'
import { AuthProvider } from './context/Authcontext'
import Start from './pages/Start.jsx'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import PrivateRoute from './components/Privateroute.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import UpdateProfile from './pages/UpdateProfile.jsx';
import Profile from './pages/Profile.jsx';

function App() {
  return(
    
    <div >
      <AuthProvider>
        <Router>
        <Routes>
          <Route  path='/' element={<Start/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/home' element={<PrivateRoute />} />
            <Route path='/forgotpassword' element={<ForgotPassword/>} />
            <Route path='/updateprofile' element={<UpdateProfile/>} />
            <Route path='/profile' element={<Profile/>} />

        </Routes>
        </Router>
      </AuthProvider>
    </div>
    
  )
}

export default App
