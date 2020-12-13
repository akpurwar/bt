import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayQuizComponent } from './Components/User/display-quiz/display-quiz.component';
import { AddQuestionComponent } from './Components/Admin/add-question/add-question.component';
import { DisplayQuestionComponent } from './Components/User/display-question/display-question.component';
import { DemoTimerComponent } from './demo-timer/demo-timer.component';

const routes: Routes = [
  {path:'catList/:id',component:DisplayQuizComponent},
  {path:'quizLists/:id',component:DisplayQuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
