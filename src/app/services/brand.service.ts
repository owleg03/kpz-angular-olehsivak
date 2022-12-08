import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  url = "Brands";

  constructor(private httpClient: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  public getBrands(): Observable<Brand[]> {
    return this.httpClient.get<Brand[]>(`${environment.apiUrl}/${this.url}`)
      .pipe(
        catchError(this.handleError)
      );    
  }

  public postBrand(brand: Brand): Observable<Brand> {
    return this.httpClient.post<Brand>(`${environment.apiUrl}/${this.url}`, brand)
      .pipe(
        catchError(this.handleError)
      );  
  }
}
