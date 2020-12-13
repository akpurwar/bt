import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTimerComponent } from './demo-timer.component';

describe('DemoTimerComponent', () => {
  let component: DemoTimerComponent;
  let fixture: ComponentFixture<DemoTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
