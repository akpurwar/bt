import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizLevelService {

  constructor(private http: HttpClient) { }

  displayQuizName(id:number){
    return this.http.get('http://localhost:8080/api/displayQuiz/getByQuiz/'+id)
  }

  displayQuizByCategory(id:number){
    console.log("In the servie")
    let res = this.http.get('http://localhost:8080/api/displayQuiz/getByQuizCategory/'+id);
    console.log(res);
    return res;
  }
}
