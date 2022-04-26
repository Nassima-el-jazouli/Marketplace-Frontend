import { TestBed } from '@angular/core/testing';

import { AnnounceService } from './announce.service';

describe('AnnounceService', () => {
  let service: AnnounceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnounceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
