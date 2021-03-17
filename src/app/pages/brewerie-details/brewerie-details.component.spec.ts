import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrewerieDetailsComponent } from './brewerie-details.component';

describe('BrewerieDetailsComponent', () => {
  let component: BrewerieDetailsComponent;
  let fixture: ComponentFixture<BrewerieDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrewerieDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrewerieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
