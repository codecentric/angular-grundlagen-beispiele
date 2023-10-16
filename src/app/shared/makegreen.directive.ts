import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[makegreen]'
})
export class MakegreenDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'green';
  }

}
