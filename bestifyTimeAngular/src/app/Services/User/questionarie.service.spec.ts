import { TestBed } from '@angular/core/testing';

import { QuestionarieService } from './questionarie.service';

describe('DisplayQuestionService', () => {
  let service: QuestionarieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionarieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
