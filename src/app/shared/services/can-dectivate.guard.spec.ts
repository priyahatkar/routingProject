import { TestBed } from '@angular/core/testing';

import { CanDectivateGuard } from './can-dectivate.guard';

describe('CanDectivateGuard', () => {
  let guard: CanDectivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanDectivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
