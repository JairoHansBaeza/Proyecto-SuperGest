import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { CrearEmpleadoComponent } from './crear-empleado/crear-empleado.component';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    CrearEmpleadoComponent
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
