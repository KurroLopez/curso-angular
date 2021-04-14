import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-variables',
  templateUrl: './template-variables.component.html',
  styleUrls: ['./template-variables.component.css']
})
export class TemplateVariablesComponent implements OnInit {


  @ViewChild('inputValue')
  inputElement: any = null;

  constructor() {
    this.inputElement.nativeElement;
  }

  ngOnInit(): void {
  }

}
