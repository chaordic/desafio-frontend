import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrewerieDetailsComponent } from './pages/brewerie-details/brewerie-details.component';
import { BreweriesListComponent } from './pages/breweries-list/breweries-list.component';


const routes: Routes = [
  { path: '', component: BreweriesListComponent },
  { path: 'details', component: BrewerieDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
