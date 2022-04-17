import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiServiceGithub {

  reqUrl: string = 'https://api.github.com/search/repositories?q='

  constructor(private http: HttpClient) { }

  query(query: String): Observable<any> {
    return this.http.get(this.reqUrl + query)
    // console.log(this.URL + query)
  }

}
