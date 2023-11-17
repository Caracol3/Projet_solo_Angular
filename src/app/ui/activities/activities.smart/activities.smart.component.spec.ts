import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesSmartComponent } from './activities.smart.component';

describe('ActivitiesSmartComponent', () => {
  let component: ActivitiesSmartComponent;
  let fixture: ComponentFixture<ActivitiesSmartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivitiesSmartComponent]
    });
    fixture = TestBed.createComponent(ActivitiesSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
