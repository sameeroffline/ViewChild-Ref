import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cptheme',
  templateUrl: './cptheme.component.html',
  styleUrls: ['./cptheme.component.css']
})
export class CpthemeComponent implements AfterViewInit {


  @ViewChild('name')
	private elName = {} as ElementRef;
	@ViewChild('city')
	private elCity = {} as ElementRef;

  
  constructor() { }

  ngOnInit(): void {
  }



  ngAfterViewInit() {
		this.elName.nativeElement.style.backgroundColor = 'cyan';
		this.elName.nativeElement.style.color = 'red';
		this.elCity.nativeElement.style.backgroundColor = 'cyan';
		this.elCity.nativeElement.style.color = 'red';
	}
  
}
