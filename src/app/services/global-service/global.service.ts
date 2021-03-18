import { Injectable } from '@angular/core';
import { BreweriesService } from '../breweries-service/breweries.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private breweries: BreweriesService) { }

  filterBreweries(selectedFilter: String){
    this.breweries.getBreweriesByType("breweries" + this.mountQueryString(selectedFilter))
  }

  mountQueryString(selectedFilter: String){
    let qString = "";
    if(selectedFilter !== 'all')
      qString = "?by_type=" + selectedFilter
    return qString;
  }
}
