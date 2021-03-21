import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BreweriesListComponent } from './pages/breweries-list/breweries-list.component';
import { HeaderComponent } from './shared-components/layout/header/header.component';
import { FooterComponent } from './shared-components/layout/footer/footer.component';
import { CardComponent } from './shared-components/layout/card/card.component';
import { ButtonComponent } from './shared-components/layout/button/button.component';
import { BrewerieDetailsComponent } from './pages/brewerie-details/brewerie-details.component';
import { FilterComponent } from './shared-components/util/filter/filter.component';
import { PaginatorComponent } from './shared-components/util/paginator/paginator.component';
import { SelectComponent } from './shared-components/layout/select/select.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducer } from '../app/state/state.reducer';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BreweriesListComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    ButtonComponent,
    BrewerieDetailsComponent,
    FilterComponent,
    PaginatorComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({newAppState: reducer}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
