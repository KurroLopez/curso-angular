import { Component, OnInit } from '@angular/core';
import { Observable, Observer, from } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const Obs1$: Observable<string> = new Observable( (emitter: Observer<string>) => {
      emitter.next('Hello');
      emitter.next('World');
      emitter.complete();
    });

    // Si lo que queremos es algo genérico... con from es simple
    // const Obs1$ = from(['Hello', 'World']);

    Obs1$.subscribe({
      next: (x:string) => { console.log('Emisión:', x) },
      error: (e: string) => { console.log('Error:', e); },
      complete: () => { console.log('Fin'); }
    });

    //Creación de observable "infinito"
    const Obs2$ = new Observable((emitter: Observer<number>) => {
      let value = 0;
      const interval = setInterval(() => {
        if (value % 2 === 0) {
          emitter.next(value);
        }
        value++;
      }, 1000);

      return () => {
        // Este return se ejecuta cuando se queda sin observador, la función se la guarda el constructor del observable
        clearInterval(interval);
        console.log('Me he quedado sin observador');
       }
     });

    const subs2 = Obs2$.subscribe(x => console.log('subs2:',x));

    // unsubscribe after 10 seconds
    setTimeout(() => {
      subs2.unsubscribe();
    }, 10000);

    setTimeout(() => {
      Obs2$.subscribe(x => console.log('subs3:',x));
    }, 5000);

    // // Son Observables fríos:
    // // - Una instancia por cada subscripción
    // // - El observable empieza en el momento de la subscripción
    // // - Desuscribirse del observable para liberar memoria


    // // Introducción a los operadores
    // Obs1$.pipe(
    //   map( (x:string) => x.toUpperCase() )
    // )
    // .subscribe({
    //   next: (x:string) => { console.log('Emisión:', x) },
    //   error: (e: string) => { console.log('Error:', e); },
    //   complete: () => { console.log('Fin'); }
    // });

    //  Obs1$.pipe(
    //   map( (x:string) => x.toUpperCase() ),
    //   map( (x:string) => x.split("").reverse().join("") )
    //  )
    // .subscribe({
    //   next: (x:string) => { console.log('Emisión:', x) },
    //   error: (e: string) => { console.log('Error:', e); },
    //   complete: () => { console.log('Fin'); }
    // });
  }

  ngOnDestroy() {
    // Aqui podemos desuscribir de lo que tenga, se ejecuta cuando se destruye un componente.
    // Cuidado con los intervals porque se quedan ejecuntado
  }

}
