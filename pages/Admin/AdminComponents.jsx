import React, { useState } from "react";
import axios from "axios";
function AdminComponents() {
  const [balance, setBalance] = useState(0);
  const [username, setUsername] = useState("");

  const handleSubmit = async (e) => {
    // e.preventDefault(); // Remove this line if you want the form to submit
    // Handle form submission logic here
    console.log("Submitting form...");
    setBalance(0);
    setUsername("");
    try {
      const response = await axios.post("http://127.0.0.1:5000/AddBalance", {
        balance: balance,
        username: username,
      });
    } catch (e) {}
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#874307",
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <h1
          style={{
            padding: "10px",
            fontSize: "50px",
            position: "absolute",
            top: "10%",
          }}
        >
          Admin Dashboard Balance
        </h1>
        <form
          onSubmit={handleSubmit}
          action="/SoftdeskProject/FrontEnd/LandingPageComponents"
          method="POST"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            style={{
              padding: "10px",
              fontSize: "16px",
              border: "2px solid #000",
              borderRadius: "5px",
              marginBottom: "10px",
            }}
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            style={{
              padding: "10px",
              fontSize: "16px",
              border: "2px solid #000",
              borderRadius: "5px",
              marginBottom: "10px",
            }}
            placeholder="Balance"
            required
            value={balance}
            onChange={(e) => setBalance(e.target.value)}
          />
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "#F4A460",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Add Balance
          </button>
        </form>
      </div>
    </>
  );
}

export default AdminComponents;
