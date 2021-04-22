import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { switchMap } from 'rxjs/operators';
import { UsersService } from 'src/app/services/users.service';
import { HasUnsavedChanges } from 'src/app/guards/has-unsaved-changes.guard';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent implements OnInit, HasUnsavedChanges {

  user!: User;
  constructor(private service: UsersService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap( (mapa: ParamMap) => this.service.get(+mapa.get('id')!))
    )
    .subscribe(
      user => this.user = user
    );

    // const id = this.route.snapshot.paramMap.get('id');
    // this.service.get(+id!).subscribe(
    //   user => this.user = user
    // );

    // const id = this.route.snapshot.params.id;
    // this.service.get(+id!).subscribe(
    //   user => this.user = user
    // );
  }

  guardar(user: User): void{

  }
  onSubmit(v: any): void {
    console.log(v);
    // Ya tendremos el valor de user relleno
  }

  goToUserList() {
    this.router.navigate(['/users2']);
  }

  hasUnsavedChanges(): boolean {
    return true;
  }
}
