import React, { Component, useState, useEffect } from "react";
import Header from "../../Header/Header";
import Navbar from "../../NavBar/Navbar";
import Footer from "../../Footer/Footer";
import Axios from "axios";
import { ListGroup, ListGroupItem, Table } from "reactstrap";
Axios.defaults.withCredentials = true;
export default function Shiftman() {
  const [allGroups, setallGroups] = useState([]);

  const [clicked, setclicked] = useState(false);

  class Employee {
    constructor(id, wishingOffDay, wishingOffDay2, assignedOffDay, group) {
      this.id = id;
      this.wishingOffDay = wishingOffDay;
      this.wishingOffDay2 = wishingOffDay2;
      this.assignedOffDay = assignedOffDay;
      this.group = group;
    }
  }

  class Purple {
    constructor(mon, tue, wed, thu, fri) {
      this.mon = mon;
      this.tue = tue;
      this.wed = wed;
      this.thu = thu;
      this.fri = fri;
    }
  }
  class Blue {
    constructor(mon, tue, wed, thu, fri) {
      this.mon = mon;
      this.tue = tue;
      this.wed = wed;
      this.thu = thu;
      this.fri = fri;
    }
  }
  class Green {
    constructor(mon, tue, wed, thu, fri) {
      this.mon = mon;
      this.tue = tue;
      this.wed = wed;
      this.thu = thu;
      this.fri = fri;
    }
  }
  const add = async (_workerlist) => {
    await Axios.post("http://localhost:3001/shiftassign", {
      workerlist: _workerlist,
    }).then(() => {
      console.log("success");
      setclicked(true);
    });
  };
  function secondChoice(myworker) {
    if (myworker.wishingOffDay2 == "Mon") {
      if (purple.mon < 2) {
        myworker.assignedOffDay = "Mon";
        myworker.group = "Purple";
        purple.mon += 1;
      } else if (blue.mon < 2) {
        myworker.assignedOffDay = "Mon";
        myworker.group = "Blue";
        blue.mon += 1;
      } else if (green.mon < 2) {
        myworker.assignedOffDay = "Mon";
        myworker.group = "Green";
        green.mon += 1;
      } else {
        return false;
      }
      return true;
    } else if (myworker.wishingOffDay2 == "Tue") {
      if (purple.tue < 2) {
        myworker.assignedOffDay = "Tue";
        myworker.group = "Purple";
        purple.tue += 1;
      } else if (blue.tue < 2) {
        myworker.assignedOffDay = "Tue";
        myworker.group = "Blue";
        blue.tue += 1;
      } else if (green.tue < 2) {
        myworker.assignedOffDay = "Tue";
        myworker.group = "Green";
        green.tue += 1;
      } else {
        return false;
      }
      return true;
    } else if (myworker.wishingOffDay2 == "Wed") {
      if (purple.wed < 2) {
        myworker.assignedOffDay = "Wed";
        myworker.group = "Purple";
        purple.wed += 1;
      } else if (blue.wed < 2) {
        myworker.assignedOffDay = "Wed";
        myworker.group = "Blue";
        blue.wed += 1;
      } else if (green.wed < 2) {
        myworker.assignedOffDay = "Wed";
        myworker.group = "Green";
        green.wed += 1;
      } else {
        return false;
      }
      return true;
    } else if (myworker.wishingOffDay2 == "Thu") {
      if (purple.thu < 2) {
        myworker.assignedOffDay = "Thu";
        myworker.group = "Purple";
        purple.thu += 1;
      } else if (blue.thu < 2) {
        myworker.assignedOffDay = "Thu";
        myworker.group = "Blue";
        blue.thu += 1;
      } else if (green.thu < 2) {
        myworker.assignedOffDay = "Thu";
        myworker.group = "Green";
        green.thu += 1;
      } else {
        return false;
      }
      return true;
    } else if (myworker.wishingOffDay2 == "Fri") {
      if (purple.fri < 2) {
        myworker.assignedOffDay = "Fri";
        myworker.group = "Purple";
        purple.fri += 1;
      } else if (blue.fri < 2) {
        myworker.assignedOffDay = "Fri";
        myworker.group = "Blue";
        blue.fri += 1;
      } else if (green.fri < 2) {
        myworker.assignedOffDay = "Fri";
        myworker.group = "Green";
        green.fri += 1;
      } else {
        return false;
      }
      return true;
    }
  }
  const workers = [];
  const unassigned = [];
  const [employeeList, setEmployeeList] = useState([]);
  const [Idnumber, setIdnumber] = useState();
  const [DayoffPreference, setDayoffpreference] = useState();
  const [DayoffPreferencetwo, setDayoffpreferencetwo] = useState();

  const display = async () => {
    await Axios.get("http://localhost:3001/employee2").then((response) => {
      setEmployeeList(response.data);
      setDayoffpreference(response.data.DayoffPreference);
      setIdnumber(response.data.Idnumber);
      setDayoffpreferencetwo(response.data.DayoffPreferencetwo);
    });
  };

  {
    employeeList.map((val, key) => {
      workers[key] = new Employee(
        val.Idnumber,
        val.Dayoffpreference,
        val.Dayoffpreferencetwo
      );
    });
  }
  for (var y = 0; y < workers.length; y++) {
    console.log(workers[y]);
  }
  console.log("asdfsdf");
  const purple = new Purple(0, 0, 0, 0, 0);
  const blue = new Blue(0, 0, 0, 0, 0);
  const green = new Green(0, 0, 0, 0, 0);

  const algorithm = () => {
    display();

    var i;
    var j = 0;

    for (i = 0; i < workers.length; i++) {
      if (workers[i].wishingOffDay == "Mon") {
        if (purple.mon < 2) {
          workers[i].assignedOffDay = "Mon";
          workers[i].group = "Purple";
          purple.mon += 1;
        } else if (blue.mon < 2) {
          workers[i].assignedOffDay = "Mon";
          workers[i].group = "Blue";
          blue.mon += 1;
        } else if (green.mon < 2) {
          workers[i].assignedOffDay = "Mon";
          workers[i].group = "Green";
          green.mon += 1;
        } else {
          if (secondChoice(workers[i])) {
            console.log("burayagirdim");
          } else {
            unassigned[j] = workers[i].id;
            j += 1;
          }
        }
      } else if (workers[i].wishingOffDay == "Tue") {
        if (purple.tue < 2) {
          workers[i].assignedOffDay = "Tue";
          workers[i].group = "Purple";
          purple.tue += 1;
        } else if (blue.tue < 2) {
          workers[i].assignedOffDay = "Tue";
          workers[i].group = "Blue";
          blue.tue += 1;
        } else if (green.tue < 2) {
          workers[i].assignedOffDay = "Tue";
          workers[i].group = "Green";
          green.tue += 1;
        } else {
          if (secondChoice(workers[i])) {
            console.log("burayagirdim");
          } else {
            unassigned[j] = workers[i].id;
            j += 1;
          }
        }
      } else if (workers[i].wishingOffDay == "Wed") {
        if (purple.wed < 2) {
          workers[i].assignedOffDay = "Wed";
          workers[i].group = "Purple";
          purple.wed += 1;
        } else if (blue.wed < 2) {
          workers[i].assignedOffDay = "Wed";
          workers[i].group = "Blue";
          blue.wed += 1;
        } else if (green.wed < 2) {
          workers[i].assignedOffDay = "Wed";
          workers[i].group = "Green";
          green.wed += 1;
        } else {
          if (secondChoice(workers[i])) {
            console.log("burayagirdim");
          } else {
            unassigned[j] = workers[i].id;
            j += 1;
          }
        }
      } else if (workers[i].wishingOffDay == "Thu") {
        if (purple.thu < 2) {
          workers[i].assignedOffDay = "Thu";
          workers[i].group = "Purple";
          purple.thu += 1;
        } else if (blue.thu < 2) {
          workers[i].assignedOffDay = "Thu";
          workers[i].group = "Blue";
          blue.thu += 1;
        } else if (green.thu < 2) {
          workers[i].assignedOffDay = "Thu";
          workers[i].group = "Green";
          green.thu += 1;
        } else {
          if (secondChoice(workers[i])) {
            console.log("burayagirdim");
          } else {
            unassigned[j] = workers[i].id;
            j += 1;
          }
        }
      } else if (workers[i].wishingOffDay == "Fri") {
        if (purple.fri < 2) {
          workers[i].assignedOffDay = "Fri";
          workers[i].group = "Purple";
          purple.fri += 1;
        } else if (blue.fri < 2) {
          workers[i].assignedOffDay = "Fri";
          workers[i].group = "Blue";
          blue.fri += 1;
        } else if (green.fri < 2) {
          workers[i].assignedOffDay = "Fri";
          workers[i].group = "Green";
          green.fri += 1;
        } else {
          if (secondChoice(workers[i])) {
            console.log("burayagirdim");
          } else {
            unassigned[j] = workers[i].id;
            j += 1;
          }
        }
      }
    }
    for (i = 0; i < j; i++) {
      if (purple.mon < 2) {
        for (var k = 0; k < 30; k++) {
          if (unassigned[i] == workers[k].id) {
            workers[k].assignedOffDay = "Mon";
            workers[k].group = "Purple";
            purple.mon += 1;
          }
        }
      } else if (purple.tue < 2) {
        for (var k = 0; k < 30; k++) {
          if (unassigned[i] == workers[k].id) {
            workers[k].assignedOffDay = "Tue";
            workers[k].group = "Purple";
            purple.tue += 1;
          }
        }
      } else if (purple.wed < 2) {
        for (var k = 0; k < 30; k++) {
          if (unassigned[i] == workers[k].id) {
            workers[k].assignedOffDay = "Wed";
            workers[k].group = "Purple";
            purple.wed += 1;
          }
        }
      } else if (purple.thu < 2) {
        for (var k = 0; k < 30; k++) {
          if (unassigned[i] == workers[k].id) {
            workers[k].assignedOffDay = "Thu";
            workers[k].group = "Purple";
            purple.thu += 1;
          }
        }
      } else if (purple.fri < 2) {
        for (var k = 0; k < 30; k++) {
          if (unassigned[i] == workers[k].id) {
            workers[k].assignedOffDay = "Fri";
            workers[k].group = "Purple";
            purple.fri += 1;
          }
        }
      } else if (green.mon < 2) {
        for (var k = 0; k < 30; k++) {
          if (unassigned[i] == workers[k].id) {
            workers[k].assignedOffDay = "Mon";
            workers[k].group = "Green";
            green.mon += 1;
          }
        }
      } else if (green.tue < 2) {
        for (var k = 0; k < 30; k++) {
          if (unassigned[i] == workers[k].id) {
            workers[k].assignedOffDay = "Tue";
            workers[k].group = "Green";
            green.tue += 1;
          }
        }
      } else if (green.wed < 2) {
        for (var k = 0; k < 30; k++) {
          if (unassigned[i] == workers[k].id) {
            workers[k].assignedOffDay = "Wed";
            workers[k].group = "Green";
            green.wed += 1;
          }
        }
      } else if (green.thu < 2) {
        for (var k = 0; k < 30; k++) {
          if (unassigned[i] == workers[k].id) {
            workers[k].assignedOffDay = "Thu";
            workers[k].group = "Green";
            green.thu += 1;
          }
        }
      } else if (green.fri < 2) {
        for (var k = 0; k < 30; k++) {
          if (unassigned[i] == workers[k].id) {
            workers[k].assignedOffDay = "Fri";
            workers[k].group = "Green";
            green.fri += 1;
          }
        }
      } else if (blue.mon < 2) {
        for (var k = 0; k < 30; k++) {
          if (unassigned[i] == workers[k].id) {
            workers[k].assignedOffDay = "Mon";
            workers[k].group = "Blue";
            blue.mon += 1;
          }
        }
      } else if (blue.tue < 2) {
        for (var k = 0; k < 30; k++) {
          if (unassigned[i] == workers[k].id) {
            workers[k].assignedOffDay = "Tue";
            workers[k].group = "Blue";
            blue.tue += 1;
          }
        }
      } else if (blue.wed < 2) {
        for (var k = 0; k < 30; k++) {
          if (unassigned[i] == workers[k].id) {
            workers[k].assignedOffDay = "Wed";
            workers[k].group = "Blue";
            blue.wed += 1;
          }
        }
      } else if (blue.thu < 2) {
        for (var k = 0; k < 30; k++) {
          if (unassigned[i] == workers[k].id) {
            workers[k].assignedOffDay = "Thu";
            workers[k].group = "Blue";
            blue.thu += 1;
          }
        }
      } else if (blue.fri < 2) {
        for (var k = 0; k < 30; k++) {
          if (unassigned[i] == workers[k].id) {
            workers[k].assignedOffDay = "Fri";
            workers[k].group = "Blue";
            blue.fri += 1;
          }
        }
      }
    }

    add(workers);
    fetchAllGroups();
  };

  const fetchAllGroups = async () => {
    await Axios.get("http://localhost:3001/allGroups").then((response) => {
      console.log(response);
      const allGroups = response.data;
      console.log("allGroups", allGroups);
      setallGroups(allGroups);
    });
  };

  const showGroups = () => {
    const purple = [];
    const green = [];
    const blue = [];

    allGroups.map((item) => {
      if (item.Crew == "Purple") {
        purple.push(item);
      } else if (item.Crew == "Green") {
        green.push(item);
      } else if (item.Crew == "Blue") {
        blue.push(item);
      }
    });

    console.log("purple", purple);
    console.log("green", green);
    console.log("blue", blue);

    return (
      <div className="row">
        <div>
          <h5>Employee's three weeks of shift schedule which repeats itself to avoid conflicts after the schedule is done :</h5>
          <img style={{ width:"1250px",height:"410px",paddingRight:"250px",paddingLeft:"100px"}} src="dist/img/allshifts.PNG" />
          <br></br>
          <br></br>
        </div>
        <h2 style={{marginTop:"100px"}}>Purple:</h2>
        <ListGroup className="col-md">
          <div style={{ paddingRight: "10px" }}>
            <ListGroupItem  style={{width:"250px", height: "250px", overflow: "scroll" }}>
              {purple.map((item) => {
                return (
                  <Table striped bordered hover>
                    <thead>
                      <th>Id</th>
                      <th>Assignedoffday</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{item.Idnumber}</td>
                        <td>{item.Assignedoffday}</td>
                      </tr>
                    </tbody>
                  </Table>
                );
              })}
            </ListGroupItem>
          </div>
        </ListGroup>
        <h2 style={{marginTop:"100px"}}>Green:</h2>
        <ListGroup className="col-md">
          <div style={{ paddingRight: "10px" }}>
            <ListGroupItem style={{width:"250px", height: "250px", overflow: "scroll" }}>
              {green.map((item) => {
                return (
                  <Table striped bordered hover>
                    <thead>
                      <th>Id</th>
                      <th>Assignedoffday</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{item.Idnumber}</td>
                        <td>{item.Assignedoffday}</td>
                      </tr>
                    </tbody>
                  </Table>
                );
              })}
            </ListGroupItem>
          </div>
        </ListGroup>
        <h2 style={{marginTop:"100px"}}>Blue:</h2>
        <ListGroup className="col-md">
          <div style={{ paddingRight: "10px" }}>
            <ListGroupItem style={{ width:"250px",height: "250px", overflow: "scroll" }}>
              {blue.map((item) => {
                return (
                  <Table striped bordered hover>
                    <thead>
                      <th>Id</th>
                      <th>Assignedoffday</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{item.Idnumber}</td>
                        <td>{item.Assignedoffday}</td>
                      </tr>
                    </tbody>
                  </Table>
                );
              })}
            </ListGroupItem>
          </div>
        </ListGroup>
      

       

      </div>
    );
  };

  /*

  useEffect(() => {
    console.log( "useEfect called")
    fetchAllGroups()
  }, [clicked])

  */

  console.log("allGroups", allGroups);

  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>

      <div className="container">
        <button onClick={algorithm}>Assign Shifts</button>
        {showGroups()}
      </div>

      <Footer></Footer>
    </div>
  );
}
