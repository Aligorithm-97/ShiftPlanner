import React, { Component } from "react";
import Form from "react-bootstrap/Form";

class WorkingHoursTab extends Component {
  render() {
    return (
      <div style={{ margin: "10px",height:"350px" }}>
        <Form.Group
          controlId="exampleForm.SelectCustomSizeSm"
        >
          <br></br>
          <br></br>
          <Form.Label style={{ marginRight: "67px" }}>
            Maximum Daily Working Hour:
          </Form.Label>
          <Form.Control
            style={{ width: "100px", marginRight: "500px" }}
            className="col-sm-6"
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
            Maximum Weekly Working Hour:
          </Form.Label>
          <Form.Control
            style={{ width: "100px", marginRight: "500px" }}
            className="col-sm-6"
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
          <Form.Label style={{ marginRight: "60px" }}>
            Maximum Weekly Working Day:
          </Form.Label>
          <Form.Control
            style={{ width: "100px", marginRight: "500px" }}
            className="col-sm-6"
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
          <Form.Label style={{ marginRight: "40px" }}>
            Maximum Monthly Working Hour:
          </Form.Label>
          <Form.Control
            style={{ width: "100px", marginRight: "500px" }}
            className="col-sm-6"
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
          <Form.Label style={{ marginRight: "40px" }}>
            Maximum Monthly Working Hour:
          </Form.Label>
          <Form.Control
            style={{ width: "100px", marginRight: "500px" }}
            className="col-sm-4"
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

export default WorkingHoursTab;
