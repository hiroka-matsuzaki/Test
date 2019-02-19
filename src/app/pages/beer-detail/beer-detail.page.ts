import { BeerService } from './../../services/beer.service';
import { Beer } from './../../models/beer';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.page.html',
  styleUrls: ['./beer-detail.page.scss'],
})
export class BeerDetailPage implements OnInit {
  id: string;
  beer: Beer;

  constructor(
    private route: ActivatedRoute,
    private beerService: BeerService) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.beer = this.beerService.getBeer(this.id);
  }

}
