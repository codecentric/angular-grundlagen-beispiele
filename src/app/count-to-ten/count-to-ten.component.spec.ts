import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountToTenComponent } from './count-to-ten.component';

describe('CountToTenComponent', () => {
  let component: CountToTenComponent;
  let fixture: ComponentFixture<CountToTenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountToTenComponent]
    });
    fixture = TestBed.createComponent(CountToTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
