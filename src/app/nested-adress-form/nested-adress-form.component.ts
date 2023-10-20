import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-nested-adress-form',
  templateUrl: './nested-adress-form.component.html',
  styleUrls: ['./nested-adress-form.component.css']
})
export class NestedAdressFormComponent implements OnInit{

  @Input({required: true}) parentForm!: FormGroup; // ! to silent the compiler warning!
  addressForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.addressForm = this.formBuilder.group({
      street: new FormControl<string>(''),
      houseNo: new FormControl<string>(''),
      zipCode: new FormControl<number>(0),
      country: new FormControl<string>(''),
    });
  }

  ngOnInit(): void {
    // dynamically add address to parent-form
    this.parentForm.addControl('address', this.addressForm);
  }

}
