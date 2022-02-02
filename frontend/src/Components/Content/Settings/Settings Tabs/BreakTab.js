import React, { Component } from "react";
import Form from "react-bootstrap/Form";

class BreakTab extends Component {
  render() {
    return (
      <div style={{ margin: "10px",height:"350px"  }}>
        <Form.Group controlId="exampleForm.SelectCustomSizeSm">
          <br></br>
          <br></br>
          <Form.Label style={{ marginRight: "50px" }}>
            Minimum ___ Minutes Break for Work up to ___ Hours:
          </Form.Label>
          <Form.Control
            style={{ width: "100px", marginRight: "100px" }}
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
          <Form.Label style={{ marginRight: "50px"}}>
            to
          </Form.Label>
          <Form.Control
            style={{ width: "100px", marginRight: "200px" }}
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
            Minimum ___ Minutes Break for Work up to ___ Hours:
          </Form.Label>
          <Form.Control
            style={{ width: "100px", marginRight: "100px" }}
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
          <Form.Label style={{ marginRight: "50px"}}>
            to
          </Form.Label>
          <Form.Control
            style={{ width: "100px", marginRight: "200px" }}
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
          <Form.Label style={{ marginRight: "56px"}}>
            Minimum ___ Minutes Break for Work over ___ Hours:
          </Form.Label>
          <Form.Control
            style={{ width: "100px", marginRight: "100px" }}
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
          <Form.Label style={{ marginRight: "50px"}}>
            to
          </Form.Label>
          <Form.Control
            style={{ width: "100px", marginRight: "200px" }}
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

export default BreakTab;
