import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarprofesseurComponent } from './sidebarprofesseur.component';

describe('SidebarprofesseurComponent', () => {
  let component: SidebarprofesseurComponent;
  let fixture: ComponentFixture<SidebarprofesseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarprofesseurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarprofesseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
