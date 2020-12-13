import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuestionarieService } from 'src/app/Services/User/questionarie.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Question } from 'src/app/Class/question';
import { AddQuestionService } from 'src/app/Services/Admin/add-question.service';

import { Subscription, timer } from 'rxjs';
import { VerifyAnswerService } from 'src/app/Services/Admin/verify-answer.service';
import { correctAnswers } from 'src/app/Class/answer';
import { $ } from 'protractor';
import { QuizStateService } from 'src/app/Services/User/quiz-state.service';
import { State } from 'src/app/Class/state';
import { isProtractorLocator } from 'protractor/built/locators';
import { getLocaleTimeFormat } from '@angular/common';


@Component({
  selector: 'app-display-question',
  templateUrl: './display-question.component.html',
  styleUrls: ['./display-question.component.scss']
})
export class DisplayQuestionComponent implements OnInit, OnDestroy {

  score: number = 0;
  questions = new Question();
  answerArray: correctAnswers[] = [];
  list: any = [];
  typeName: any;
  questionId: any;
  quizId: any;
  categoryId: any;
  QuestionList: any;
  countDown: Subscription;
  counter = 1800;
  tick = 1000;
  
  ans: any;
  correctans: any;
  a: string;
  timer: any;
  newTimer: any;
  seconds :number =0 ;
   
   qnProgress:number=0;
 
  
  constructor(private service: QuestionarieService, private verifyAnswerService: VerifyAnswerService,
    private route: ActivatedRoute, private quizStateService: QuizStateService) {

    this.route.paramMap.subscribe((p: ParamMap) => {
      this.quizId = p.get("id");
      console.log("quiz id is : " + this.quizId);
      this.storeQuizId(this.quizId);
    });
    this.getQuestion(this.quizId);
  }
  
  ngOnInit(): void {
    this.countDown = timer(0, this.tick).subscribe(() => --this.counter);
    

   
  }
  
  startTimer(){
    this.timer = setInterval(() =>{
      this.seconds++;
    },1000);
    }

  displayTimeElapsed(){
    return Math.floor(this.seconds/3600)+ ':' +Math.floor(this.seconds/60) + ':' +Math.floor(this.seconds % 60 ); 
  }  
  ngOnDestroy() {

  }

  
  getQuestion(quizId: number) {
    console.log("in fun");
    this.categoryId = sessionStorage.getItem("categoryId");
    this.service.getTime(quizId).subscribe(time=>{
      this.timer = time;


      this.startTimer();
     //this.newTimer= this.timer[0].duration;
         
      console.log(this.timer , "time managment");
      console.log(typeof(this.timer));
      

         
      
    })
    return this.service.displayQuestion(quizId, this.categoryId)
      .subscribe(
        data => {
          // console.log(data);
          this.QuestionList = data;
          console.log(this.QuestionList, "Qusetion lIst")
          Object.keys(this.QuestionList).map((ele) => {
            this.QuestionList[ele] = { ...this.QuestionList[ele], found: null, selectedOption: null ,CorrectOption:null , Time:this.timer[0].duration}
            console.log(this.QuestionList.questionId);
          })

          console.log(this.QuestionList.length, "Array xyzfhgfh");
          sessionStorage.removeItem("categoryId");
        }
      );
  }
  found: boolean;
  queId: number;
  cans: any;
  flag: boolean = true;
  queId1: any;
  result: any;
  newQuizId: any;
  //  state = new State(this.result,1,this.queId1, this.newQuizId);

  //   addState(){
  //     alert("in state fun");
  //     this.quizStateService.addState(this.state).subscribe(state=>{
  //       console.log(state , "state data11");
  //       alert(state);
  //     })
  //   }


  storeQuizId(id: any) {
    this.newQuizId = id;
  }
  question(Qid: any, Aid: any, index: any) {
    //this.addState();
    console.log();


    this.queId1 = Qid;
    this.result = Aid;

   // console.log("cdcvfgbfdgbgffffff" +this.result);
    //console.log("Question id is : " + Qid);
   // console.log("Answer id is : " + Aid);
    var obj = new correctAnswers(Qid, Aid);


    const state = new State(Aid, 1, Qid, this.newQuizId);

    this.quizStateService.addState(state).subscribe(state => {
      console.log(state, "state data11");
      alert(state);
    })

    // this.found =true;
    // console.log(this.QuestionList[Qid]);
    // let index = this.QuestionList.findIndex(ele => ele.id === Qid);
    // this.QuestionList[Qid].found = true;
    
    console.log(this.QuestionList, "hello");

    if (this.answerArray.length == 0) {

      this.answerArray.push(obj);

    }
    else {
      for (let i = 0; i < this.answerArray.length; i++) {
        alert(this.answerArray[i].id + "" + Qid);

        if (this.answerArray[i].id === Qid) {
         this.answerArray[i].userAnswer = obj.userAnswer;
        // this.answerArray.splice(i,1);
        //this.answerArray.push(obj);
          //this.answerArray.push(obj);
          this.flag = false
          break;
        }

      }
      if (this.flag == true) {
        this.answerArray.push(obj);

      }
    }



    console.log("answer array : ", this.answerArray);

    return this.verifyAnswerService.verifyAnswer(Qid).subscribe(data => {
      // this.a="";
      this.ans = data;
      this.verifyAnswerService.answer = data;
      console.log("Array Is ", data);


 
      //console.log(this.ans , "hoooooooooooo");
      //console.log("answer is" + this.ans[0].answer);
      this.a = this.ans[0].answer;
      //console.log(" vcv"+this.a);

      
      this.QuestionList[index] = { ...this.QuestionList[index], found: true, selectedOption: Aid ,CorrectOption : this.a  }

      
      
     
    
      if (Aid === this.ans[0].answer) {
          this.score=this.score+1;
        
 

        this.flag = false;

        console.log(++this.score + "score is");


        alert("Right answer");
        console.log("Right Ans" + this.ans[0].answer);
      
      
       
      }
      else{
        //this.flag = true;
    }

     

    
         }



         
    );





  }



  


  // getAnswer(questionId:number){

  // return this.verifyAnswerService.verifyAnswer(questionId).subscribe(data=>{ 
  //   this.a="";
  //    this.ans=data;

  //    console.log(this.ans[0].answer);
  // this.a=this.ans[0].answer;
  //  //console.log("gm" + typeof(this.ans[0].answer));

  //   }

  // );
  // return this.a;
  // }

}

