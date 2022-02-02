import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Login from "./Pages/Login/Login";
import HomePage from "./Components/Content/HomePage/Homepage";
import HomePageemp from "./Components/Content/HomePage/Homepageemp";
import Homepagedepadmin from "./Components/Content/HomePage/Homepagedepadmin";
import Employee from "./Components/Content/Employee/Employee";
import Shiftman from "./Components/Content/Shift Management/Shiftman";
import Shiftmandepadmin from "./Components/Content/Shift Management/Shiftmandepadmin";
import Settings from "./Components/Content/Settings/Settings";
import Settingsdepadmin from "./Components/Content/Settings/Settingsdepadmin";
import Help from "./Components/Content/Help/Help";
import Helpdepadmin from "./Components/Content/Help/Helpdepadmin";
import Helpemp from "./Components/Content/Help/Helpemp";
import Empview from "./Components/Content/Empview/Empview";
import Emp_Shift from "./Components/Content/Employee/Emp_Shift";
import EmployeePreference from "./Components/Content/Employee/EmployeePreference";
import Employeedepadmin from "./Components/Content/Employee/Employeedepadmin";
class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/HomePage" component={HomePage} />
            <Route path="/Employee" component={Employee} />
            <Route path="/Shiftman" component={Shiftman} />
            <Route path="/Shiftmandepadmin" component={Shiftmandepadmin} />
            <Route path="/Settings" component={Settings} />
            <Route path="/Settingsdepadmin" component={Settingsdepadmin} />
            <Route path="/Help" component={Help} />
            <Route path="/Empview" component={Empview} />
            <Route path="/Homepageemp" component={HomePageemp} />
            <Route path="/Emp_Shift" component={Emp_Shift} />
            <Route path="/Helpemp" component={Helpemp} />
            <Route path="/Helpdepadmin" component={Helpdepadmin} />
            <Route path="/Preference" component={EmployeePreference} />
            <Route path="/Employeedepadmin" component={Employeedepadmin} />
            <Route path="/Homepagedepadmin" component={Homepagedepadmin} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
