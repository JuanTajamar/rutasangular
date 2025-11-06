import { HomeComponent } from "./components/home.component/home.component";
import { CineComponent } from "./components/cine.component/cine.component";
import { MusicaComponent } from "./components/musica.component/musica.component";
// Necesitamos una serie de modulos que se encuentran dentro de angular/router
import { Routes,RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { NotfoundComponent } from "./components/notfound.component/notfound.component";
import { NumeroDobleComponent } from "./components/numero.doble.component/numero.doble.component";
import { TablaMultiplicarRoutingComponent } from "./components/tabla.multiplicar.routing.component/tabla.multiplicar.routing.component";

// Necesitamos un array con las rutas, dicho array sera de tipo "routes"
const appRoutes: Routes = [
    { path: "", component: HomeComponent },
    { path: "cine", component: CineComponent },
    { path: "musica", component: MusicaComponent },
    { path: "numerodoble", component: NumeroDobleComponent },
    { path: "numerodoble/:numero", component: NumeroDobleComponent },
    { path: "tablamultiplicar/:numero", component: TablaMultiplicarRoutingComponent },
    { path: "**", component: NotfoundComponent }
]

// Desde esta clase debemos exportar el array de routes como provider
export const appRoutingProvider: any[] = [];
// las propias rutas a exportar
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes)