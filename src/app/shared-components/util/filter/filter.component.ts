import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GlobalService } from 'src/app/services/global-service/global.service';
import { AppState } from 'src/app/state';
import { fillSelectedFilter } from 'src/app/state/state.actions';

@Component({
  selector: 'lnx-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  types = ['all', 'micro', 'nano', 'large', 'brewpub', 'contract', 'regional', 'planning', 'bar', 'proprietor', 'closed'];

  constructor(
    private store: Store<AppState>,
    private global: GlobalService) { }

  ngOnInit(): void {}
  
  updateFilter(event: any){
    this.store.dispatch(fillSelectedFilter({ payload: event}))
    this.global.filterBreweries(event);
  }

}
