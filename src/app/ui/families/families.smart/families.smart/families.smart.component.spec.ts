import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamiliesSmartComponent } from './families.smart.component';

describe('FamiliesSmartComponent', () => {
  let component: FamiliesSmartComponent;
  let fixture: ComponentFixture<FamiliesSmartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FamiliesSmartComponent]
    });
    fixture = TestBed.createComponent(FamiliesSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
