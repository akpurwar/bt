module.exports = app => {
    const quiz = require("../controllers/quiz.controller.js");
    
    var router = require("express").Router();
  
    router.delete("/:categoryId/:categoryName", quiz.delete);
    router.put("/:categoryId", quiz.update);
    router.get("/getby", quiz.getBy);
    router.post("/", quiz.insert);
    router.post('/addQuestion', quiz.addQuestion);
    router.get("/getQuizName", quiz.getQuizName);
    router.get("/getCategoryName", quiz.getCategoryName);
    router.get("/getTypeName", quiz.getTypeName);
  //  router.get("/getQuizName", quiz.getQuizName);
    app.use('/api/quiz', router);

  };