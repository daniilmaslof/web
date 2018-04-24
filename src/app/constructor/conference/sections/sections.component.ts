import { Component, OnInit } from '@angular/core';
import {Sections} from '../../../models/Sections';



@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {
  sections: Sections;
  constructor() { }

  ngOnInit() {
    this.sections = new Sections();
  }
}
