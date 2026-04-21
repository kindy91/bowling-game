import { TestBed } from '@angular/core/testing';

import { RollForm } from './roll-form';

describe('RollForm', () => {
  let service: RollForm;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RollForm);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
