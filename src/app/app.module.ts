import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component'
import { FormComponent } from './form/form.component';
import { RepositoryComponent } from './repository/repository.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    RepositoryComponent,
    RepositoriesComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
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
