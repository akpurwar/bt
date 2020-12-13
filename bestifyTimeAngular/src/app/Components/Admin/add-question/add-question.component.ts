import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/Class/question';
import { AddQuestionService } from 'src/app/Services/Admin/add-question.service';
import {Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {

  questions = new Question();
  quizName:any; 
  categoryName : any;
  typeName:any;
  submitted = false;
  constructor(private addQuestionService:AddQuestionService) { }

  ngOnInit(): void {
    this. getQuizName();
    this.getCategoryName();
    this.getTypeName();
  }


  addQuestion(){
    
    this.submitted = true;
    console.log(this.questions, "This is from form")
    this.addQuestionService.addQuestion(this.questions).subscribe(data=>{
      console.log(data);
      alert(data);
    })
  }

  getQuizName() {
    return this.addQuestionService.getQuizName()
      .subscribe(
        que =>{
          this.quizName = que;
          console.log( this.quizName);
        } 
    );
 }

 getCategoryName() {
  return this.addQuestionService. getCategoryName()
    .subscribe(
      que =>{
        this.categoryName = que;
        console.log( this.categoryName);
      } 
  );
}

getTypeName() {
  return this.addQuestionService.getTypeName()
    .subscribe(
      que =>{
        this.typeName = que;
        console.log( this.typeName);
      } 
  );
}
}
