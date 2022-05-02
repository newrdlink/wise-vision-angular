import { Injectable } from '@angular/core'
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs'
import { data } from 'src/assets/constants'

@Injectable({
  providedIn: 'root'
})

export class ApiServiceGithub {

  REQ_URL: string = data.API_URL_GITHUB

  constructor(private http: HttpClient) { }

  query(query: String): Observable<any> {
    return this.http.get(this.REQ_URL + query)
    // return this.http.get(this.REQ_URL + query + '&per_page=100')
  }
}
