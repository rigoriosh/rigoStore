import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/home/inicio.component';

const rutas: Routes = [
    {path: '', component: InicioComponent},
];

@NgModule({
    imports: [RouterModule.forChild(rutas)],
    exports: [RouterModule]
})
export class HomeRoutingModule{

}