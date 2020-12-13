import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizStateComponent } from './quiz-state.component';

describe('QuizStateComponent', () => {
  let component: QuizStateComponent;
  let fixture: ComponentFixture<QuizStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
