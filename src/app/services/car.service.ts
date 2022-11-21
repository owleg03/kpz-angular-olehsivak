import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  url = "Cars";

  constructor(private httpClient: HttpClient) { }

  public getCars(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(`${environment.apiUrl}/${this.url}`);
  }
}
