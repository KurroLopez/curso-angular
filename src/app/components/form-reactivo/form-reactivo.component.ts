import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-form-reactivo',
  templateUrl: './form-reactivo.component.html',
  styleUrls: ['./form-reactivo.component.css']
})
export class FormReactivoComponent implements OnInit {

  user!: User;
  userForm!: FormGroup;
  constructor(private route: ActivatedRoute, private service: UsersService, private fb: FormBuilder
    ) {
    const id = this.route.snapshot.params.id;
    this.service.get(+id!).subscribe(
      user => {
        this.user = user;
        this.createForm4();
      }
      );
   }

   ngOnInit(): void {
  }

  createForm(): void {
    // Incializando con los valores por cada uno de los controles
    // const nameControl: FormControl = new FormControl(this.user.name, Validators.required);
    // const usernameControl: FormControl = new FormControl(this.user.username, [Validators.required, Validators.minLength(6)]);
    // const emailControl: FormControl = new FormControl(this.user.email, Validators.email);
    // const streetControl: FormControl = new FormControl(this.user.address?.street);
    // const cityControl: FormControl = new FormControl(this.user.address?.city);
    // const zipcodeControl: FormControl = new FormControl(this.user.address?.zipcode);

    const nameControl: FormControl = new FormControl('', Validators.required);
    const usernameControl: FormControl = new FormControl('', [Validators.required, Validators.minLength(6)]);
    const emailControl: FormControl = new FormControl('', Validators.email);
    const streetControl: FormControl = new FormControl('');
    const cityControl: FormControl = new FormControl('');
    const zipcodeControl: FormControl = new FormControl('');

    const addressControl = new FormGroup({});
    addressControl.addControl('street',streetControl);
    addressControl.addControl('city',cityControl);
    addressControl.addControl('zipcode',zipcodeControl);

    this.userForm = new FormGroup({});
    this.userForm.addControl('name',nameControl);
    this.userForm.addControl('username',usernameControl);
    this.userForm.addControl('email',emailControl);
    this.userForm.addControl('address',addressControl);

    //this.userForm.setValue(this.user);  // La coincidencia ha de ser perfecta
    this.userForm.patchValue(this.user); // Los que coincida, lo pone

    const emailsControl = new FormArray([]);

    emailsControl.push(new FormControl('email1@mail.com', Validators.email));
    emailsControl.push(new FormControl('email2@mail.com', Validators.email));
    this.userForm.addControl('emails', emailsControl);

    emailsControl.removeAt(1); // Elimina el elemento 1 (empieza por 0)
    const array = emailsControl.controls;  // devuelve el array de los controles que tenga

  }

  createForm3(): void {
    this.userForm = this.fb.group({
      name: this.user.name,
      username: this.user.username,
      email: this.user.email,
      address: this.fb.group(
        {
         street: this.user.address?.street,
         city: this.user.address?.city,
         zipcode: this.user.address?.zipcode
        }
      )
    })

  }

  createForm4(): void {
    this.userForm = this.fb.group({
      name: [this.user.name, Validators.required],
      username: [this.user.username,[Validators.required, Validators.minLength(6)]],
      email: [this.user.email, [Validators.required, Validators.email]],
      address: this.fb.group(
        {
         street: this.user.address?.street,
         city: this.user.address?.city,
         zipcode: this.user.address?.zipcode
        }
      )
    })

    this.userForm.get('name')?.valueChanges.subscribe(
      value=> console.log(value)
    )

  }

}
