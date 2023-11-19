import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityByIdDumbComponent } from './activity-by-id-dumb.component';

describe('ActivityByIdDumbComponent', () => {
  let component: ActivityByIdDumbComponent;
  let fixture: ComponentFixture<ActivityByIdDumbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivityByIdDumbComponent]
    });
    fixture = TestBed.createComponent(ActivityByIdDumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
