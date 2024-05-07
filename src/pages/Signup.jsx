import React, { useState } from "react";
import heart from "./heart.png";
import "./styling/Signup.css";
import beat from "./health.jpg";
import { Link } from "react-router-dom";
import {useAuth} from '../context/Authcontext.jsx'

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const {signup} =useAuth()
  function submithandler(e){
    e.preventDefault();
    signup(email,password)
  }
  return (
    <div id="wrappersignup">
      <Link to='/'>
        <img id="signupheart" src={heart} />
      </Link>

      <div id="mainbox">
        <h1>Sign Up</h1>

        <div id="email">
          <label htmlFor={email}>Email</label>
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div id="password">
          <label htmlFor={password}>Password</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <div id="passwordconfirm">
          <label htmlFor={passwordConfirm}>Confirm Password</label>
          <br />
          <input
            type="password"
            value={passwordConfirm}
            onChange={(e) => {
              setPasswordConfirm(e.target.value);
            }}
          />
        </div>

        <br />

        <button type="submit" id="signupbutton" onClick={submithandler}>
          Sign Up
        </button>
      </div>
      <div id="alreadyhaveacc">
        Already have an account ?<Link to="/login">Log In</Link>
      </div>
    </div>
  );
}

export default Signup;
