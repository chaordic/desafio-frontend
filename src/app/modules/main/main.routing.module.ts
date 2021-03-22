import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { MainComponent } from './main.component';
import { BrewerieDetailsComponent } from './pages/brewerie-details/brewerie-details.component';
import { BreweriesListComponent } from './pages/breweries-list/breweries-list.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', component: BreweriesListComponent },
      { path: ':id/details', component: BrewerieDetailsComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MainRoutingModule { }
