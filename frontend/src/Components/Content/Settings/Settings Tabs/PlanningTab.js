import React, { Component } from "react";
import Form from "react-bootstrap/Form";

class PlanningTab extends Component {
  render() {
    return (
      <div style={{ margin: "10px", height: "350px" }}>
        <Form.Group controlId="exampleForm.SelectCustomSizeSm">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Form.Label style={{ marginRight: "50px" }}>
            Send e-mail to Employees ____ Hours Before the Shift Start:
          </Form.Label>
          <Form.Control
            style={{ width: "100px", marginRight: "400px" }}
            as="select"
            size="sm"
            custom
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
      </div>
    );
  }
}

export default PlanningTab;
