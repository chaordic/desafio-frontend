import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state';
import { fillPage } from 'src/app/state/state.actions';

@Component({
  selector: 'lnx-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  stateSubscription: any;
  state: any;
  boxes = [0,1,2];

  ngOnInit(): void {
    this.getState();
  }

  getState() {
    this.stateSubscription = this.store.select((state: any) => {
      const { page } = state.newAppState;
      this.state = { page };
    }).subscribe();
  }

  changePage(box: number){
    this.store.dispatch(fillPage({ payload: box}))
  }
}
