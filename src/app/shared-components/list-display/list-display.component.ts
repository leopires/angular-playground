import {Component, OnDestroy, OnInit} from '@angular/core';
import {BasicListData} from "./generict-list-dto";
import {ListDataFetcherService} from "./list-data-fetcher.service-interface";
import {Observable, Subscription} from "rxjs";
import {getClassName} from "../../helpers/object-helpers";

@Component({
  selector: 'pireslabs-generic-list-display',
  templateUrl: './list-display.component.html',
  styleUrls: ['./list-display.component.scss']
})
export class ListDisplayComponent implements OnInit, OnDestroy {

  public data: BasicListData | undefined;
  private observable: Observable<BasicListData> | undefined;
  private subscription: Subscription|undefined;

  public readonly name: string;

  constructor(private dataFetcherService: ListDataFetcherService) {
    this.name = getClassName(this);
  }

  ngOnInit(): void {
    console.log(`[${this.name}]: onInit called.`);
    this.observable = this.dataFetcherService.fetchData();
    this.subscription = this.observable.subscribe((observer) => {
      this.data = observer;
      console.log(`[${getClassName(this)}]: Current Component Data -> `, this.data);
    });
  }

  ngOnDestroy() {
    console.log(`[${this.name}]: onDestroy called.`);
    this.subscription?.unsubscribe();
    this.data = undefined;
  }

}
