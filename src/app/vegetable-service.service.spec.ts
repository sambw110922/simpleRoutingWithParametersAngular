import { TestBed } from '@angular/core/testing';

import { VegetableServiceService } from './vegetable-service.service';

describe('VegetableServiceService', () => {
  let service: VegetableServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VegetableServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
