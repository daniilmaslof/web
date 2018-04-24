import { Component, OnInit } from '@angular/core';
import {MenuItem} from "../../models/MenuItem";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar-content',
  templateUrl: './nav-bar-content.component.html',
  styleUrls: ['./nav-bar-content.component.css']
})
export class NavBarContentComponent implements OnInit {
  menuItemsHome: Array<MenuItem> = [
    new MenuItem('', 'undo', this.activeRouter.snapshot.url.toString(), 'home'),
    new MenuItem('Спикеры', 'account_circle', 'constructor/conference/:id/speakers', 'constructor'),
    new MenuItem('Лекции', 'school', 'constructor/conference/:id/lectures', 'constructor'),
    new MenuItem('Секции', 'store', 'constructor/conference/:id/sections', 'constructor'),
  ];
  constructor(private  router: Router, private  activeRouter: ActivatedRoute) {
    console.log(this.activeRouter.snapshot.url.toString());
  }
  navigate(path: MenuItem) {
    if (path.icon === 'undo') {
      this.activeRouter.url.subscribe(
      (data) => {
        console.log(data);
        this.router.navigate([{outlets: { sidemenu: path.menuLink}}]);
      }
      ); }
      else {
      this.router.navigate([{outlets: {primary: path.link, sidemenu: path.menuLink}}]);
    }

  }
  ngOnInit() {
  }

}
