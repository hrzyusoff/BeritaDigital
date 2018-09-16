import { Component, OnInit } from '@angular/core';
import { NewsService } from '../_services/newsapi/news.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  providers: [NewsService]
})
export class ContentComponent implements OnInit {

  news = {
    articles: []
  }

  constructor(private http: HttpClient, private newsapi: NewsService) { }

  ngOnInit() {
    this.newsapi.getTopHeadlines().subscribe(response => { console.log(this.news = response.json())})
  }

}
