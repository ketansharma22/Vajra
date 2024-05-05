import React,{useState} from 'react'
import heart from './heart.png'
import './styling/Login.css'
import beat from './health.jpg'
import { Link } from 'react-router-dom'

function Login() {
  const[email , setEmail]=useState("");
  const[password, setPassword]=useState("");

  return (
    // <div id="wrapperlogin" style={{ backgroundImage: `url(${beat})` }} >
    <div id="wrapperlogin">
      <Link to='/'>
        <img id="loginheart" src={heart} />
      </Link>
      <div id='mainbox'>

        <h1>Log In</h1>

        <div id='email'>
          <label htmlFor={email}>Email</label>
          <br/>
          <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        </div>
        

        <div id='password'>
          <label htmlFor={password}>Password</label>
          <br/>
          <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
        </div>
        <br/>

       <button type='submit' id='loginbutton'>
        Log In
       </button>

        

      </div>
      <div id='donthaveacc'>
        Don't have an account ? 
        <Link to="/signup" >Sign Up</Link>
      </div>
    </div>
  )
}

export default Login
