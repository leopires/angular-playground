import {Component} from '@angular/core';
import {getClassName} from "../../helpers/object-helpers";
import {BoatListService} from "../services/boat-list.service";
import {AbstractGenericListDataFetcher} from "../../shared-components/generic-list/abstract-generic-list-data-fetcher";

@Component({
  selector: 'app-boats-list',
  templateUrl: './boats-list.component.html',
  styleUrls: ['./boats-list.component.scss'],
  providers: [
    {
      provide: AbstractGenericListDataFetcher,
      useClass: BoatListService
    }
  ]
})
export class BoatsListComponent {

  public readonly name: string;

  constructor() {
    this.name = getClassName(this);
  }

}
