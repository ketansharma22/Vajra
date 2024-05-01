import React from 'react'
import heart from './heart.png'
import './styling/Start.css'
import { Link } from 'react-router-dom'
function Start() {
  return (
    <div id='wrapperstart'>
        <div id='logo'>
            <img id='heart' src={heart} />
        </div>
        
        <div id='text'>
            <h1>VAJRA</h1>
            <p>"Guarding hearts with foresight:</p>
            <p>VAJRA predicts,protects and save lives..."</p>
        </div>
        <Link to="/login" >
            <button id='startbutton'>Get Started</button>
        </Link>
    </div>
  )
}

export default Start