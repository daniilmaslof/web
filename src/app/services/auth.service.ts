import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../models/user";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/publishReplay';
@Injectable()
export class AuthService {
private BaseUrl = 'http://localhost:8080';
  constructor(private  http: HttpClient) {
  }
  login(email: string, password: string): Observable<any> {
    console.log(email, password);
    let url = `${this.BaseUrl}/login`;
    return this.http.post(url, {email, password}).do(
      res => this.setSession).publishReplay();
  }
  private setSession(authResult) {
    localStorage.setItem('id_token', authResult.idToken);
  }
  logout() {
    localStorage.removeItem('id_token');
  }
  // register(email: string, password: string): Observable<any> {
  //   let url = `${this.BaseUrl}/registrer`;1
  //   return this.http.post(url, {email, password} ).shareReplay();
  // }
  // xsd
  // fsef
}
