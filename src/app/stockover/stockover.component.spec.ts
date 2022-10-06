import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockoverComponent } from './stockover.component';

describe('StockoverComponent', () => {
  let component: StockoverComponent;
  let fixture: ComponentFixture<StockoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockoverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
