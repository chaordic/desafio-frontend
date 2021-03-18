import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state';
import { fillBreweries } from 'src/app/state/state.actions';
import { RequestService } from '../request-service/request.service';

@Injectable({
  providedIn: 'root'
})
export class BreweriesService {

  constructor(
    private request: RequestService,
    private store: Store<AppState>
    ) { }

  getBreweriesByType(endpoint: any){
    this.request.doGet(endpoint).subscribe(breweries => {
      this.store.dispatch(fillBreweries({ payload: breweries}));
    })
  }
}
