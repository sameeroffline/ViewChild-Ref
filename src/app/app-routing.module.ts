import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NumberComponent } from './number/number.component';
import { StockoverComponent } from './stockover/stockover.component';

const routes: Routes = [
  {path:'',component:NumberComponent},
  {path:'stop',component:StockoverComponent},
  {path:'number',component:NumberComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
