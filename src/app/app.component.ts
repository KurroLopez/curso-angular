import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'salutic';

  constructor(private auth: AuthService) {}

  isLogged(): boolean{
    return this.auth.isLogged();
  }
}
