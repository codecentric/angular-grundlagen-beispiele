import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-choice',
  templateUrl: './parent-choice.component.html',
  styleUrls: ['./parent-choice.component.css']
})
export class ParentChoiceComponent {
  choiceMade: string ='';
  text: string = '';

  setChoice($event: string) {
    this.choiceMade = $event;
  }
}
