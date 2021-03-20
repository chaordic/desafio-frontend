import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state';
import { fillSelectedBrewerie } from 'src/app/state/state.actions';

@Component({
  selector: 'lnx-brewerie-details',
  templateUrl: './brewerie-details.component.html',
  styleUrls: ['./brewerie-details.component.scss']
})
export class BrewerieDetailsComponent implements OnInit {

  state: any;
  stateSubscription: any;

  constructor(
    private router: Router,
    private store: Store<AppState>
    ) { }

  ngOnInit(): void {
    this.getState();
  }

  getState() {
    this.stateSubscription = this.store.select((state: any) => {
      const { selectedBrewerie } = state.newAppState;
      this.state = { selectedBrewerie };
      if(!this.state.selectedBrewerie)
        this.getBrewerieBySession();
    }).subscribe();
  }

  navigateToList(){
    this.router.navigate(['/']);
  }

  getBrewerieBySession(){
    let brewerie: any = sessionStorage.getItem('selectedBrewerie');
    this.store.dispatch(fillSelectedBrewerie({ payload: JSON.parse(brewerie)}));
  }

}
