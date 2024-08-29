import { TestBed } from '@angular/core/testing';

import { EduPhaseService } from './edu-phase.service';

describe('EduPhaseService', () => {
  let service: EduPhaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EduPhaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
