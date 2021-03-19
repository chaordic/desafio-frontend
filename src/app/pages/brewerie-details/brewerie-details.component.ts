import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state';

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
    }).subscribe();
  }

  navigateToList(){
    this.router.navigate(['/']);
  }

}
