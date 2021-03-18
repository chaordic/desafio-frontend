import { Injectable } from '@angular/core';
import { RequestService } from '../request-service/request.service';

@Injectable({
  providedIn: 'root'
})
export class BreweriesService {

  constructor(private request: RequestService) { }

  getBreweriesByType(endpoint: any){
    this.request.doGet(endpoint).subscribe(breweries => {
      console.log(breweries);
    })
  }
}
