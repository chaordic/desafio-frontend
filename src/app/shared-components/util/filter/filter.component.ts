import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GlobalService } from 'src/app/services/global-service/global.service';
import { AppState } from 'src/app/state';
import { fillPage, fillSelectedFilter } from 'src/app/state/state.actions';

@Component({
  selector: 'lnx-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  stateSubscription: any;
  state: any;
  types = ['all', 'micro', 'nano', 'large', 'brewpub', 'contract', 'regional', 'planning', 'bar', 'proprietor', 'closed'];

  constructor(
    private store: Store<AppState>,
    private global: GlobalService) { }

  ngOnInit(): void {
    this.getState();
    if(this.state && this.state.selectedFilter)
      this.global.filterBreweries(this.state.selectedFilter);
  }

  getState() {
    this.stateSubscription = this.store.select((state: any) => {
      const { selectedFilter } = state.newAppState;
      this.state = { selectedFilter };
    }).subscribe();
  }
  
  updateFilter(event: any){
    this.store.dispatch(fillSelectedFilter({ payload: event}));
    this.store.dispatch(fillPage({ payload: 0}));
    this.global.filterBreweries(event);
  }

}
