import { TestBed } from '@angular/core/testing';

import { AuthaziendaService } from './authazienda.service';

describe('AuthaziendaService', () => {
  let service: AuthaziendaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthaziendaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
