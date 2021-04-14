import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user-detalle',
  templateUrl: './user-detalle.component.html',
  styleUrls: ['./user-detalle.component.css']
})
export class UserDetalleComponent implements OnInit {

  @Input()
  user: User;

  @Output()
  onEliminar: EventEmitter<User> = new EventEmitter();

  @Output()
  onSave: EventEmitter<User> = new EventEmitter();

  constructor() {
    this.user = new User();
  }

  ngOnInit(): void {
  }

  eliminar() {
    this.onEliminar.emit(this.user);
    this.user = new User();
  }

  guardar(){
    this.onSave.emit(this.user);
  }
}
