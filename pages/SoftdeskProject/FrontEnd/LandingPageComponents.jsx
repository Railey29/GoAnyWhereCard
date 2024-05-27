import React, { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

function LandingPageComponents() {
  const [isVisibleDesktop, setIsVisibleDesktop] = useState(false);
  const [isVisibleMobile, setIsVisibleMobile] = useState(false);
  const [isHoverForget, setIsHoverForget] = useState(false);
  const [isHoverSignUp, setIsHoverSignUp] = useState(false);
  const [isUserName, setIsUserName] = useState("");
  const [isUserPassword, setIsUserPassword] = useState("");
  const [data, setData] = useState("");
  const [message, setMessage] = useState("");

  /*
  useEffect(() => {
    const askRole = prompt(
      "Type Admin Or Client for Verification: "
    ).toLowerCase();
    if (askRole === "client") {
      alert("Welcome to Client page");
    } else if (askRole === "admin") {
      alert("Direct to the admin page(As of know wala pa");
    }
  }, []);
  */

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUserName("");
    setIsUserPassword("");
    try {
      const response = await axios.post("http://127.0.0.1:5000/SignIn", {
        UserNameLogin: isUserName,
        PasswordLogin: isUserPassword,
      });
      setData(response.data);
      if (response.data.success) {
        setMessage(`Logged in as ${response.data.data.username}`);
        window.open(`/Main/MainDashboard?name=${isUserName}`, "_self");
      } else if (isUserName === "admin" && isUserPassword === "admin") {
        window.open(`/Admin/AdminComponents`, "_self");
      } else {
        alert("Please Try Again, Possibly Incorrect Username or Password");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [refDesktop, inViewDesktop] = useInView({
    // true if the view is Desktop
    threshold: 0.5,
  });
  const [refMobile, inViewMobile] = useInView({
    // true if the view is mobile
    threshold: 0.5,
  });

  const handleMouseEnter1 = () => {
    setIsHoverForget(true);
  };
  const handleMouseLeave1 = () => {
    setIsHoverForget(false);
  };
  const handleMouseEnter2 = () => {
    setIsHoverSignUp(true);
  };
  const handleMouseLeave2 = () => {
    setIsHoverSignUp(false);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const divStyle = {
    height: "40%",
    width: "30%",
    position: "absolute",
    left: "10%",
    top: "10%",
  };

  const sliderStyle = {
    height: "150%",
    width: "120%",
    position: "absolute",
    top: "5vh",
  };

  const photo = {
    height: "75vh",
    width: "25vw",
    position: "relative",
    left: "10%",
  };

  useEffect(() => {
    setIsVisibleDesktop(inViewDesktop);
  }, [inViewDesktop]);

  useEffect(() => {
    setIsVisibleMobile(inViewMobile);
  }, [inViewMobile]);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const styleForDesktop = {
    margin: "0",
    padding: "0",
  };
  const styleForMobile = {
    margin: "0",
    padding: "0",
  };

  const styleInputUserName = {
    position: "absolute",
    left: "55%",
    top: "40%",
    width: "30%",
    height: "7%",
    backgroundColor: "white",
    color: "black",
    borderRadius: "15px",
    paddingLeft: "10px",
    paddingRight: "10px",
  };
  const styleInputPassword = {
    position: "absolute",
    left: "55%",
    top: "50%",
    width: "30%",
    height: "7%",
    backgroundColor: "white",
    color: "black",
    borderRadius: "15px",
    paddingLeft: "10px",
    paddingRight: "10px",
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
        style={divStyle}
        className={`animate__animated animate__bounceInLeft`}
      >
        {" "}
        <Slider {...settings} style={sliderStyle}>
          {" "}
          <div>
            {" "}
            <img src="/slider1.2.png" alt="Image 1" style={photo} />{" "}
          </div>{" "}
          <div>
            {" "}
            <img src="/Slider2.png" alt="Image 2" style={photo} />{" "}
          </div>{" "}
          <div>
            {" "}
            <img src="/Slider3.png" alt="Image 3" style={photo} />{" "}
          </div>{" "}
        </Slider>{" "}
      </div>{" "}
      <div>
        {" "}
        <form action="" method="POST" target="_blank" onSubmit={handleSubmit}>
          {" "}
          <input
            type="text"
            placeholder="Username "
            style={styleInputUserName}
            ref={inputRef}
            className={`animate__animated animate__backInRight`}
            required
            value={isUserName}
            onChange={(e) => setIsUserName(e.target.value)}
          />{" "}
          <input
            type="password"
            placeholder="Password"
            style={styleInputPassword}
            className={`animate__animated animate__backInRight`}
            required
            value={isUserPassword}
            onChange={(e) => setIsUserPassword(e.target.value)}
          />{" "}
          <button
            style={{
              position: "absolute",
              left: "55%",
              top: "60%",
              width: "30%",
              height: "7%",
              color: "black",
              borderRadius: "15px",
              paddingLeft: "10px",
              paddingRight: "10px",
              cursor: "pointer",
            }}
            className={`animate__animated animate__backInRight`}
            type="submit"
            value="submit"
          >
            {" "}
            LOGIN{" "}
          </button>{" "}
          <a
            href="/ForgetPass/ForgetComponents"
            target="_blank"
            style={{
              position: "absolute",
              left: "55%",
              top: "70%",
              width: "30%",
              height: "7%",
              textDecoration: "none",
              color: isHoverForget ? "blue" : "white",
              cursor: "pointer",
            }}
            onMouseEnter={handleMouseEnter1}
            onMouseLeave={handleMouseLeave1}
            className={`animate__animated animate__backInRight`}
          >
            {" "}
            Forgot Password?{" "}
          </a>{" "}
          <a
            href="/SignUpPage/SignUpComponents"
            target="_blank"
            style={{
              position: "absolute",
              left: "55%",
              top: "75%",
              width: "30%",
              height: "7%",
              textDecoration: "none",
              color: isHoverSignUp ? "blue" : "white",
              cursor: "pointer",
            }}
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
            className={`animate__animated animate__backInRight`}
          >
            {" "}
            Sign Up{" "}
          </a>{" "}
        </form>{" "}
        <img
          src="/LogoFinal.png"
          alt="Logo"
          style={{
            height: "30vh",
            position: "absolute",
            top: "5vh",
            left: "60%",
          }}
          className={`animate__animated animate__backInRight`}
        />{" "}
      </div>
    </div>
  );
}

export default LandingPageComponents;
