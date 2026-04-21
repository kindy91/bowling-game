import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameResult } from './frame-result';

describe('FrameResult', () => {
  let component: FrameResult;
  let fixture: ComponentFixture<FrameResult>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrameResult],
    }).compileComponents();

    fixture = TestBed.createComponent(FrameResult);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
