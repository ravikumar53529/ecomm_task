import { TestBed } from '@angular/core/testing';

import { RefreshserviceService } from './refreshservice.service';

describe('RefreshserviceService', () => {
  let service: RefreshserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RefreshserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
