import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsethirdpartylibforstylingComponent } from './usethirdpartylibforstyling.component';

describe('UsethirdpartylibforstylingComponent', () => {
  let component: UsethirdpartylibforstylingComponent;
  let fixture: ComponentFixture<UsethirdpartylibforstylingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsethirdpartylibforstylingComponent]
    });
    fixture = TestBed.createComponent(UsethirdpartylibforstylingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
