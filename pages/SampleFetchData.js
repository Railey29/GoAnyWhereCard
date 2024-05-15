import React, { useState } from "react";
import axios from "axios";

function SampleFetchData() {
  const [userInput, setUserInput] = useState("");
  const [data, setData] = useState("");

  const fetchData = async () => {
    try {
      console.log("Fetching data...");
      const response = await axios.post("http://127.0.0.1:5000//emailData", {
        name: userInput, // Sending 'name' instead of 'user' to match your Flask endpoint
      });
      setData(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
    setUserInput("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default SampleFetchData;
