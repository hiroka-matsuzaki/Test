import { BeerComponent } from './../../components/beer/beer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    BeerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BeerComponent
  ]
})
export class AppCommonModule { }
