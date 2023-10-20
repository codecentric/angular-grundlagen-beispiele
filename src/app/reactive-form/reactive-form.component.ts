import { Component } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators} from "@angular/forms";

export function containsThreeValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (value && value.indexOf('3') !== -1) {
    return null;
  }
  return { containsThree: true };
}

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      vorname: ['', [Validators.required, containsThreeValidator]],
      nachname: ['', [Validators.required, containsThreeValidator]]
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      const formData = this.myForm.value;
      console.log('Daten gespeichert:', formData);
    }
  }
}
