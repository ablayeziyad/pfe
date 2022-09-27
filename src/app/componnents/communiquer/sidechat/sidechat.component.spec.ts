import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidechatComponent } from './sidechat.component';

describe('SidechatComponent', () => {
  let component: SidechatComponent;
  let fixture: ComponentFixture<SidechatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidechatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidechatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
