import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: string = '';
  password: string = '';
  error: string = '';
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  doLogin() {
    if (this.auth.logIn(this.usuario, this.password)){
      this.error = '';
    } else
    {
      this.error = 'Usuario no identificado';
    }
  }

}
