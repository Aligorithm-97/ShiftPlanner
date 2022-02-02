import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./Login.css";
import { useHistory } from "react-router-dom";
import isAuth from "../../App";
import Cookies from "js-cookie";
import { string } from "prop-types";

export default function Login() {
  let history = useHistory();
  const [Idnumber, setIdnumber] = useState("");
  const [Password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [Position, setPosition] = useState("");
  Axios.defaults.withCredentials = true;
  const login = () => {
    Axios.post("http://localhost:3001/login", {
      Idnumber: Idnumber,
      Password: Password,
    }).then((response) => {
      if (response.data.message) {
        console.log(response.data.message);
      }
      if (Idnumber !== "") {
        Axios.get("http://localhost:3001/login").then((response) => {
          if (response.data.loggedIn === true) {
            setPosition(response.data.user[0].Position);
            Cookies.set("Id", response.data.user[0].Idnumber);
          }
        });
        if (Position === "Admin") {
          history.push("/HomePage");
        } else if (Position === "Department Manager") {
          history.push("/Homepagedepadmin");
        } else if (Position === "Employee") {
          history.push("/Empview");
        }
      } else {
        setLoginStatus(":D");
      }
    });
  };

  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div className="name">
        <div className="login">
          <h1
            style={{
              paddingLeft: "100px",
              paddingTop: "50px",
              paddingBottom: "50PX",
            }}
          >
            Login
          </h1>
          <input
            type="text"
            placeholder="Idnumber..."
            onChange={(e) => {
              setIdnumber(e.target.value);
            }}
          />
          <input
            type="Password"
            placeholder="Password..."
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button style={{ marginTop: "50px" }} onClick={login}>
            {" "}
            Login{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
