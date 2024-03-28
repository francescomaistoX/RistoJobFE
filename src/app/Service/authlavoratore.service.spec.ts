import { TestBed } from '@angular/core/testing';

import { AuthlavoratoreService } from './authlavoratore.service';

describe('AuthlavoratoreService', () => {
  let service: AuthlavoratoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthlavoratoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
