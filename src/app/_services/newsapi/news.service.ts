import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  apikey = 'your-own-api-key';
  constructor(private http: Http) { }
  getTopHeadlines() {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey='+this.apikey);
  }

}
