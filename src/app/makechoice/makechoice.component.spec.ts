import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakechoiceComponent } from './makechoice.component';

describe('MakechoiceComponent', () => {
  let component: MakechoiceComponent;
  let fixture: ComponentFixture<MakechoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MakechoiceComponent]
    });
    fixture = TestBed.createComponent(MakechoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
