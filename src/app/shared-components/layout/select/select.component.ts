import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GlobalService } from 'src/app/services/global-service/global.service';

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

  constructor(public global: GlobalService) { }

  ngOnInit(): void {
    if(this.selected)
      this.selectedOption = this.selected;
  }

  emitChange(){
    this.changed.emit(this.selectedOption);
  }

}
