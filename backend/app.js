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
app.use("/Measure", measureRouter);
app.use("/Sensor", sensorRouter);
app.use("/User", userRouter);

// catch 404 and forward to error handler
    app.use(function(req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
    });
    
// error handler
    app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    
// render the error page
    res.status(err.status || 500);
    res.render('error');
    });

module.exports = app;
