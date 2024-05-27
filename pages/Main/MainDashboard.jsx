import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import "animate.css";
import { FaUser } from "react-icons/fa";
import axios from "axios";

function MainDashboard() {
  const [balance, setBalance] = useState(null);
  const [fare, setFare] = useState(" ");
  const [fare2, setFare2] = useState("");
  const [confirmedTransaction, setConfirmedTransaction] = useState(false);
  const [transactionHistory, setTransactionHistory] = useState([]);
  const router = useRouter();
  const { name } = router.query;
  let userPrice;
  let balanceOfPrice;
  let fareFrom;
  let fareTo;
  const handleSignOut = {
    position: "absolute",
    width: "10%",
    height: "5%",
    right: "10%",
    top: "2%",
  };

  useEffect(() => {
    if (name) {
      const username = name;
      // Fetch balance
      axios
        .get(`http://127.0.0.1:5000/getBalance?username=${username}`)
        .then((response) => {
          setBalance(response.data.balance);
          console.log("Successfully retrieved balance:", response.data.balance);
        })
        .catch((error) => {
          console.error("Error fetching balance:", error);
        });
    }
  }, [name]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(fare);
    console.log(fare2);

    if (fare === "PITX" && fare2 === "City Dreams") {
      userPrice = prompt(
        "The price is 15.00 Pesos. Are you sure you want to go? (Yes/No): "
      ).toLowerCase();
      if (userPrice === "yes") {
        setConfirmedTransaction(true);
        balanceOfPrice = 15;
        fareFrom = "PITX";
        fareTo = "City Dreams";
      }
    } else if (fare === "PITX" && fare2 === "Monumento") {
      userPrice = prompt(
        "The price is 65.00 Pesos. Are you sure you want to go? (Yes/No): "
      ).toLowerCase();
      if (userPrice === "yes") {
        setConfirmedTransaction(true);
        balanceOfPrice = 65;
        fareFrom = "PITX";
        fareTo = "Monumento";
      }
    } else if (fare === "Monumento" && fare2 === "MallOfAsia") {
      userPrice = prompt(
        "The price is 65.00 Pesos. Are you sure you want to go? (Yes/No): "
      ).toLowerCase();
      if (userPrice === "yes") {
        setConfirmedTransaction(true);
        balanceOfPrice = 65;
        fareFrom = "Monumento";
        fareTo = "Mall Of Asia";
      }
    } else if (fare === "Monumento" && fare2 === "NorthAve") {
      userPrice = prompt(
        "The price is 16.00 Pesos. Are you sure you want to go? (Yes/No): "
      ).toLowerCase();
      if (userPrice === "yes") {
        setConfirmedTransaction(true);
        balanceOfPrice = 16;
        fareFrom = "Monumento";
        fareTo = "North Avenue";
      }
    } else {
      alert("Please select a Station");
    }

    console.log(balanceOfPrice);
    console.log(userPrice);

    e.preventDefault();
    const newTransaction = {
      fareFrom: fare,
      fareTo: fare2,
      balanceUsed: balanceOfPrice,
    };
    setTransactionHistory([...transactionHistory, newTransaction]);
    setFare("");
    setFare2("");
    try {
      const response = await axios.post("http://127.0.0.1:5000/priceOfFare", {
        balanceOfPrice: balanceOfPrice,
        name: name,
      });
    } catch (error) {
      console.error("Error:", error);
    }
    /*
    try {
      const response = await axios.post("http://127.0.0.1:5000/InfoFare", {
        fareFrom: fareFrom,
        fareTo: fareTo,
        balanceOfPrice: balanceOfPrice,
      });
    } catch (error) {
      console.error("Error:", error);
    }
    */
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
        <h1
          style={{
            position: "absolute",
            top: "30%",
            left: "10%",
            fontSize: "50px",
            fontFamily: "Verdana,Sans-serif",
          }}
        >
          ₱ {balance}
        </h1>
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
          justifyContent: "center", // Center content vertically
          alignItems: "center", // Center content horizontally
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
        <h6
          style={{
            color: "black",
            fontSize: "20px",
            fontFamily: "Verdana,Sans-serif",
            position: "absolute",
            top: "15%",
            left: "59px",
          }}
        >
          NorthBound
        </h6>
        <h6
          style={{
            color: "black",
            fontSize: "20px",
            fontFamily: "Verdana,Sans-serif",
            position: "absolute",
            top: "40%",
            left: "59px",
          }}
        >
          SouthBound
        </h6>
        <div style={{ position: "absolute", top: "29%" }}>
          <form onSubmit={handleSubmit}>
            <select
              name="Fare"
              id="fare"
              style={{
                width: "150px",
                height: "30px",
                marginRight: "10px",
              }}
              onChange={(e) => {
                setFare(e.target.value);
              }}
            >
              <option value="">Please Select</option>
              <option value="PITX">PITX</option>
              <option value="City Dreams">City Dreams</option>
              <option value="DFA">DFA</option>
              <option value="Roxas">Roxas Boulevard</option>
              <option value="Taft">Taft Ave.</option>
              <option value="Ayala">Ayala Avenue</option>
              <option value="Buendia">Buendia</option>
              <option value="Guadalupe">Guadalupe</option>
              <option value="Ortigas">Ortigas</option>
              <option value="Santolan">Santolan</option>
              <option value="Cubao">Cubao</option>
              <option value="Nepa">Nepa Q. Mart</option>
              <option value="QAve">Quezon Ave</option>
              <option value="NorthAve">North Ave.</option>
              <option value="Roosevelt">Roosevelt</option>
              <option value="kaingin">kaingin Road</option>
              <option value="Balintawak">Balintawak</option>
              <option value="BagongBario">Bagong Bario</option>
              <option value="Monumento">Monumento</option>
            </select>
            <select
              style={{
                width: "150px",
                height: "30px",
                marginRight: "10px",
              }}
              onChange={(e) => {
                setFare2(e.target.value);
              }}
            >
              <option value="">Please Select</option>
              <option value="Monumento">Monumento</option>
              <option value="BagongBario">Bagong Bario</option>
              <option value="Balintawak">Balintawak</option>
              <option value="kaingin">kaingin Road</option>
              <option value="Roosevelt">Roosevelt</option>
              <option value="NorthAve">North Ave.</option>
              <option value="QAve">Quezon Ave</option>
              <option value="Nepa">Nepa Q. Mart</option>
              <option value="Cubao">Cubao</option>
              <option value="Santolan">Santolan</option>
              <option value="Ortigas">Ortigas</option>
              <option value="Guadalupe">Guadalupe</option>
              <option value="Buendia">Buendia</option>
              <option value="AvenueBusStop">Avenue bus stop</option>
              <option value="Ayala">Ayala Avenue</option>
              <option value="Taft">Taft Ave.</option>
              <option value="Roxas">Roxas Boulevard</option>
              <option value="DFA">DFA</option>
              <option value="City Dreams">City Dreams</option>
              <option value="PITX">PITX</option>
            </select>
            <input type="submit" />
          </form>
        </div>
        <div style={{ position: "absolute", top: "60%" }}>
          <form onSubmit={handleSubmit}>
            <select
              name="Fare"
              id="fare"
              style={{
                width: "150px",
                height: "30px",
                marginRight: "10px",
                position: "absolute",
                left: "-21vh",
                top: "-2vh",
              }}
              onChange={(e) => {
                setFare(e.target.value);
              }}
            >
              <option value="">Please Select</option>
              <option value="Monumento">Monumento</option>
              <option value="BagongBario">Bagong Bario</option>
              <option value="Balintawak">Balintawak</option>
              <option value="kaingin">kaingin Road</option>
              <option value="Roosevelt">Roosevelt</option>
              <option value="NorthAve">North Ave.</option>
              <option value="QAve">Quezon Ave</option>
              <option value="Nepa">Nepa Q. Mart</option>
              <option value="Cubao">Cubao</option>
              <option value="Santolan">Santolan</option>
              <option value="Ortigas">Ortigas</option>
              <option value="Guadalupe">Guadalupe Bridge</option>
              <option value="Buendia">Buendia</option>
              <option value="AvenueBusStop">Avenue bus stop</option>
              <option value="Ayala">Ayala Avenue</option>
              <option value="Tramo">Tramo</option>
              <option value="Taft">Taft Ave.</option>
              <option value="Roxas">Roxas Boulevard</option>
              <option value="MallOfAsia">Mall of Asia</option>
              <option value="DFA">DFA</option>
              <option value="AyalaMalls">Ayala Malls</option>
              <option value="PITX">PITX</option>
            </select>

            <select
              style={{
                width: "150px",
                height: "30px",
                marginRight: "10px",
                position: "absolute",
                left: "2%",
                top: "-2vh",
              }}
              onChange={(e) => {
                setFare2(e.target.value);
              }}
            >
              <option value="">Please Select</option>
              <option value="PITX">PITX</option>
              <option value="AyalaMalls">Ayala Malls</option>
              <option value="DFA">DFA</option>
              <option value="MallOfAsia">Mall of Asia</option>
              <option value="Roxas">Roxas Boulevard</option>
              <option value="Taft">Taft Ave.</option>
              <option value="Tramo">Tramo</option>
              <option value="Ayala">Ayala Avenue</option>
              <option value="AvenueBusStop">Avenue bus stop</option>
              <option value="Buendia">Buendia</option>
              <option value="Guadalupe">Guadalupe Bridge</option>
              <option value="Ortigas">Ortigas</option>
              <option value="Santolan">Santolan</option>
              <option value="Cubao">Cubao</option>
              <option value="Nepa">Nepa Q. Mart</option>
              <option value="QAve">Quezon Ave</option>
              <option value="NorthAve">North Ave.</option>
              <option value="Roosevelt">Roosevelt</option>
              <option value="kaingin">kaingin Road</option>
              <option value="Balintawak">Balintawak</option>
              <option value="BagongBario">Bagong Bario</option>
              <option value="Monumento">Monumento</option>
            </select>
            <input
              type="submit"
              style={{ position: "absolute", left: "20vh", top: "-1vh" }}
            />
          </form>
        </div>
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
          RECEIPT
        </h6>
        {transactionHistory.map((transaction, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              top: "15%",
              left: "10px",
            }}
          >
            <p>
              <br />
              FROM: {transaction.fareFrom}
              <p>-------------------------------</p>
              TO: {transaction.fareTo}
              <p>-------------------------------</p>
              FARE: {transaction.balanceUsed}
              <p>-------------------------------</p>/.
            </p>
          </div>
        ))}
      </div>
      <a href="/SoftdeskProject/FrontEnd/LandingPageComponents">
        <button style={handleSignOut}>SIGN OUT</button>
      </a>
    </div>
  );
}

export default MainDashboard;
