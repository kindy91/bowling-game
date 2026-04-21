import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultBoard } from './result-board';

describe('ResultBoard', () => {
  let component: ResultBoard;
  let fixture: ComponentFixture<ResultBoard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultBoard],
    }).compileComponents();

    fixture = TestBed.createComponent(ResultBoard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
