import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamiliesDumbComponent } from './families.dumb.component';

describe('FamiliesDumbComponent', () => {
  let component: FamiliesDumbComponent;
  let fixture: ComponentFixture<FamiliesDumbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FamiliesDumbComponent]
    });
    fixture = TestBed.createComponent(FamiliesDumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
