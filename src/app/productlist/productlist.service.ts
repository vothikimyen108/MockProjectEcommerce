import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Product } from '../common/product';
import { Observable, catchError, tap, throwError, map } from "rxjs";
import { url } from '../common/constant';

@Injectable({
  providedIn: 'root',
})
export class ProductlistService {

  constructor(private http: HttpClient) {}

  //get All porduct
  getProductAll():Observable<Product[]> {
    return this.http.get<Product[]>(`${url}`)
      .pipe(
        tap(data => data),
        catchError(this.handleError)
      );
  }

  //get by categories
  getProducByCategories(name: string):Observable<Product[]> {
    return this.http.get<Product[]>(`${url}category/${name}`)
      .pipe(
        tap(data => data),
        catchError(this.handleError)
      );
  }

  //get categories
  getCategories():Observable<string[]> {
    return this.http.get<string[]>(`${url}/categories`)
      .pipe(
        tap(data => data),
        catchError(this.handleError)
      );
  }

    //get categories
  getProductById(id : number):Observable<Product> {
      return this.http.get<Product>(`${url}/${id}`)
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
