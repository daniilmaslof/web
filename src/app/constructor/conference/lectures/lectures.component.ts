import { Component, OnInit } from '@angular/core';
import {Lectures} from "../../../models/lectures";


@Component({
  selector: 'app-lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['./lectures.component.css']
})
export class LecturesComponent implements OnInit {
  lectures: Lectures;
  constructor() {
    this.lectures = new Lectures();
  }

  ngOnInit() {
  }

}
