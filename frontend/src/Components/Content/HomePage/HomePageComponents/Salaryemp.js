import React, { Component } from 'react'
import Axios from "axios";
import { useState } from "react";
export default function Salaryemp () {
    const [salarylist, setsalarylist] = useState([]);
    const displaysalary = () => {
        Axios.get("http://localhost:3001/dispSalary").then((response) => {
      setsalarylist(response.data);
    });
      };
        return (
            <div >
             <div class="card">
             {salarylist.map((val, key) => {
              return <h1>Your monthly salary : {val.salary*192}</h1>;
            })}
            <button
        style={{ width: "300px", marginTop: "20px", marginLeft: "17px" }}
        className="col-md"
        onClick={displaysalary}
        name="salary"
      >
        Show Salary
      </button>
            </div>
            </div>
      )

}
