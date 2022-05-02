import { Component, Injectable } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { ApiServiceGithub } from "../services/api.service"
import { Repositories } from '../services/repositories.service'
import { data } from 'src/assets/constants'

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent {

  query: string = ''
  labelInput: string = data.LABEL_QUERY

  formQuery = new FormGroup({
    query: new FormControl(''),
  })

  constructor(
    private api: ApiServiceGithub,
    private readonly list: Repositories
  ) { }

  onSubmit() {
    this.api.query(this.formQuery.value.query)
      .subscribe(res => {
        this.list.setRepositories(res.items)
        // console.log(res)
      })
  }

  onInput(event: Event) {
    this.query = (event.target as HTMLInputElement).value
  }
}
