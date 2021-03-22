import { Injectable } from '@angular/core';
import { Brewerie } from 'src/app/models/brewerie.model';
import { BreweriesService } from '../breweries-service/breweries.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private breweries: BreweriesService) { }

  filterBreweries(selectedFilter: String = "") {
    this.breweries.getBreweriesByType("breweries" + this.mountQueryString(selectedFilter))
  }

  mountQueryString(selectedFilter: String) {
    let qString = "";
    if (selectedFilter !== 'all')
      qString = "?by_type=" + selectedFilter
    return qString;
  }

  separateArrayForPagination(array: Array<Brewerie>, itemsPerPage: number) {
    let tempArray = <any>[];
    let paginatedArray = <any>[];
    let page = 0;
    let cont = 0;
    array.forEach((element, index) => {
      tempArray.push(element);
      if ((cont === itemsPerPage - 1 && page < 3) || !array[index + 1]) {
        if (!paginatedArray[page])
          paginatedArray[page] = [];
        paginatedArray[page] = tempArray
        page++;
        tempArray = [];
        cont= -1;
      }
      cont++;
    });
    return paginatedArray;
  }

  generateMapsLink(latitude: String, longitude: String){
    return "http://www.google.com/maps/place/" + latitude + "," + longitude;
  }
}
