import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { parse } from 'url';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {

  public userId;
  // @Input('parentData') public childFakenews;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // this.usersapi.getUsers().subscribe(data => { console.log(this.fakenews = data) })
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // let title = this.route.snapshot.paramMap.get('title');
    this.userId = id;
  }

}
