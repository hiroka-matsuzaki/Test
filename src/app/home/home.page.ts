import { Beer } from './../models/beer';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  name = 'world';
  myFavoriteBeer = new Beer('1', 'malt\'s', '最高だ', false);
}
