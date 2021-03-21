import { Component, Input, OnInit } from '@angular/core';
import { Brewerie } from 'src/app/models/brewerie.model';
import { GlobalService } from 'src/app/services/global-service/global.service';

@Component({
  selector: 'lnx-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() size: String = "default";
  @Input() data!: Brewerie;

  constructor(public global: GlobalService) { }

  ngOnInit(): void { }

  getBackground() {
    if (!this.data || !this.data.brewery_type)
      return false;

    switch (this.data.brewery_type) {
      case 'micro':
        return "#00d1b2";
      case 'contract':
        return '#363636';
      case 'brewpub':
        return '#ffdd57';
      case 'regional':
        return '#3273dc';
      default:
        return "#00d1b2";
    }
  }
}
