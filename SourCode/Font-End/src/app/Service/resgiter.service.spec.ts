import { TestBed } from '@angular/core/testing';

import { ResgiterService } from './resgiter.service';

describe('ResgiterService', () => {
  let service: ResgiterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResgiterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
