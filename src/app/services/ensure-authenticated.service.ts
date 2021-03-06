import { Injectable } from '@angular/core';
import {AuthService} from "./auth.service";
import {CanActivate, Router} from "@angular/router";

@Injectable()
export class EnsureAuthenticatedService implements CanActivate {

  constructor(private auth: AuthService, private  router: Router) { }
  canActivate(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      this.router.navigateByUrl('login');
      return false;
    }
  }

}
