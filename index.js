const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const users = [
  { id: 1, name: "Shabana", email: "shabana@gmail.com" },
  { id: 2, name: "Shabnooor", email: "shabnoor@gmail.com" },
  { id: 3, name: "Sabila", email: "sabila@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("User Management Server is running...");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
