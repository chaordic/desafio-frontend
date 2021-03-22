import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared-components/shared.module';
import { MainRoutingModule } from './main.routing.module';
import { BrewerieDetailsComponent } from './pages/brewerie-details/brewerie-details.component';
import { BreweriesListComponent } from './pages/breweries-list/breweries-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MainComponent, BrewerieDetailsComponent, BreweriesListComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule,
    MainRoutingModule
  ]
})
export class MainModule { }
