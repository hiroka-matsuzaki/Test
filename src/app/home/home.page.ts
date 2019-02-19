import { BeerService } from './../services/beer.service';
import { Beer } from './../models/beer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  name = 'world';
  beers: Beer[];

   constructor(
    private beerService: BeerService
  ) {}

   ngOnInit() {
    this.beers = this.beerService.getBeers();
  }
}
