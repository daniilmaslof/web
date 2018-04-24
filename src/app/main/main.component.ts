import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {

  }

  navigate(path) {

    this.router.navigate([{outlets: {primary: path, sidemenu:path}}], {relativeTo: this.route});

  }
  ngOnInit() {
  }

}
