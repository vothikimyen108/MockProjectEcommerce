import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Product } from '../type/product';
import { Observable, catchError, tap, throwError, map } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class ProductlistService {
  url: string = 'https://fakestoreapi.com/products/'
  constructor(private http: HttpClient) {}

  //get All porduct
  getProductAll():Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}`)
      .pipe(
        tap(data => data),
        catchError(this.handleError)
      );
  }

  //get by categories
  getProducByCategories(name: string):Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}category/${name}`)
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
