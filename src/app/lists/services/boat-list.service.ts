import {Injectable} from '@angular/core';
import {ListDataFetcherService} from "../../shared-components/list-display/list-data-fetcher.service-interface";
import {Observable} from "rxjs";
import {BasicListData, BasicListItem} from "../../shared-components/list-display/generict-list-dto";
import {BoatService} from "../../services/boat.service";

@Injectable({
  providedIn: 'root'
})
export class BoatListService extends ListDataFetcherService {

  constructor(private boatService: BoatService) {
    super();
  }

  fetchData(): Observable<BasicListData> {
    return new Observable<BasicListData>(subscriber => {
      this.boatService.getBoatsList().subscribe((boats) => {
        let items: BasicListItem[] = []
        boats.forEach((boat) => {
          let item: BasicListItem = {
            id: boat.id,
            title: `${boat.name} | ${boat.year}`,
            image: boat.picture
          }
          items.push(item);
        })
        let basicListData: BasicListData = {
          listTitle: "Boats List",
          onEmptyListMessage: "Sorry but there is no boats to list right now.",
          items: items
        }
        subscriber.next(basicListData);
      })
    });
  }
}
