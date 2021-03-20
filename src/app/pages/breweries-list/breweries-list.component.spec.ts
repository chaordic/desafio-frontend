import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';

import { BreweriesListComponent } from './breweries-list.component';

describe('BreweriesListComponent', () => {
  let component: BreweriesListComponent;
  let fixture: ComponentFixture<BreweriesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreweriesListComponent ],
      imports: [RouterTestingModule.withRoutes([]), StoreModule.forRoot({})],
      providers: [HttpClient, HttpHandler]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreweriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
