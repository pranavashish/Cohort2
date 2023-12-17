const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// middleware

app.use(bodyParser.json());

// create a todo app that lets users store todos on the server
// try to create a http server from scratch in c
// rust using actix-web
// golang using the gurrila framework

app.get("/route-handler", (req, res) => {
  // db call
  res.json({
    name: "Pranav",
    age: 23,
  });
});

app.post("/", (req, res) => {
  res.send("Hello World");
});

app.get("/conversation", (req, res) => {
  console.log(req.headers);
  res.send({
    msg: "2 + 2 = 4",
  });
});

app.listen(port, () => {
  console.log(`${port}`);
});
