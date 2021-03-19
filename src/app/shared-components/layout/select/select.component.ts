import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lnx-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() options: String[] = [];
  @Input() chevronColor: String = "";
  @Input() selected: String = "";
  @Output() changed = new EventEmitter();

  selectedOption: any;

  constructor() { }

  ngOnInit(): void {
    if(this.selected)
      this.selectedOption = this.selected;
  }

  emitChange(){
    this.changed.emit(this.selectedOption);
  }

}
