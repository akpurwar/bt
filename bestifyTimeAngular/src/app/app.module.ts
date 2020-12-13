import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddQuestionComponent } from './Components/Admin/add-question/add-question.component';
import { FormsModule } from '@angular/forms';
// import {formattime} from 'src/app/utility/timer';

import { HttpClientModule } from '@angular/common/http';
import { DisplayCategoryComponent } from './Components/Admin/display-category/display-category.component';
import { DisplayQuizComponent } from './Components/User/display-quiz/display-quiz.component';
import { DisplayQuestionComponent } from './Components/User/display-question/display-question.component';
import { FormatTimePipe } from './utility/timer';
import { DemoTimerComponent } from './demo-timer/demo-timer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuizStateComponent } from './Components/User/quiz-state/quiz-state.component';

@NgModule({
  declarations: [
    AppComponent,
    AddQuestionComponent,
    DisplayCategoryComponent,
    DisplayQuizComponent,
    DisplayQuestionComponent,
    FormatTimePipe,
    DemoTimerComponent,
    QuizStateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
