import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateChildrenComponent } from './create-children.component';

describe('CreateChildrenComponent', () => {
  let component: CreateChildrenComponent;
  let fixture: ComponentFixture<CreateChildrenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateChildrenComponent]
    });
    fixture = TestBed.createComponent(CreateChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
