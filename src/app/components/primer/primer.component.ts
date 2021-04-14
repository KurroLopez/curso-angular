import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primer',
  templateUrl: './primer.component.html',
  styleUrls: ['./primer.component.css']
})
export class PrimerComponent implements OnInit {

  userName = 'Kurro'
  lastName = 'López'

  constructor() {
    setTimeout(()=>{this.userName='Mario';},5000);

    //// Sin usar función lambda
    // let that = this;
    // setTimeout(function (){that.userName='Kurro López';},5000);
  }

  ngOnInit(): void {
  }

  cambiarNombreGuillermo(event: MouseEvent) {
    console.log(event);
    this.userName = "Guillermo";
  }

  cambiarNombre(event: KeyboardEvent) {
    console.log(event);
    let target = event.target as HTMLInputElement;
    this.userName = target.value;
  }
}
