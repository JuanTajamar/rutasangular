import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-numero-doble',
  standalone: false,
  templateUrl: './numero.doble.component.html',
  styleUrl: './numero.doble.component.css',
})
export class NumeroDobleComponent implements OnInit {
  public doble: number;
  public numero!: number;

  constructor(private _activeRoute: ActivatedRoute, private _router: Router) {
    this.doble = 0;
  }

  goToHome(): void {
    this._router.navigate(["/"])
  }

  redirect(num: number): void {
    this._router.navigate(["/numerodoble", num])
  }

  ngOnInit(): void {
    // Aquí es donde nos subscribimos a los parámetros
    this._activeRoute.params.subscribe((parametros: Params) => {
      // Dentro de "Params" es donde recibimos los parámetros por su: "name"
      // La sintaxis para recuperarlos es "params['Parameter name']"
      // En este ejemplo, el parametro es opcional
      if(parametros['numero'] != null) {
        // El parámetro siempre son string
        this.numero = parseInt(parametros['numero']);
        this.doble = this.numero * 2;
      }
    })
  }
}
