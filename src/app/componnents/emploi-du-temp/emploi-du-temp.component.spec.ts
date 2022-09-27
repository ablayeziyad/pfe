import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploiDuTempComponent } from './emploi-du-temp.component';

describe('EmploiDuTempComponent', () => {
  let component: EmploiDuTempComponent;
  let fixture: ComponentFixture<EmploiDuTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmploiDuTempComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmploiDuTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
