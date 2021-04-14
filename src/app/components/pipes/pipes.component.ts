import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  number1 = 103.46;
  number2 = 0.8732;
  name = "Kurro";
  date = new Date();

  users = [
    {id: 1, name: 'Carlos', age: 35},
    {id: 2, name: 'Carmen', age: 17},
    {id: 3, name: 'Carolina', age: 25}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
