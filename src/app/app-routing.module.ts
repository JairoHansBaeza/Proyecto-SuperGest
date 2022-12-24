import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { CrearEmpleadoComponent } from './pages/crear-empleado/crear-empleado.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { CrearProductoComponent } from './pages/crear-producto/crear-producto.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'navbar',
    component:NavbarComponent
  },
  {
    path:'crearEmpleado',
    component:CrearEmpleadoComponent
  },
  {
    path:'crearProducto',
    component:CrearProductoComponent
  },
  {
    path:'producto',
    component:ProductoComponent
  },
  {
    path:'**',
    redirectTo:'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
