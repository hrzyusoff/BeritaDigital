import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { fakeusers } from './users';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<fakeusers[]> {
    return this.http.get<fakeusers[]>('https://jsonplaceholder.typicode.com/posts').pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return observableThrowError(error.message || "Ops it is an error !");
  }
}
