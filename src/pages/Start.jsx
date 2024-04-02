import React from 'react'
import heart from './logoheart.png'
import hands from './logovajarahands.png'
import './styling/Start.css'
import { Link } from 'react-router-dom'
function Start() {
  return (
    <div id='wrapper'>
        <div id='logo'>
            <img id='heart' src={heart} />
            <img id='hands' src={hands} />
        </div>
        
        <div id='text'>
            <h1>VAJRA</h1>
            <p>"Guarding hearts with foresight:</p>
            <p>VAJRA predicts,protects and save lives..."</p>
        </div>
        <Link to="/login" >
            <button>Get Started</button>
        </Link>
    </div>
  )
}

export default Start