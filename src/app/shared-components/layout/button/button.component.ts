import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lnx-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() icon: String = "";
  @Input() label: String = "";
  @Input() class: String = "";

  constructor() { }

  ngOnInit(): void {
    console.log("teste");
  }

}
