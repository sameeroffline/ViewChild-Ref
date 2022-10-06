import { Component, OnInit, ViewChild } from '@angular/core';
import { CpColorDirective } from './cpcolor.directive';
 

@Component({
  selector: 'app-cpcolor-parent',
  templateUrl: './cpcolor-parent.component.html',
  styleUrls: ['./cpcolor-parent.component.css']
})
export class CpColorParentComponent implements OnInit {




  @ViewChild(CpColorDirective)
  private Directive = {} as CpColorDirective;




  constructor() { }

  ngOnInit(): void {
  }




  changeColor(color: string) {
    this.Directive.change(color);
}


}
