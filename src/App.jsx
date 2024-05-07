import React from 'react';
import './App.css'
import { AuthProvider } from './context/Authcontext'
import Start from './pages/Start.jsx'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import { Route, BrowserRouter as Router } from 'react-router-dom';
// import PrivateRoute from './components/Privateroute.jsx'

function App() {
  return(
    
    <div >
      <AuthProvider>
        <Router>
          <Route path='/' element={<Start/>} />
        </Router>
      </AuthProvider>
    </div>
    
  )
}

export default App
