import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BreweriesListComponent } from './pages/breweries-list/breweries-list.component';
import { HeaderComponent } from './shared-components/header/header.component';
import { FooterComponent } from './shared-components/footer/footer.component';
import { CardComponent } from './shared-components/card/card.component';
import { ButtonComponent } from './shared-components/button/button.component';
import { BrewerieDetailsComponent } from './pages/brewerie-details/brewerie-details.component';
import { FilterComponent } from './shared-components/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    BreweriesListComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    ButtonComponent,
    BrewerieDetailsComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
