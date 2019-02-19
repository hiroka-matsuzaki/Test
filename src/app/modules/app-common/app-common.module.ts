import { UpperPipe } from './../../pipes/upper.pipe';
import { HighlightDirective } from './../../directives/highlight.directive';
import { IonicModule } from '@ionic/angular';
import { BeerComponent } from './../../components/beer/beer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    BeerComponent,
    HighlightDirective,
    UpperPipe
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    BeerComponent,
    HighlightDirective,
    UpperPipe
  ]
})
export class AppCommonModule { }
