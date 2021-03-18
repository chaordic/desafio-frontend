import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lnx-breweries-list',
  templateUrl: './breweries-list.component.html',
  styleUrls: ['./breweries-list.component.scss']
})
export class BreweriesListComponent implements OnInit {

  constructor(private router: Router) { }

  temp = [1,2,3,4,5,6,7,8];

  ngOnInit(): void {
  }

  navigateToDetails(){
    this.router.navigate(['details']);
  }

}
