import { Injectable } from '@angular/core';
import { BoatModel } from './models/boat.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BoatService {
  private readonly boats: BoatModel[];

  constructor() {
    this.boats = [];
  }

  public getBoatsList(): Observable<BoatModel[]> {
    return of<BoatModel[]>(this.boats);
  }
}
