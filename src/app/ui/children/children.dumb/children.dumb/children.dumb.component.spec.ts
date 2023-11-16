import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenDumbComponent } from './children.dumb.component';

describe('ChildrenDumbComponent', () => {
  let component: ChildrenDumbComponent;
  let fixture: ComponentFixture<ChildrenDumbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildrenDumbComponent]
    });
    fixture = TestBed.createComponent(ChildrenDumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
