import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedAdressFormComponent } from './nested-adress-form.component';

describe('NestedAdressFormComponent', () => {
  let component: NestedAdressFormComponent;
  let fixture: ComponentFixture<NestedAdressFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NestedAdressFormComponent]
    });
    fixture = TestBed.createComponent(NestedAdressFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
