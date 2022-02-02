import React from "react";
import { useState } from "react";
import Axios from "axios";
import { ListGroup, ListGroupItem, Table } from "reactstrap";
import Header from "../../Header/Header";
import Navbar from "../../NavBar/Navbar";
import Footer from "../../Footer/Footer";
function Employee() {
  const [Idnumber, setIdnumber] = useState("");
  const [Name, setName] = useState("");
  const [Surname, setSurname] = useState("");
  const [Password, setPassword] = useState("");
  const [DateofBirth, setDateofBirth] = useState("");
  const [Position, setPosition] = useState("");
  const [Mail, setMail] = useState("");
  const [Department, setDepartment] = useState("");
  const [employeeList, setEmployeeList] = useState([]);
  const [employeeList2, setEmployeeList2] = useState([]);
  const [Dayoffpreference, setDayoffpreference] = useState();
  const [Dayoffpreferencetwo, setDayoffpreferencetwo] = useState();
  const addEmployee = () => {
    Axios.post("http://localhost:3001/create", {
      Idnumber: Idnumber,
      Name: Name,
      Surname: Surname,
      Password: Password,
      DateofBirth: DateofBirth,
      Position: Position,
      Mail: Mail,
      Department: Department,
      Dayoffpreference : Dayoffpreference,
      Dayoffpreferencetwo: Dayoffpreferencetwo,
    }).then(() => {
      console.log("success");
    });
  };
  const display = () => {
    Axios.get("http://localhost:3001/employee").then((response) => {
      setEmployeeList(response.data);
    });
  };
  const displayPref = () => {
    Axios.get("http://localhost:3001/preferenceReq").then((response) => {
      setEmployeeList2(response.data);
    });
  };
  const deleteEmp = (Idnumber) => {
    Axios.delete(`http://localhost:3001/delete/${Idnumber}`);
  };
  const updateEmp = () => {
   deleteEmp(Idnumber);
   addEmployee();
  };
  return (
    <div>
      <Header />
      <Navbar />
      <div className="container" style={{ marginLeft: "400px", width:"1500px",height:"500px", border: "1px solid black" }}>
        <div className="row" style={{ paddingLeft: "10px" }}>
          <label style={{ marginRight: "50px", marginTop: "30px" }}>
            Tc NO:
          </label>
          <input
            style={{ marginRight: "50px", marginTop: "20px" }}
            className="col-md"
            type="text"
            name="tc"
            onChange={(event) => {
              setIdnumber(event.target.value);
            }}
          ></input>
          <label style={{ marginRight: "50px", marginTop: "30px" }}>
            Name:
          </label>
          <input
            style={{ marginRight: "50px", marginTop: "20px", width: "100px" }}
            className="col-md"
            type="text"
            name="name"
            onChange={(event) => {
              setName(event.target.value);
            }}
          ></input>
          <label style={{ marginRight: "50px", marginTop: "30px" }}>
            Surname:
          </label>
          <input
            style={{ marginRight: "50px", marginTop: "20px" }}
            className="col-md"
            type="text"
            name="Surname"
            onChange={(event) => {
              setSurname(event.target.value);
            }}
          ></input>
        </div>
        <br></br>
        <br></br>
        <div className="row" style={{ paddingLeft: "10px" }}>
          <label style={{ marginRight: "50px", marginTop: "30px" }}>
            Password:
          </label>
          <input
            style={{ marginRight: "50px", marginTop: "20px" }}
            className="col-md"
            type="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          ></input>
          <label style={{ marginRight: "50px", marginTop: "30px" }}>
            DateofBirth:
          </label>
          <input
            style={{ marginRight: "50px", marginTop: "20px" }}
            className="col-md"
            type="date"
            name="DateofBirth"
            onChange={(event) => {
              setDateofBirth(event.target.value);
            }}
          ></input>
          <br></br>
          <label style={{ marginRight: "50px", marginTop: "30px" }}>
            <br />
            Position:
          </label>
          <input
            style={{ marginRight: "50px", marginTop: "20px" }}
            className="col-md"
            type="text"
            name="Position"
            onChange={(event) => {
              setPosition(event.target.value);
            }}
          ></input>
        </div>
        <br></br>
        <br></br>
        <div className="row" style={{ paddingLeft: "10px" }}>
          <label style={{ marginRight: "50px", marginTop: "30px" }}>
            Mail:
          </label>
          <input
            style={{ marginRight: "50px", marginTop: "20px" }}
            className="col-md"
            type="text"
            name="Mail"
            onChange={(event) => {
              setMail(event.target.value);
            }}
          ></input>
          <label style={{ marginRight: "50px", marginTop: "30px" }}>
            Department:
          </label>
          <input
            style={{ marginRight: "50px", marginTop: "20px" }}
            className="col-md"
            type="text"
            name="Department"
            onChange={(event) => {
              setDepartment(event.target.value);
            }}
          ></input>
          <label style={{ marginRight: "50px", marginTop: "30px" }}>
            Dayoff:
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
            Dayoff2:
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
        </div>
        <br></br>
        <br></br>
        <div
          className="row"
          style={{ marginRight: "40px", paddingLeft: "10px" }}
        >
          <button
            style={{ marginRight: "80px" }}
            className="col-md"
            onClick={addEmployee}
            name="ekle"
          >
            Add
          </button>
          <button
            style={{ marginRight: "50px" }}
            className="col-md"
            onClick={() => {
              deleteEmp(Idnumber);
            }}
            name="sil"
          >
            Delete
          </button>
          <button
            style={{ marginRight: "50px" }}
            className="col-md"
            onClick={updateEmp}
            name="güncelle"
          >
            Update
          </button>
          <div>
            <button
              style={{ marginRight: "50px" }}
              className="col-md"
              onClick={display}
              name="ekranagetir"
            >
              Display
            </button>
            
          </div>
        </div>
        <br></br>
      </div>
      <div className="container">
      <div className="row">
      <div>
        <ListGroup>
          <div className="col-md">
            <ListGroupItem style={{ height: "250px", width:"780px", overflow: "scroll" }}>
              {employeeList.map((val, key) => {
                return (
                  <Table striped bordered hover>
                    <thead>
                      <th>Id</th>
                      <th>Name</th>
                      <th>SurName</th>
                      <th>DateofBirth</th>
                      <th>Position</th>
                      <th>Mail</th>
                      <th>Department</th>
                      <th>DayoffPreference</th>
                      <th>DayoffPreferencetwo</th>
                      <th>Password</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{val.Idnumber}</td>
                        <td>{val.Name}</td>
                        <td>{val.Surname}</td>
                        <td>{val.DateofBirth}</td>
                        <td>{val.Position}</td>
                        <td>{val.Mail}</td>
                        <td>{val.Department}</td>
                        <td>{val.Dayoffpreference}</td>
                        <td>{val.Dayoffpreferencetwo}</td>
                        <td>{val.Password}</td>
                      </tr>
                    </tbody>
                  </Table>
                );
              })}
            </ListGroupItem>
          </div>
        </ListGroup>
        </div>
      <div className="col-md" style={{ marginLeft:"0px",paddingTop:"0px", width:"200px",height:"220px"}}>
      <ListGroup>
          <div>
            <ListGroupItem style={{ width:"337px", height: "200px", overflow: "scroll" }}>
              {employeeList2.map((val, key) => {
                return (
                  <Table striped bordered hover>
                    <thead>
                      <th>Id</th>
                      <th>First Off day preference</th>
                      <th>Second Off day preference</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{val.Idnumber}</td>
                        <td>{val.Dayoffpreference}</td>
                        <td>{val.Dayoffpreferencetwo}</td>
                      </tr>
                    </tbody>
                  </Table>
                );
              })}
            </ListGroupItem>
            <button
              style={{marginTop:"5px", marginLeft:"17px" }}
              className="col-md"
              onClick={displayPref}
              name="ekranagetir"
            >
              Display Pref
            </button>
          </div>
        </ListGroup>
      </div>
      </div>
      </div>
      <Footer></Footer>
    </div>
    
  );
}

export default Employee;
