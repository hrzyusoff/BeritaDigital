import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '../_services/newsapi/news.service';
import { UsersService } from '../_services/users/users.service';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  providers: [NewsService, UsersService]
})
export class ContentComponent implements OnInit {

  news = {
    articles: []
  }

  fakenews = []

  constructor(private http: HttpClient, private newsapi: NewsService, private usersapi: UsersService, private router:Router) { }

  ngOnInit() {
    // this.newsapi.getTopHeadlines().subscribe(response => { console.log(this.news = response.json())})
    this.usersapi.getUsers().subscribe(data => { console.log(this.fakenews = data )})
  }

  toggleModal(topnews) {
    //open modal
    if($(".modal-open").click(function () {
      $(".modal").addClass("is-active");
      //navigatebetweenids
    })){
      this.router.navigate(['/all', topnews.id]);
    } else {
    //close modal
    $(".delete, .modal-close").click(function () {
      $(".modal").removeClass("is-active");
    });
    }
    // $(".cancel").click(function () {
    //   $(".modal").removeClass("is-active");
    // });

  }

}