import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MytextfieldComponent } from './mytextfield.component';

describe('MytextfieldComponent', () => {
  let component: MytextfieldComponent;
  let fixture: ComponentFixture<MytextfieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MytextfieldComponent]
    });
    fixture = TestBed.createComponent(MytextfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
