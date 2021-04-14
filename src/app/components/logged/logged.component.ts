import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.css']
})
export class LoggedComponent implements OnInit {

  username: string = '';
  constructor(private auth: AuthService) {
  }

  ngOnInit(): void {
  }

  getUsername(): string{
    return this.auth.getUsername();
  }

  doLogout() {
    this.auth.logOut();
  }

}
