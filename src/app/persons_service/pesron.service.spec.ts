import { TestBed } from '@angular/core/testing';

import { PesronService } from './pesron.service';

describe('PesronService', () => {
  let service: PesronService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PesronService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
