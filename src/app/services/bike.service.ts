import {Injectable} from '@angular/core';
import {BikeModel} from "./models/bike.model";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  private readonly bikes: BikeModel[];

  constructor() {
    this.bikes = [
      {
        id: "1",
        name: "Ducati Panigale V4 S",
        picture: "https://images.ctfassets.net/x7j9qwvpvr5s/6ijjwnyfDKL0uT7CIYwRqs/63c5eaba99cd91f318b3a109979854b7/Model-Menu-MY20-Panigale-V4-Red.png"
      },
      {
        id: "2",
        name: "Ducati Monster 1200 S",
        picture: "https://images.ctfassets.net/x7j9qwvpvr5s/3NEHx1oQ3EszAQZZwdPKut/7417ce2a31c000a4993acafb5e837c9b/Model-Menu-MY21-Monster-1200-S-Rd-v04.png"
      }
    ]
  }

  public getBikesList(): Observable<BikeModel[]> {
    return of<BikeModel[]>(this.bikes);
  }
}
