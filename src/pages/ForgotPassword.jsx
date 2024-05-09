import React, { useState } from "react";
import "./styling/Forgot.css";
import { Link } from "react-router-dom";
import { useAuth } from "../context/Authcontext";
import MuiAlert from "@material-ui/lab/Alert";
function Alert(props) {
    return <MuiAlert elevation={2} {...props} />;
  }
  
export default function ForgotPassword() {
    const[email,setEmail]=useState();
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const { resetPassword }=useAuth()

    async function handleSubmit(e){
        e.preventDefault();
        try{
            setMessage("")
            setError("")
            setLoading(true)
            await resetPassword(email)
            setMessage("check your inbox for further instructions")
        }
        catch{
            setError("Failed to reset password")
        }
        setLoading(false)
    }



  return (
    <div id="all">
      <form id="forgot" onSubmit={handleSubmit}>
        <h1>Password Reset</h1>
        {error  && <Alert severity="error">{error}</Alert>}
        {message && <Alert severity="success">{message}</Alert>}
        <div id="labelinput">
            <label>Email</label>
            <input type="email" required />
        </div>
        <button disabled={loading}  type="submit" id="butn" >Forgot Password</button>
        <Link to="/login">Log In</Link>
      </form>
      <Link to='/signup'>Need an account ?</Link>
    </div>
  );
}
