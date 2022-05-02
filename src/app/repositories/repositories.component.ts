import { Component, OnInit } from '@angular/core'
import { Repositories } from '../services/repositories.service'
import { data } from 'src/assets/constants'

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})

export class RepositoriesComponent implements OnInit {

  arrayRepositories: any[] = []
  noResult = data.NO_REPOSITORIES
  isResult: boolean = false


  constructor(public readonly list: Repositories) { }

  ngOnInit(): void {
    this.list.repositories$.subscribe((items: any) => {
      this.arrayRepositories = items
      this.isResult = true
    })
  }
}
