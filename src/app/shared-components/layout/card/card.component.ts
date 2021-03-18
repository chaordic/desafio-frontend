import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lnx-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() size: String = "default";

  constructor() { }

  ngOnInit(): void {
  }

}
