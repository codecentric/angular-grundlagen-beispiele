import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentChoiceComponent } from './parent-choice.component';

describe('ParentChoiceComponent', () => {
  let component: ParentChoiceComponent;
  let fixture: ComponentFixture<ParentChoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentChoiceComponent]
    });
    fixture = TestBed.createComponent(ParentChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
