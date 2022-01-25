import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { HomeComponent } from './components/home/home.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"index",component:HomeComponent},
  {path:"articulos",component:ArticulosComponent},
  {path:"articulos/:existencia",component:ArticulosComponent},
  {path:"usuarios",component: UsuariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
