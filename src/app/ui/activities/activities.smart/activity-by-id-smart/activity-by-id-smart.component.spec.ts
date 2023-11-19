import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityByIdSmartComponent } from './activity-by-id-smart.component';

describe('ActivityByIdSmartComponent', () => {
  let component: ActivityByIdSmartComponent;
  let fixture: ComponentFixture<ActivityByIdSmartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivityByIdSmartComponent]
    });
    fixture = TestBed.createComponent(ActivityByIdSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
