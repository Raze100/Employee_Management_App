const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const cors = require("cors");
app.use(cors());

const PORT = 8000
// const {PORT} = require("../config/serverConfig")

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://Administrator:Admin1711@cluster0.hph442q.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error Connecting to MongoDB", error);
  });

app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`);
});

const Employee = require("./models/employee");
const Attendance = require("./models/attendance");

//endPoint to register a employee

app.post("/addEmployee", async (req, res) => {
  try {
    // const {
    //   employeeName,
    //   employeeId,
    //   designation,
    //   phoneNumber,
    //   dateOfBirth,
    //   joiningDate,
    //   activeEmployee,
    //   salary,
    //   address,
    // } = req.body;

    //create a new employee
    // const newEmployee = new Employee({
    //   employeeName,
    //   employeeId,
    //   designation,
    //   phoneNumber,
    //   dateOfBirth,
    //   joiningDate,
    //   activeEmployee,
    //   salary,
    //   address,
    // });

    const payload = req.body;
    const data = await Employee.create(payload);
    // await newEmployee.save();
    res
      .status(201)
      .json({
        message: "Employee Created Successfully",
        employee: data,
      });
  } catch (error) {
    console.log("Error creating Employee", error);
    res.status(500).json({ message: "failed to add an employee" });
  }
});

//endPoint to fetch all the employees

app.get("/employees", async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    console.log("Error Fetching the Employees", error);
    res.status(500).json({ message: "failed to retrieve the employees" });
  }
});
