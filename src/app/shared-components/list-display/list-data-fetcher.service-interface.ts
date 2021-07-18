import {BasicListData} from "./generict-list-dto";
import {Observable} from "rxjs";

export abstract class ListDataFetcherService {
  abstract fetchData(): Observable<BasicListData>;
}
