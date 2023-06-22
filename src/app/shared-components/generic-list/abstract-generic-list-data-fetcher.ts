import {Observable} from "rxjs";
import {GenericListData} from "./generic-list.models";

export abstract class AbstractGenericListDataFetcher {
  abstract fetchData(): Observable<GenericListData>;
}
