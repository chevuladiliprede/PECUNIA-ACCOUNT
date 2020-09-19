import { TestBed } from '@angular/core/testing';

import { CgServiceGuard } from './cg-service.guard';

describe('CgServiceGuard', () => {
  let guard: CgServiceGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CgServiceGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
