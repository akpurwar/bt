import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VerifyAnswerService {
answer : any = [];
  constructor(private http: HttpClient) { 
    
  }
  verifyAnswer(questionId:number){
    return this.http.get('http://localhost:8080/api/getAnswer/getAnswer/'+questionId);
  }
}
