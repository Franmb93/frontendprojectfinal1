import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss']
})
export class FeaturedProductsComponent implements OnInit {

  featuredProductsOne = [
    {name: "hdmi", description: "un cable"},
    {name: "impresora", description: "un cable"},
    {name: "Docking Station", description: "Un dock pa conectar toda cosa chico"},
  ]

  featuredProductsTwo = [
    {name: "adidas", description: "zapas"},
    {name: "camiseta", description: "de usa chan"},
    {name: "hdmi", description: "un cable"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
