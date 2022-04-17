import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component'
import { ItemComponent } from './item/item.component'
import { FormComponent } from './form/form.component';
import { RepositoryComponent } from './repository/repository.component';
import { RepositoriesComponent } from './repositories/repositories.component'



@NgModule({
  declarations: [
    AppComponent,

    ItemComponent,
    FormComponent,
    RepositoryComponent,
    RepositoriesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
