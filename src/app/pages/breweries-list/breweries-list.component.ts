import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Brewerie } from 'src/app/models/brewerie.model';
import { GlobalService } from 'src/app/services/global-service/global.service';
import { AppState } from 'src/app/state';
import { fillSelectedBrewerie } from 'src/app/state/state.actions';

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
  }

  getState() {
    this.stateSubscription = this.store.select((state: any) => {
      if (state && state.newAppState) {
        const { breweriesList, selectedFilter, page } = state.newAppState;
        this.state = { breweriesList, selectedFilter, page };
        if (this.state && this.state.breweriesList)
          this.paginatedBreweries = this.global.separateArrayForPagination(this.state.breweriesList, 8);
      }
    }).subscribe();
  }

  navigateToDetails(brewerie: Brewerie) {
    this.store.dispatch(fillSelectedBrewerie({ payload: brewerie }));
    sessionStorage.setItem('selectedBrewerie', JSON.stringify(brewerie));
    this.router.navigate([brewerie.id + '/details']);
  }

}
