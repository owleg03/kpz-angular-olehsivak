import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  url = "Brands";

  constructor(private httpClient: HttpClient) { }

  public getBrands(): Observable<Brand[]> {
    return this.httpClient.get<Brand[]>(`${environment.apiUrl}/${this.url}`);
  }
}
