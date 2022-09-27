import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfailComponent } from './my-profail.component';

describe('MyProfailComponent', () => {
  let component: MyProfailComponent;
  let fixture: ComponentFixture<MyProfailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyProfailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyProfailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
