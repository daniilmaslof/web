import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class PostDataService {

  private BaseUrl = 'http://localhost:8080';
  constructor(private  http: HttpClient) { }
  postData(tipData: string, data: any): Observable<any> {
    let url = `${this.BaseUrl}${tipData}`;
    return this.http.post(url, data);
  }

}
