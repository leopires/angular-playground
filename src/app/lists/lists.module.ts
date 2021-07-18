import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ListsRoutingModule} from './lists-routing.module';
import {BikesListComponent} from "./bikes-list/bikes-list.component";
import {CarsListComponent} from "./cars-list/cars-list.component";
import {ListsComponent} from './lists.component';
import {SharedComponentsModule} from "../shared-components/shared-components.module";
import {BoatsListComponent} from './boats-list/boats-list.component';


@NgModule({
  declarations: [
    ListsComponent,
    BikesListComponent,
    CarsListComponent,
    BoatsListComponent
  ],
  imports: [
    CommonModule,
    ListsRoutingModule,
    SharedComponentsModule
  ]
})
export class ListsModule {
}
