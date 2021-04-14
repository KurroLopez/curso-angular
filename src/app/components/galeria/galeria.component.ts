import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  private intervalId: any = null;
  imagenSeleccionada: string;
  index: number;
  maxIndex: number;
  width: number;
  isPlaying: boolean = false;
  ini: number = 3;
  fin: number = 6;
  imagenes: Array<string> = [
    'https://mmtstock.com/wp-content/uploads/2017/09/P7040338.jpg',
    'https://mmtstock.com/wp-content/uploads/2017/09/P6290012.jpg',
    'https://mmtstock.com/wp-content/uploads/2015/08/IMG_0903150810.jpg',
    'https://mmtstock.com/wp-content/uploads/2017/12/P8310900.jpg',
    'https://mmtstock.com/wp-content/uploads/2017/12/P8310865.jpg',
    'https://mmtstock.com/wp-content/uploads/2017/12/P6290042.jpg',
    'https://mmtstock.com/wp-content/uploads/2017/11/P9031121.jpg',
    'https://mmtstock.com/wp-content/uploads/2018/02/P7041396.jpg'
  ];

  constructor() {
    this.index = 0;
    this.width = 150;
    this.imagenSeleccionada = "";
    this.maxIndex = this.imagenes.length - 1;
    this.cambiaImagen();
  }

  cambiaImagen(){
    this.imagenSeleccionada = this.imagenes[this.index];
  }

  ngOnInit(): void {
  }

  siguiente(){
    this.index ++;
    if (this.index > this.maxIndex)
    {
      this.index = this.maxIndex;
    }
    this.cambiaImagen();
  }

  anterior(){
    this.index --;
    if (this.index < 0)
    {
      this.index = 0;
    }
    this.cambiaImagen();
  }

  seleccionarImagen(index: number){
    this.index = index;
    this.cambiaImagen();
  }

  aumentar(){
    this.width += 50;
  }

  disminuir(){
    this.width -= 50;
  }

  play(){
    this.isPlaying = true;
    this.intervalId = setInterval(()=> {
      this.index++
      if (this.index > this.maxIndex)
      {
        this.index = 0;
      }
      this.cambiaImagen();

    }, 1000)
  }

  stop(){
    this.isPlaying = false;
    clearInterval(this.intervalId)
  }
}
