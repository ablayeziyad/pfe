import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanDuCoursComponent } from './plan-du-cours.component';

describe('PlanDuCoursComponent', () => {
  let component: PlanDuCoursComponent;
  let fixture: ComponentFixture<PlanDuCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanDuCoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanDuCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
