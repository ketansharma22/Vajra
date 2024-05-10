import React, { useState } from "react";
import { useAuth } from "../context/Authcontext";
import { Link, useNavigate } from "react-router-dom";
import MuiAlert from "@material-ui/lab/Alert";
import { auth } from "../firebase";
import "./styling/Home.css";
import health from "./health.jpg";
import { collection, addDoc,setDoc,doc,query, getDoc } from "firebase/firestore";
import db from "../firebase";
function Alert(props) {
  return <MuiAlert elevation={2} {...props} />;
}
export default function Home() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const [user, setUser] = useState({
    Name: "",
    Gender: "",
    Age: "",
    Diabetic: "no",
    SystolicBP: "",
    DiastolicBP: "",
    Cholestrol: "",
    BMI: "",
    HeartRate: "",
    Glucose: "",
  });
  console.log(user);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };
  
  // const CheckSubcollection = (em) => {
  //   const [subcollectionExists, setSubcollectionExists] = useState(null); 

  //   const checkSubcollection = async () => {
  //     try {
  //       const subcollectionRef = firebase.firestore().collection('users').doc(em);
  //       const snapshot = await subcollectionRef.get();
  //       if (snapshot) { 
  //         setSubcollectionExists(false);
          
  //       } else {
  //         setSubcollectionExists(true);
  //       }
  //     } catch (error) {
  //       console.error('Error checking subcollection:', error);
  //     }
  //   };
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = async (e) => {
    const em=JSON.stringify(currentUser.email)
    e.preventDefault(); 
    const docref=doc(db,"users",em)
    const docSnap=await getDoc(docref)

    console.log(docSnap.data());

    // await setDoc(doc(db,"users",em),user)
    setUser({
      Name: "",
      Gender: "",
      Age: "",
      Diabetic: "no",
      SystolicBP: "",
      DiastolicBP: "",
      Cholestrol: "",
      BMI: "",
      HeartRate: "",
      Glucose: "",
    });
    navigate("/profile")

  };

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
      <div id="main">
        {error && <Alert severity="error">{error}</Alert>}
        <form onSubmit={handleSubmit}>
          <input
          required
            type="text"
            name="Name"
            value={user.Name}
            placeholder="Name"
            onChange={handleChange}
          />
          <input
          required
            type="text"
            name="Gender"
            value={user.Gender}
            placeholder="Gender"
            onChange={handleChange}
          />
          <input
          required
            type="text"
            name="Age"
            value={user.Age}
            placeholder="Age"
            onChange={handleChange}
          />
          <label htmlFor="Diabetic">Diabetic?</label>
          <input
            type="checkbox"
            value={isChecked ? (user.Diabetic = "yes") : (user.Diabetic = "no")}
            placeholder="Diabetic"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />

          <input
            type="text"
            required
            name="SystolicBP"
            value={user.SystolicBP}
            placeholder="Systolic BP"
            onChange={handleChange}
          />
          <input
          required
            type="text"
            name="DiastolicBP"
            value={user.DiastolicBP}
            placeholder="DiastolicBP"
            onChange={handleChange}
          />
          <input
            type="text"
            required
            name="Cholestrol"
            value={user.Cholestrol}
            placeholder="Cholestrol"
            onChange={handleChange}
          />
          <input
            type="numbers"
            name="BMI"
            value={user.BMI}
            required
            placeholder="BMI"
            onChange={handleChange}
          />
          <input
            type="text"
            required
            name="HeartRate"
            value={user.HeartRate}
            placeholder="HeartRate"
            onChange={handleChange}
          />
          <input
            type="text"
            required
            name="Glucose"
            value={user.Glucose}
            placeholder="Glucose"
            onChange={handleChange}
          />

          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
}
