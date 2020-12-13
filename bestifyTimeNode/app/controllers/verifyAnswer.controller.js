const db = require("../models");

exports.getAnswer = (req,res)=>{
    db.sequelize.query("select answer from questionarie where questionId =?",
    {replacements: [req.params.id], type: db.sequelize.QueryTypes.SELECT }).then(data=>{
        res.send(data);
       console.log(data);
      });
  }

  exports.getOption = (req,res)=>{
    db.sequelize.query("select option1,option2,option3,option4 from questionarie where questionId =?",
    {replacements: [req.params.id], type: db.sequelize.QueryTypes.SELECT }).then(data=>{
        res.send(data);
       console.log(data);
      });
  }

  exports.getScore = (req,res)=>{
    db.sequelize.query(" select count(*) score from state s, questionarie q  where s.questionId = q.questionId and s.answer = q.answer and s.userId=?;",
    {replacements: [req.params.userId], type: db.sequelize.QueryTypes.SELECT }).then(data=>{
        res.send(data);
       console.log(data);
      });
     }
