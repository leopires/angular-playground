import {Component} from '@angular/core';
import {ListDataFetcherService} from "../../shared-components/list-display/list-data-fetcher.service-interface";
import {BikeListService} from "../services/bike-list.service";
import {getClassName} from "../../helpers/object-helpers";

@Component({
  selector: 'app-bikes-list',
  templateUrl: './bikes-list.component.html',
  styleUrls: ['./bikes-list.component.scss'],
  providers: [
    {
      provide: ListDataFetcherService,
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
