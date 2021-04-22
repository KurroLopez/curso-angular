import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-master',
  templateUrl: './user-master.component.html',
  styleUrls: ['./user-master.component.css']
})
export class UserMasterComponent implements OnInit {

  users: User[] = [];
  newUser: User;
  selectedUser: User;
  nextId = 11;
  ocultarSinTelefono: boolean = false;
  loading = false;

  constructor(service: UsersService, private router: Router) {
    this.selectedUser = new User();
    this.newUser = new User();
    this.loading = true;
    service.getUsers().subscribe(
      (serverResponse: User[]) => {
        this.users = serverResponse;
        this.loading = false;
      }
    );
    const num = this.users.length;
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
    this.selectedUser = {...user};
  }

  eliminar(evento: User){
    this.delUsuario(evento.id!);
  }

  guardar(user: User){
    this.users = this.users.map((el) => {
      if (el.id == user.id) {
        el = user;
      }
      return el;
    });
  }

  goToEdit(id: number){
    this.router.navigate(['/form-template/'+id]);
  }

}
