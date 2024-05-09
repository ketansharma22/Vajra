import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../context/Authcontext.jsx';
import MuiAlert from "@material-ui/lab/Alert";
import heart from "./heart.png";
import "./styling/Signup.css";

function Alert(props) {
  return <MuiAlert elevation={2} {...props} />;
}

function Signup() {
  const navigate=useNavigate()
  const emailRef = useRef();
  const passRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submithandler(e) {
    e.preventDefault();
    if (password !== passwordConfirm) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password);
      navigate("/home")
    } catch (error) {
      setError("Failed to create an account: " + error.message);
    }
    setLoading(false);
  }

  return (
    <div id="wrappersignup">
      <Link to='/'>
        <img id="signupheart" src={heart} alt="Heart" />
      </Link>
      
      <form id="mainbox" onSubmit={submithandler}>
        <h1>Sign Up</h1>
        {error && <Alert severity="error">{error}</Alert>}
        
        <div id="email">
          <label htmlFor={email}>Email</label>
          <br />
          <input
          required
            ref={emailRef}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div id="password">
          <label htmlFor={password}>Password</label>
          <br />
          <input
          required
          minLength="6"
            ref={passRef}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div id="passwordconfirm">
          <label htmlFor={passwordConfirm}>Confirm Password</label>
          <br />
          <input
          required
          minLength="6"
            type="password"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </div>

        <br />

        <button type="submit" id="signupbutton" disabled={loading} >
          Sign Up
        </button>
      </form>

      <div id="alreadyhaveacc">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </div>
  );
}

export default Signup;