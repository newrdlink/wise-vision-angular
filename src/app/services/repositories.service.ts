import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class Repositories {

  public repositories$ = new Subject

  public setRepositories(arr: any[]): void {
    this.repositories$.next(arr)
  }
}
