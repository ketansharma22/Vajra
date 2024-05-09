import React, { useState } from "react";
import { useAuth } from "../context/Authcontext";
import { Link, useNavigate } from "react-router-dom";
import MuiAlert from "@material-ui/lab/Alert";
import { auth } from "../firebase";
import "./styling/Home.css";
import health from "./health.jpg";
function Alert(props) {
  return <MuiAlert elevation={2} {...props} />;
}
export default function Home() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const [user, setUser] = useState({
    Name: "",
    Gender: "",
    Age: "",
    Diabetic: "",
    SystolicBP: "",
    DiastolicBP: "",
    Cholestrol: "",
    BMI: "",
    HeartRate: "",
    Glucode: "",
  });
  const navigate = useNavigate();

  async function handleLogout() {
    setError("");

    try {
      console.log("try");
      await logout(auth);
      navigate("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div id="container" style={{ backgroundImage: `url(${health})` }}>
      <nav>
        <div id="both">
          <h1>Welcome.. {currentUser.email}</h1>
        </div>

        <div id="button">
          <button onClick={handleLogout}>Logout</button>
          <Link to="/updateprofile">Update Profile</Link>
        </div>
      </nav>
      <div id="main">{error && <Alert severity="error">{error}</Alert>}</div>
    </div>
  );
}

//name
//age
//gender
//diabties yes or no
//bp problem
//cholestrol
