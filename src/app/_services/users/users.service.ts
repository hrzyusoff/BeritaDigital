import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: Http) { }
  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
}
