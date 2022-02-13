import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.scss']
})
export class InfoPageComponent implements OnInit {

  type!: string;

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(
      data => {
        this.type = data['type'];
        
      })
   }

  ngOnInit(): void {
  }

}
