import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CarModel } from './models/car.model';

/**
 * Estes serviços são pra simular chamadas de API.
 */

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private readonly cars: CarModel[];

  constructor() {
    this.cars = [
      {
        id: '1',
        name: 'Ferrari 360 Modena',
        description:
          'The Ferrari 360 (Type F131) is a two-seater, mid-engine, rear wheel drive sports car manufactured by Italian automotive manufacturer Ferrari from 1999 to 2005. It succeeded the Ferrari F355 and was replaced by the Ferrari F430 in 2004.',
        picture:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Ferrari_360_Modena_-_Flickr_-_Alexandre_Pr%C3%A9vot_%2826%29_%28cropped%29.jpg/1024px-Ferrari_360_Modena_-_Flickr_-_Alexandre_Pr%C3%A9vot_%2826%29_%28cropped%29.jpg',
      },
      {
        id: '2',
        name: 'Ferrari F12 TDF',
        description:
          'The Ferrari F12berlinetta[3] (Type F152) is a front mid-engine, rear-wheel-drive grand tourer produced by Italian automobile manufacturer Ferrari. The F12 Berlinetta debuted at the 2012 Geneva Motor Show, and replaces the 599 grand tourer.[6] The naturally aspirated 6.3 litre Ferrari V12 engine used in the F12berlinetta has won the 2013 International Engine of the Year Award in the Best Performance category and Best Engine above 4.0 litres. The F12berlinetta was named "The Supercar of the Year 2012" by car magazine Top Gear. The F12 Berlinetta was replaced by the 812 Superfast in 2017.',
        picture:
          'https://blog.curioinvest.com/wp-content/uploads/2021/05/Ferrari_F12_TDF_Logo-45.jpeg',
      },
    ];
  }

  public getCarsList(): Observable<CarModel[]> {
    return of<CarModel[]>(this.cars);
  }
}
