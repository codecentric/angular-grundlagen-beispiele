import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoityourselfstylingComponent } from './doityourselfstyling.component';

describe('DoityourselfstylingComponent', () => {
  let component: DoityourselfstylingComponent;
  let fixture: ComponentFixture<DoityourselfstylingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoityourselfstylingComponent]
    });
    fixture = TestBed.createComponent(DoityourselfstylingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
