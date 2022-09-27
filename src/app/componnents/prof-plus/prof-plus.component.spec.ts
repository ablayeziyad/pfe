import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfPlusComponent } from './prof-plus.component';

describe('ProfPlusComponent', () => {
  let component: ProfPlusComponent;
  let fixture: ComponentFixture<ProfPlusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfPlusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
