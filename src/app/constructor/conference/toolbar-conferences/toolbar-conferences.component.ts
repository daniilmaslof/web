import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-toolbar-conferences',
  templateUrl: './toolbar-conferences.component.html',
  styleUrls: ['./toolbar-conferences.component.css']
})
export class ToolbarConferencesComponent implements OnInit {
  search: boolean = false;
  sort: boolean = false;
  @Input() titleToolbar: string;
  constructor(route: ActivatedRoute) {
  }
  showSearchBar() {
    this.search = true;
  }
  showSort() {
    this.sort = true;
  }
  close() {
    this.sort = false;
    this.search = false;
  }

  ngOnInit() {
  }

}
