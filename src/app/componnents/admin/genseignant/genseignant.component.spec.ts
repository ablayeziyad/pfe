import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenseignantComponent } from './genseignant.component';

describe('GenseignantComponent', () => {
  let component: GenseignantComponent;
  let fixture: ComponentFixture<GenseignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenseignantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
