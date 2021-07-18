import {Injectable} from '@angular/core';
import {ListDataFetcherService} from "../../shared-components/list-display/list-data-fetcher.service-interface";
import {Observable} from "rxjs";
import {BasicListData, BasicListItem} from "../../shared-components/list-display/generict-list-dto";
import {CarService} from "../../services/car.service";

@Injectable({
  providedIn: 'root'
})
export class CarListService extends ListDataFetcherService {

  constructor(private carService: CarService) {
    super();
  }

  fetchData(): Observable<BasicListData> {
    return new Observable<BasicListData>(subscriber => {
      this.carService.getCarsList().subscribe((value) => {
        let items: BasicListItem[] = []
        value.forEach((car) => {
          let item: BasicListItem = {
            id: car.id,
            title: car.name,
            description: car.description,
            image: car.picture
          }
          items.push(item);
        })
        let basicListData: BasicListData = {
          listTitle: "Cars List",
          onEmptyListMessage: "Sorry but there is no cars to list right now.",
          items: items
        }
        subscriber.next(basicListData);
      })
    });
  }
}
