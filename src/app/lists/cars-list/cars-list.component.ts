import {Component, OnDestroy, OnInit} from '@angular/core';
import {ListDataFetcherService} from "../../shared-components/list-display/list-data-fetcher.service-interface";
import {CarListService} from "../services/car-list.service";
import {getClassName} from "../../helpers/object-helpers";

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss'],
  providers: [
    {
      provide: ListDataFetcherService,
      useClass: CarListService
    }
  ]
})
export class CarsListComponent {
  public readonly name: string
  constructor() {
    this.name = getClassName(this);
  }
}
