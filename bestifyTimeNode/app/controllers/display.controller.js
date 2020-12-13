const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;


exports.getByCategory = (req,res)=>{
    db.sequelize.query("select * from categories where categoryId =?",{replacements: [req.params.id], type: db.sequelize.QueryTypes.SELECT }).then(data=>{
        res.send(data);
       console.log(data);
      });
  }


//   exports.getByQuiz = (req,res)=>{
//     db.sequelize.query("select * from quiz where quizId =?",{replacements: [req.params.id], type: db.sequelize.QueryTypes.SELECT }).then(data=>{
//         res.send(data);
//        console.log(data);
//       });
//   }


  exports.getQuestionarie = (req,res)=>{
    db.sequelize.query("select * from questionarie where quizId =? and categoryId=?",
    {replacements: [req.query.quizId, req.query.categoryId], type: db.sequelize.QueryTypes.SELECT }).then(data=>{
        res.send(data);
       console.log(data);
      });
  }

  exports.getByQuizCategory = (req,res)=>{
    db.sequelize.query("select * from quiz where categoryId =?",{replacements: [req.params.id], type: db.sequelize.QueryTypes.SELECT }).then(data=>{
        res.send(data);
       console.log(data);
      });
  }
  exports.getTimer = (req,res)=>{
    db.sequelize.query("select duration from quiz where quizId =?",{replacements: [req.params.id], type: db.sequelize.QueryTypes.SELECT }).then(data=>{
        res.send(data);
       console.log(data);
      });
  }