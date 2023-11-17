import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationsSmartComponent } from './evaluations.smart.component';

describe('EvaluationsSmartComponent', () => {
  let component: EvaluationsSmartComponent;
  let fixture: ComponentFixture<EvaluationsSmartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvaluationsSmartComponent]
    });
    fixture = TestBed.createComponent(EvaluationsSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
