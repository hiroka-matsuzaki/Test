import { Beer } from './../../models/beer';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss'],
})
export class BeerComponent implements OnInit {
  @Input()
  beer: Beer;

  constructor() { }

  ngOnInit() {}

  onNice() {
    this.beer.description += '(((ο(*ﾟ▽ﾟ*)ο)))';
  }
}
