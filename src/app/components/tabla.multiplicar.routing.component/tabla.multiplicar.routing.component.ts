import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-tabla-multiplicar',
  standalone: false,
  templateUrl: './tabla.multiplicar.routing.component.html',
  styleUrl: './tabla.multiplicar.routing.component.css',
})
export class TablaMultiplicarRoutingComponent{
  public numero: number
    public numeros: Array<number>
    constructor(private _activeRoute: ActivatedRoute, private _router: Router) {
      this.numero = 0
      this.numeros = []
    }

    ngOnInit():void {
        this._activeRoute.params.subscribe((parametros: Params) => {
          this.numero = parseInt(parametros['numero'])
          this.mostarTabla()
        }) 
    }

    mostarTabla():void {
      let aux = new Array<number>
        for (let i = 1; i <= 10; i++) {
          let operacion = this.numero * i
          aux.push(operacion) 
        }
        this.numeros = aux
    }

}
