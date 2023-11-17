import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleActivityDumbComponent } from './single-activity.dumb.component';

describe('SingleActivityDumbComponent', () => {
  let component: SingleActivityDumbComponent;
  let fixture: ComponentFixture<SingleActivityDumbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleActivityDumbComponent]
    });
    fixture = TestBed.createComponent(SingleActivityDumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
