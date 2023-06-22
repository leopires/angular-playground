import { Component } from '@angular/core';
import { CarListService } from '../services/car-list.service';
import { getClassName } from '../../helpers/object-helpers';
import { AbstractGenericListDataFetcher } from '../../shared-components/generic-list/abstract-generic-list-data-fetcher';
import { GenericListItem } from '../../shared-components/generic-list/generic-list.models';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss'],
  providers: [
    {
      provide: AbstractGenericListDataFetcher,
      useClass: CarListService,
    },
  ],
})
export class CarsListComponent {
  public readonly name: string;

  constructor() {
    this.name = getClassName(this);
  }

  onListSelectedItem($event: GenericListItem) {
    console.log('Current Selected Item: ', $event);
  }
}
