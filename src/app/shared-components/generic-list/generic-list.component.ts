import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {GenericListData, GenericListItem} from "./generic-list.models";
import {Observable, Subscription} from "rxjs";
import {getClassName} from "../../helpers/object-helpers";
import {AbstractGenericListDataFetcher} from "./abstract-generic-list-data-fetcher";

@Component({
  selector: 'app-generic-list',
  templateUrl: './generic-list.component.html',
  styleUrls: ['./generic-list.component.scss']
})
export class GenericListComponent implements OnInit, OnDestroy {

  public data: GenericListData | undefined;
  private observable: Observable<GenericListData> | undefined;
  private subscription: Subscription | undefined;

  public readonly name: string;

  @Output()
  selectedItem: EventEmitter<GenericListItem> = new EventEmitter<GenericListItem>();

  constructor(private genericListDataFetcherService: AbstractGenericListDataFetcher) {
    this.name = getClassName(this);
  }

  ngOnInit(): void {
    console.log(`[${this.name}]: onInit called.`);
    this.observable = this.genericListDataFetcherService.fetchData();
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

  getSelectedItem($event: GenericListItem) {
    this.selectedItem.emit($event);
  }
}
