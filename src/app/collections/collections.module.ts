import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { TableComponent } from './table/table.component';
import { SharedModule } from '../shared/shared.module';
import { BiographyComponent } from './biography/biography.component';
import { CompaniesComponent } from './companies/companies.component';
import { PatrnersComponent } from './patrners/patrners.component';
import { TapsComponent } from './taps/taps.component';

@NgModule({
  declarations: [CollectionsHomeComponent, TableComponent, BiographyComponent, CompaniesComponent, PatrnersComponent, TapsComponent],
  imports: [CommonModule, CollectionsRoutingModule, SharedModule],
})
export class CollectionsModule {}
