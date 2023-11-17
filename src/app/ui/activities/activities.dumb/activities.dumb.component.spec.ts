import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesDumbComponent } from './activities.dumb.component';

describe('ActivitiesDumbComponent', () => {
  let component: ActivitiesDumbComponent;
  let fixture: ComponentFixture<ActivitiesDumbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivitiesDumbComponent]
    });
    fixture = TestBed.createComponent(ActivitiesDumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
