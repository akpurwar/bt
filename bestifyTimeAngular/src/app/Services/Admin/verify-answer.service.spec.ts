import { TestBed } from '@angular/core/testing';

import { VerifyAnswerService } from './verify-answer.service';

describe('VerifyAnswerService', () => {
  let service: VerifyAnswerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerifyAnswerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
