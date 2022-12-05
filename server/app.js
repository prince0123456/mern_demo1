const mongoose = require("mongoose");
const dotenv=require('dotenv')
const express = require("express");

const app = express();

//DataBase
dotenv.config({path:'./config.env'});
const DB =process.env.DATABASE;

//connect
mongoose
  .connect(DB)
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

//middeleware

const middeleware = (req, res, next) => {
  console.log("middleware");
  next();
};
app.get("/", (req, res) => {
  res.send("hello mern");
});

app.get("/about", middeleware, (req, res) => {
  console.log("about me");
  res.send("hello about form server");
});

app.get("/contact", (req, res) => {
  res.send("hello contact");
});

app.get("/signin", (req, res) => {
  res.send("hello mern login");
});

app.get("/signup", (req, res) => {
  res.send("hello mern login");
});
app.listen(3000, () => {
  console.log("server is running");
});

console.log(4565);
