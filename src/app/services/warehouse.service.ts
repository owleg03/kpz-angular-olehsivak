import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Warehouse } from '../models/warehouse';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {
  url = "Warehouses";

  constructor(private httpClient: HttpClient) { }

  public getWarehouses(): Observable<Warehouse[]> {
    return this.httpClient.get<Warehouse[]>(`${environment.apiUrl}/${this.url}`);
  }
}
