import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumberComponent } from './number/number.component';
import { NumberParentComponent } from './number-parent/number-parent.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { StopwatchParentComponent } from './stopwatch-parent/stopwatch-parent.component';
import { CpColorParentComponent } from './cpcolor-parent/cpcolor-parent.component';
import { CpColorDirective } from './cpcolor-parent/cpcolor.directive';
import { CpthemeComponent } from './cptheme/cptheme.component';
import { UiElementComponent } from './ui-element/ui-element.component';
import { StockoverComponent } from './stockover/stockover.component';
import { HighlightDirective } from './stockover/highlight.directive';
 
 

@NgModule({
  declarations: [
    AppComponent,
    NumberComponent,
    NumberParentComponent,
    StopwatchComponent,
    StopwatchParentComponent,
    CpColorParentComponent,
    CpColorDirective, 
    CpthemeComponent,
    UiElementComponent,
    StockoverComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
