import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresenceetudiantComponent } from './presenceetudiant.component';

describe('PresenceetudiantComponent', () => {
  let component: PresenceetudiantComponent;
  let fixture: ComponentFixture<PresenceetudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresenceetudiantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresenceetudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
