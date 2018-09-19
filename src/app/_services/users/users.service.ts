import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { fakeusers } from './users';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<fakeusers[]> {
    return this.http.get<fakeusers[]>(this.url).pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.pipe(throwError(error.message || "Ops it is an error !"))
  }
}
