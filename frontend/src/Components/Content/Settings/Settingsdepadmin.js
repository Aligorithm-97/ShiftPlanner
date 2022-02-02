import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import WorkingHoursTab from "./Settings Tabs/WorkingHoursTab";
import Salary from "./Settings Tabs/Salary";
import NightShiftTab from "./Settings Tabs/NightShiftTab";
import PlanningTab from "./Settings Tabs/PlanningTab";
import BreakTab from "./Settings Tabs/BreakTab";
import Header from "../../Header/Header"
import Navbardepadmin from "../../NavBar/Navbardepadmin"
import Footer from "../../Footer/Footer"
function Settings() {
  const [key, setKey] = useState("Salary");

  return (
    <div>
      <Header />
        <Navbardepadmin />
    <div
      className="container"
      style={{ border: "1px solid black", marginBottom: "300px",marginTop:"50px" }}
    >
      <Tabs
      style={{border: "1px black"}}
        id="controlled-tab-example"
        defaultActiveKey={"Salary"}
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="Salary" title="Salary">
          <Salary/>
        </Tab>
        <Tab eventKey="WorkingHours" title="Working Hours">
          <WorkingHoursTab />
        </Tab>
        <Tab eventKey="NightShift" title="Night Shift">
          <NightShiftTab />
        </Tab>
        <Tab eventKey="Break" title="Break Limits">
          <BreakTab />
        </Tab>
        <Tab eventKey="Planning" title="Planning">
          <PlanningTab />
        </Tab>
      </Tabs>
    </div>
    <Footer/>
    </div>
  );
}

export default Settings;
