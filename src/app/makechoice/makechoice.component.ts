import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-makechoice',
  templateUrl: './makechoice.component.html',
  styleUrls: ['./makechoice.component.css']
})
export class MakechoiceComponent {

  @Output() choiceMade= new EventEmitter<string>();


  setChoiceToYES() {
    this.choiceMade.emit('YES') ;
  }

  setChoiceToNO() {
    this.choiceMade.emit('NO');
  }
}
