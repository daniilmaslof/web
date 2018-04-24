import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from "../../models/MenuItem";

@Component({
  selector: 'app-nav-bar-item',
  templateUrl: './nav-bar-item.component.html',
  styleUrls: ['./nav-bar-item.component.css']
})
export class NavBarItemComponent implements OnInit {
  @Input() menuItem: MenuItem;

  constructor() { }

  ngOnInit() {
  }

}
