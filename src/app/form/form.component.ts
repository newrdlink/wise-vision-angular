import { Component, Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiServiceGithub } from "../services/api.service";
import { Repositories } from '../services/repositories.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent {

  title = 'vstorona'

  formQuery = new FormGroup({
    query: new FormControl(''),
  })

  constructor(
    private api: ApiServiceGithub,
    private readonly list: Repositories
  ) {

  }

  onSubmit() {
    this.api.query(this.formQuery.value.query)
      .subscribe(res => this.list.setRepositories(res.items))
  }
}
