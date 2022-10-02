import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Product } from '../type/product';
import { Observable, catchError, tap, throwError, map } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class ProductlistService {

  constructor(private http: HttpClient) {}
  getProductAll():Observable<Product[]> {
    return this.http.get<Product[]>('https://fakestoreapi.com/products')
      .pipe(
        tap(data => data),
        catchError(this.handleError)
      );
  }
  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
