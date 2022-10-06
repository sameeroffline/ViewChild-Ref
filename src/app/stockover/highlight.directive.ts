import { ElementRef } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  

  rightColor: string = "red";
  leftColor: string = "orange";

  constructor(private el: ElementRef) {}

  highlight() {
    this.el.nativeElement.style.backgroundImage = `linear-gradient(to right, ${this.rightColor}, ${this.leftColor})`;
  }
}

