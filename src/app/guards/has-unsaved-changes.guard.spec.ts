import { TestBed } from '@angular/core/testing';

import { HasUnsavedChangesGuard } from './has-unsaved-changes.guard';

describe('HasUnsavedChangesGuard', () => {
  let guard: HasUnsavedChangesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HasUnsavedChangesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
