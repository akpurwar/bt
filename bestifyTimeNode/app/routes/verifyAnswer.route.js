module.exports = app => {
    const quiz = require("../controllers/verifyAnswer.controller.js");
    
    var router = require("express").Router();
    router.get("/getAnswer/:id", quiz.getAnswer);
    router.get("/getOption/:id", quiz.getOption);
    router.get("/getScore/:userId", quiz.getScore);
    app.use('/api/getAnswer', router);
};