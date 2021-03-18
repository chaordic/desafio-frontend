import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { GlobalService } from 'src/app/services/global-service/global.service';
import { AppState } from 'src/app/state';

@Component({
  selector: 'lnx-breweries-list',
  templateUrl: './breweries-list.component.html',
  styleUrls: ['./breweries-list.component.scss']
})
export class BreweriesListComponent implements OnInit {

  constructor(
    private router: Router, 
    private store: Store<AppState>,
    private global: GlobalService) { }

  stateSubscription: any;
  state: any;
  paginatedBreweries = [];

  ngOnInit(): void {
    this.getState();
    this.global.filterBreweries('all');
  }

  getState() {
    this.stateSubscription = this.store.select((state: any) => {
      const { breweriesList, selectedFilter, page } = state.newAppState;
      this.state = { breweriesList, selectedFilter, page };
      this.paginatedBreweries = this.global.separateArrayForPagination(this.state.breweriesList, 6);
    }).subscribe();
  }

  navigateToDetails(){
    this.router.navigate(['details']);
  }

}
