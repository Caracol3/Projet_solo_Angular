import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenSmartComponent } from './children.smart.component';

describe('ChildrenSmartComponent', () => {
  let component: ChildrenSmartComponent;
  let fixture: ComponentFixture<ChildrenSmartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildrenSmartComponent]
    });
    fixture = TestBed.createComponent(ChildrenSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
