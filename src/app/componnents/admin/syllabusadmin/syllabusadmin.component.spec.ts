import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyllabusadminComponent } from './syllabusadmin.component';

describe('SyllabusadminComponent', () => {
  let component: SyllabusadminComponent;
  let fixture: ComponentFixture<SyllabusadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyllabusadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SyllabusadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
