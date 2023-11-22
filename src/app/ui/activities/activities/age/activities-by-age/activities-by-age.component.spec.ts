import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesByAgeComponent } from './activities-by-age.component';

describe('ActivitiesByAgeComponent', () => {
  let component: ActivitiesByAgeComponent;
  let fixture: ComponentFixture<ActivitiesByAgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivitiesByAgeComponent]
    });
    fixture = TestBed.createComponent(ActivitiesByAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
