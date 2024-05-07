import React from 'react';
import './App.css'
import { AuthProvider } from './context/Authcontext'
import Start from './pages/Start.jsx'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import PrivateRoute from './components/Privateroute.jsx'

function App() {
  return(
    
    <div >
      <AuthProvider>
        <Router>
        <Routes>
          <Route path='/' element={<Start/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />

        </Routes>
        </Router>
      </AuthProvider>
    </div>
    
  )
}

export default App
