import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilDumbComponent } from './profil-dumb.component';

describe('ProfilDumbComponent', () => {
  let component: ProfilDumbComponent;
  let fixture: ComponentFixture<ProfilDumbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilDumbComponent]
    });
    fixture = TestBed.createComponent(ProfilDumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
