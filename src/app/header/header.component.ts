import { Component } from '@angular/core'
import { data } from 'src/assets/constants'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  appTitle = data.APP_TITLE
}
