import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'app-stockover',
  templateUrl: './stockover.component.html',
  styleUrls: ['./stockover.component.css']
})
export class StockoverComponent implements OnInit {
  @ViewChildren(HighlightDirective) textHighlights!: QueryList<HighlightDirective>;
  constructor() { }

  ngOnInit(): void {
  }
  

  ngAfterViewInit(){
    this.textHighlights.forEach((hl) => {
      hl.highlight();
    });
  }

  changeHighlight(){
    let rightColor = this.textHighlights.toArray()[0].rightColor;
    let leftColor: string;
    switch(rightColor) {
      case "red":
        rightColor = "lightcoral";
        leftColor = "lightpink";
        break;
      case "lightcoral":
        rightColor = "darkblue";
        leftColor = "darkmagenta";
        break;
      case "darkblue":
        rightColor = "green";
        leftColor = "lightgreen";
        break;
      default:
        rightColor = "red";
        leftColor = "orange";
    }

     this.textHighlights.forEach((hl) => {
      hl.rightColor = rightColor;
      hl.leftColor = leftColor;
      hl.highlight();
    });
  }
}


