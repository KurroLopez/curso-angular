import { Component, OnInit } from '@angular/core';
import { USERS } from 'src/app/data/users';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-crud-basico',
  templateUrl: './crud-basico.component.html',
  styleUrls: ['./crud-basico.component.css']
})
export class CrudBasicoComponent implements OnInit {

  users: User[] = USERS;
  newUser: User;
  selectedUser: User;
  nextId = 11;
  ocultarSinTelefono: boolean = false;
  constructor() {
    this.selectedUser = new User();
    this.newUser = new User();
   }

  ngOnInit(): void {
  }

  delUsuario(id: number){
    this.users = this.users.filter(u => u.id !== id);
  }

  nuevoUsuario(){
    this.newUser.id = this.nextId++;
    this.users.push(this.newUser);
    this.newUser=new User();
  }

  selUser(user: User)
  {
    this.selectedUser = user;
  }
}
