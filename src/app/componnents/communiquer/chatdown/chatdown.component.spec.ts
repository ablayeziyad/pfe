import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatdownComponent } from './chatdown.component';

describe('ChatdownComponent', () => {
  let component: ChatdownComponent;
  let fixture: ComponentFixture<ChatdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
