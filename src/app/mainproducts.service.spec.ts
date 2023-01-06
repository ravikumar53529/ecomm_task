import { TestBed } from '@angular/core/testing';

import { MainproductsService } from './mainproducts.service';

describe('MainproductsService', () => {
  let service: MainproductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainproductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
