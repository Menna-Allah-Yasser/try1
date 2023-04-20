import express from "express";

const app = express();

const students = [
  {
    id: 1,
    name: "Menna",
    city: "Sadat",
  },
  {
    id: 2,
    name: "Yasser",
    city: "Sadat",
  },
  {
    id: 3,
    name: "Mohamed",
    city: "Cairo",
  },
  {
    id: 4,
    name: "Mostafa",
    city: "Cairo",
  },
];

const studentFunction = (request , response) => {
  let output = "<ul>";
  for (let i=0; i < students.length; i++) {
  const student = students[i];
  output += "<li  style='font-size:20px; font-weight:bold; padding-bottom:5px ;'>" + student.name + "</li>";
  }
  output += "</ul>";
  response.send(output);
 };

app.get("/student", studentFunction);

app.listen(5000);