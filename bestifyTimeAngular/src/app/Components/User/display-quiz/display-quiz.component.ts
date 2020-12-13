import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { QuizLevelService } from 'src/app/Services/User/quizlevel.service';
import { ActivatedRoute,ParamMap } from '@angular/router';

@Component({
  selector: 'app-display-quiz',
  templateUrl: './display-quiz.component.html',
  styleUrls: ['./display-quiz.component.scss']
})
export class DisplayQuizComponent implements OnInit{
id:any;
filterCategory:any;
quizName:any; 
  constructor(private service:QuizLevelService,private route:ActivatedRoute) { 
 
    this.route.paramMap.subscribe((p:ParamMap)=>{
      this.id=p.get("id");
      sessionStorage.setItem("categoryId",this.id);
      this.getQuizCategory(this.id);
    })
    console.log("id on new page : "+this.id);
  }
  ngOnInit(): void {
    
  }
//   getQuizName(id:number) {
//     return this.service.displayQuizName(this.id)
//       .subscribe(
//         que =>{
//           this.quizName = que;
//           console.log( this.quizName);
//         } 
//     );
//  }

 getQuizCategory(id:number) {
  return this.service.displayQuizByCategory(this.id)
    .subscribe((que)=>{
      this.quizName = que
        console.log(que)
    }
  );
}

}
