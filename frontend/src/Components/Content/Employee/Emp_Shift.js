import React, { useState, useEffect } from "react";
import Header from "../../Header/Header";
import Navbaremp from "../../NavBar/Navbaremp";
import Footer from "../../Footer/Footer";
import Axios from "axios";
import Cookies from "js-cookie";

function Emp_Shift() {
  const [group, setGroup] = useState("");
  const [assignedOffDay, setassignedOffDay] = useState("");

  const fetchGroup = async () => {
    const Id = Cookies.get("Id");
    console.log("Id=", Id);
    await Axios.post("http://localhost:3001/Emp_Shift", { Id: Id }).then(
      (response) => {
        console.log("response", response);
        setGroup(response.data[0].Crew);
        setassignedOffDay(response.data[0].Assignedoffday);
      }
    );
  };

  const showTable = () => {
    if (group == "Purple") {
      return (
        <div>
          <h3>
            Your Weekly Schedule which repeats itself to avoid conflicts after
            the schedule is done :
          </h3>
          <img style={{ height: "600px" }} src="dist/img/purple.PNG" />
          <br></br>
          <br></br>
          <p>Your Offday : {assignedOffDay}</p>
        </div>
      );
    } else if (group == "Green") {
      return (
        <div>
          <h3>
            Your Weekly Schedule which repeats itself to avoid conflicts after
            the schedule is done :
          </h3>
          <img style={{ height: "600px" }} src="dist/img/green.PNG" />
          <br></br>
          <br></br>
          <p>Your Offday : {assignedOffDay}</p>
        </div>
      );
    } else if (group == "Blue") {
      return (
        <div>
          <h3>
            Your Weekly Schedule which repeats itself to avoid conflicts after
            the schedule is done :
          </h3>
          <img style={{ height: "600px" }} src="dist/img/blue.PNG" />
          <br></br>
          <br></br>
          <p>Your Offday : {assignedOffDay}</p>
        </div>
      );
    }
  };

  useEffect(() => {
    fetchGroup();
  }, []);

  console.log(group);
  return (
    <div>
      <Header />
      <Navbaremp />
      <h1>
        <div className="container">{showTable()}</div>
      </h1>
      <Footer />
    </div>
  );
}

export default Emp_Shift;
