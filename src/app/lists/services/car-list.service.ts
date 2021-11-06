import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {CarService} from "../../services/car.service";
import {GenericListData, GenericListItem} from "../../shared-components/generic-list/generic-list.models";
import {AbstractGenericListDataFetcher} from "../../shared-components/generic-list/abstract-generic-list-data-fetcher";

@Injectable({
  providedIn: 'root'
})
export class CarListService extends AbstractGenericListDataFetcher {

  constructor(private carService: CarService) {
    super();
  }

  fetchData(): Observable<GenericListData> {
    return new Observable<GenericListData>(subscriber => {
      this.carService.getCarsList().subscribe((value) => {
        let items: GenericListItem[] = []
        value.forEach((car) => {
          let item: GenericListItem = {
            id: car.id,
            title: car.name,
            description: car.description,
            image: car.picture
          }
          items.push(item);
        })
        let listData: GenericListData = {
          title: "Cars List",
          onEmptyListMessage: "Sorry but there is no cars to list right now.",
          items: items
        }
        subscriber.next(listData);
      })
    });
  }
}
