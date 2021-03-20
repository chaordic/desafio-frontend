import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { BreweriesService } from './breweries.service';

describe('BreweriesService', () => {
  let service: BreweriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [HttpClient, HttpHandler]
    });
    service = TestBed.inject(BreweriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
