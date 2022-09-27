import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantdetailsComponent } from './etudiantdetails.component';

describe('EtudiantdetailsComponent', () => {
  let component: EtudiantdetailsComponent;
  let fixture: ComponentFixture<EtudiantdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtudiantdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtudiantdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
