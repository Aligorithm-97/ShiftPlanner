import React, { useState } from 'react';
import Axios from 'axios';
import { ListGroup, ListGroupItem, Table } from "reactstrap";

function Event(){
    
    const [employeeList, setEmployeeList] = useState([]);
    const display = () => {
        Axios.get("http://localhost:3001/eventcreator").then((response) => {
          setEmployeeList(response.data);
        });
      };
        return (
            <div class="card">
                <h1><i class="fa fa-calendar-alt"></i> Event Calendar</h1>
            
                <ListGroup>
      <div className="container" style={{ paddingRight:"40px"}}>
      <ListGroupItem style={{height:"200px",overflow:"scroll"}}>
        {employeeList.map((val, key) => {
          return (
            <Table striped bordered hover>
              <thead>
                <th>Event</th>
                <th>Event Date</th>
               
              </thead>
              <tbody>
                <tr>
                  <td>{val.event}</td>
                  <td>{val.eventDate}</td>
                 
                </tr>
              </tbody>
            </Table>
          );
        })}
        </ListGroupItem>
      </div>
      </ListGroup>
      <button
            style={{ marginRight: "80px" }}
            className="col-md"
            onClick={display}
            name="ekranagetir"
          >
            Display
          </button>
            </div>
        )
    }

export default Event;