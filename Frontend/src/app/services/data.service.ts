import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Car } from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Estos son datos simulados (Mocks). 
  // Cuando el backend esté listo, borraremos esta lista falsa y usaremos HttpClient.
  private mockCars: Car[] = [
    { id: 1, make: 'Honda', model: 'Civic', generation: '10 generación', year: 2018, trim: 'Touring' },
    { id: 2, make: 'Infiniti', model: 'Q50', generation: '1 generación', year: 2017, trim: 'Red Sport 400' },
    { id: 3, make: 'Honda', model: 'Accord', generation: '9 generación', year: 2016, trim: 'EX-L' },
    { id: 4, make: 'Honda', model: 'CR-V', generation: '5 generación', year: 2020, trim: 'Touring' },
    { id: 5, make: 'Infiniti', model: 'QX60', generation: '1 generación', year: 2019, trim: 'Luxe' }
  ];

  constructor() { }

  getCars(): Observable<Car[]> {
    // Simulamos que los datos vienen de internet retornando un Observable
    return of(this.mockCars);
  }
}
