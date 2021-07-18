import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListsComponent} from "./lists.component";
import {CarsListComponent} from "./cars-list/cars-list.component";
import {BikesListComponent} from "./bikes-list/bikes-list.component";
import {BoatsListComponent} from "./boats-list/boats-list.component";

const routes: Routes = [
  {
    path: '',
    component: ListsComponent,
    children: [
      {
        path: 'cars',
        component: CarsListComponent
      },
      {
        path: 'bikes',
        component: BikesListComponent
      },
      {
        path: 'boats',
        component: BoatsListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListsRoutingModule { }
