import { TestBed } from '@angular/core/testing';

import { CastServiceService } from './cast-service.service';

describe('CastServiceService', () => {
  let service: CastServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CastServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
