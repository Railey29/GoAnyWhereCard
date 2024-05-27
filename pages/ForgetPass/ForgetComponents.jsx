import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "animate.css";

function FortgetComponents() {
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [data, setData] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmail("");
    setConfirmPassword("");
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/ForgotPassword",
        {
          Email: email,
          ConformPassword: confirmPassword,
        }
      );
      const responseData = response.data;
      if (response.data.success) {
        alert("You have successfully changed your password");
        window.open("/SoftdeskProject/FrontEnd/LandingPageComponents", "_self");
      } else {
        alert(responseData.message || "An error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };
  return (
    <div
      style={{
        backgroundColor: "#874307",
        width: "100vw",
        margin: 0,
        padding: 0,
        position: "absolute",
        left: 0,
        top: 0,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h6
          style={{
            color: "white",
            fontSize: "30px",
            position: "absolute",
            top: "10%",
            left: "35%",
            fontFamily: "Verdana,Sans-serif",
          }}
          className={`animate__animated animate__bounceInLeft`}
        >
          RESET ACCOUNT PASSWORD
        </h6>
        <p
          style={{
            color: "white",
            fontSize: "20px",
            position: "absolute",
            top: "30%",
            left: "38%",
            fontFamily: "Verdana,Sans-serif",
          }}
          className={`animate__animated animate__bounceInLeft`}
        >
          Enter your new password for your account
        </p>
        <form
          action="/SoftdeskProject/FrontEnd/LandingPageComponents"
          method="POST"
          onSubmit={handleSubmit}
        >
          <input
            type="username"
            placeholder="Enter Username:"
            style={{
              position: "absolute",
              top: "40%",
              left: "38%",
              width: "20%",
              height: "7%",
              backgroundColor: "white",
              color: "black",
              borderRadius: "15px",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`animate__animated animate__backInRight`}
          />
          <input
            type="password"
            placeholder="New Password"
            style={{
              position: "absolute",
              top: "55%",
              left: "38%",
              width: "20%",
              height: "7%",
              backgroundColor: "white",
              color: "black",
              borderRadius: "15px",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={`animate__animated animate__backInRight`}
          />
          <button
            style={{
              position: "absolute",
              left: "41%",
              top: "70%",
              width: "15vw",
              height: "5vh",
              cursor: "pointer",
            }}
            type="submit"
            value="submit"
            className={`animate__animated animate__backInRight`}
          >
            RESET PASSWORD
          </button>
        </form>
      </div>
    </div>
  );
}

export default FortgetComponents;
