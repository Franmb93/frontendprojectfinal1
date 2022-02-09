import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss']
})
export class FeaturedProductsComponent implements OnInit {

  featuredProductsOne = [
    {name: "hdmi", description: "un cable"},
    {name: "hdmi", description: "un cable"},
    {name: "hdmi", description: "un cable"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
