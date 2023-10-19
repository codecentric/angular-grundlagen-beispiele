import {Component, Input} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-mytextfield',
  templateUrl: './mytextfield.component.html',
  styleUrls: ['./mytextfield.component.css']
})
export class MytextfieldComponent {
  @Input() text: string ='';

  constructor(private translate: TranslateService) {
    translate.use('de');
  }


}
