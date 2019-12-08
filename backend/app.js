var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var measureRouter = require("./routes/Measure");
var sensorRouter = require("./routes/Sensor");
var userRouter = require("./routes/User");

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/DashboardProject');

var connection = mongoose.connection;
connection.on('connected', function(){
    console.log('connected to db');
});

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/measure", measureRouter);
app.use("/sensor", sensorRouter);
app.use("/user", userRouter);

module.exports = app;
