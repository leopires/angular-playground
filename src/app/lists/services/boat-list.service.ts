import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BoatService } from '../../services/boat.service';
import { AbstractGenericListDataFetcher } from '../../shared-components/generic-list/abstract-generic-list-data-fetcher';
import {
  GenericListData,
  GenericListItem,
} from '../../shared-components/generic-list/generic-list.models';

@Injectable({
  providedIn: 'root',
})
export class BoatListService extends AbstractGenericListDataFetcher {
  constructor(private boatService: BoatService) {
    super();
  }

  fetchData(): Observable<GenericListData> {
    return new Observable<GenericListData>(subscriber => {
      this.boatService.getBoatsList().subscribe(boats => {
        let items: GenericListItem[] = [];
        boats.forEach(boat => {
          let item: GenericListItem = {
            id: boat.id,
            title: `${boat.name} | ${boat.year}`,
            image: boat.picture,
          };
          items.push(item);
        });
        let listData: GenericListData = {
          title: 'Boats List',
          onEmptyListMessage: 'Sorry but there is no boats to list right now.',
          items: items,
        };
        subscriber.next(listData);
      });
    });
  }
}
