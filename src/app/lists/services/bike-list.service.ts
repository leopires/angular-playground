import { Injectable } from '@angular/core';
import {ListDataFetcherService} from "../../shared-components/list-display/list-data-fetcher.service-interface";
import {BikeService} from "../../services/bike.service";
import {Observable} from "rxjs";
import {BasicListData, BasicListItem} from "../../shared-components/list-display/generict-list-dto";

/**
 * Serviço que será injetado no componente reaproveitado (list-display). Ele faz a conversão do objeto vindo da API
 * para o objeto mais genérico que o componente list-display sabe como manipular.
 */

@Injectable({
  providedIn: 'root'
})
export class BikeListService extends ListDataFetcherService {

  constructor(private bikeService: BikeService) {
    super();
  }

  fetchData(): Observable<BasicListData> {
    return new Observable<BasicListData>(subscriber => {
      this.bikeService.getBikesList().subscribe((value) => {
        let items: BasicListItem[] = []
        value.forEach((bike) => {
          let item: BasicListItem = {
            id: bike.id,
            title: bike.name,
            image: bike.picture
          }
          items.push(item);
        })
        let basicListData: BasicListData = {
          listTitle: "Bikes List",
          onEmptyListMessage: "Sorry but there is no bikes to list right now.",
          items: items
        }
        subscriber.next(basicListData);
      })
    });
  }
}
