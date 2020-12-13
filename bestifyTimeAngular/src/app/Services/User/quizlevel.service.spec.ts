import { TestBed } from '@angular/core/testing';

import { QuizLevelService } from './quizlevel.service';

describe('DisplayQuizService', () => {
  let service: QuizLevelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizLevelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
