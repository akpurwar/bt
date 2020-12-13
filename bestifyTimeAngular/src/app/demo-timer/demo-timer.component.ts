import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuestionarieService } from 'src/app/Services/User/questionarie.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Question } from 'src/app/Class/question';
import { AddQuestionService } from 'src/app/Services/Admin/add-question.service';

import { Subscription, timer } from 'rxjs';
import { Timer } from '../Class/timer';

@Component({
  selector: 'app-demo-timer',
  templateUrl: './demo-timer.component.html',
  styleUrls: ['./demo-timer.component.scss']
})
export class DemoTimerComponent implements OnInit {
  mode = 'quiz';
  quizes: any[];
  config: Timer = {
    'allowBack': true,
    'allowReview': true,
    'autoMove': false,  // if true, it will move to next question automatically when answered.
    'duration': 300,  // indicates the time (in secs) in which quiz needs to be completed. 0 means unlimited.
    'pageSize': 1,
    'requiredAll': false,  // indicates if you must answer all the questions before submitting.
    'richText': false,
    'shuffleQuestions': false,
    'shuffleOptions': false,
    'showClock': false,
    'showPager': true,
    'theme': 'none'
  };

  pager = {
    index: 0,
    size: 1,
    count: 1
  };
  timer: any = null;
  startTime: Date;
  endTime: Date;
  ellapsedTime = '00:00';
  duration = '';

  quiz: Question = new Question();
  //questions = new Question();
  typeName:any;
  
  quizId:any;
  categoryId:any;
  QuestionList:any;
  countDown: Subscription;
  counter = 1800;
  tick = 1000;
  constructor(private service:QuestionarieService,
    private route:ActivatedRoute,private addQuestionService:AddQuestionService) { 
   
    this.route.paramMap.subscribe((p:ParamMap)=>{
      this.quizId=p.get("id");
      console.log("quiz id is : "+this.quizId);
    });
    this.getQuestion(this.quizId);
  }

  ngOnInit(): void {
    this.countDown = timer(0, this.tick).subscribe(() => --this.counter);
    this.getTypeName();
  }
   ngOnDestroy(){
    //this.countDown=null;
   }
  getQuestion(quizId:number) {
    console.log("in fun");
    this.categoryId=sessionStorage.getItem("categoryId");
    return this.service.displayQuestion(quizId,this.categoryId)
      .subscribe(
        data=>{
          this.QuestionList=data;
          console.log(data);
          sessionStorage.removeItem("categoryId");
          

          this.pager.count = this.quiz.question.length;
          this.startTime = new Date();
          this.ellapsedTime = '00:00';
          this.timer = setInterval(() => { this.tick1(); }, 1000);
          this.duration = this.parseTime(this.config.duration);
          this.mode = 'quiz';
        });
       // this.mode = 'quiz';
 }

getTypeName() {
  
  return this.addQuestionService.getTypeName()
    .subscribe(
      que =>{
        this.typeName = que;
        console.log( this.typeName + "xyz" + que + "dhsfkjvnhsd");
      } 
  );
  }

 
  tick1() {
    const now = new Date();
    const diff = (now.getTime() - this.startTime.getTime()) / 1000;
    if (diff >= this.config.duration) {
      this.onSubmit();
    }
    this.ellapsedTime = this.parseTime(diff);
  }

  parseTime(totalSeconds: number) {
    let mins: string | number = Math.floor(totalSeconds / 60);
    let secs: string | number = Math.round(totalSeconds % 60);
    mins = (mins < 10 ? '0' : '') + mins;
    secs = (secs < 10 ? '0' : '') + secs;
    return `${mins}:${secs}`;
  }
  goTo(index: number) {
    if (index >= 0 && index < this.pager.count) {
      this.pager.index = index;
      this.mode = 'quiz';
    }
  }
  onSubmit() {
    alert("djvhksdh");
    // let answers = [];
    // this.quiz.question.forEach(x => answers.push({ 'quizId': this.quiz.id, 'questionId': x.id, 'answered': x.answered }));

    // // Post your data to the server here. answers contains the questionId and the users' answer.
    // console.log(this.quiz.question);
    // this.mode = 'result';
  }
  get filteredQuestions() {
    return (this.quiz.question) ?
      this.quiz.question.slice(this.pager.index, this.pager.index + this.pager.size) : [];
  }
}
