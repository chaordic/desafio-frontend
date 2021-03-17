import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreweriesListComponent } from './pages/breweries-list/breweries-list.component';


const routes: Routes = [
  { path: '', component: BreweriesListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
