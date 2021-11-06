import {Component} from '@angular/core';
import {BikeListService} from "../services/bike-list.service";
import {getClassName} from "../../helpers/object-helpers";
import {AbstractGenericListDataFetcher} from "../../shared-components/generic-list/abstract-generic-list-data-fetcher";

@Component({
  selector: 'app-bikes-list',
  templateUrl: './bikes-list.component.html',
  styleUrls: ['./bikes-list.component.scss'],
  providers: [
    {
      provide: AbstractGenericListDataFetcher,
      useClass: BikeListService
    }
  ]
})
export class BikesListComponent {

  public readonly name: string;

  constructor() {
    this.name = getClassName(this);
  }
}
