//module.exports = studentRouter;
module.exports = function (express) {
    var studentRouterObject = express.Router();

    studentRouterObject.post("/", (request, response) => {
        var studentName = request.body.studentName;
        var rollNo = request.body.rollNo;
        var student1 = new registerScheme({ "studentName": studentName, "rollNumber": rollNo });
        student1.save((error) => {
            if (error) {
                console.error(error);
            }
            else {
                response.status(200).send(studentName + "was added to student register");
            }
        });
        // response.status(200).send("Added student detail");
    });

    return studentRouterObject;
}
