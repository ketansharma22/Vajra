import React from 'react'
import heart from './heart.png'
import './styling/Login.css'
import beat from './health.jpg'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div id="wrapperlogin" style={{ backgroundImage: `url(${beat})` }} >
      <nav id='loginnav'>
        <div id='heartbox'>
          <img  id="heart" src={heart}></img>
        </div>
        <div>
        <Link to='/signup'>
          <button id='signupbutton'>SignUp??</button></Link>
        </div>
      </nav>
      <div>
        <form>

          <label > Username</label>
          <input type='text' id='username' placeholder='Username...' />
          <label>Password</label>
          <input type='password' id='password' placeholder='Password...' />
          <a href='#' id='forgotpassword'>forgot password?</a>
          <div id='last'>
           <button id='loginbutton'>Login</button>
           <Link to='/signup'>
           <a href=''>Don't have any account ?</a>
           </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
