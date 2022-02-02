import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Axios from "axios";
import { ListGroup, ListGroupItem, Table } from "reactstrap";
export default function Salary() {
  const [salary, setsalary] = useState("");
  const [Idnumber, setIdnumber] = useState("");
  const [salarylist, setsalarylist] = useState([]);
  const addSalary = () => {
    Axios.post("http://localhost:3001/settings", {
      Idnumber: Idnumber,
      salary: salary,
    }).then(() => {
      console.log("success");
    });
  };
  const display = () => {
    Axios.get("http://localhost:3001/dispSalary").then((response) => {
      setsalarylist(response.data);
    });
  };
  const deleteSalary = (Idnumber) => {
    Axios.delete(`http://localhost:3001/deletesettings/${Idnumber}`);
  };
  const updatesalary = () => {
    deleteSalary(Idnumber);
    addSalary();
  };
  return (
    <div style={{ marginTop: "10px", height: "350px" }}>
      <div className="container">
        <div className="row">
          <button
            style={{ width: "400px", marginTop: "20px", marginLeft: "17px" }}
            className="col-md"
            onClick={display}
            name="salary"
          >
            Display Current Hourly Wage
          </button>
          <div style={{marginTop: "20px", marginLeft: "50px" }} className="col-md">
            {salarylist.map((val, key) => {
              return <h1>Id : {val.Idnumber} and</h1>;
            })}
          </div>
          <div style={{ paddingLeft:"5px", marginTop: "20px" }} className="col-md">
            {salarylist.map((val, key) => {
              return <h1>Current wage : {val.salary}</h1>;
            })}
          </div>
        </div>
      </div>
      <label style={{ marginRight: "50px",paddingLeft:"30px" }}>
        Enter the Id:
      </label>
      <input
        style={{width:"600px", marginRight: "50px",marginLeft: "37px"}}
        className="col-md"
        type="text"
        name="Department"
        onChange={(event) => {
          setIdnumber(event.target.value);
        }}
      ></input>
      <br></br>
      <br></br>

      <label style={{marginRight: "50px",paddingLeft:"30px"}}>
        Enter the salary:
      </label>
      <input
        style={{width:"600px", }}
        className="col-md"
        type="text"
        name="Department"
        onChange={(event) => {
          setsalary(event.target.value);
        }}
      ></input>
      <button
        style={{ width: "346px", marginTop: "20px", marginLeft: "17px" }}
        className="col-md"
        onClick={updatesalary}
        name="salary"
      >
        Save
      </button>
    </div>
  );
}
