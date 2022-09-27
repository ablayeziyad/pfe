import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordprofesseurComponent } from './dashbordprofesseur.component';

describe('DashbordprofesseurComponent', () => {
  let component: DashbordprofesseurComponent;
  let fixture: ComponentFixture<DashbordprofesseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbordprofesseurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashbordprofesseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
