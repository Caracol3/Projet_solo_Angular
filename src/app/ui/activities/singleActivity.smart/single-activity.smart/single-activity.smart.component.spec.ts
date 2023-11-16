import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleActivitySmartComponent } from './single-activity.smart.component';

describe('SingleActivitySmartComponent', () => {
  let component: SingleActivitySmartComponent;
  let fixture: ComponentFixture<SingleActivitySmartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleActivitySmartComponent]
    });
    fixture = TestBed.createComponent(SingleActivitySmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
