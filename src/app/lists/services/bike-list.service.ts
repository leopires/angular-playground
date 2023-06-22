import { Injectable } from '@angular/core';
import { BikeService } from '../../services/bike.service';
import { Observable } from 'rxjs';
import { AbstractGenericListDataFetcher } from '../../shared-components/generic-list/abstract-generic-list-data-fetcher';
import {
  GenericListData,
  GenericListItem,
} from '../../shared-components/generic-list/generic-list.models';

@Injectable({
  providedIn: 'root',
})
export class BikeListService extends AbstractGenericListDataFetcher {
  constructor(private bikeService: BikeService) {
    super();
  }

  fetchData(): Observable<GenericListData> {
    return new Observable<GenericListData>(subscriber => {
      this.bikeService.getBikesList().subscribe(value => {
        let items: GenericListItem[] = [];
        value.forEach(bike => {
          let item: GenericListItem = {
            id: bike.id,
            title: bike.name,
            image: bike.picture,
          };
          items.push(item);
        });
        let listData: GenericListData = {
          title: 'Bikes List',
          onEmptyListMessage: 'Sorry but there is no bikes to list right now.',
          items: items,
        };
        subscriber.next(listData);
      });
    });
  }
}
