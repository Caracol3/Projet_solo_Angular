import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilSmartComponent } from './profil-smart.component';

describe('ProfilSmartComponent', () => {
  let component: ProfilSmartComponent;
  let fixture: ComponentFixture<ProfilSmartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilSmartComponent]
    });
    fixture = TestBed.createComponent(ProfilSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
