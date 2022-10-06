import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpColorParentComponent } from './cpcolor-parent.component';

describe('CpColorParentComponent', () => {
  let component: CpColorParentComponent;
  let fixture: ComponentFixture<CpColorParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpColorParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpColorParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
