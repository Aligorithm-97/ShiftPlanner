import React, { Component } from "react";
import Form from "react-bootstrap/Form";

class NightShiftTab extends Component {
  render() {
    return (
      <div style={{ margin: "10px",height:"350px"  }}>
        <Form.Group controlId="exampleForm.SelectCustomSizeSm">
          <br></br>
          <br></br>
          <Form.Label style={{ marginRight: "50px" }}>Night Shift Time Interval:</Form.Label>
          <Form.Control
            style={{ width: "100px", marginRight: "10px" }}
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
          <Form.Label style={{ marginRight: "50px",marginLeft:"50px" }}>to</Form.Label>
          <Form.Control
            style={{ width: "100px", marginRight: "500px" }}
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
          <br></br>
          <br></br>
          <Form.Label style={{ marginRight: "50px" }}>Minimum Rest Hour After the Night Shift:</Form.Label>
          <Form.Control
            style={{ width: "100px", marginRight: "500px" }}
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
          <br></br>
          <br></br>
          <Form.Label style={{ marginRight: "50px" }}>
            Maximum Overtime That Can Be Written In the Night Shift:
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
          <br></br>
          <br></br>
          <Form.Label style={{ marginRight: "50px" }}>Maximum Daily Night Shift Working Hour Limit:</Form.Label>
          <Form.Control
            style={{ width: "100px", marginRight: "500px" }}
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
          <br></br>
          <br></br>
          <Form.Label style={{ marginRight: "50px" }}>
            If the shift is mostly at night, then the entire shift counts as
            night shift:
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

export default NightShiftTab;
