import React from 'react'
import heart from './heart.png'
import './styling/Signup.css'
import beat from './health.jpg'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div id="wrappersignup" style={{ backgroundImage: `url(${beat})` }} >
      <nav id='signupnav'>
        <div id='heartbox'>
          <img  id="heart" src={heart}></img>
        </div>
        <div>
        <Link to='/login'>
          <button id='loginbutton'>Login?</button></Link>
        </div>
      </nav>
      <div>
        <form>

          <label > Username</label>
          <input type='text' id='username' placeholder='Username...' />
          <label>Password</label>
          <input type='password' id='password' placeholder='Password...' />
          <div id='last'>
           <button id='signupbutton'>Signup</button>
           <Link to='/login'>
           <a href='#'>Already have an account ?</a>
           </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup