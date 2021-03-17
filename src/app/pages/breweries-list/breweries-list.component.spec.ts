import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweriesListComponent } from './breweries-list.component';

describe('BreweriesListComponent', () => {
  let component: BreweriesListComponent;
  let fixture: ComponentFixture<BreweriesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreweriesListComponent ]
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
