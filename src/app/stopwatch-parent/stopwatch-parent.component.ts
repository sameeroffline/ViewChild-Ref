import { Component, OnInit, ViewChild } from '@angular/core';
import { StopwatchComponent } from '../stopwatch/stopwatch.component';

@Component({
  selector: 'app-stopwatch-parent',
  templateUrl: './stopwatch-parent.component.html',
  styleUrls: ['./stopwatch-parent.component.css']
})
export class StopwatchParentComponent implements OnInit {
  


  @ViewChild(StopwatchComponent)
  private stopwatchComponent = {} as StopwatchComponent;



  constructor() { }
  ngOnInit(): void {
  }


startstopwatch(){
  this.stopwatchComponent.start();

}
stopstopwatch(){
  this.stopwatchComponent.stop();

}



}
