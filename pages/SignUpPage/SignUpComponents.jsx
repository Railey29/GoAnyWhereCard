import React, { useEffect, useState, useRef } from "react";
import "animate.css";
import axios from "axios";

function SignUpComponents() {
  const [userName, setUserName] = useState("");
  const [UserPassword, setPassword] = useState("");
  const [data, setData] = useState("");

  const handleFetchData = async () => {
    try {
      console.log("Fetching data....");
      const response = await axios.post("http://127.0.0.1:5000/SignUp", {
        username: userName,
        password: UserPassword,
      });
      setData(response.data);
      if (response.data.success) {
        alert("You have successfully signed up!");
        window.open("/SoftdeskProject/FrontEnd/LandingPageComponents", "_self");
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
          src="/logoFinal.png"
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
            left: "17%",
            fontSize: "8vh",
            fontFamily: "Verdana,Sans-serif",
          }}
          className={`animate__animated animate__bounceInLeft`}
        >
          GoAnywehre Card
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
          {/**For div in Pin num */}
          <div style={{ position: "absolute", top: "58%", left: "62%" }}>
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
