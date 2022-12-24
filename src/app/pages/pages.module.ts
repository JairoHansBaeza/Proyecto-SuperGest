import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { CrearEmpleadoComponent } from './crear-empleado/crear-empleado.component';
import { ProductoComponent } from './producto/producto.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    CrearEmpleadoComponent,
    ProductoComponent,
    CrearProductoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [
    HomeComponent,
    LoginComponent,
    NavbarComponent
  ]
})
export class PagesModule { }
