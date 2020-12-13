import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Question } from 'src/app/Class/question';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AddQuestionService {

  private questionUrl = 'http://localhost:8080/api/quiz/addQuestion';  // URL to web api
  constructor( private http: HttpClient) {

   }

   addQuestion (question: Question): Observable<Question> {
     console.log(question, "This is a question")
    return this.http.post<Question>(this.questionUrl, question, httpOptions);
  }

  getQuizName(){
    return this.http.get('http://localhost:8080/api/quiz/getQuizName')
  }

  getCategoryName(){
    return this.http.get('http://localhost:8080/api/quiz/getCategoryName')
  }
  getTypeName(){
    return this.http.get('http://localhost:8080/api/quiz/getTypeName')
  }
}

