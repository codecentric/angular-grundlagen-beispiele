import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreDrivenCounterComponent } from './store-driven-counter.component';

describe('StoreDrivenCounterComponent', () => {
  let component: StoreDrivenCounterComponent;
  let fixture: ComponentFixture<StoreDrivenCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoreDrivenCounterComponent]
    });
    fixture = TestBed.createComponent(StoreDrivenCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
