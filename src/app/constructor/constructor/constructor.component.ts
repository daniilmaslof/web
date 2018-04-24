import { Component, OnInit } from '@angular/core';
import {Organization} from "../../models/Organization";
import {ActivatedRoute, Router} from "@angular/router";
import {Lecture} from "../../models/lecture";
import {Conference} from "../../models/Conference";

@Component({
  selector: 'app-constructor',
  templateUrl: './constructor.component.html',
  styleUrls: ['./constructor.component.css']
})
export class ConstructorComponent implements OnInit {
  model: Conference;
  constructor(private router: Router, private  route: ActivatedRoute ) {
  }
  navigae(i) {
    console.log(i);
    console.log(this.route.outlet);
    console.log(this.route.url.subscribe(
      data => {console.log(data);}
    ) );
    this.router.navigate(['./'], { relativeTo: this.route} );
  }
  ngOnInit() {
    this.model = new Conference();
  }

}

