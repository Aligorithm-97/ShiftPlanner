import React, { Component } from "react";
import { Route } from "react-router-dom";
import HomePage from './HomePage/Homepage'
import Employee from './Employee/Employee'
import ShiftMan from './Shift Management/Shiftman'
import Settings from './Settings/Settings'
import Help from './Help/Help'

export default class ContentRouter extends Component {
  render() {
    return (
      <div className="main-footer">
                {<Route exact path="/HomePage" component={HomePage}></Route>}
                {<Route exact path="/Employee" component={Employee}></Route>}
                {<Route exact path="/ShiftMan" component={ShiftMan}></Route>}
                {<Route exact path="/Settings" component={Settings}></Route>}
                {<Route exact path="/Help" component={Help}></Route>}
      </div>
    );
  }
}
