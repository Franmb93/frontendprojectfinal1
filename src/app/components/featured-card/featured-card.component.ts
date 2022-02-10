import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-card',
  templateUrl: './featured-card.component.html',
  styleUrls: ['./featured-card.component.scss']
})
export class FeaturedCardComponent implements OnInit {

  constructor() { }

  @Input() item: any;

  ngOnInit(): void {
  }

}
