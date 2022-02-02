const express = require("express");
const app = express();

const mysql = require("mysql");
const cors = require("cors");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const bcrypt = require("bcrypt");
const { restart } = require("nodemon");
const saltRounds = 10;

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "DELETE", "UPDATE"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "userId",
    secret: "shiftmanagement",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "employees",
});

app.delete("/shiftdelete", (req, res) => {
  db.query("DELETE FROM employees.shift", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/shiftassign", (req, res) => {
  const workerlist = req.body.workerlist;
  console.log(workerlist);
  console.log(workerlist.length);

  for (let i = 0; i < workerlist.length; i++) {
    console.log(workerlist[i]);

    try {
      db.query(
        "INSERT INTO shift (Idnumber,Crew,Assignedoffday) VALUES (?,?,?)",
        [workerlist[i].id, workerlist[i].group, workerlist[i].assignedOffDay]
      ),
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
        };
    } catch (error) {
      res.send(error);
    }
  }
});

app.post("/create", (req, res) => {
  const Idnumber = req.body.Idnumber;
  const Name = req.body.Name;
  const Surname = req.body.Surname;
  const Password = req.body.Password;
  const DateofBirth = req.body.DateofBirth;
  const Position = req.body.Position;
  const Mail = req.body.Mail;
  const Department = req.body.Department;
  const Dayoffpreference = req.body.Dayoffpreference;
  const Dayoffpreferencetwo = req.body.Dayoffpreferencetwo;
  const Crew = req.body.Crew;

  bcrypt.hash(Password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
      return;
    }
    db.query(
      "INSERT INTO employees (Idnumber,Name,Surname,Password,DateofBirth,Position,Mail,Department,Dayoffpreference,Dayoffpreferencetwo,Crew) VALUES (?,?,?,?,?,?,?,?,?,?,?)",
      [
        Idnumber,
        Name,
        Surname,
        hash,
        DateofBirth,
        Position,
        Mail,
        Department,
        Dayoffpreference,
        Dayoffpreferencetwo,
        Crew,
      ]
    ),
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      };
  });
});

app.post("/eventcreator", (req, res) => {
  const eventExp = req.body.eventExp;
  const eventDate = req.body.eventDate;
  db.query("INSERT INTO event (event, eventDate) VALUES (?,?)", [
    eventExp,
    eventDate,
  ]),
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    };
});
app.post("/settings", (req, res) => {
  const Idnumber = req.body.Idnumber;
  const salary = req.body.salary;
  db.query("INSERT INTO settings (Idnumber, salary) VALUES (?,?)", [
    Idnumber,
    salary,
  ]),
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    };
});

app.get("/eventcreator", (req, res) => {
  db.query("SELECT * FROM event", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/employee", (req, res) => {
  db.query("SELECT * FROM employees", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/dispSalary", (req, res) => {
  db.query("SELECT * FROM settings", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/preferenceReq", (req, res) => {
  db.query("SELECT * FROM employeepreference", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/employee2", (req, res) => {
  const Position = req.params.Position;
  db.query(
    "SELECT * FROM employees WHERE Position='Employee'",
    Position,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
app.delete("/delete/:Idnumber", (req, res) => {
  const Idnumber = req.params.Idnumber;
  db.query(
    "DELETE FROM employees WHERE Idnumber=?",
    Idnumber,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
app.delete("/deletepref/:Idnumber", (req, res) => {
  const Idnumber = req.params.Idnumber;
  db.query(
    "DELETE FROM employeepreference WHERE Idnumber=?",
    Idnumber,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
app.delete("/deletesettings/:Idnumber", (req, res) => {
  const Idnumber = req.params.Idnumber;
  db.query("DELETE FROM settings WHERE Idnumber=?", Idnumber, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.post("/create/:Idnumber", (req, res) => {
  const Idnumber = req.params.Idnumber;
  const Crew = req.body.Crew;
  const Assignedoffday = req.body.Assignedoffday;
  db.query(
    "INSERT into employees WHERE Idnumber=? (Crew, Assignedoffday) VALUES (?,?)",
    [Idnumber, Crew, Assignedoffday],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/login", (req, res) => {
  if (req.session.user) {
    console.log(Idnumber);
    return res.send({ loggedIn: true, user: req.session.user });
  } else {
    return res.send({ loggedIn: false });
    // stop further execution in this callback
  }
});
app.post("/login", (req, res) => {
  const Idnumber = req.body.Idnumber;
  const Password = req.body.Password;

  db.query(
    "SELECT * FROM employees WHERE Idnumber = ?;",
    Idnumber,
    (err, result) => {
      if (err) {
        return res.send({ err: err });
      }
      if (result) {
        if (result.length > 0) {
          bcrypt.compare(Password, result[0].Password, (error, response) => {
            if (response) {
              req.session.user = result;
              console.log(req.session.user);
              res.send(result);
            } else {
              return res.send({
                message: "Wrong username/password combination!",
              });
            }
          });
        } else {
          return res.send({ message: "result does not exist" });
        }
      } else {
        return res.send({ message: "User doesn't exist" });
      }
    }
  );
});
app.put("/update", (req, res) => {
  const Idnumber = req.body.Idnumber;
  const Crew = req.body.Crew;
  db.query(
    "UPDATE SET EMPLOYEES (Crew=?, Assignedoffday=?) WHERE Idnumber=?",
    [Crew, Idnumber],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/Emp_Shift", (req, res) => {
  const emp_Id = req.body.Id;
  console.log(emp_Id);
  db.query(
    "select * from employees.shift where Idnumber = ?;",
    emp_Id,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
app.post("/pref", (req, res) => {
  const Idnumber = req.body.Idnumber;
  const Dayoffpreference = req.body.Dayoffpreference;
  const Dayoffpreferencetwo = req.body.Dayoffpreferencetwo;
  db.query(
    "INSERT INTO employeepreference (Idnumber,Dayoffpreference,Dayoffpreferencetwo) VALUES (?,?,?)",
    [Idnumber, Dayoffpreference, Dayoffpreferencetwo]
  ),
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    };
});

app.get("/allGroups", (req, res) => {
  db.query("select * from employees.shift;", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/", (req, res) => {
  res.send("dene");
});

app.listen(3001, () => {
  console.log("hello");
});
