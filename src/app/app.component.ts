import { Component, OnInit } from '@angular/core'
import { Repositories } from './services/repositories.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  appTitle = 'wise-vision'
  arrayRepositories: any[] = []

  constructor(
    public readonly list: Repositories
  ) { }

  ngOnInit(): void {
    this.list.repositories$.subscribe((items: any) => this.arrayRepositories = items)
  }
}
