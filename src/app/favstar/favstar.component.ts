import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favstar.component.html',
  styleUrls: ['./favstar.component.css']
})
export class FavstarComponent implements OnInit {
  isFavorite : boolean;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
  }
}
