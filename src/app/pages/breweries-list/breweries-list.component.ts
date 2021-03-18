import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BreweriesService } from 'src/app/services/breweries-service/breweries.service';
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
    private breweries: BreweriesService,
    private store: Store<AppState>,
    private global: GlobalService) { }

  temp = [1,2,3,4,5,6,7,8];
  stateSubscription: any;
  state: any;

  ngOnInit(): void {
    this.getState();
    this.breweries.getBreweriesByType("breweries" + this.mountQueryString())
  }

  getState() {
    this.stateSubscription = this.store.select((state: any) => {
      const { breweriesList, selectedFilter } = state.newAppState;
      this.state = { breweriesList, selectedFilter };
    }).subscribe();
  }

  mountQueryString(){
    let qString = "";
    if(this.state.selectedFilter !== 'all')
      qString = "?by_type=" + this.state.selectedFilter
    return qString;
  }

  navigateToDetails(){
    this.router.navigate(['details']);
  }

}
