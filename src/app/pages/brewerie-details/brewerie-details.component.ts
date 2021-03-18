import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lnx-brewerie-details',
  templateUrl: './brewerie-details.component.html',
  styleUrls: ['./brewerie-details.component.scss']
})
export class BrewerieDetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToList(){
    this.router.navigate(['/']);
  }

}
