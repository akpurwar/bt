module.exports = app => {
    const quiz = require("../controllers/display.controller.js");
    
    var router = require("express").Router();
    router.get("/getByCategory/:id", quiz.getByCategory);
    //router.get("/getByQuiz/:id", quiz.getByQuiz);
    router.get("/getQuestionarie", quiz.getQuestionarie);
    router.get("/getByQuizCategory/:id", quiz.getByQuizCategory);
    router.get("/gettime/:id", quiz.getTimer);

   
    app.use('/api/displayQuiz', router);
};

