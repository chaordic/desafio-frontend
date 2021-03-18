import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lnx-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() options: String[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
