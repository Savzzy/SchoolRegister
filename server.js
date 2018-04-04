var express = require("express");
var server = express();
var bodyparser = require("body-parser");
var mongoose = require("mongoose");
var mongo_url = "mongodb://localhost:27017/SchoolRegister";

//Route
var studentRouterFunction = require("./student.route");
var studentRouterObject = studentRouterFunction(express);

server.use(bodyparser.json());
mongoose.connect(mongo_url);

server.use("/student", studentRouterObject);

server.listen(3000, () => {
    console.log("Server listening");
});

mongoose.connection.on("connected", () => {
    console.log("Connection to school resgister successfull" + mongo_url);
});

mongoose.connection.on("disconnected", (err) => {
    console.log(err);
});

var dbScheme = new mongoose.Schema({ "studentName": mongoose.Schema.Types.String, "rollNumber": mongoose.Schema.Types.Number });
var registerScheme = mongoose.model("registerScheme", dbScheme);

var teacherRoute = require("./teacher.route");

server.get("/", (request, response) => {
    console.log(teacherRoute.mul(2,3));
    console.log(teacherRoute.sub(5,3));
    response.status(200).send("server is ready");
});


//server.use('/student', studentRouter)






