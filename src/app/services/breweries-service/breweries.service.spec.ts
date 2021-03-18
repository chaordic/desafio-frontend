import { TestBed } from '@angular/core/testing';

import { BreweriesService } from './breweries.service';

describe('BreweriesService', () => {
  let service: BreweriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BreweriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
