import React, { useState } from "react";
import heart from "./heart.png";
import "./styling/Login.css";
import { useNavigate } from "react-router-dom";
import MuiAlert from "@material-ui/lab/Alert";
import { Link, unstable_HistoryRouter } from "react-router-dom";
import { useAuth } from "../context/Authcontext";


function Alert(props) {
  return <MuiAlert elevation={2} {...props} />;
}


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate=useNavigate()
  async function loginhandler(e){
    e.preventDefault()
    try{
      setError("")
      setLoading(true)
      await login(email,password)
      navigate('/home')
    }
    catch{
      setError("failed to login")
      
    }
    setLoading(false)

  }
  return (
    // <div id="wrapperlogin" style={{ backgroundImage: `url(${beat})` }} >
    <form onSubmit={loginhandler} id="wrapperlogin">
      <Link to="/">
        <img id="loginheart" src={heart} />
      </Link>
      <div id="mainbox">
        <h1>Log In</h1>
        {error  && <Alert severity="error">{error}</Alert>}
        <div id="email">
          <label htmlFor={email}>Email</label>
          <br />
          <input
          required
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
          minLength="6"
            required
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <br />

        <button type="submit" id="loginbutton" disabled={loading} >
          Log In
        </button>
          <div><Link to='/forgotpassword'>forgot password ?</Link></div>
      </div>
      <div id="donthaveacc">
        Don't have an account ?<Link to="/signup">Sign Up</Link>
      </div> 
    </form>
  );
}

export default Login;
