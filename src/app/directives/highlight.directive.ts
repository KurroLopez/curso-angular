import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  //private el: ElementRef;
  private oldcolor: string;
  private default: string = 'yellow';

  @Input('appHighlight') color = this.default;
  @Input() duration= '5';

  constructor(private el: ElementRef) {
    this.oldcolor = '';
    console.log(this.color);
  }

  ngOnInit(){
    console.log(this.color);
  }
  // {
  //   this.el = el;
  //   // Si se le indica la private en el argumento de entrada en el constructor, automáticamente crea la variable privada y la asignación
  // }
  @HostListener("mouseenter", ['$event'])
  highlight(evento: PointerEvent){
    console.log(evento);
    this.oldcolor = this.el.nativeElement.style.backgroundColor;
    this.el.nativeElement.style.backgroundColor = this.color || this.default;
  }

  @HostListener("mouseleave")
  unhighlight(){
    this.el.nativeElement.style.backgroundColor = this.oldcolor;
  }
}
