import { Component, Input, OnInit } from '@angular/core';
import { Brewerie } from 'src/app/models/brewerie.model';

@Component({
  selector: 'lnx-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() size: String = "default";
  @Input() data!: Brewerie;

  constructor() { }

  ngOnInit(): void {}

  getBackground(){
    switch (this.data.brewery_type) {
      case 'micro':
        return "#00d1b2";
        break;
      case 'contract':
        return '#363636';
        break;
      case 'brewpub':
        return '#ffdd57';
        break;
      case 'regional':
        return '#3273dc';
        break;
      default:
        return "#00d1b2";
        break;
    }
  }

}
