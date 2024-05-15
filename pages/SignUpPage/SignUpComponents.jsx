import React, { useEffect, useState, useRef } from "react";
import "animate.css";
import axios from "axios";

function SignUpComponents() {
  const [userName, setUserName] = useState("");
  const [UserPassword, setPassword] = useState("");
  const [pin1, setPin1] = useState("");
  const [pin2, setPin2] = useState("");
  const [pin3, setPin3] = useState("");
  const [pin4, setPin4] = useState("");
  const [data, setData] = useState("");

  const handleFetchData = async () => {
    try {
      console.log("Fetching data....");
      const response = await axios.post("http://127.0.0.1:5000/SignUp", {
        username: userName,
        password: UserPassword,
        pins1: pin1,
        pins2: pin2,
        pins3: pin3,
        pins4: pin4,
      });
      setData(response.data);
      if (response.data.success) {
        alert("You have successfully signed up!");
        window.open(
          "/SoftdeskProject/FrontEnd/LandingPageComponents",
          "_blank"
        );
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserName("");
    setPassword("");
    setPin1("");
    setPin2("");
    setPin3("");
    setPin4("");
    console.log(userName, UserPassword, pin1, pin2, pin3, pin4);
    handleFetchData();
  };

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
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
        <img
          src="/Logo3.png"
          alt="Logo2"
          style={{
            height: "40vh",
            position: "absolute",
            left: "25%",
            top: "15%",
            transform: "translate(-50%, -50%)",
          }}
          className={`animate__animated animate__bounceInLeft`}
        />
        <h1
          style={{
            color: "white",
            position: "absolute",
            left: "25%",
            fontSize: "13vh",
            fontFamily: "Verdana,Sans-serif",
          }}
          className={`animate__animated animate__bounceInLeft`}
        >
          PayGO
        </h1>
      </div>
      <div>
        <form action="" method="POST" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            style={{
              position: "absolute",
              left: "60%",
              top: "30%",
              width: "20%",
              height: "7%",
              backgroundColor: "white",
              color: "black",
              borderRadius: "15px",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
            required
            className={`animate__animated animate__backInRight`}
            ref={inputRef}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            className={`animate__animated animate__backInRight`}
            type="password"
            placeholder="Password"
            style={{
              position: "absolute",
              left: "60%",
              top: "40%",
              width: "20%",
              height: "7%",
              backgroundColor: "white",
              color: "black",
              borderRadius: "15px",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
            required
            value={UserPassword}
            onChange={(e) => setPassword(e.target.value)}
          />
          <h1
            style={{
              position: "absolute",
              color: "white",
              top: "48%",
              left: "60%",
              fontFamily: "Verdana,Sans-serif",
            }}
            className={`animate__animated animate__backInRight`}
          >
            Set 4 pin code
          </h1>
          {/**For div in Pin num */}
          <div style={{ position: "absolute", top: "58%", left: "60%" }}>
            <input
              className={`animate__animated animate__backInRight`}
              type="number"
              min="1"
              max="9"
              maxLength="1"
              style={{
                width: "3vw",
                height: "5vh",
                marginRight: "5px",
                backgroundColor: "white",
                color: "black",
                borderRadius: "15px",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
              required
              value={pin1}
              onChange={(e) => setPin1(e.target.value)}
            />
            <input
              className={`animate__animated animate__backInRight`}
              type="number"
              min="1"
              max="9"
              maxLength="1"
              style={{
                width: "3vw",
                height: "5vh",
                marginRight: "5px",
                backgroundColor: "white",
                color: "black",
                borderRadius: "15px",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
              required
              value={pin2}
              onChange={(e) => setPin2(e.target.value)}
            />
            <input
              className={`animate__animated animate__backInRight`}
              type="number"
              min="1"
              max="9"
              maxLength="1"
              style={{
                width: "3vw",
                height: "5vh",
                marginRight: "5px",
                backgroundColor: "white",
                color: "black",
                borderRadius: "15px",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
              required
              value={pin3}
              onChange={(e) => setPin3(e.target.value)}
            />
            <input
              className={`animate__animated animate__backInRight`}
              type="number"
              min="1"
              max="9"
              maxLength="1"
              style={{
                width: "3vw",
                height: "5vh",
                backgroundColor: "white",
                color: "black",
                borderRadius: "15px",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
              required
              value={pin4}
              onChange={(e) => setPin4(e.target.value)}
            />
            <button
              className={`animate__animated animate__backInRight`}
              style={{
                position: "absolute",
                left: "15%",
                top: "160%",
                width: "15vw",
                height: "5vh",
                cursor: "pointer",
              }}
              type="submit"
              value="submit"
            >
              REGISTER
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpComponents;
