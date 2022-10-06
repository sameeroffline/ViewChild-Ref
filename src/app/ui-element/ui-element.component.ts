import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CpColorDirective } from '../cpcolor-parent/cpcolor.directive';
import { NumberComponent } from '../number/number.component';
import { StopwatchComponent } from '../stopwatch/stopwatch.component';

@Component({
  selector: 'app-ui-element',
  templateUrl: './ui-element.component.html',
  styleUrls: ['./ui-element.component.css']
})
export class UiElementComponent implements OnInit, AfterViewInit {




  @ViewChild(NumberComponent)
	private numberComponent = {} as NumberComponent;
	@ViewChild(StopwatchComponent)
	private stopwatchComponent = {} as StopwatchComponent;
	@ViewChild(CpColorDirective)
	private cpColorDirective = {} as CpColorDirective;
	@ViewChild('title')
	private elTitle = {} as ElementRef;



  constructor() { }

  ngOnInit(): void {
  }




  ngAfterViewInit() {
		this.elTitle.nativeElement.style.backgroundColor = 'cyan';
		this.elTitle.nativeElement.style.color = 'red';
	}
	increase() {
		this.numberComponent.increaseByOne();
	}
	decrease() {
		this.numberComponent.decreaseByOne();
	}
	startStopwatch() {
		this.stopwatchComponent.start();
	}
	stopStopwatch() {
		this.stopwatchComponent.stop();
	}
	changeColor(color: string) {
		this.cpColorDirective.change(color);
	}
}
