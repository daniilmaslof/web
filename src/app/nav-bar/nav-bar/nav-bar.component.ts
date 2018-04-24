import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from "../models/MenuItem";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  menuItemsHome: Array<MenuItem> = [
    new MenuItem('home', 'home', 'home', 'home'),
    new MenuItem('Новости', 'class', 'home', 'home'),
    new MenuItem('Наши конференции', 'watch_later', 'home', ''),
    new MenuItem('О нас', 'account_circle', 'home', ''),
    new MenuItem('Создать конфиренцию', '', 'constructor', 'constructor')
    ];
  // @Input() parentComponent: string;
  // parenthome = false;
  constructor(private router: Router, private  route: ActivatedRoute ) {
    // const url: Observable<string> =
    //   route.root;
  }

  navigate(path: MenuItem) {

    this.router.navigate([{outlets: {primary: path.link, sidemenu: path.menuLink }}]  );

  }
  ngOnInit() {
  }

}
