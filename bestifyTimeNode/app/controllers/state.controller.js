const db = require("../models");


exports.addState = (req,res)=>{
    db.sequelize.query("insert into state(answer,userId,questionId,quizId) values (?,?,?,?)",
    {replacements: [req.body.answer,req.body.userId,req.body.questionId,req.body.quizId],type: db.sequelize.QueryTypes.INSERT }).then(data=>{
        res.send(data);
       console.log(data);
      });
  }