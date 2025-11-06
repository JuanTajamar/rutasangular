import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-tabla',
  standalone: false,
  templateUrl: './menu.tabla.multiplicar.component.html',
  styleUrl: './menu.tabla.multiplicar.component.css',
})
export class MenuTablaMultiplicarComponent {
    public randoms: Array<number>

    constructor() {
      this.randoms = new Array<number>()
      for (let i = 1; i <= 6; i++) {
        let random = Math.floor((Math.random() * 20) + 1);
        this.randoms.push(random)
      }
    }
}
