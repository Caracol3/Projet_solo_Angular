import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationsDumbComponent } from './evaluations.dumb.component';

describe('EvaluationsDumbComponent', () => {
  let component: EvaluationsDumbComponent;
  let fixture: ComponentFixture<EvaluationsDumbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvaluationsDumbComponent]
    });
    fixture = TestBed.createComponent(EvaluationsDumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
