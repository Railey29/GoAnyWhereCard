import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import "animate.css";
import { FaUser } from "react-icons/fa";

function MainDashboard() {
  const router = useRouter();
  const { name } = router.query;
  const handleSignOut = {
    position: "absolute",
    width: "10%",
    height: "5%",
    right: "10%",
    top: "2%",
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
      <div
        style={{
          position: "absolute",
          top: "-2%",
          left: "1%",
          fontSize: "20px",
          width: "50%",
          height: "50%",
        }}
        className={`animate__animated animate__bounceInLeft`}
      >
        <FaUser
          style={{
            position: "absolute",
            top: "8%",
            fontSize: "5vh",
            left: "2%",
          }}
        />
        <h1
          style={{
            fontFamily: "Verdana,Sans-serif",
            position: "absolute",
            left: "10%",
          }}
        >
          Hello , {name}
        </h1>
      </div>
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "10%",
          outline: "1px solid black",
          width: "50%",
          height: "40%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          borderRadius: "10px",
        }}
        className={`animate__animated animate__bounceInLeft`}
      >
        <h6
          style={{
            color: "black",
            fontSize: "20px",
            fontFamily: "Verdana,Sans-serif",
            position: "absolute",
            top: "2%",
            left: "40%",
          }}
        >
          BALANCE
        </h6>
      </div>
      <div
        style={{
          position: "absolute",
          top: "55%",
          left: "10%",
          outline: "1px solid black",
          width: "50%",
          height: "40%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          borderRadius: "10px",
        }}
        className={`animate__animated animate__bounceInLeft`}
      >
        <h6
          style={{
            color: "black",
            fontSize: "20px",
            fontFamily: "Verdana,Sans-serif",
            position: "absolute",
            top: "2%",
            left: "40%",
          }}
        >
          FARE PRICE
        </h6>
      </div>
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "65%",
          outline: "1px solid black",
          width: "30%",
          height: "85%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          borderRadius: "10px",
        }}
        className={`animate__animated animate__backInRight`}
      >
        <h6
          style={{
            color: "black",
            fontSize: "20px",
            fontFamily: "Verdana,Sans-serif",
            position: "absolute",
            top: "5%",
            left: "22%",
          }}
        >
          TRANSACTION HISTORY
        </h6>
      </div>
      <a href="/SoftdeskProject/FrontEnd/LandingPageComponents" target="_blank">
        <button style={handleSignOut}>SIGN OUT</button>
      </a>
    </div>
  );
}

export default MainDashboard;
