import { IonicModule } from '@ionic/angular';
import { BeerComponent } from './../../components/beer/beer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    BeerComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    BeerComponent
  ]
})
export class AppCommonModule { }
