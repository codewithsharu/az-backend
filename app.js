const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const employees = [
  { id: 101, name: "Mohan", empId: "EMP001" },
  { id: 102, name: "Varshitha", empId: "EMP002" },
  { id: 103, name: "Shareen", empId: "EMP003" }
];


app.get("/", (req, res) => {
  res.send(" AZ Backend API Working");
});

app.get("/mark", (req, res) => {
  res.send(" markdown text : shareen 123");
});

app.get("/api/status", (req, res) => {
  res.json({
    backendStatus: "UP",
    lastUpdated: new Date().toISOString()
  });
});

app.get("/api/employees", (req, res) => {
  res.json(employees);
});

module.exports = app;