import { Injectable } from '@angular/core';
import {AuthService} from "./auth.service";
import {CanActivate, Router} from "@angular/router";

@Injectable()
export class EnsureAuthenticatedService implements CanActivate {

  constructor(private  router: Router) { }
  canActivate(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      console.log('f');
      this.router.navigateByUrl('http://localhost:4200/login');
      return false;
    }
  }

}
