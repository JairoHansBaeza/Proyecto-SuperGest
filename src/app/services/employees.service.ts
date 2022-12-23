import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) { }

  login(usuario:string,contraseña:string){
    return this.http.get(`http://localhost:3000/employee/login?nombre=${usuario}&contraseña=${contraseña}`)
  }

  getEmpleados(){
    return this.http.get('http://localhost:3000/employee')
  }

  }