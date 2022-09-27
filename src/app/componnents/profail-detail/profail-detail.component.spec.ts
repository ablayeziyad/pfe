import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfailDetailComponent } from './profail-detail.component';

describe('ProfailDetailComponent', () => {
  let component: ProfailDetailComponent;
  let fixture: ComponentFixture<ProfailDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfailDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfailDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
