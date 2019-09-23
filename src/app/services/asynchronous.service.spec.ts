import { TestBed } from '@angular/core/testing';

import { AsynchronousService } from './asynchronous.service';

describe('AsynchronousService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AsynchronousService = TestBed.get(AsynchronousService);
    expect(service).toBeTruthy();
  });
});
