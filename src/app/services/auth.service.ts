import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../models/user";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthService {
private BaseUrl = '';
  constructor(private  http: HttpClient) {
  }

  login(email: string, password: string): Observable<any> {
    console.log(email, password);
    let url = `${this.BaseUrl}/login`;
    return this.http.post(url, {email, password});
  }
  // register(email: string, password: string): Observable<any> {
  //   let url = `${this.BaseUrl}/registrer`;
  //   return this.http.post(url, {email, password} ).shareReplay();
  // }
}
