import { Component, OnInit } from '@angular/core';
import {getClassName} from "../../helpers/object-helpers";
import {ListDataFetcherService} from "../../shared-components/list-display/list-data-fetcher.service-interface";
import {BoatListService} from "../services/boat-list.service";

@Component({
  selector: 'app-boats-list',
  templateUrl: './boats-list.component.html',
  styleUrls: ['./boats-list.component.scss'],
  providers: [
    {
      provide: ListDataFetcherService,
      useClass: BoatListService
    }
  ]
})
export class BoatsListComponent implements OnInit {

  public readonly name: string;

  constructor() {
    this.name = getClassName(this);
  }

  ngOnInit(): void {
  }

}
