import { Component } from '@angular/core';

@Component({
  selector: 'app-count-to-ten',
  templateUrl: './count-to-ten.component.html',
  styleUrls: ['./count-to-ten.component.css']
})
export class CountToTenComponent {
  zahlenArray: number[];
  constructor() {
    this.zahlenArray = Array.from({ length: 10 }, (_, index) => index + 1);
  }
}
