import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoringSmartComponent } from './coloring.smart.component';

describe('ColoringSmartComponent', () => {
  let component: ColoringSmartComponent;
  let fixture: ComponentFixture<ColoringSmartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColoringSmartComponent]
    });
    fixture = TestBed.createComponent(ColoringSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
