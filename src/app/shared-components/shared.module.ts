import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { CardComponent } from './layout/card/card.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ButtonComponent } from './layout/button/button.component';
import { FilterComponent } from './util/filter/filter.component';
import { PaginatorComponent } from './util/paginator/paginator.component';
import { SelectComponent } from './layout/select/select.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CardComponent,
    ButtonComponent,
    FilterComponent,
    PaginatorComponent,
    SelectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CardComponent,
    ButtonComponent,
    FilterComponent,
    PaginatorComponent,
    SelectComponent
  ],
})
export class SharedModule { }