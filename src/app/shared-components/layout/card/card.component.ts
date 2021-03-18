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

}
