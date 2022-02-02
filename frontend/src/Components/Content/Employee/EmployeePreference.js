import React, { Component } from 'react'
import Axios from "axios";
import { useState } from "react";
import Header from "../../Header/Header";
import Navbaremp from "../../NavBar/Navbaremp";
import Footer from "../../Footer/Footer";
import Cookies from 'js-cookie';
export default function EmployeePreference() {
    const [Idnumber, setIdnumber] = useState("");
    const [Dayoffpreference, setDayoffpreference] = useState();
    const [Dayoffpreferencetwo, setDayoffpreferencetwo] = useState();
    const Id = Cookies.get("Id")
    console.log(Id)
    const addPreference = () => {
        Axios.post("http://localhost:3001/pref", {
          Idnumber : Id,
          Dayoffpreference : Dayoffpreference,
          Dayoffpreferencetwo: Dayoffpreferencetwo,
        }).then((response) => {
          if(response.data){
            alert("Çalışan Eklendi")
          }
          else{
            alert(response.data.message)
          }
        });
      };
      const deleteEmp = (Idnumber) => {
        Axios.delete(`http://localhost:3001/deletepref/${Id}`);
      };
        return (
            <div>
              <Header></Header>
        <Navbaremp></Navbaremp>
        <div style={{marginBottom:"300px"}}className="container">
        <div className="card">
          <label style={{ marginRight: "50px", marginTop: "30px" }}>
            1st Offday preference:
          </label>
          <input
            style={{ marginRight: "50px", marginTop: "20px" }}
            className="col-md"
            type="text"
            name="Department"
            onChange={(event) => {
              setDayoffpreference(event.target.value);
            }}
          ></input>
          <label style={{ marginRight: "50px", marginTop: "30px" }}>
            2nd Offday preference:
          </label>
          <input
            style={{ marginRight: "50px", marginTop: "20px" }}
            className="col-md"
            type="text"
            name="Department"
            onChange={(event) => {
              setDayoffpreferencetwo(event.target.value);
            }}
          ></input>
          <button
            style={{ marginRight: "80px" }}
            className="col-md"
            onClick={addPreference}
            name="ekle"
          >
            Add
          </button>
          <button
            style={{ marginRight: "80px" }}
            className="col-md"
            onClick={deleteEmp}
            name="iptal"
          >
            Cancel preference
          </button>
        </div>
        </div>
        <Footer></Footer>  
            </div>
        )
    
}
