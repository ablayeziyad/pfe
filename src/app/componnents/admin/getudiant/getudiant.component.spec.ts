import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetudiantComponent } from './getudiant.component';

describe('GetudiantComponent', () => {
  let component: GetudiantComponent;
  let fixture: ComponentFixture<GetudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetudiantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
