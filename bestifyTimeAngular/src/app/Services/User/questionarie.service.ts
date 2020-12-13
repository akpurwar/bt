import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionarieService {
   questionArray :any = [];

    constructor(private http: HttpClient) {}

     

  displayQuestion(quizId:number,categoryId:number){
    return this.http.get('http://localhost:8080/api/displayQuiz/getQuestionarie?quizId='+quizId+'&categoryId='+categoryId);
  }


  displayOption(questionId:number){
    return this.http.get('http://localhost:8080/api/getAnswer/getOption/'+questionId);
  }

  getTime(quizId:number){
    return this.http.get('http://localhost:8080/api/displayQuiz/gettime/'+quizId);
  }

}
