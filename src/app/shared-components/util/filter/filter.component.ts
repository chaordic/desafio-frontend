import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state';
import { fillSelectedFilter } from 'src/app/state/state.actions';

@Component({
  selector: 'lnx-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {}
  
  updateFilter(event: any){
    this.store.dispatch(fillSelectedFilter({ payload: event}))
  }

}
