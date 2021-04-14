import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { __importDefault } from 'tslib';

@Directive({
  selector: 'img[rotate]'
})
export class RotateDirective {

  @Input('rotate') angle: any = 0;
  @Input() step: any = 15;
  constructor(private el: ElementRef) {

   }

  ngOnInit(){
    console.log(this.angle);
    console.log(this.step);
    this.rotate();
  }

  @HostListener('click',['$event'])
  onClick(evento: PointerEvent){
    if (evento.shiftKey)
    {
      this.angle = Number(this.angle) - Number(this.step);
    } else
    {
      this.angle = Number(this.angle) + Number(this.step);
    }
    if (evento.altKey)
    {
      this.angle = 0;
    }
    this.rotate();
  }

  rotate(){
    console.log(this.angle);
    this.el.nativeElement.style.transform = `rotate(${this.angle}deg)`;
  }
}
