import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignantdetailsComponent } from './enseignantdetails.component';

describe('EnseignantdetailsComponent', () => {
  let component: EnseignantdetailsComponent;
  let fixture: ComponentFixture<EnseignantdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnseignantdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnseignantdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
